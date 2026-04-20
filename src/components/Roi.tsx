import { forwardRef } from 'react'
import StrokeCard from './StrokeCard'
import useFadeIn from '../hooks/useFadeIn'
import type {
  RoiSection,
  RoiCard,
  RoiCostCard,
  RoiBenefitCard,
  RoiBreakevenCard,
  RoiProjectionCard,
} from '../data/types'
import './Roi.css'

function CostCard({ card }: { card: RoiCostCard }) {
  return (
    <div className="roi-card-inner roi-card--cost">
      <h3 className="roi-card-title">{card.title}</h3>
      {card.intro && <p className="roi-card-intro">{card.intro}</p>}
      <ul className="roi-cost-list">
        {card.points.map((point, i) => (
          <li key={i} className="roi-cost-item">
            <span className="roi-cost-bullet" aria-hidden>—</span>
            <span className="roi-cost-text">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function BenefitCard({ card }: { card: RoiBenefitCard }) {
  return (
    <div className="roi-card-inner roi-card--benefit">
      <h3 className="roi-card-title">{card.title}</h3>
      <div className="roi-benefit-list">
        {card.items.map((item, i) => (
          <div
            key={i}
            className={`roi-benefit-item ${item.highlight ? 'roi-benefit-item--highlight' : ''}`}
          >
            <h4 className="roi-benefit-heading">{item.title}</h4>
            <p className="roi-benefit-desc">{item.desc}</p>
            {item.value && <span className="roi-benefit-value">{item.value}</span>}
          </div>
        ))}
      </div>
    </div>
  )
}

function BreakevenCard({ card }: { card: RoiBreakevenCard }) {
  return (
    <div className="roi-card-inner roi-card--breakeven">
      <h3 className="roi-card-title">{card.title}</h3>
      <div className="roi-breakeven-table">
        {card.rows.map((row, i) => (
          <div
            key={i}
            className={`roi-breakeven-row ${row.emphasis ? 'roi-breakeven-row--emphasis' : ''}`}
          >
            <span className="roi-breakeven-label">{row.label}</span>
            <span className="roi-breakeven-value">{row.value}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

function ProjectionCard({ card }: { card: RoiProjectionCard }) {
  return (
    <div className="roi-card-inner roi-card--projection">
      <h3 className="roi-card-title">{card.title}</h3>
      {card.intro && <p className="roi-card-intro">{card.intro}</p>}
      <div className="roi-projection-rows">
        {card.rows.map((row, i) => (
          <div key={i} className="roi-projection-row">
            <span className="roi-projection-label">{row.label}</span>
            <span className="roi-projection-value">{row.value}</span>
          </div>
        ))}
      </div>
      {card.note && <p className="roi-projection-note">{card.note}</p>}
    </div>
  )
}

function renderCard(card: RoiCard) {
  switch (card.kind) {
    case 'cost':
      return <CostCard card={card} />
    case 'benefit':
      return <BenefitCard card={card} />
    case 'breakeven':
      return <BreakevenCard card={card} />
    case 'projection':
      return <ProjectionCard card={card} />
  }
}

const Roi = forwardRef<HTMLElement, RoiSection>((props, ref) => {
  const { tag, title, description, cards, closingLine } = props
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)
  const closingRef = useFadeIn<HTMLParagraphElement>(0)

  return (
    <section className="roi" ref={ref}>
      <div className="roi-header">
        <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
        <h2 className="roi-title fade-in" ref={titleRef}>{title}</h2>
        <p className="roi-desc fade-in" ref={descRef}>{description}</p>
      </div>

      <div className="roi-cards">
        {cards.map((card, i) => (
          <StrokeCard
            key={i}
            className={`roi-card roi-card--${card.kind}`}
            delay={i * 120}
          >
            {renderCard(card)}
          </StrokeCard>
        ))}
      </div>

      <div className="roi-closing">
        <p className="roi-closing-line fade-in" ref={closingRef}>
          {closingLine}
        </p>
      </div>
    </section>
  )
})

Roi.displayName = 'Roi'
export default Roi
