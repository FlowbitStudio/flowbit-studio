import { useEffect, useRef } from 'react'

/**
 * Interactive particle swarm with Perlin-like noise movement.
 * - Left click + drag: attract particles
 * - Right click: repulse
 * - Middle click: time dilation
 * Adapted from the original Codepen (ImagineProgramming/LpOJzM), rewritten
 * as a self-contained React component — no external deps (no dat.gui, stats,
 * or SmallPRNG). Uses Math.random() and pure canvas 2d.
 */
interface ParticleSwarmProps {
  /** Number of particles (default 2500). Lower = better perf. */
  particleCount?: number
  /** Base hue for stroke color (0-360). Default 210 = blue. */
  hue?: number
  /** Whether to rotate the hue over time. */
  rotateColor?: boolean
  /** Background fade opacity (0-1). Lower = longer trails. */
  fadeAlpha?: number
  /** Line stroke opacity (0-1). */
  strokeAlpha?: number
  /** Background color (default #111111 = dark). Use light colors for inverted variant. */
  bgColor?: string
  /** If true, use 'source-over' blend (darker particles on light bg).
   *  Default false = 'lighter' additive blend (glow on dark bg). */
  darkMode?: boolean
  /** If true, canvas uses mix-blend-mode: difference — particles auto-invert
   *  based on what's behind (light on dark bg, dark on light bg). Overrides
   *  bgColor (canvas becomes transparent) and darkMode. */
  invertOnBg?: boolean
}

