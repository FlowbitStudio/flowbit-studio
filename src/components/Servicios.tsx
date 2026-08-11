import { forwardRef, useRef } from 'react'
import NavArrows from './NavArrows'
import StrokeCard from './StrokeCard'
import Icon from './Icon'
import useFadeIn from '../hooks/useFadeIn'
import type { CardGridSection } from '../data/proposal'
import './Servicios.css'

const CardGrid = forwardRef<HTMLElement, CardGridSection>((props, ref) => {
  const { tag, title, description, cards } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)

  // Mide el ancho real de la primera card para desplazar exactamente una
  // card por click. Igual que en Arquitectura/Pasos: no depende de
  // constantes hardcoded, la CSS variable --visible-cards manda.
  const scroll = (dir: number) => {
    if (!scrollRef.current) return
    const firstCard = scrollRef.current.querySelector<HTMLElement>('.servicio-card')
    if (!firstCard) return
    scrollRef.current.scrollBy({ left: dir * firstCard.offsetWidth, behavior: 'smooth' })
  }

  return (
    <section className="servicios" ref={ref}>
      <div className="servicios-header">
        <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
        <h2 className="servicios-title fade-in" ref={titleRef}>{title}</h2>
        <p className="servicios-desc fade-in" ref={descRef}>{description}</p>
        <NavArrows variant="light" onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      </div>

      <div className="servicios-cards-scroll" ref={scrollRef}>
        <div className="servicios-cards">
          {cards.map((s, i) => (
            <StrokeCard key={s.title} className="servicio-card" delay={i * 150}>
              {s.category && (
                <Icon category={s.category} size={56} className="servicio-card-icon" />
              )}
              <div className="servicio-card-inner">
                <h3 className="servicio-card-title">{s.title}</h3>
                <p className="servicio-card-desc">{s.desc}</p>
                <span className="servicio-card-label">{s.label}</span>
                <span className="servicio-card-price">{s.price}</span>
              </div>
            </StrokeCard>
          ))}
        </div>
      </div>
    </section>
  )
})

CardGrid.displayName = 'CardGrid'
export default CardGrid
