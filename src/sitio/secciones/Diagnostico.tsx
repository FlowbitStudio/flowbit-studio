import { useEffect, useRef } from 'react'
import type { DiagnosticoContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import './Diagnostico.css'

// Lente de diagnóstico: un campo de bits en desorden; donde pasa el lente, cada bit cae en su lugar y se vuelve azul.
// Lo revisado queda marcado un rato y se va apagando. Sin cursor, el lente recorre solo el campo.
export default function Diagnostico({ c, precio, onContacto }: { c: DiagnosticoContenido; precio: string; onContacto: () => void }) {
  const ref = useEntrada<HTMLElement>(0.2)
  const cv = useRef<HTMLCanvasElement>(null)
  const lec = useRef<HTMLSpanElement>(null)
  const raton = useRef({ x: -9999, y: -9999 })

  useEffect(() => {
    const canvas = cv.current
    if (!canvas) return
    const PASO = 20
    let sem = 5
    const rnd = () => { sem = (sem * 16807) % 2147483647; return (sem - 1) / 2147483646 }
    // Se reparte en una zona unitaria y se escala al tamaño de la caja
    const azar = Array.from({ length: 2600 }, () => ({ u: rnd(), v: rnd(), f1: rnd() * 6.28, f2: rnd() * 6.28, o: 0, m: 0 }))
    const lente = { x: 0, y: 0, r: 170, listo: false }
    let raf = 0
    const dibuja = (t: number) => {
      raf = requestAnimationFrame(dibuja)
      const g = canvas.getContext('2d'); if (!g) return
      const caja = canvas.getBoundingClientRect(), W = caja.width, H = caja.height
      if (!W || !H) return
      if (canvas.width !== Math.round(W * 2) || canvas.height !== Math.round(H * 2)) { canvas.width = Math.round(W * 2); canvas.height = Math.round(H * 2) }
      const s = t / 1000
      lente.r = Math.min(170, W * 0.26)
      if (!lente.listo) { lente.x = W * 0.6; lente.y = H * 0.5; lente.listo = true }
      g.setTransform(2, 0, 0, 2, 0, 0)
      g.clearRect(0, 0, W, H)
      const hay = raton.current.x > -1000
      const ox = hay ? raton.current.x : W * 0.6 + Math.sin(s * 0.31) * W * 0.25, oy = hay ? raton.current.y : H * 0.5 + Math.sin(s * 0.23 + 1) * H * 0.3
      lente.x += (ox - lente.x) * 0.09; lente.y += (oy - lente.y) * 0.09
      let revisado = 0
      for (const b of azar) {
        const bx = 40 + b.u * (W - 60), by = 40 + b.v * (H - 80)
        const cx = bx + Math.sin(s * 0.7 + b.f1) * 9, cy = by + Math.cos(s * 0.6 + b.f2) * 9
        const d = Math.hypot(cx - lente.x, cy - lente.y)
        const dentro = d < lente.r ? Math.pow(1 - d / lente.r, 0.6) : 0
        // memoria: lo revisado queda marcado y se apaga despacio
        b.m = Math.max(b.m * 0.9965, dentro)
        b.o += (Math.max(dentro, b.m * 0.45) - b.o) * 0.12
        revisado += b.m
        const ex = b.o * b.o * (3 - 2 * b.o)
        const gx = Math.round(bx / PASO) * PASO, gy = Math.round(by / PASO) * PASO
        const px = cx + (gx - cx) * ex, py = cy + (gy - cy) * ex
        const m = Math.min(1, b.o * 1.15), tam = 2.6 + m * 1.4
        g.fillStyle = 'rgba(' + Math.round(218 - 195 * m) + ',' + Math.round(218 - 84 * m) + ',' + Math.round(218 + 37 * m) + ',' + (0.38 + m * 0.6) + ')'
        g.fillRect(px - tam / 2, py - tam / 2, tam, tam)
      }
      // el lente: un aro fino con marcas, como una mira
      g.strokeStyle = 'rgba(127,188,255,0.55)'; g.lineWidth = 1
      g.beginPath(); g.arc(lente.x, lente.y, lente.r, 0, Math.PI * 2); g.stroke()
      g.strokeStyle = 'rgba(127,188,255,0.9)'
      for (let k = 0; k < 4; k++) { const a = k * Math.PI / 2 + s * 0.2; g.beginPath(); g.moveTo(lente.x + Math.cos(a) * (lente.r - 8), lente.y + Math.sin(a) * (lente.r - 8)); g.lineTo(lente.x + Math.cos(a) * (lente.r + 8), lente.y + Math.sin(a) * (lente.r + 8)); g.stroke() }
      if (lec.current) {
        lec.current.textContent = 'Revisado · ' + Math.round(revisado / azar.length * 100) + '%'
        lec.current.style.transform = `translate(${Math.round(lente.x + lente.r * 0.72 + 14)}px, ${Math.round(lente.y - lente.r * 0.72 - 14)}px)`
      }
    }
    raf = requestAnimationFrame(dibuja)
    return () => cancelAnimationFrame(raf)
  }, [])

  const [uno, dos] = c.titulo.split('\n')
  return (
    <section className="s-diagnostico" id="diagnostico" ref={ref}>
      <div
        className="escena" aria-hidden="true"
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); raton.current = { x: e.clientX - r.left, y: e.clientY - r.top } }}
        onMouseLeave={() => { raton.current = { x: -9999, y: -9999 } }}
      >
        <canvas ref={cv} />
        <div className="velo" />
        <span className="lectura mono" ref={lec} />
        <span className="pista-l mono">Mueve el cursor: donde miras, aparece el orden</span>
      </div>
      <div className="col">
        <div className="cab">
          <span className="mono suave eti" style={{ animationDelay: '.1s' }}>{c.etiqueta}</span>
          <h2>
            <span className="renglon"><span style={{ animationDelay: '.2s' }}>{uno}</span></span>
            {dos && <span className="renglon"><span style={{ animationDelay: '.3s' }}>{dos}</span></span>}
          </h2>
          <div className="raya linea" />
        </div>
        <p className="mono suave desc" style={{ animationDelay: '.5s' }}>{c.descripcion}</p>
        <p className="mono suave precio" style={{ animationDelay: '.65s' }}><strong>{precio}</strong> — {c.notaPrecio}</p>
        <Enlace texto={c.boton.texto} href={c.boton.href} className="suave" style={{ animationDelay: '.8s' }} onClick={(e) => { e.preventDefault(); onContacto() }} />
        <a href={c.whatsapp.href} className="mono suave wa" style={{ animationDelay: '.95s' }}>{c.whatsapp.texto}</a>
      </div>
    </section>
  )
}
