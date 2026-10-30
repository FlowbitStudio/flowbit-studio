import type { CSSProperties } from 'react'
import type { SolucionesContenido } from '../contenido/tipos'
import useEntrada from '../componentes/useEntrada'
import './Soluciones.css'

// Cada categoría es una fila: al pasar el cursor su color la barre, el nombre se recorre y aparecen los servicios.
export default function Soluciones({ c }: { c: SolucionesContenido }) {
  const ref = useEntrada<HTMLElement>()
  const [uno, dos] = c.titulo.split('\n')
  return (
    <section className="s-soluciones" id="soluciones" ref={ref}>
      <div className="cabeza">
        <div className="izq">
          <span className="mono entra">{c.etiqueta}</span>
          <h2 className="display">
            <span className="renglon"><span style={{ animationDelay: '.1s' }}>{uno}</span></span>
            {dos && <span className="renglon"><span style={{ animationDelay: '.2s', color: 'rgba(17,17,17,.45)' }}>{dos}</span></span>}
          </h2>
        </div>
        <p className="mono entra der" style={{ animationDelay: '.3s' }}>{c.descripcion}</p>
      </div>
      <nav className="lista" aria-label={c.etiqueta}>
        {c.filas.map((f, i) => (
          <a key={f.numero} href={f.href ?? '#contacto'} className="fila" style={{ '--c': f.color, '--t': f.tinta, animationDelay: `${0.35 + i * 0.07}s` } as CSSProperties}>
            <span className="relleno" aria-hidden="true" />
            <span className="num">{f.numero}</span>
            <span className="nom">{f.nombre}</span>
            <span className="serv">{f.servicios.join(' · ')}</span>
            <span className="fl" aria-hidden="true">→</span>
          </a>
        ))}
      </nav>
    </section>
  )
}
