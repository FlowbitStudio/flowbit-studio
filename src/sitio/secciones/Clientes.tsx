import type { ClientesContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import './Clientes.css'

// El texto queda fijo a la izquierda mientras las tarjetas de color se descubren con el scroll.
export default function Clientes({ c }: { c: ClientesContenido }) {
  const ref = useEntrada<HTMLElement>(0.1)
  const [uno, dos] = c.titulo.split('\n')
  return (
    <section className="s-clientes" ref={ref}>
      <div className="fija">
        <div className="cab">
          <span className="mono suave eti" style={{ animationDelay: '.2s' }}>{c.etiqueta}</span>
          <h2>
            <span className="renglon"><span style={{ animationDelay: '.3s' }}>{uno}</span></span>
            {dos && <span className="renglon"><span style={{ animationDelay: '.4s' }}>{dos}</span></span>}
          </h2>
          <div className="raya linea" style={{ animationDelay: '.7s' }} />
        </div>
        <p className="mono suave bajada" style={{ animationDelay: '.8s' }}>{c.descripcion}</p>
        <Enlace texto={c.boton.texto} href={c.boton.href} className="suave" style={{ animationDelay: '1s' }} />
      </div>
      <div className="tarjetas-col">
        {c.ventajas.map((v, i) => (
          <div className="tarjeta-c" key={v.titulo} style={{ background: v.color }}>
            <div className="arr">
              <h3>{v.titulo}</h3>
              <img className="icono-c" src={v.icono.url} alt={v.icono.alt} loading="lazy" />
            </div>
            <div className="baj">
              <div className="n"><span className="mono">{String(i + 1).padStart(2, '0')}</span></div>
              <p>{v.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
