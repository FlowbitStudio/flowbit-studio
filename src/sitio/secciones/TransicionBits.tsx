import { useEffect, useRef } from 'react'

// Una corriente de bits entre secciones oscuras: llega dispersa, se ordena en un hilo al centro y se abre otra vez.
export default function TransicionBits() {
  const cv = useRef<HTMLCanvasElement>(null)
  const raton = useRef({ x: -9999, y: -9999 })
  useEffect(() => {
    const canvas = cv.current
    if (!canvas) return
    const N = 700
    const pts = Array.from({ length: N }, () => ({ u: Math.random(), carril: (Math.random() - 0.5) * 2, vel: 0.035 + Math.random() * 0.03, fase: Math.random() * 6.28, oy: 0 }))
    let ultimo = 0, raf = 0
    const dibuja = (t: number) => {
      raf = requestAnimationFrame(dibuja)
      const dt = Math.min(0.05, (t - ultimo) / 1000 || 0.016); ultimo = t
      const g = canvas.getContext('2d'); if (!g) return
      const caja = canvas.getBoundingClientRect(), W = caja.width, H = caja.height
      if (canvas.width !== Math.round(W * 2) || canvas.height !== Math.round(H * 2)) { canvas.width = Math.round(W * 2); canvas.height = Math.round(H * 2) }
      g.setTransform(2, 0, 0, 2, 0, 0)
      g.clearRect(0, 0, W, H)
      const s = t / 1000, CY = H / 2
      for (const q of pts) {
        q.u += q.vel * dt; if (q.u > 1) { q.u -= 1; q.carril = (Math.random() - 0.5) * 2 }
        // apertura: ancho en los extremos, casi una línea al centro
        const x = q.u * (W + 80) - 40, c = (q.u - 0.5) * 2, abre = 0.06 + Math.pow(Math.abs(c), 1.6) * 0.94
        let y = CY + q.carril * (H * 0.42) * abre + Math.sin(s * 1.2 + q.fase + q.u * 6) * 6 * abre
        // el cursor aparta con suavidad
        const dx = x - raton.current.x, dy = y - raton.current.y, d2 = dx * dx + dy * dy
        if (d2 < 40000) { const d = Math.sqrt(d2) || 1, fz = Math.pow((200 - d) / 200, 2); q.oy += dy / d * fz * 1.6 }
        q.oy *= 0.92; y += q.oy
        // en el hilo central viajan paquetes azules
        const centro = 1 - Math.min(1, Math.abs(c) * 2.2), paquete = Math.max(0, 1 - Math.abs(((q.u * 30 - s * 2.2) % 3 + 3) % 3 - 1.5) / 0.4)
        const m = Math.min(1, centro * (0.35 + paquete * 0.65)), tam = 2.6 + m * 1.2
        g.fillStyle = 'rgba(' + Math.round(218 - 195 * m) + ',' + Math.round(218 - 84 * m) + ',' + Math.round(218 + 37 * m) + ',' + (0.35 + m * 0.6) * Math.min(1, Math.min(q.u, 1 - q.u) * 8) + ')'
        g.fillRect(x - tam / 2, y - tam / 2, tam, tam)
      }
    }
    raf = requestAnimationFrame(dibuja)
    return () => cancelAnimationFrame(raf)
  }, [])
  return (
    <div
      aria-hidden="true"
      style={{ position: 'relative', zIndex: 1, height: 'clamp(200px, 25vw, 360px)', background: '#111111', overflow: 'hidden' }}
      onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); raton.current = { x: e.clientX - r.left, y: e.clientY - r.top } }}
      onMouseLeave={() => { raton.current = { x: -9999, y: -9999 } }}
    >
      <canvas ref={cv} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', display: 'block' }} />
    </div>
  )
}
