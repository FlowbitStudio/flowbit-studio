import { useEffect, useRef } from 'react'
import type { CSSProperties } from 'react'
import type { BitsContenido } from '../contenido/tipos'
import usePaso from '../componentes/usePaso'
import useMarco from '../componentes/useMarco'
import { arrancarBits, CAM_ESCRITORIO, CAM_TELEFONO } from './bitsMotor'
import './Bits.css'

// Composición de cada etapa en escritorio: dónde vive el texto y qué tan grande es.
// (En teléfono todas van arriba, a lo ancho.)
const COMPOSICION: { caja: CSSProperties; titulo: CSSProperties; parrafo?: CSSProperties; etiqueta?: CSSProperties }[] = [
  { caja: { left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }, titulo: { maxWidth: 1000, fontSize: 104, lineHeight: 0.9, letterSpacing: '-0.02em' }, parrafo: { maxWidth: 460 }, etiqueta: { color: 'rgba(231,231,231,.6)' } },
  { caja: { left: 80, top: 88, width: 620 }, titulo: { fontSize: 112, lineHeight: 0.88, letterSpacing: '-0.025em' }, parrafo: { maxWidth: 380 } },
  { caja: { left: 80, top: 88, width: 380, gap: 16 }, titulo: { fontSize: 44, lineHeight: 0.96 }, parrafo: { fontSize: 11 } },
  { caja: { right: 110, top: 0, bottom: 0, width: 400, justifyContent: 'center', textAlign: 'right', alignItems: 'flex-end' }, titulo: { fontSize: 68, lineHeight: 0.92 } },
  { caja: { left: 0, right: 0, top: 84, alignItems: 'center', textAlign: 'center', gap: 16 }, titulo: { fontSize: 76, lineHeight: 0.92 }, parrafo: { maxWidth: 440 } },
  { caja: { left: 0, right: 0, top: 0, bottom: 0, alignItems: 'center', justifyContent: 'center', textAlign: 'center', gap: 26 }, titulo: { fontSize: 150, lineHeight: 0.85, letterSpacing: '-0.035em', textShadow: '0 0 60px rgba(17,17,17,.9)' }, parrafo: { maxWidth: 420 } },
]

export default function Bits({ c }: { c: BitsContenido }) {
  const n = c.etapas.length
  const { ref, avance, paso } = usePaso(n)
  const marco = useMarco()
  const cv = useRef<HTMLCanvasElement>(null)
  const raton = useRef({ x: -9999, y: -9999 })
  const m = useRef(marco)
  m.current = marco

  useEffect(() => {
    if (!cv.current) return
    return arrancarBits(cv.current, {
      avance: () => avance.current,
      raton: () => raton.current,
      camaras: () => (m.current.telefono ? CAM_TELEFONO : CAM_ESCRITORIO),
      ancho: () => m.current.ancho,
      alto: () => m.current.alto,
    })
  }, [avance])

  const mueve = (ev: React.MouseEvent<HTMLDivElement>) => {
    const r = ev.currentTarget.getBoundingClientRect()
    raton.current = { x: (ev.clientX - r.left) / marco.escala, y: (ev.clientY - r.top) / marco.escala }
  }

  return (
    <section className="s-bits" ref={ref} style={{ height: `${n * 100}vh` }} aria-label="Del ruido al orden">
      <div className="escena">
        <div
          className={`marco${marco.telefono ? ' telefono' : ''}`}
          style={{ width: marco.ancho, height: marco.alto, transform: `translate(-50%, -50%) scale(${marco.escala})` }}
          onMouseMove={mueve}
          onMouseLeave={() => { raton.current = { x: -9999, y: -9999 } }}
        >
          <canvas ref={cv} width={marco.ancho * 2} height={marco.alto * 2} style={{ width: marco.ancho, height: marco.alto }} aria-hidden="true" />
          {c.etapas.map((et, i) => {
            if (i !== paso) return null
            const k = COMPOSICION[i] ?? COMPOSICION[0]
            const titulo = et.titulo.replace(/\n/g, ' ')
            return (
              <div className="etapa" key={i} style={marco.telefono ? undefined : k.caja}>
                <span className="mono" style={{ fontSize: 12, color: '#1786FF', ...(marco.telefono ? {} : k.etiqueta) }}>{et.etiqueta}</span>
                <h2 className="display" style={{ animationDelay: '.08s', ...(marco.telefono ? {} : k.titulo) }}>{titulo}</h2>
                <p className="mono" style={{ animationDelay: '.16s', ...(marco.telefono ? {} : k.parrafo) }}>{et.descripcion}</p>
              </div>
            )
          })}
          <div className="indice" aria-hidden="true">
            {c.etapas.map((_, i) => <i key={i} className={i <= paso ? 'on' : ''} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
