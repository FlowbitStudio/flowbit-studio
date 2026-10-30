import type { FooterContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import './Pie.css'

// Footer: a la izquierda regresa el enjambre del hero (el lienzo fijo se ve a través); a la derecha, el panel azul.
export default function Pie({ c, onContacto }: { c: FooterContenido; onContacto: () => void }) {
  const ref = useEntrada<HTMLElement>(0.2)
  const renglones = c.titulo.split('\n')
  return (
    <footer className="s-pie" ref={ref}>
      <div className="izq">
        <div className="fade" aria-hidden="true" />
        <div className="mono suave contacto" style={{ animationDelay: '1s' }}>
          <a href={`mailto:${c.correo}`}>{c.correo}</a>
          <span>{c.ciudad}</span>
        </div>
      </div>
      <div className="panel">
        <div className="pregunta-c">
          <h2>{renglones.map((r, i) => <span className="renglon" key={i}><span style={{ animationDelay: `${0.7 + i * 0.1}s` }}>{r}</span></span>)}</h2>
          <p className="mono suave" style={{ animationDelay: '1s' }}>{c.descripcion}</p>
          <div className="suave" style={{ animationDelay: '1.1s' }}><Enlace texto={c.boton.texto} href={c.boton.href} onClick={(e) => { e.preventDefault(); onContacto() }} /></div>
        </div>
        <div className="marca"><img src="/logo-flowbit-dark.svg" alt="Flowbit" /></div>
        <nav aria-label="Pie de página" className="menu">
          {c.enlaces.map((l, i) => (
            <a href={l.href} className="grande suave" key={l.texto} style={{ animationDelay: `${1.15 + i * 0.05}s` }}>
              <span className="p" /><span className="t"><span>{l.texto}</span><span aria-hidden="true">{l.texto}</span></span>
            </a>
          ))}
        </nav>
        <div className="legales">
          <div className="mono lista-l">{c.legales.map((l) => <a href={l.href} className="legal" key={l.texto}>{l.texto}</a>)}</div>
          <span className="mono der">{c.derechos}</span>
        </div>
      </div>
    </footer>
  )
}