export default function ParticleSwarm({
  particleCount = 2500,
  hue: baseHue = 210,
  rotateColor = true,
  fadeAlpha = 0.085,
  strokeAlpha = 0.55,
  bgColor = '#111111',
  darkMode = false,
  invertOnBg = false,
}: ParticleSwarmProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let hue = baseHue
    let animId = 0
    let scrollProgress = 0 // 0 = top of page, 1 = one viewport scrolled

    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2, left: false, middle: false, right: false, active: false }
    // Delayed/lerped attractor position — particles follow this, not the raw cursor
    const lerp = { x: mouse.x, y: mouse.y, vx: 0, vy: 0 }

    let prevScrollY = window.scrollY
    let scrollVelocity = 0 // px/frame, smoothed
    const handleScroll = () => {
      const raw = window.scrollY / Math.max(window.innerHeight, 1)
      scrollProgress = Math.min(Math.max(raw, 0), 1)
      // Instant velocity sample — will be smoothed each frame
      const delta = window.scrollY - prevScrollY
      scrollVelocity = scrollVelocity * 0.7 + delta * 0.3
      prevScrollY = window.scrollY
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    const resize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
      if (!invertOnBg) {
        ctx.fillStyle = bgColor
        ctx.fillRect(0, 0, width, height)
      } else {
        ctx.clearRect(0, 0, width, height)
      }
    }
    resize()

    // Parse bgColor to rgba components for fade overlay
    const parseBg = (hex: string) => {
      const h = hex.replace('#', '')
      const r = parseInt(h.slice(0, 2), 16)
      const g = parseInt(h.slice(2, 4), 16)
      const b = parseInt(h.slice(4, 6), 16)
      return { r, g, b }
    }
    const bgRgb = parseBg(bgColor)

    const handleMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
      mouse.active = true
    }
    const handleLeave = () => { mouse.active = false }
    const handleDown = (e: MouseEvent) => {
      if (e.button === 0) mouse.left = true
      if (e.button === 1) mouse.middle = true
      if (e.button === 2) mouse.right = true
      e.preventDefault()
    }
    const handleUp = () => { mouse.left = mouse.middle = mouse.right = false }
    const handleContext = (e: Event) => e.preventDefault()

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseout', handleLeave)
    canvas.addEventListener('mousedown', handleDown)
    canvas.addEventListener('mouseup', handleUp)
    canvas.addEventListener('contextmenu', handleContext)

    // Simplified Perlin-like noise using sin waves (cheap, good enough)
    const noise = (x: number, y: number, z: number) =>
      (Math.sin(x * 1.3 + z) + Math.sin(y * 1.7 - z) + Math.sin((x + y) * 0.9 + z * 1.3)) / 3

    type P = { x: number; y: number; tx: number; ty: number; vx: number; vy: number; i: number; l: number }
    const particles: P[] = []

    const resetParticle = (p: P) => {
      p.x = p.tx = Math.random() * width
      p.y = p.ty = Math.random() * height
      p.vx = 1
      p.vy = 1
      p.i = 0
      p.l = 1000 + Math.random() * 9000
    }

    for (let i = 0; i < particleCount; i++) {
      const p: P = { x: 0, y: 0, tx: 0, ty: 0, vx: 0, vy: 0, i: 0, l: 0 }
      resetParticle(p)
      particles.push(p)
    }

    const render = () => {
      animId = requestAnimationFrame(render)

      ctx.beginPath()
      const now = Date.now() / 5000

      // Update lerped attractor (delayed follow) + track its velocity for burst effect
      const prevLerpX = lerp.x
      const prevLerpY = lerp.y
      lerp.x += (mouse.x - lerp.x) * 0.02
      lerp.y += (mouse.y - lerp.y) * 0.02
      lerp.vx = lerp.x - prevLerpX
      lerp.vy = lerp.y - prevLerpY
      const lerpSpeed = Math.sqrt(lerp.vx * lerp.vx + lerp.vy * lerp.vy)

      // Decay scroll velocity each frame (natural return to 0)
      scrollVelocity *= 0.9
      // Scroll-driven vertical drift on all particles (magnitude capped)
      const scrollDrift = Math.max(-8, Math.min(8, scrollVelocity * 0.08))

      // Slow motion + chaos: as user scrolls, particles move slowly but more randomly
      const cx = width / 2
      const cy = height / 2
      const explodeProgress = Math.max(0, (scrollProgress - 0.5) * 2)
      const explodeForce = explodeProgress * explodeProgress * 0.6
      const friction = 0.94
      // Chaos increases slightly, but timeScale slows everything down
      const chaosMultiplier = 1 + scrollProgress * 2
      const timeScale = 1 - scrollProgress * 0.85 // 1.0 normal → 0.15 slow motion

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]

        p.i++
        if (p.i > p.l) resetParticle(p)

        // Larger noise scale = bigger coherent flow patterns = particles stream
        // together into bright orb-like clusters instead of dispersing evenly
        const xx = p.x / 400
        const yy = p.y / 400
        const a = Math.random() * Math.PI * 2
        const rnd = (Math.random() / 10) * chaosMultiplier

        p.vx += rnd * Math.sin(a) + noise(xx, yy, -now) * 1.8 * chaosMultiplier
        p.vy += rnd * Math.cos(a) + noise(xx, yy, now) * 1.8 * chaosMultiplier

        // Scroll-driven drift: particles get pushed in scroll direction + jitter
        if (Math.abs(scrollDrift) > 0.05) {
          p.vy -= scrollDrift * (0.8 + Math.random() * 0.4)
          p.vx += (Math.random() - 0.5) * Math.abs(scrollDrift) * 0.6
        }

        // Hover: gentle attraction to LERPED (delayed) cursor position
        if (mouse.active) {
          p.vx += (lerp.x - p.x) * 0.0008
          p.vy += (lerp.y - p.y) * 0.0008

          // Burst expansion: when cursor moves fast, particles near it get
          // a random outward push (creates a "wake" / ripple effect)
          if (lerpSpeed > 2) {
            const dx = p.x - lerp.x
            const dy = p.y - lerp.y
            const distSq = dx * dx + dy * dy
            const influence = 250 * 250 // radius²
            if (distSq < influence) {
              const dist = Math.sqrt(distSq) || 1
              const falloff = 1 - dist / 250
              const burst = lerpSpeed * falloff * 0.15
              // Radial push outward + random angular variation
              const angleJitter = (Math.random() - 0.5) * Math.PI
              const cos = Math.cos(angleJitter)
              const sin = Math.sin(angleJitter)
              const rx = (dx / dist) * cos - (dy / dist) * sin
              const ry = (dx / dist) * sin + (dy / dist) * cos
              p.vx += rx * burst
              p.vy += ry * burst
            }
          }
        }
        // Left click: very strong attraction (tight ball at cursor)
        if (mouse.left) {
          p.vx += (lerp.x - p.x) * 0.008
          p.vy += (lerp.y - p.y) * 0.008
        }

        // Right click: repulse within 200-250px radius
        if (mouse.right) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const radius = 200 + Math.random() * 50
          if (dist < radius) {
            p.vx += dx * 0.02
            p.vy += dy * 0.02
          }
        }

        // Middle click: time dilation
        if (mouse.middle) {
          const dx = p.x - mouse.x
          const dy = p.y - mouse.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const radius = 200 + Math.random() * 50
          if (dist < radius) {
            const factor = dist / radius
            p.vx *= factor
            p.vy *= factor
          }
        }

        // Explode: radial impulse away from center + random jitter per particle
        if (explodeForce > 0.001) {
          const dx = p.x - cx
          const dy = p.y - cy
          const dist = Math.sqrt(dx * dx + dy * dy) || 1
          // Base radial direction
          const rx = dx / dist
          const ry = dy / dist
          // Random angular offset (-60deg to +60deg range)
          const angleOffset = (Math.random() - 0.5) * 2.1
          const cos = Math.cos(angleOffset)
          const sin = Math.sin(angleOffset)
          const jx = rx * cos - ry * sin
          const jy = rx * sin + ry * cos
          // Magnitude variation per particle (50%-150% of base force)
          const magVar = 0.5 + Math.random()
          p.vx += jx * explodeForce * magVar
          p.vy += jy * explodeForce * magVar
          // Extra chaotic wobble
          p.vx += (Math.random() - 0.5) * explodeForce * 0.8
          p.vy += (Math.random() - 0.5) * explodeForce * 0.8
        }

        // Save prev pos, apply velocity with friction + scroll-based time scale
        p.tx = p.x
        p.ty = p.y
        p.vx *= friction
        p.vy *= friction
        p.x += p.vx * timeScale
        p.y += p.vy * timeScale

        // Wrap around edges
        if (p.x > width) { p.x = 0; p.tx = 0 }
        else if (p.x < 0) { p.x = width; p.tx = width }
        if (p.y > height) { p.y = 0; p.ty = 0 }
        else if (p.y < 0) { p.y = height; p.ty = height }

        ctx.moveTo(p.tx, p.ty)
        ctx.lineTo(p.x, p.y)
      }

      // Fade overlay — uses configured bg color, or fades to transparent in invert mode
      if (invertOnBg) {
        // Clear gradually using destination-out (fades existing pixels)
        ctx.globalCompositeOperation = 'destination-out'
        ctx.fillStyle = `rgba(0, 0, 0, ${fadeAlpha})`
        ctx.fillRect(0, 0, width, height)
      } else {
        ctx.globalCompositeOperation = 'source-over'
        ctx.fillStyle = `rgba(${bgRgb.r}, ${bgRgb.g}, ${bgRgb.b}, ${fadeAlpha})`
        ctx.fillRect(0, 0, width, height)
      }

      // Stroke: choose blend + color per mode
      if (invertOnBg) {
        // Draw bright tinted particles; mix-blend-mode on canvas element will invert them
        ctx.globalCompositeOperation = 'source-over'
        ctx.strokeStyle = `hsla(${hue}, 75%, 60%, ${strokeAlpha})`
      } else if (darkMode) {
        ctx.globalCompositeOperation = 'multiply'
        ctx.strokeStyle = `hsla(${hue}, 75%, 35%, ${strokeAlpha})`
      } else {
        ctx.globalCompositeOperation = 'lighter'
        ctx.strokeStyle = `hsla(${hue}, 75%, 55%, ${strokeAlpha})`
      }
      ctx.stroke()
      ctx.closePath()

      if (rotateColor) hue = (hue + 0.3) % 360
    }
    render()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseout', handleLeave)
      canvas.removeEventListener('mousedown', handleDown)
      canvas.removeEventListener('mouseup', handleUp)
      canvas.removeEventListener('contextmenu', handleContext)
    }
  }, [particleCount, baseHue, rotateColor, fadeAlpha, strokeAlpha])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        cursor: invertOnBg ? 'default' : 'crosshair',
        display: 'block',
        pointerEvents: invertOnBg ? 'none' : 'auto',
      }}
    />
  )
}
