import { forwardRef } from 'react'
import StrokeCard from './StrokeCard'
import useFadeIn from '../hooks/useFadeIn'
import type { StickyCardsSection } from '../data/proposal'
import './Inversion.css'

const StickyCards = forwardRef<HTMLElement, StickyCardsSection>((props, ref) => {
  const { tag, title, description, image, cards } = props
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const termsRef = useFadeIn<HTMLParagraphElement>(300)

  const rest = cards.length - 1
  const lastOrphan = rest % 2 !== 0

  return (
    <section className="inversion" ref={ref}>
      <div className="inversion-grid">
        <div className="inversion-left">
          <div className="inversion-text">
            <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
            <h2 className="inversion-title fade-in" ref={titleRef}>{title}</h2>
            <p className="inversion-terms fade-in" ref={termsRef}>{description}</p>
          </div>
          {image && (
            <div className="inversion-image">
              <img src={image} alt="" />
            </div>
          )}
        </div>

        <div className="inversion-cards">
          {cards.map((card, i) => {
            const isFirst = i === 0
            const isLast = i === cards.length - 1
            const wide = isFirst || (lastOrphan && isLast)

            return (
              <StrokeCard
                key={card.title}
                className={`inversion-card ${wide ? 'inversion-card--wide' : ''}`}
                delay={i * 120}
              >
                <div className="inversion-card-inner">
                  <h3 className="inversion-card-title">{card.title}</h3>
                  <p className="inversion-card-desc">{card.desc}</p>
                  <span className="inversion-card-label">{card.label}</span>
                  <span className="inversion-card-price">{card.price}</span>
                </div>
              </StrokeCard>
            )
          })}
        </div>
      </div>
    </section>
  )
})

StickyCards.displayName = 'StickyCards'
export default StickyCards
