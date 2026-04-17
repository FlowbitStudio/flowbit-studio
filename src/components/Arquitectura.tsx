import { forwardRef, useRef } from 'react'
import NavArrows from './NavArrows'
import StrokeCard from './StrokeCard'
import ScrollRevealText from './ScrollRevealText'
import Icon from './Icon'
import OrigamiIcon from './origami/OrigamiIcon'
import { flowbitIconPreset } from './origami/presets'
import useFadeIn from '../hooks/useFadeIn'
import type { CardCarouselSection } from '../data/proposal'
import './Arquitectura.css'

const CardCarousel = forwardRef<HTMLElement, CardCarouselSection>((props, ref) => {
  const { tag, title, description, quote, cards } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)


  // Mide el ancho real de la primera card para hacer scroll exactamente
  // el equivalente a una card. Funciona en cualquier breakpoint sin
  // depender de constantes hardcoded — la CSS variable --visible-cards
  // del .arquitectura define cuántas cards entran en el viewport.
  const scroll = (dir: number) => {
    if (!scrollRef.current) return
    const firstCard = scrollRef.current.querySelector<HTMLElement>('.arch-card')
    if (!firstCard) return
    scrollRef.current.scrollBy({ left: dir * firstCard.offsetWidth, behavior: 'smooth' })
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
        <div className="arch-cards">
          {cards.map((card, i) => (
            <StrokeCard
              key={card.title}
              className="arch-card"
              delay={i * 150}
            >
              {/* Renderea icono por categoría si existe; fallback a la
                  imagen legacy de Figma para propuestas viejas que aún
                  usan `image` en vez de `category` */}
              {card.origamiItem ? (
                <div className="arch-card-origami">
                  <OrigamiIcon
                    item={card.origamiItem}
                    size={180}
                    material={flowbitIconPreset.material}
                    envPreset={flowbitIconPreset.envPreset}
                  />
                </div>
              ) : card.category ? (
                <Icon category={card.category} size={80} className="arch-card-icon" />
              ) : card.image ? (
                <img src={card.image} alt="" className="arch-card-img" />
              ) : null}
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
