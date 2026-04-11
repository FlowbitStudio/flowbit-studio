import { useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import WebsiteHeader from '../components/home/WebsiteHeader'
import HeroSection from '../components/home/HeroSection'
import EthosSection from '../components/home/EthosSection'
import SectoresSection from '../components/home/SectoresSection'
import PortfolioSection from '../components/home/PortfolioSection'
import EquipoSection from '../components/home/EquipoSection'
import ClientesSection from '../components/home/ClientesSection'
import DiagnosticoSection from '../components/home/DiagnosticoSection'
import ProcesoSection from '../components/home/ProcesoSection'
import FooterSection from '../components/home/FooterSection'
import ContactModal from '../components/home/ContactModal'
import DragCursor from '../components/home/DragCursor'

gsap.registerPlugin(ScrollTrigger, ScrollSmoother)

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // ScrollSmoother — WQF: smooth 1.25, smoothTouch, normalizeScroll
    const smoother = ScrollSmoother.create({
      wrapper: '#smooth-wrapper',
      content: '#smooth-content',
      smooth: prefersReducedMotion ? 0.05 : 1.25,
      smoothTouch: !prefersReducedMotion,
      normalizeScroll: !prefersReducedMotion,
      effects: !prefersReducedMotion,
    })

    return () => {
      smoother.kill()
      ScrollTrigger.getAll().forEach(t => t.kill())
    }
  }, [])

  const openContact = () => setContactOpen(true)
  const closeContact = () => setContactOpen(false)

  return (
    <>
      <WebsiteHeader onContactClick={openContact} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <main>
            <HeroSection onCtaClick={openContact} />
            <EthosSection />
            {/* WQF: bg-neural-fog text-rich-carbon wraps both focus + portfolio */}
            <div id="light-section" style={{ background: '#dadada', color: '#111' }}>
              <SectoresSection />
              <PortfolioSection />
            </div>
            <EquipoSection />
            <ClientesSection onCtaClick={openContact} />
            <ProcesoSection />
            <DiagnosticoSection onCtaClick={openContact} />
            <FooterSection onCtaClick={openContact} />
          </main>
        </div>
      </div>
      <DragCursor />
      <ContactModal isOpen={contactOpen} onClose={closeContact} />
    </>
  )
}
