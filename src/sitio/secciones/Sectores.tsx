import type { SectoresContenido } from '../contenido/tipos'
import useEntrada from '../componentes/useEntrada'
import './Sectores.css'

const Esquina = ({ n }: { n: number }) => (
  <svg className={`m${n}`} viewBox="0 0 10 10" fill="none"><path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor" strokeWidth="0.4" /></svg>
)

// Al pasar el cursor por un sector, el nombre se cambia por su gemelo azul, se abre la descripción y llegan las esquinas.
export default function Sectores({ c }: { c: SectoresContenido }) {
  const intro = useEntrada<HTMLElement>(0.3)
  const lista = useEntrada<HTMLElement>(0.1)
  return (
    <div className="s-sectores">
      <section className="intro" ref={intro}>
        <div className="caja">
          <div className="titulos">
            <h2 className="mono suave" style={{ animationDelay: '.2s' }}>{c.etiqueta}</h2>
            <p className="titulo">
              {c.titulo.split(' ').map((p, i) => (
                <span className="palabra" key={i}><span style={{ animationDelay: `${0.35 + i * 0.06}s` }}>{p}</span></span>
              ))}
            </p>
          </div>
          <p className="bajada suave" style={{ animationDelay: '1.1s' }}>{c.descripcion}</p>
        </div>
      </section>
      <section className="zona" ref={lista}>
        <ul className="lista">
          {c.sectores.map((s, i) => (
            <li className="sector" key={s.nombre} style={{ animationDelay: `${0.1 + i * 0.1}s` }}>
              <div className="nombre"><h3>{s.nombre}</h3><span aria-hidden="true">{s.nombre}</span></div>
              <div className="cuerpo"><p>{s.descripcion}</p></div>
              <div className="marco" aria-hidden="true"><Esquina n={1} /><Esquina n={2} /><Esquina n={3} /><Esquina n={4} /></div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
