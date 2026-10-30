import { useEffect, useRef } from 'react'
import type { ProcesoContenido } from '../contenido/tipos'
import usePaso from '../componentes/usePaso'
import './Proceso.css'

// El scroll vertical mueve un recorrido horizontal: intro + una pantalla por etapa.
// El número gigante en contorno se llena de su color al llegar; el texto sube y se enfoca.
export default function Proceso({ c }: { c: ProcesoContenido }) {
  const n = c.etapas.length
  const pasos = n + 1
  const { ref, avance } = usePaso(pasos)
  const raiz = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let raf = 0
    const clamp = (x: number) => Math.max(0, Math.min(1, x))
    const pinta = () => {
      raf = requestAnimationFrame(pinta)
      const el = raiz.current; if (!el) return
      const a = avance.current
      const pista = el.querySelector<HTMLElement>('.pista')!
      pista.style.transform = `translateX(${-a * 100}vw)`
      el.querySelector<HTMLElement>('.avance')!.style.transform = `scaleX(${a / (pasos - 1)})`
      el.querySelectorAll<HTMLElement>('.tramo-e').forEach((t, i) => {
        // la etapa i se completa justo al quedar centrada
        const q = clamp((a - (i + 0.32)) / 0.68), q2 = clamp((a - (i + 0.4)) / 0.6)
        t.querySelector<HTMLElement>('.relleno')!.style.clipPath = `inset(${(1 - q) * 100}% 0 0 0)`
        t.querySelectorAll<HTMLElement>('.sube').forEach((s) => {
          const v = s.classList.contains('d1') ? q2 : q
          s.style.opacity = String(v); s.style.transform = `translateY(${(1 - v) * 60}px)`; s.style.filter = v < 1 ? `blur(${(1 - v) * 10}px)` : 'none'
        })
      })
    }
    raf = requestAnimationFrame(pinta)
    return () => cancelAnimationFrame(raf)
  }, [avance, pasos])

  const [t1, t2] = c.titulo.split('\n')
  const [s1, s2] = c.subtitulo.split('\n')
  return (
    <section className="s-proceso" id="proceso" ref={ref} style={{ height: `${pasos * 100}vh` }}>
      <div className="fijo" ref={raiz}>
        <div className="pista" style={{ width: `${pasos * 100}vw` }}>
          <div className="tramo">
            <div className="intro">
              <span className="mono eti">{c.etiqueta}</span>
              <h2 className="display">
                {[t1, t2].map((r) => <span className="renglon" key={r}><span>{r}</span></span>)}
                {[s1, s2].map((r) => <span className="renglon tenue" key={r}><span>{r}</span></span>)}
              </h2>
              <span className="mono pista-txt">{c.pista} <span className="flecha">→</span></span>
            </div>
          </div>
          {c.etapas.map((e, i) => {
            const num = String(i + 1).padStart(2, '0')
            return (
              <div className="tramo tramo-e" key={e.nombre}>
                <span className="numero display" aria-hidden="true">{num}<span className="relleno" style={{ color: e.color }}>{num}</span></span>
                <div className="texto">
                  <span className="mono sube eta" style={{ color: e.color }}>Etapa {num} / {String(n).padStart(2, '0')}</span>
                  <h3 className="display sube">{e.nombre}</h3>
                  <p className="mono sube d1">{e.descripcion}</p>
                </div>
              </div>
            )
          })}
        </div>
        <div className="riel mono" aria-hidden="true">
          <div className="avance" />
          {c.etapas.map((e, i) => (
            <span className="parada" key={e.nombre} style={{ left: `${((i + 1) / n) * 100}%` }}><span>{e.corto ?? e.nombre}</span><i /></span>
          ))}
        </div>
      </div>
    </section>
  )
}
