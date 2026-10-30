import { useEffect, useRef, useState } from 'react'
import type { BaseContenido, CatalogoBase } from '../contenido/tipos'
import useEntrada from '../componentes/useEntrada'
import './Base.css'

const CX = 1010, CY = 470, FOCO = 1500

// Flowbit Base: un anillo de módulos alrededor de un núcleo. Eliges tu giro y se encienden sólo los suyos.
// Módulos y giros vienen de la base (useCatalogo); si la base agrega un módulo, el anillo se reparte solo.
export default function Base({ c, catalogo, onDemo }: { c: BaseContenido; catalogo: CatalogoBase; onDemo: () => void }) {
  const ref = useEntrada<HTMLElement>(0.2)
  const cv = useRef<HTMLCanvasElement>(null)
  const raton = useRef({ x: -9999, y: -9999 })
  const [giro, setGiro] = useState(Math.min(1, catalogo.giros.length - 1))
  const elegido = catalogo.giros[giro] ?? catalogo.giros[0]
  const modulos = catalogo.modulos
  const encendidos = useRef<string[]>(elegido?.modulos ?? [])
  encendidos.current = elegido?.modulos ?? []
  const firma = modulos.map((m) => m.clave).join('|')

  useEffect(() => {
    const canvas = cv.current
    if (!canvas) return
    const M = modulos.length
    type P = { tipo: 'mod' | 'nucleo' | 'hilo'; m: number; k: number; x: number; y: number; z: number; vx: number; vy: number; vz: number; a: number; vis: number; fase: number; kk: number }
    const pts: P[] = []
    const nace = (tipo: P['tipo'], m: number, k: number): P => ({ tipo, m, k, x: 600 + Math.random() * 840, y: Math.random() * 1000, z: (Math.random() - 0.5) * 600, vx: 0, vy: 0, vz: 0, a: 0, vis: 0, fase: Math.random() * 6.28, kk: 0.008 + Math.random() * 0.01 })
    // Tres tipos de punto: los de cada módulo, el núcleo y los hilos que unen núcleo y módulo
    for (let m = 0; m < M; m++) for (let k = 0; k < 64; k++) pts.push(nace('mod', m, k))
    for (let k = 0; k < 160; k++) pts.push(nace('nucleo', 0, k))
    for (let m = 0; m < M; m++) for (let k = 0; k < 24; k++) pts.push(nace('hilo', m, k))
    const encendido = Array(M).fill(0) as number[]
    const giroV = { y: 0, x: 0 }
    const paso = (Math.PI * 2) / M, ancho = Math.min(0.4, paso * 0.76)
    const centro = (m: number, en: number, t: number) => { const ang = m * paso - Math.PI / 2 + t * 0.04, r = 255 + en * 40; return { x: CX + Math.cos(ang) * r, y: CY + Math.sin(ang) * r * 0.92, z: -en * 60, ang } }
    const objetivo = (q: P, t: number) => {
      if (q.tipo === 'mod') {
        const en = encendido[q.m], c = centro(q.m, en, t), col = q.k % 16, fila = Math.floor(q.k / 16), a = c.ang + (col / 15 - 0.5) * ancho, r = 230 + fila * 15 + en * 40
        return { x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r * 0.92, z: c.z, vis: 1 }
      }
      if (q.tipo === 'nucleo') { const ly = 1 - 2 * (q.k + 0.5) / 160, rr = Math.sqrt(1 - ly * ly), th = q.k * 2.399963 + t * 0.35; return { x: CX + Math.cos(th) * rr * 95, y: CY + ly * 95, z: Math.sin(th) * rr * 95, vis: 1 } }
      const en = encendido[q.m], c = centro(q.m, en, t), s = (q.k + 0.5) / 24, dx = c.x - CX, dy = c.y - CY, L = Math.hypot(dx, dy) || 1, d = 100 + (L - 130) * s
      return { x: CX + dx / L * d, y: CY + dy / L * d, z: c.z * s, vis: en }
    }
    let raf = 0
    const dibuja = (t: number) => {
      raf = requestAnimationFrame(dibuja)
      const g = canvas.getContext('2d'); if (!g) return
      // el lienzo mide lo que mide su caja; el anillo se dibuja en el marco del diseño y se escala
      const caja = canvas.getBoundingClientRect(), W = caja.width, H = caja.height
      if (canvas.width !== Math.round(W * 2) || canvas.height !== Math.round(H * 2)) { canvas.width = Math.round(W * 2); canvas.height = Math.round(H * 2) }
      const telefono = window.innerWidth < 900
      const s = telefono ? W / 980 : W / 1440, ox = telefono ? W / 2 - CX * s : 0, oy = telefono ? H / 2 - CY * s : (H - 1000 * s) / 2
      g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, canvas.width, canvas.height)
      g.setTransform(2 * s, 0, 0, 2 * s, 2 * ox, 2 * oy)
      const mx = raton.current.x > -1000 ? (raton.current.x - ox) / s : -9999, my = raton.current.y > -1000 ? (raton.current.y - oy) / s : -9999
      const tiempo = t / 1000, on = encendidos.current
      for (let m = 0; m < M; m++) encendido[m] += ((on.includes(modulos[m].clave) ? 1 : 0) - encendido[m]) * 0.045
      const hay = mx > -1000
      giroV.y += ((Math.sin(tiempo * 0.21) * 0.06 + (hay ? (mx - CX) / 1440 * 0.07 : 0)) - giroV.y) * 0.03
      giroV.x += ((Math.sin(tiempo * 0.16 + 1) * 0.03 + (hay ? (my - CY) / 1000 * -0.04 : 0)) - giroV.x) * 0.03
      const cy = Math.cos(giroV.y), sy = Math.sin(giroV.y), cx = Math.cos(giroV.x), sx = Math.sin(giroV.x)
      const proy = (x: number, y: number, z: number) => { const x0 = x - CX, y0 = y - CY, x1 = x0 * cy + z * sy, z1 = -x0 * sy + z * cy, y2 = y0 * cx - z1 * sx, z2 = y0 * sx + z1 * cx, e = FOCO / (FOCO + z2); return { x: CX + x1 * e, y: CY + y2 * e, e } }
      const lista: { x: number; y: number; e: number; a: number; vis: number; tipo: string }[] = []
      for (const q of pts) {
        const o = objetivo(q, tiempo)
        q.vx += (o.x - q.x) * q.kk; q.vy += (o.y + Math.sin(tiempo * 1.1 + q.fase) * 1.2 - q.y) * q.kk; q.vz += (o.z - q.z) * q.kk
        const p0 = proy(q.x, q.y, q.z), dx = p0.x - mx, dy = p0.y - my, d2 = dx * dx + dy * dy
        if (d2 < 40000) { const d = Math.sqrt(d2) || 1, fz = Math.pow((200 - d) / 200, 2); q.vx += dx / d * fz * 0.8; q.vy += dy / d * fz * 0.8 }
        q.vx *= 0.9; q.vy *= 0.9; q.vz *= 0.9; q.x += q.vx; q.y += q.vy; q.z += q.vz
        q.vis += (o.vis - q.vis) * 0.06
        let luz = 0
        if (q.tipo === 'mod') luz = encendido[q.m] * (0.75 + 0.25 * Math.max(0, Math.sin(tiempo * 2.2 - q.k * 0.09 + q.m)))
        else if (q.tipo === 'nucleo') luz = 0.6 + 0.4 * Math.sin(tiempo * 2.4 + q.k * 0.2)
        else luz = 0.35 + 0.65 * Math.max(0, 1 - Math.abs(((q.k / 24 - tiempo * 0.6 + q.m * 0.13) % 1 + 1) % 1 - 0.5) / 0.12)
        q.a += (luz - q.a) * 0.15
        if (q.vis < 0.02) continue
        const p = proy(q.x, q.y, q.z)
        lista.push({ x: p.x, y: p.y, e: p.e, a: q.a, vis: q.vis, tipo: q.tipo })
      }
      lista.sort((a, b) => a.e - b.e)
      for (const d of lista) {
        const m = Math.min(1, d.a), tam = (d.tipo === 'hilo' ? 2.2 : 2.8 + m * 1.4) * d.e
        g.fillStyle = 'rgba(' + Math.round(218 - 195 * m) + ',' + Math.round(218 - 84 * m) + ',' + Math.round(218 + 37 * m) + ',' + Math.min(1, (0.3 + m * 0.7) * d.e) * d.vis + ')'
        g.fillRect(d.x - tam / 2, d.y - tam / 2, tam, tam)
      }
      // nombres de los módulos
      g.font = `500 ${telefono ? 24 : 15}px "Mark Pro", "Helvetica Neue", Arial, sans-serif`
      g.textAlign = 'center'
      for (let m = 0; m < M; m++) {
        const en = encendido[m], c = centro(m, en, tiempo), r = 330 + en * 40
        const p = proy(CX + Math.cos(c.ang) * r, CY + Math.sin(c.ang) * r * 0.92 + 5, c.z), gris = Math.round(150 + 105 * en)
        g.fillStyle = 'rgba(' + gris + ',' + gris + ',' + gris + ',' + (0.4 + en * 0.6) + ')'
        g.fillText(modulos[m].nombre, p.x, p.y)
      }
    }
    raf = requestAnimationFrame(dibuja)
    return () => cancelAnimationFrame(raf)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [firma])

  const [uno, dos] = c.titulo.split('\n')
  return (
    <section
      className="s-base" id="flowbit-base" ref={ref}
      onMouseMove={(ev) => { const r = cv.current!.getBoundingClientRect(); raton.current = { x: ev.clientX - r.left, y: ev.clientY - r.top } }}
      onMouseLeave={() => { raton.current = { x: -9999, y: -9999 } }}
    >
      <canvas ref={cv} aria-hidden="true" />
      <div className="texto">
        <span className="mono entra etiqueta">{c.etiqueta}</span>
        <h2 className="display">
          <span className="renglon"><span style={{ animationDelay: '.1s' }}>{uno}</span></span>
          {dos && <span className="renglon"><span style={{ animationDelay: '.18s' }}>{dos}</span></span>}
        </h2>
        <p className="mono entra desc" style={{ animationDelay: '.3s' }}>{c.descripcion}</p>
        <div className="entra giros" style={{ animationDelay: '.4s' }}>
          {catalogo.giros.map((g, i) => (
            <button type="button" key={g.clave} className={`giro${i === giro ? ' giro-on' : ''}`} aria-pressed={i === giro} onClick={() => setGiro(i)}>{g.nombre}</button>
          ))}
        </div>
        <div className="entra cuenta" style={{ animationDelay: '.5s' }}>
          <span className="cifra">{elegido?.modulos.length ?? 0}</span>
          <span className="mono">módulos para<br />{elegido?.nombre}</span>
        </div>
        <div className="entra" style={{ animationDelay: '.6s' }}>
          <a href={c.boton.href ?? '#contacto'} className="lleno" onClick={(e) => { e.preventDefault(); onDemo() }}>{c.boton.texto} <span className="f" aria-hidden="true">→</span></a>
        </div>
      </div>
    </section>
  )
}
