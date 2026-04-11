import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import './ClientesSection.css'

gsap.registerPlugin(ScrollTrigger)

const CARD_BG: Record<string, string> = {
  teal: 'var(--teal)',
  red: 'var(--red)',
  light: '#e7e7e7',
}

export default function ClientesSection({ onCtaClick }: { onCtaClick: () => void }) {
  const sectionRef = useRef<HTMLElement>(null)
  const leftColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()
      const cards = gsap.utils.toArray<HTMLElement>('.clientes-card')

      /* ---- Desktop: pin left column ---- */
      mm.add('(min-width: 768px)', () => {
        if (leftColRef.current) {
          ScrollTrigger.create({
            trigger: leftColRef.current,
            start: 'top 80px',
            endTrigger: '#clientes-cards-container',
            end: 'bottom 50%',
            pin: true,
            pinSpacing: false,
          })
        }
      })

      /* ---- Cards: clip-path reveal on scroll ---- */
      cards.forEach((card) => {
        gsap.from(card, {
          scrollTrigger: { trigger: card, start: 'top 60%' },
          clipPath: 'inset(0 0 100% 0)',
          duration: 0.6,
          ease: 'power3.inOut',
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const { clientes } = siteContent

  return (
    <section id="clientes-section" ref={sectionRef} className="clientes-section">
      <div className="clientes-section__grid">
        {/* ---- Left column: text + CTA (pinned on desktop) ---- */}
        <div ref={leftColRef} className="clientes-section__left" data-lag="0.2">
          <div className="clientes-section__heading-group">
            <span className="clientes-section__pre-heading">{clientes.preheading}</span>
            <h2 className="clientes-section__heading">{clientes.heading}</h2>
          </div>

          <p className="clientes-section__body">{clientes.body}</p>

          <WqfButton text={clientes.cta} onClick={onCtaClick} />
        </div>

        {/* ---- Right column: stacking cards ---- */}
        <div id="clientes-cards-container" className="clientes-section__right">
          {clientes.cards.map((card) => (
            <div
              key={card.id}
              className="clientes-card"
              style={{ background: CARD_BG[card.color] ?? 'var(--teal)' }}
            >
              {/* Top row: title + icon */}
              <div className="clientes-card__top">
                <h3 className="clientes-card__title">{card.title}</h3>
                <img
                  className="clientes-card__icon"
                  src={`/card-icons/${card.id}.svg`}
                  alt=""
                  aria-hidden="true"
                />
              </div>

              {/* Bottom: number divider + description */}
              <div className="clientes-card__bottom">
                <div className="clientes-card__divider">
                  <span className="clientes-card__number">
                    {String(card.id).padStart(2, '0')}
                  </span>
                </div>
                <p className="clientes-card__description">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
