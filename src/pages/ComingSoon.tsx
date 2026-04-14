import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

/**
 * Coming Soon — landing minimalista mientras se construye el sitio.
 * Self-contained: vanilla three.js (sin r3f / drei) para minimizar deps.
 *
 * Hero con esfera Fibonacci de partículas + intro animation + hover sutil.
 */
export default function ComingSoon() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // ─── Setup escena ───
    const scene = new THREE.Scene()
    scene.background = new THREE.Color('#000000')
    scene.fog = new THREE.Fog('#000000', 4, 9)

    const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 100)
    camera.position.z = 6

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: false })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(window.innerWidth, window.innerHeight)

    // ─── Textura soft circle para partículas ───
    const texCanvas = document.createElement('canvas')
    texCanvas.width = texCanvas.height = 128
    const ctx = texCanvas.getContext('2d')!
    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64)
    grad.addColorStop(0, 'rgba(255,255,255,1)')
    grad.addColorStop(0.3, 'rgba(255,255,255,0.55)')
    grad.addColorStop(1, 'rgba(255,255,255,0)')
    ctx.fillStyle = grad
    ctx.fillRect(0, 0, 128, 128)
    const particleTex = new THREE.CanvasTexture(texCanvas)

    // ─── Fibonacci sphere ───
    const COUNT = 5000
    const RADIUS = 2.8
    const origin = new Float32Array(COUNT * 3)
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < COUNT; i++) {
      const yN = 1 - (i / (COUNT - 1)) * 2
      const rAtY = Math.sqrt(1 - yN * yN)
      const theta = golden * i
      origin[i * 3 + 0] = Math.cos(theta) * rAtY * RADIUS
      origin[i * 3 + 1] = yN * RADIUS
      origin[i * 3 + 2] = Math.sin(theta) * rAtY * RADIUS
    }

    // Caos inicial (puntos random dentro de esfera unidad para dispersión)
    const chaos = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT; i++) {
      let x: number, y: number, z: number
      do { x = Math.random() * 2 - 1; y = Math.random() * 2 - 1; z = Math.random() * 2 - 1 }
      while (x * x + y * y + z * z > 1)
      chaos[i * 3 + 0] = x; chaos[i * 3 + 1] = y; chaos[i * 3 + 2] = z
    }

    // Posiciones actuales (mutables) y velocidades
    const positions = new Float32Array(COUNT * 3)
    const velocities = new Float32Array(COUNT * 3)
    for (let i = 0; i < COUNT * 3; i++) positions[i] = origin[i] + chaos[i] * 12

    const geometry = new THREE.BufferGeometry()
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const material = new THREE.PointsMaterial({
      size: 0.018,
      color: 0xffffff,
      map: particleTex,
      alphaTest: 0.01,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      depthWrite: false,
      blending: THREE.AdditiveBlending,
      fog: true,
    })

    const points = new THREE.Points(geometry, material)
    scene.add(points)

    // ─── Intro animation: morph 0 → 1 ───
    const morph = { v: 0 }
    gsap.to(morph, { v: 1, duration: 2.5, ease: 'power3.out' })

    // ─── Hover state ───
    const pointer = new THREE.Vector2(0, 0)
    const onPointerMove = (e: PointerEvent) => {
      pointer.x = (e.clientX / window.innerWidth) * 2 - 1
      pointer.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('pointermove', onPointerMove)

    // ─── Resize ───
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    // ─── Animation loop ───
    const raycaster = new THREE.Raycaster()
    const invMatrix = new THREE.Matrix4()
    const localOrigin = new THREE.Vector3()
    const localDir = new THREE.Vector3()
    let prevTime = performance.now()
    let rafId = 0

    const tick = () => {
      const now = performance.now()
      const delta = Math.min((now - prevTime) / 1000, 1 / 30)
      prevTime = now
      const dt = delta * 60

      // Slow rotation
      points.rotation.y += 0.0008 * dt
      points.updateMatrixWorld()

      // Cursor ray en espacio local del mesh
      raycaster.setFromCamera(pointer, camera)
      invMatrix.copy(points.matrixWorld).invert()
      localOrigin.copy(raycaster.ray.origin).applyMatrix4(invMatrix)
      localDir.copy(raycaster.ray.direction).transformDirection(invMatrix).normalize()
      const ox = localOrigin.x, oy = localOrigin.y, oz = localOrigin.z
      const ddx = localDir.x, ddy = localDir.y, ddz = localDir.z

      const chaosScale = 12 * (1 - morph.v)
      const HOVER_R = 0.9
      const HOVER_R_SQ = HOVER_R * HOVER_R
      const STRENGTH = 0.05
      const SPRING = 0.03
      const DAMP = 0.92

      const arr = positions
      for (let i = 0; i < COUNT; i++) {
        const ix = i * 3, iy = ix + 1, iz = ix + 2
        let vx = velocities[ix], vy = velocities[iy], vz = velocities[iz]

        // Hover repel — solo front-facing
        const vx0 = arr[ix] - ox, vy0 = arr[iy] - oy, vz0 = arr[iz] - oz
        const tProj = vx0 * ddx + vy0 * ddy + vz0 * ddz
        if (tProj > 0) {
          const cx = ox + ddx * tProj, cy = oy + ddy * tProj, cz = oz + ddz * tProj
          const dx = arr[ix] - cx, dy = arr[iy] - cy, dz = arr[iz] - cz
          const distSq = dx * dx + dy * dy + dz * dz
          if (distSq < HOVER_R_SQ && distSq > 0.0001) {
            const dist = Math.sqrt(distSq)
            // Front-facing (dot normal vs view)
            const onLen = Math.sqrt(origin[ix] ** 2 + origin[iy] ** 2 + origin[iz] ** 2) || 1
            const nx = origin[ix] / onLen, ny = origin[iy] / onLen, nz = origin[iz] / onLen
            const viewX = ox - arr[ix], viewY = oy - arr[iy], viewZ = oz - arr[iz]
            const viewLen = Math.sqrt(viewX * viewX + viewY * viewY + viewZ * viewZ) || 1
            const facing = (nx * viewX + ny * viewY + nz * viewZ) / viewLen
            const frontness = Math.max(0, facing)
            const f = STRENGTH * (1 - dist / HOVER_R) * Math.pow(frontness, 2.4)
            vx += (dx / dist) * f
            vy += (dy / dist) * f
            vz += (dz / dist) * f
          }
        }

        // Spring al target (origen + caos × (1 - morph))
        const tx = origin[ix] + chaos[ix] * chaosScale
        const ty = origin[iy] + chaos[iy] * chaosScale
        const tz = origin[iz] + chaos[iz] * chaosScale
        vx += (tx - arr[ix]) * SPRING
        vy += (ty - arr[iy]) * SPRING
        vz += (tz - arr[iz]) * SPRING

        vx *= DAMP; vy *= DAMP; vz *= DAMP
        arr[ix] += vx * dt; arr[iy] += vy * dt; arr[iz] += vz * dt
        velocities[ix] = vx; velocities[iy] = vy; velocities[iz] = vz
      }

      ;(geometry.attributes.position as THREE.BufferAttribute).needsUpdate = true
      renderer.render(scene, camera)
      rafId = requestAnimationFrame(tick)
    }
    tick()

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('resize', onResize)
      gsap.killTweensOf(morph)
      geometry.dispose()
      material.dispose()
      particleTex.dispose()
      renderer.dispose()
    }
  }, [])

  return (
    <div style={{
      position: 'fixed', inset: 0, overflow: 'hidden',
      background: '#000', color: '#fff',
      fontFamily: "'Mark Pro', 'Helvetica Neue', Arial, sans-serif",
    }}>
      <canvas
        ref={canvasRef}
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }}
      />

      {/* Overlay con texto */}
      <div style={{
        position: 'absolute', inset: 0, zIndex: 1,
        display: 'flex', flexDirection: 'column',
        justifyContent: 'space-between', padding: 'clamp(24px, 4vw, 48px)',
        pointerEvents: 'none',
      }}>
        {/* Top: logo / nombre */}
        <div style={{
          fontSize: 11, letterSpacing: 2, opacity: 0.6, textTransform: 'uppercase',
          fontFamily: "'GT America Mono', 'SF Mono', Menlo, monospace",
        }}>
          Flowbit Studio
        </div>

        {/* Center: hero */}
        <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            fontSize: 11, letterSpacing: 3, opacity: 0.5, marginBottom: 18, textTransform: 'uppercase',
            fontFamily: "'GT America Mono', 'SF Mono', Menlo, monospace",
          }}>
            Próximamente
          </div>
          <h1 style={{
            fontSize: 'clamp(48px, 9vw, 140px)',
            fontWeight: 400, margin: 0, lineHeight: 0.95,
            letterSpacing: '-0.02em',
          }}>
            Flowbit
          </h1>
          <p style={{
            maxWidth: 480, margin: '24px auto 0',
            fontSize: 'clamp(13px, 1.4vw, 16px)', lineHeight: 1.6,
            opacity: 0.7,
          }}>
            Estudio multidisciplinario para PyMEs.
            Estamos construyendo algo nuevo.
          </p>
        </div>

        {/* Bottom: contacto */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
          flexWrap: 'wrap', gap: 16,
          fontSize: 11, letterSpacing: 1.5, textTransform: 'uppercase',
          fontFamily: "'GT America Mono', 'SF Mono', Menlo, monospace",
        }}>
          <div style={{ opacity: 0.5 }}>León, GTO · México</div>
          <a
            href="mailto:hola@flowbit.studio"
            style={{
              color: '#fff', textDecoration: 'none', opacity: 0.9,
              borderBottom: '1px solid rgba(255,255,255,0.4)',
              paddingBottom: 2, pointerEvents: 'auto',
              transition: 'opacity 0.2s, border-color 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.9'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'
            }}
          >
            hola@flowbit.studio
          </a>
        </div>
      </div>
    </div>
  )
}
