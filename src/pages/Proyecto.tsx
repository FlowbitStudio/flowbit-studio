import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { useContenidoEstado } from '../sitio/contenido/fuente'
import { pintarPortada } from '../sitio/secciones/transicionCaso'
import type { Imagen } from '../sitio/contenido/tipos'
import '../sitio/sitio.css'
import './Proyecto.css'

const Hueco = ({ img, texto, className = '', alto }: { img?: Imagen; texto: string; className?: string; alto?: number }) => (
  <div className={`hueco revela ${className}`} style={alto ? { height: alto } : undefined}>
    {img ? <img src={img.url} alt={img.alt} loading="lazy" /> : <span className="mono">{texto}</span>}
  </div>
)

// La ficha de un caso (/proyectos/:slug). Se llega con la transición WebGL desde el carrusel: la portada ya viene armada,
// así que aquí sólo entran los textos.
export default function Proyecto() {
  const { slug } = useParams()
  const { c, listo } = useContenidoEstado()
  const casos = c.portfolio.casos.filter((k) => k.publicado).sort((a, b) => a.orden - b.orden)
  const i = casos.findIndex((k) => k.slug === slug)
  const k = casos[i]

  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }) }, [slug])

  if (!k && !listo) return <div className="sitio s-ficha" />
  if (!k) return <Navigate to="/#casos" replace />
  const sig = casos[(i + 1) % casos.length]
  const rayas = !k.portada ? pintarPortada(1440, 900).toDataURL('image/jpeg', 0.85) : undefined

  return (
    <div className="sitio s-ficha">
      <header className="portada">
        <div className="fondo" style={{ backgroundImage: `url("${k.portada?.url ?? rayas}")` }} role={k.portada ? 'img' : undefined} aria-label={k.portada?.alt} />
        {k.portada && <div className="velo" aria-hidden="true" />}
        <div className="barra">
          <Link to="/#casos" className="volver mono entra" style={{ animationDelay: '.3s' }}>← Casos</Link>
          <span className="mono entra numero" style={{ animationDelay: '.3s' }}>Caso {String(i + 1).padStart(2, '0')} / {String(casos.length).padStart(2, '0')}</span>
        </div>
        <div className="pie">
          <div className="izq">
            <span className="mono entra etiqueta">{k.cliente} · {k.giro}</span>
            <h1 className="display"><span className="renglon"><span style={{ animationDelay: '.05s' }}>{k.nombre}</span></span></h1>
          </div>
          <p className="mono entra resumen" style={{ animationDelay: '.2s' }}>{k.resumen}</p>
        </div>
      </header>

      <section className="cuerpo">
        <div className="revela datos">
          <div className="dato"><b>Cliente</b><span>{k.cliente}</span></div>
          <div className="dato"><b>Giro</b><span>{k.giro}</span></div>
          <div className="dato"><b>Servicios</b><span>{k.servicios.join(' · ')}</span></div>
          <div className="dato"><b>Stack</b><span>{k.stack.join(' · ')}</span></div>
          <div className="dato"><b>Tiempo</b><span>{k.tiempo}</span></div>
        </div>

        <div className="revela lado"><span className="mono rotulo-azul">01 — El reto</span></div>
        <p className="display revela reto">{k.reto}</p>

        <Hueco img={k.galeria[0]} texto="[Captura principal del sistema]" className="principal" alto={560} />
        <div className="detalles">
          <Hueco img={k.galeria[1]} texto="[Detalle 1]" />
          <Hueco img={k.galeria[2]} texto="[Detalle 2]" />
        </div>

        <div className="revela lado"><span className="mono rotulo-azul">02 — Lo que construimos</span></div>
        <ol className="revela piezas">
          {k.piezas.map((p, n) => <li className="dato" key={n}><b>{String(n + 1).padStart(2, '0')}</b><span>{p}</span></li>)}
        </ol>

        <div className="revela lado"><span className="mono rotulo-azul">03 — El resultado</span></div>
        <div className="revela resultados">
          {k.resultados.map((r, n) => (
            <div key={n}><span className="display cifra">{r.cifra}</span><span className="mono nota">{r.texto}</span></div>
          ))}
        </div>
      </section>

      <Link to={`/proyectos/${sig.slug}`} className="siguiente">
        <span className="col"><span className="mono eti">Siguiente caso</span><span className="nom">{sig.nombre}</span></span>
        <span className="fl" aria-hidden="true">→</span>
      </Link>
    </div>
  )
}
