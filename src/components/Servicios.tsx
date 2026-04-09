import { forwardRef } from 'react'
import StrokeCard from './StrokeCard'
import useFadeIn from '../hooks/useFadeIn'
import type { CardGridSection } from '../data/proposal'
import './Servicios.css'

const CardGrid = forwardRef<HTMLElement, CardGridSection>((props, ref) => {
  const { tag, title, description, cards } = props
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)

  return (
    <section className="servicios" ref={ref}>
      <div className="servicios-header">
        <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
        <h2 className="servicios-title fade-in" ref={titleRef}>{title}</h2>
        <p className="servicios-desc fade-in" ref={descRef}>{description}</p>
      </div>

      <div className="servicios-cards">
        {cards.map((s, i) => (
          <StrokeCard key={s.title} className="servicio-card" delay={i * 150}>
            <div className="servicio-card-inner">
              <h3 className="servicio-card-title">{s.title}</h3>
              <p className="servicio-card-desc">{s.desc}</p>
              <span className="servicio-card-label">{s.label}</span>
              <span className="servicio-card-price">{s.price}</span>
            </div>
          </StrokeCard>
        ))}
      </div>
    </section>
  )
})

CardGrid.displayName = 'CardGrid'
export default CardGrid
