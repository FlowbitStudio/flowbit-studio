import { useState } from 'react'
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
import '../sitio/sitio.css'

// El sitio flowbit.studio. Cada sección recibe su parte del contenido administrable (docs/website-datos.md).
export default function Sitio() {
  const c = useContenido()
  const catalogo = useCatalogo()
  const [, setContacto] = useState(false)
  const abrir = () => setContacto(true)
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
        <Liston c={c.liston} />
      </main>
    </div>
  )
}
