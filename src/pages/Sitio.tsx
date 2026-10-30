import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import ParticleSwarm from '../components/home/ParticleSwarm'
import { useCatalogo, useContenido } from '../sitio/contenido/fuente'
import Encabezado from '../sitio/secciones/Encabezado'
import Hero from '../sitio/secciones/Hero'
import Ethos from '../sitio/secciones/Ethos'
import Bits from '../sitio/secciones/Bits'
import Soluciones from '../sitio/secciones/Soluciones'
import Base from '../sitio/secciones/Base'
import Sectores from '../sitio/secciones/Sectores'
import Liston from '../sitio/secciones/Liston'
import Portfolio from '../sitio/secciones/Portfolio'
import '../sitio/sitio.css'

// El sitio flowbit.studio. Cada sección recibe su parte del contenido administrable (docs/website-datos.md).
export default function Sitio() {
  const c = useContenido()
  const catalogo = useCatalogo()
  const [, setContacto] = useState(false)
  const abrir = () => setContacto(true)
  // Al volver de una ficha (/#casos), baja hasta la sección
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }), 60)
    return () => clearTimeout(t)
  }, [hash])
  return (
    <div className="sitio">
      <ParticleSwarm particleCount={5000} hue={210} rotateColor={false} />
      <Encabezado nav={c.navegacion} onDemo={abrir} />
      <main>
        <Hero c={c.hero} onContacto={abrir} />
        <Ethos c={c.ethos} />
        <Bits c={c.bits} />
        <Soluciones c={c.soluciones} />
        <Base c={c.base} catalogo={catalogo} onDemo={abrir} />
        <Sectores c={c.sectores} />
        <Portfolio c={c.portfolio} />
        <Liston c={c.liston} />
      </main>
    </div>
  )
}
