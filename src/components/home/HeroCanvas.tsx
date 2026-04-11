import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'

// Vertex shader: project points with size attenuation + fog
const vertexShader = `
uniform float uSize;
uniform float uSizeAttenuation;
varying float vFogDepth;

void main() {
  vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
  gl_PointSize = uSize * (uSizeAttenuation / -mvPosition.z);
  gl_Position = projectionMatrix * mvPosition;
  vFogDepth = -mvPosition.z;
}
`

// Fragment shader: circular discard + fog
const fragmentShader = `
uniform vec3 uColor;
uniform float uOpacity;
uniform vec3 fogColor;
uniform float fogNear;
uniform float fogFar;
varying float vFogDepth;

void main() {
  vec2 center = gl_PointCoord - vec2(0.5);
  if (length(center) > 0.25) discard;

  float fogFactor = smoothstep(fogNear, fogFar, vFogDepth);
  vec3 color = mix(uColor, fogColor, fogFactor);
  gl_FragColor = vec4(color, uOpacity);
}
`

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = 'ontouchstart' in window

    // Renderer — WQF: clearColor 0x110011, antialias false, powerPreference high-performance
    const renderer = new THREE.WebGLRenderer({
      powerPreference: 'high-performance',
      antialias: false,
      alpha: false,
    })
    renderer.setClearColor(0x110011, 1)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(container.clientWidth, container.clientHeight)
    container.appendChild(renderer.domElement)

    // Scene — WQF: fog color 0x110011, near 0, far 15
    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x110011, 0, 15)

    // Camera — WQF: FOV 60, position (0, 5, 20)
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    )
    camera.position.set(0, 5, 20)

    // Curve — WQF: QuadraticBezierCurve3 from (-11,0,0) to (11,0,0) via (0,0,0)
    const curve = new THREE.QuadraticBezierCurve3(
      new THREE.Vector3(-11, 0, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(11, 0, 0),
    )

    // TubeGeometry — WQF: tubularSegments 60, radius 1.5, radialSegments 60
    const tubeGeometry = new THREE.TubeGeometry(curve, 60, 1.5, 60, false)
    const posArray = tubeGeometry.attributes.position.array as Float32Array
    const count = posArray.length / 3

    // Copy positions for the point cloud
    const pointsGeometry = new THREE.BufferGeometry()
    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(posArray), 3))

    // Store original positions for wave animation
    const originalPositions = new Float32Array(posArray)

    // ShaderMaterial — WQF: size 0.2, sizeAttenuation 170, color #D1D1D1
    const material = new THREE.ShaderMaterial({
      uniforms: {
        uSize: { value: 0.2 },
        uSizeAttenuation: { value: 170 },
        uColor: { value: new THREE.Color(0xD1D1D1) },
        uOpacity: { value: 1.0 },
        fogColor: { value: new THREE.Color(0x110011) },
        fogNear: { value: 0 },
        fogFar: { value: 15 },
      },
      vertexShader,
      fragmentShader,
      transparent: true,
      depthWrite: false,
    })

    const points = new THREE.Points(pointsGeometry, material)
    scene.add(points)

    // Wave state — WQF: waveIntensity starts at 30, animates to 0.02
    const state = {
      waveIntensity: 30,
      spatialBlend: 0,
      time: 0,
    }

    // GSAP intro animations — WQF: 2s power3.inOut on waveIntensity, 1.5s power2.inOut on spatialBlend
    gsap.to(state, {
      waveIntensity: isTouch ? 0 : 0.02,
      duration: 2,
      ease: 'power3.inOut',
      delay: 0.5,
    })
    gsap.to(state, {
      spatialBlend: 1,
      duration: 1.5,
      ease: 'power2.inOut',
      delay: 0.5,
    })

    // Mouse tracking — WQF: proximity within 125px radius, atan2 displacement
    const mouse = { x: 0, y: 0 }
    const handleMouseMove = (e: MouseEvent) => {
      if (isTouch) return
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1
      mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
    }
    window.addEventListener('mousemove', handleMouseMove)

    // Animation loop
    let animationId: number
    let isVisible = true

    const animate = () => {
      animationId = requestAnimationFrame(animate)
      if (!isVisible) return

      state.time += 0.01

      const posAttr = pointsGeometry.attributes.position as THREE.BufferAttribute
      const arr = posAttr.array as Float32Array

      if (!prefersReducedMotion) {
        for (let i = 0; i < count; i++) {
          const i3 = i * 3
          const ox = originalPositions[i3]
          const oy = originalPositions[i3 + 1]
          const oz = originalPositions[i3 + 2]

          // WQF wave formula: sin(t + e*0.01)*0.5 for each axis
          const t = state.time
          const e = i
          const waveX = Math.sin(t + e * 0.01) * 0.5 * state.waveIntensity
          const waveY = Math.sin(t + e * 0.015) * 0.5 * state.waveIntensity
          const waveZ = Math.sin(t + e * 0.02) * 0.5 * state.waveIntensity

          // Blend between original tube position and wave-displaced position
          arr[i3] = ox + waveX * (1 - state.spatialBlend) + waveX * state.spatialBlend * 0.02
          arr[i3 + 1] = oy + waveY * (1 - state.spatialBlend) + waveY * state.spatialBlend * 0.02
          arr[i3 + 2] = oz + waveZ * (1 - state.spatialBlend) + waveZ * state.spatialBlend * 0.02
        }
        posAttr.needsUpdate = true

        // Subtle camera tracking
        camera.position.x += (mouse.x * 0.5 - camera.position.x) * 0.02
        camera.position.y += (5 + mouse.y * 0.5 - camera.position.y) * 0.02
        camera.lookAt(0, 0, 0)
      }

      renderer.render(scene, camera)
    }

    if (prefersReducedMotion) {
      renderer.render(scene, camera)
    }
    animate()

    // Resize
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect
        if (width === 0 || height === 0) continue
        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height)
      }
    })
    resizeObserver.observe(container)

    // Visibility
    const intersectionObserver = new IntersectionObserver(
      ([entry]) => { isVisible = entry.isIntersecting },
      { threshold: 0.1 },
    )
    intersectionObserver.observe(container)

    return () => {
      cancelAnimationFrame(animationId)
      resizeObserver.disconnect()
      intersectionObserver.disconnect()
      window.removeEventListener('mousemove', handleMouseMove)
      tubeGeometry.dispose()
      pointsGeometry.dispose()
      material.dispose()
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      style={{ position: 'absolute', inset: 0, zIndex: 0 }}
    />
  )
}
