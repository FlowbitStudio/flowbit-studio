import { useRef, createRef } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import NoiseOverlay from '../components/NoiseOverlay'
import Header from '../components/Header'
import Hero from '../components/Hero'
import CardCarousel from '../components/Arquitectura'
import StickyList from '../components/Fases'
import CardGrid from '../components/Servicios'
import StickyCards from '../components/Inversion'
import StepCarousel from '../components/Pasos'
import Roi from '../components/Roi'
import CTA from '../components/CTA'
import Feedback from '../components/Feedback'
import { proposals } from '../data/proposal'
import type { Section } from '../data/types'

const LAYOUT_MAP: Record<Section['layout'], React.ComponentType<any>> = {
  'hero': Hero,
  'card-carousel': CardCarousel,
  'sticky-list': StickyList,
  'card-grid': CardGrid,
  'sticky-cards': StickyCards,
  'step-carousel': StepCarousel,
  'roi': Roi,
  'cta': CTA,
  'feedback': Feedback,
}

export default function Propuesta() {
  const { id } = useParams<{ id: string }>()
  const proposal = id ? proposals[id] : undefined

  const sectionRefs = useRef(
    (proposal?.sections ?? []).map(() => createRef<HTMLElement>())
  )

  if (!proposal) return <Navigate to="/" replace />

  const scrollToSection = (index: number) => {
    sectionRefs.current[index]?.current?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="app">
      <NoiseOverlay />
      <Header
        logo={proposal.logo}
        sections={proposal.sections}
        onNavigate={scrollToSection}
      />
      <main>
        {proposal.sections.map((section, i) => {
          const Component = LAYOUT_MAP[section.layout]
          return (
            <Component
              key={i}
              ref={sectionRefs.current[i]}
              {...section}
            />
          )
        })}
      </main>
    </div>
  )
}
