import { useEffect, useRef } from 'react'
import type { PorqueContenido } from '../contenido/tipos'
import usePaso from '../componentes/usePaso'
import useMarco from '../componentes/useMarco'
import { arrancarPorque, CAM_ESCRITORIO, CAM_TELEFONO } from './porqueMotor'
import './Porque.css'

// Nueve pantallas: la portada y, por cada razón, un respiro casi vacío y su forma.
// Pantalla 0 portada · 1 respiro · 2 razón 1 · 3 respiro · 4 razón 2 · 5 respiro · 6 razón 3 · 7 respiro · 8 razón 4
const CLASE_RAZON = ['sombra', 'centro', '', 'sombra']

export default function Porque({ c }: { c: PorqueContenido }) {
  const { ref, avance, paso } = usePaso(9)
  const marco = useMarco()
  const cv = useRef<HTMLCanvasElement>(null)
  const raton = useRef({ x: -9999, y: -9999 })
  const m = useRef(marco)
  m.current = marco

  useEffect(() => {
    if (!cv.current) return
    return arrancarPorque(cv.current, {
      avance: () => avance.current,
      raton: () => raton.current,
      camaras: () => (m.current.telefono ? CAM_TELEFONO : CAM_ESCRITORIO),
      ancho: () => m.current.ancho,
      alto: () => m.current.alto,
    })
  }, [avance])

  const r = paso >= 1 ? Math.floor((paso - 1) / 2) : -1
  const razon = r >= 0 ? c.razones[r] : null
  const total = String(c.razones.length).padStart(2, '0'), num = String(r + 1).padStart(2, '0')

  return (
    <section className="s-porque" ref={ref} aria-label={c.etiqueta}>
      <div className="escena">
        <div
          className={`marco${marco.telefono ? ' telefono' : ''}`}
          style={{ width: marco.ancho, height: marco.alto, transform: `translate(-50%, -50%) scale(${marco.escala})` }}
          onMouseMove={(ev) => { const b = ev.currentTarget.getBoundingClientRect(); raton.current = { x: (ev.clientX - b.left) / marco.escala, y: (ev.clientY - b.top) / marco.escala } }}
          onMouseLeave={() => { raton.current = { x: -9999, y: -9999 } }}
        >
          <canvas ref={cv} width={marco.ancho * 2} height={marco.alto * 2} style={{ width: marco.ancho, height: marco.alto }} aria-hidden="true" />
          <div className="texto">
            {paso === 0 && (
              <div className="etapa portada" key="p">
                <span className="mono eti">{c.etiqueta}</span>
                <h2 className="display" style={{ animationDelay: '.08s' }}>{c.titulo}</h2>
                <p className="mono" style={{ animationDelay: '.16s' }}>{c.pista}</p>
              </div>
            )}
            {paso > 0 && paso % 2 === 1 && razon && (
              <div className="etapa pausa" key={`r${paso}`}>
                <span className="display num">{num}</span>
                <span className="mono pal" style={{ animationDelay: '.1s' }}>{razon.palabra}</span>
              </div>
            )}
            {paso > 0 && paso % 2 === 0 && razon && (
              <div className={`etapa ${CLASE_RAZON[r] ?? ''}`} key={`f${paso}`}>
                <span className="mono eti">{num} / {total}</span>
                <h3 className="display" style={{ animationDelay: '.08s' }}>{razon.titulo}</h3>
                <p className="mono" style={{ animationDelay: '.16s' }}>{razon.descripcion}</p>
              </div>
            )}
          </div>
          <div className="indice" aria-hidden="true">
            {[0, 1, 2, 3, 4].map((i) => <i key={i} className={i * 2 <= paso ? 'on' : ''} />)}
          </div>
        </div>
      </div>
    </section>
  )
}
