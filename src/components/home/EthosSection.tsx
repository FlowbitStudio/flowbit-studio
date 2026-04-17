import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import OrigamiIcon from '../origami/OrigamiIcon'
import type { OrigamiItemId } from '../origami/OrigamiIcon'
import { flowbitIconPreset } from '../origami/presets'

// Mapeo card.id → Origami item
const ETHOS_ICONS: Record<number, OrigamiItemId> = {
  1: 9,   // Pulse
  2: 10,  // Bloom
  3: 3,   // Gears
  4: 5,   // Stack
}
import './EthosSection.css'

gsap.registerPlugin(ScrollTrigger)

const CARD_BG: Record<string, string> = {
  default: 'var(--dark-bg)',
  teal: 'var(--teal)',
  red: 'var(--red)',
  light: '#e7e7e7',
}

const CARD_TEXT: Record<string, string> = {
  default: '#dadada',
  teal: 'var(--dark-bg)',
  red: 'var(--dark-bg)',
  light: 'var(--dark-bg)',
}

export default function EthosSection() {
  const { ethos } = siteContent
  const sectionRef = useRef<HTMLElement>(null)
  const [activeCard, setActiveCard] = useState<number | null>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section clip-path reveal on scroll (scrub)
      gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom-=10%',
          end: 'top center',
          scrub: 1,
        },
      }).from(sectionRef.current!, {
        clipPath: 'inset(0 100% 0 0)',
        duration: 1.2,
      })

      // Mobile: clip-path reveal per card
      const mm = gsap.matchMedia()
      mm.add('(max-width: 767px)', () => {
        const cards = gsap.utils.toArray<HTMLElement>('.ethos-card')
        cards.forEach((card) => {
          gsap.from(card, {
            scrollTrigger: { trigger: card, start: 'top 50%' },
            clipPath: 'inset(0 0 100% 0)',
            duration: 0.6,
            ease: 'power3.inOut',
          })
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="ethos">
      <div className="ethos__container" id="nosotros">
        {/* Header: 2-col grid */}
        <div className="ethos__header">
          <div className="ethos__header-left">
            <h2 className="ethos__preheading">{ethos.preheading}</h2>
            <p className="ethos__heading">{ethos.heading}</p>
          </div>
          <div className="ethos__header-right">
            <p className="ethos__body">{ethos.body}</p>
            <WqfButton text={ethos.cta} dark />
          </div>
        </div>

        {/* Cards: horizontal on desktop */}
        <ul className={`ethos__cards${activeCard !== null ? ' -has-active' : ''}`}>
          {ethos.cards.map((card) => {
            const isActive = activeCard === card.id
            return (
              <li
                key={card.id}
                className={`ethos-card${isActive ? ' -active' : ''}`}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <div
                  className="ethos-card__inner"
                  style={{
                    background: CARD_BG[card.color] || CARD_BG.default,
                    color: CARD_TEXT[card.color] || CARD_TEXT.default,
                  }}
                >
                  <div className="ethos-card__content">
                    <div className="ethos-card__content-inner">
                      <h3 className="ethos-card__title">{card.title}</h3>
                      {ETHOS_ICONS[card.id] ? (
                        <div className="ethos-card__icon ethos-card__icon--origami">
                          <OrigamiIcon
                            item={ETHOS_ICONS[card.id]}
                            size={flowbitIconPreset.size}
                            material={flowbitIconPreset.material}
                            envPreset={flowbitIconPreset.envPreset}
                          />
                        </div>
                      ) : (
                        <img
                          className="ethos-card__icon"
                          src={`/ethos-icons/${card.id}.svg`}
                          alt=""
                          loading="lazy"
                        />
                      )}
                      <div className="ethos-card__meta">
                        <p className="ethos-card__number">
                          {String(card.id).padStart(2, '0')} / {String(ethos.cards.length).padStart(2, '0')}
                        </p>
                        <p className="ethos-card__description">{card.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
