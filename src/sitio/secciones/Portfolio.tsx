import { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { PortfolioContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import { viajarACaso } from './transicionCaso'
import './Portfolio.css'

// Carrusel de casos: se arrastra o se elige; la tarjeta activa abre su ficha con la transición WebGL.
export default function Portfolio({ c }: { c: PortfolioContenido }) {
  const ref = useEntrada<HTMLElement>(0.2)
  const casos = c.casos.filter((k) => k.publicado).sort((a, b) => a.orden - b.orden)
  const [activo, setActivo] = useState(Math.min(2, casos.length - 1))
  const [cursor, setCursor] = useState({ x: 0, y: 0, dentro: false })
  const [ancho, setAncho] = useState(1440)
  const [viajando, setViajando] = useState(false)
  const zona = useRef<HTMLDivElement>(null)
  const arrastre = useRef<{ x: number; movio: boolean } | null>(null)
  const ir = useNavigate()
  const [uno, dos] = c.titulo.split('\n')

  useEffect(() => {
    const mide = () => setAncho(zona.current?.clientWidth ?? window.innerWidth)
    mide()
    window.addEventListener('resize', mide)
    return () => window.removeEventListener('resize', mide)
  }, [])

  const abrir = (ev: React.MouseEvent<HTMLButtonElement>, i: number) => {
    if (arrastre.current?.movio) return
    if (i !== activo) { setActivo(i); return }
    const r = ev.currentTarget.getBoundingClientRect(), k = casos[i]
    setViajando(true)
    viajarACaso({
      rect: { x: r.left, y: r.top, w: r.width, h: r.height },
      nombre: k.nombre, slug: k.slug, numero: String(i + 1).padStart(2, '0'), portadaUrl: k.portada?.url,
      alLlegar: () => ir(`/proyectos/${k.slug}`),
    })
  }

  return (
    <section className={`s-portfolio${viajando ? ' viajando' : ''}`} id="casos" ref={ref}>
      <div className="cabeza">
        <h2 className="mono suave" style={{ animationDelay: '.1s' }}>{c.etiqueta}</h2>
        <p className="titulo">
          <span className="renglon"><span style={{ animationDelay: '.25s' }}>{uno}</span></span>
          {dos && <span className="renglon"><span style={{ animationDelay: '.35s' }}>{dos}</span></span>}
        </p>
        <Enlace texto={c.boton.texto} href={c.boton.href} className="suave" style={{ animationDelay: '.5s' }} />
      </div>
      <div
        className="suave zona" ref={zona} style={{ animationDelay: '.7s' }}
        onMouseMove={(e) => { const r = e.currentTarget.getBoundingClientRect(); setCursor({ x: e.clientX - r.left, y: e.clientY - r.top, dentro: true }) }}
        onMouseLeave={() => setCursor((v) => ({ ...v, dentro: false }))}
        onPointerDown={(e) => { arrastre.current = { x: e.clientX, movio: false } }}
        onPointerMove={(e) => {
          const a = arrastre.current
          if (!a) return
          const d = e.clientX - a.x
          if (Math.abs(d) > 70) {
            a.x = e.clientX; a.movio = true
            setActivo((v) => Math.max(0, Math.min(casos.length - 1, v + (d < 0 ? 1 : -1))))
          }
        }}
        onPointerUp={() => { setTimeout(() => { arrastre.current = null }, 0) }}
        onPointerLeave={() => { arrastre.current = null }}
      >
        <div className="pista" style={{ transform: `translateX(${Math.round(ancho / 2 - (activo * 283 + 331 / 2))}px)` }}>
          {casos.map((k, i) => (
            <button type="button" key={k.slug} className={`caso${i === activo ? ' activo' : ''}`} onClick={(e) => abrir(e, i)} aria-label={k.nombre} aria-pressed={i === activo}>
              <div className="nombre"><h3>{k.nombre}</h3></div>
              <div className="logo">{k.logo ? <img src={k.logo.url} alt={k.logo.alt} /> : 'Logo'}</div>
              <div className="extra">
                <div>
                  <p className="desc mono">{k.resumen}</p>
                  <span className="mono ver">Ver caso →</span>
                </div>
              </div>
              <div className="marcas" aria-hidden="true"><span className="m-i" /><span className="m-d" /></div>
            </button>
          ))}
        </div>
        <div className="arrastra" aria-hidden="true" style={{ transform: `translate(${cursor.x}px, ${cursor.y}px) translate(-50%, -50%)`, opacity: cursor.dentro ? 1 : 0, scale: cursor.dentro ? '1' : '.5' }}>Drag</div>
      </div>
    </section>
  )
}
