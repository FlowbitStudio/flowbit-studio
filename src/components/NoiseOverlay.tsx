import { useEffect, useRef } from 'react'

export default function NoiseOverlay() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const w = window.innerWidth / 2
    const h = window.innerHeight / 2
    canvas.width = w
    canvas.height = h

    const imageData = ctx.createImageData(w, h)
    const pixels = imageData.data
    let animId: number

    const draw = () => {
      for (let i = 0; i < pixels.length; i += 4) {
        const v = Math.random() * 255
        pixels[i] = v
        pixels[i + 1] = v
        pixels[i + 2] = v
        pixels[i + 3] = 255
      }
      ctx.putImageData(imageData, 0, 0)
      animId = requestAnimationFrame(draw)
    }

    draw()
    return () => cancelAnimationFrame(animId)
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 9999,
        opacity: 0.05,
        imageRendering: 'pixelated',
      }}
    />
  )
}
