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
import Porque from '../sitio/secciones/Porque'
import TransicionBits from '../sitio/secciones/TransicionBits'
import Equipo from '../sitio/secciones/Equipo'
import Clientes from '../sitio/secciones/Clientes'
import Proceso from '../sitio/secciones/Proceso'
import Diagnostico from '../sitio/secciones/Diagnostico'
import Faq from '../sitio/secciones/Faq'
import Pie from '../sitio/secciones/Pie'
import Contacto from '../sitio/secciones/Contacto'
import '../sitio/sitio.css'

// El sitio flowbit.studio. Cada sección recibe su parte del contenido administrable (docs/website-datos.md).
export default function Sitio() {
  const c = useContenido()
  const catalogo = useCatalogo()
  const [contacto, setContacto] = useState(false)
  const abrir = () => setContacto(true)
  // El precio del diagnóstico sale de la base; mientras no esté dado de alta se muestra el marcador
  const precioDiagnostico = catalogo.precioDiagnostico != null ? `$${catalogo.precioDiagnostico.toLocaleString('es-MX')} MXN` : '$5,000 MXN'
  // Al volver de una ficha (/#casos), baja hasta la sección
  const { hash } = useLocation()
  useEffect(() => {
    if (!hash) return
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'instant' as ScrollBehavior }), 60)
    return () => clearTimeout(t)
  }, [hash])
  return (
    <div
      className="sitio"
      onClickCapture={(e) => {
        // Cualquier enlace a #contacto abre el formulario
        const a = (e.target as HTMLElement).closest('a[href="#contacto"]')
        if (a) { e.preventDefault(); abrir() }
      }}
    >
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
        <Porque c={c.porque} />
        <TransicionBits />
        <Equipo c={c.equipo} />
        <Clientes c={c.clientes} />
        <Liston c={c.liston} />
        <Proceso c={c.proceso} />
        <Diagnostico c={c.diagnostico} precio={precioDiagnostico} onContacto={abrir} />
        <Faq c={c.faq} onContacto={abrir} />
        <Pie c={c.footer} onContacto={abrir} />
      </main>
      <Contacto c={c.contacto} abierto={contacto} alCerrar={() => setContacto(false)} />
    </div>
  )
}
