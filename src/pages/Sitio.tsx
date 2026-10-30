import { useState } from 'react'
import ParticleSwarm from '../components/home/ParticleSwarm'
import { useContenido } from '../sitio/contenido/fuente'
import Encabezado from '../sitio/secciones/Encabezado'
import Hero from '../sitio/secciones/Hero'
import Ethos from '../sitio/secciones/Ethos'
import Bits from '../sitio/secciones/Bits'
import '../sitio/sitio.css'

// El sitio flowbit.studio. Cada sección recibe su parte del contenido administrable (docs/website-datos.md).
export default function Sitio() {
  const c = useContenido()
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
      </main>
    </div>
  )
}
