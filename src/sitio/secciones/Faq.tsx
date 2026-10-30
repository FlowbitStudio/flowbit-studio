import { useState } from 'react'
import type { FaqContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import './Faq.css'

// Acordeón: la pregunta abierta crece, su signo gira a ×, la respuesta sube y se enfoca.
export default function Faq({ c, onContacto }: { c: FaqContenido; onContacto: () => void }) {
  const ref = useEntrada<HTMLElement>(0.1)
  const [abierta, setAbierta] = useState(0)
  const [uno, dos] = c.titulo.split('\n')
  return (
    <section className="s-faq" id="preguntas" ref={ref}>
      <div className="izq">
        <span className="mono entra eti">{c.etiqueta}</span>
        <h2 className="display">
          <span className="renglon"><span style={{ animationDelay: '.1s' }}>{uno}</span></span>
          {dos && <span className="renglon"><span style={{ animationDelay: '.18s' }}>{dos}</span></span>}
        </h2>
        <p className="mono entra bajada" style={{ animationDelay: '.3s' }}>{c.descripcion}</p>
        <Enlace texto={c.boton.texto} href={c.boton.href} className="entra" style={{ animationDelay: '.4s' }} onClick={(e) => { e.preventDefault(); onContacto() }} />
      </div>
      <div className="entra der" style={{ animationDelay: '.3s' }}>
        {c.preguntas.map((p, i) => (
          <div className={`pregunta${abierta === i ? ' abierta' : ''}`} key={p.pregunta}>
            <button type="button" className="boton" aria-expanded={abierta === i} onClick={() => setAbierta(abierta === i ? -1 : i)}>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span className="q">{p.pregunta}</span>
              <span className="mas" aria-hidden="true" />
            </button>
            <div className="respuesta"><div><p>{p.respuesta}</p></div></div>
          </div>
        ))}
      </div>
    </section>
  )
}
