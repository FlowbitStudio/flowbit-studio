import { forwardRef, useRef } from 'react'
import NavArrows from './NavArrows'
import StrokeCard from './StrokeCard'
import ScrollRevealText from './ScrollRevealText'
import useFadeIn from '../hooks/useFadeIn'
import type { CardCarouselSection } from '../data/proposal'
import './Arquitectura.css'

const VISIBLE = 3

const CardCarousel = forwardRef<HTMLElement, CardCarouselSection>((props, ref) => {
  const { tag, title, description, quote, cards } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)


  const scroll = (dir: number) => {
    if (!scrollRef.current) return
    const cardW = scrollRef.current.offsetWidth / VISIBLE
    scrollRef.current.scrollBy({ left: dir * cardW, behavior: 'smooth' })
  }

  return (
    <section className="arquitectura" ref={ref}>
      <div className="arq-header">
        <div className="arq-header-left">
          <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
          <h2 className="arq-title fade-in" ref={titleRef}>{title}</h2>
        </div>
        <p className="arq-desc fade-in" ref={descRef}>{description}</p>
        <NavArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      </div>

      <div className="arch-cards-scroll" ref={scrollRef}>
        <div
          className="arch-cards"
          style={{ width: `calc(100vw / ${VISIBLE} * ${cards.length})` }}
        >
          {cards.map((card, i) => (
            <StrokeCard
              key={card.title}
              className="arch-card"
              delay={i * 150}
              style={{ flex: `0 0 calc(100vw / ${VISIBLE})`, width: `calc(100vw / ${VISIBLE})` }}
            >
              <img src={card.image} alt="" className="arch-card-img" />
              <div className="arch-card-bottom">
                <h3 className="arch-card-title">{card.title}</h3>
                {card.description && <p className="arch-card-desc">{card.description}</p>}
                {card.items && (
                  <ol className="arch-card-list">
                    {card.items.map(item => <li key={item}>{item}</li>)}
                  </ol>
                )}
              </div>
            </StrokeCard>
          ))}
        </div>
      </div>

      {quote && <ScrollRevealText text={quote} />}
    </section>
  )
})

CardCarousel.displayName = 'CardCarousel'
export default CardCarousel
