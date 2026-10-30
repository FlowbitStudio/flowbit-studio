import type { HeroContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import './Hero.css'

// Hero: el enjambre de partículas vivo (ParticleSwarm, fijo detrás) y el titular que entra palabra por palabra.
export default function Hero({ c, onContacto }: { c: HeroContenido; onContacto: () => void }) {
  const palabras = c.titulo.split(/\s+/)
  return (
    <section className="s-hero" id="inicio">
      <div className="velo" aria-hidden="true" />
      <div className="cuerpo">
        <div className="hueco" />
        <h1>
          {palabras.map((p, i) => (
            <span className="palabra" key={i}><span style={{ animationDelay: `${0.3 + i * 0.08}s` }}>{p}</span></span>
          ))}
        </h1>
        <div className="abajo-zona mono">
          <div className="senal abajo" aria-hidden="true"><div className="scroll" /></div>
          <div className="linea" />
          <div className="abajo fila">
            <div className="mitad">
              <Enlace texto={c.boton.texto} href={c.boton.href} onClick={(e) => { e.preventDefault(); onContacto() }} />
            </div>
            <div className="mitad"><p>{c.descripcion}</p></div>
          </div>
        </div>
      </div>
    </section>
  )
}
