import type { ListonContenido } from '../contenido/tipos'
import useEntrada from '../componentes/useEntrada'
import './Liston.css'

// Cinta infinita de clientes: dos copias idénticas que se desplazan media pista. Se pausa al pasar el cursor.
// Si el cliente ya tiene logo en la consola se muestra el logo; si no, su nombre.
export default function Liston({ c }: { c: ListonContenido }) {
  const ref = useEntrada<HTMLElement>(0.2)
  const cinta = [...c.clientes, ...c.clientes]
  return (
    <section className="s-liston" aria-label={c.etiqueta} ref={ref}>
      <div className="arriba entra mono">
        <span>{c.etiqueta}</span>
        <span className="pista">{c.pista}</span>
      </div>
      <div className="marco entra" style={{ animationDelay: '.15s' }}>
        <ul className="cinta">
          {cinta.map((k, i) => (
            <li className="cliente" key={i} aria-hidden={i >= c.clientes.length}>
              {k.logo ? <img src={k.logo.url} alt={k.logo.alt || k.nombre} /> : k.nombre}
              <span className="giro">{k.giro}</span>
              <span className="sep" aria-hidden="true" />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
