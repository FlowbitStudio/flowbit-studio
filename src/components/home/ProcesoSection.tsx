import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../../data/homeContent'
import './ProcesoSection.css'

gsap.registerPlugin(ScrollTrigger)

/* Colors for each step card */
const STEP_COLORS = ['var(--teal)', 'var(--red)', '#e7e7e7', 'var(--blue)']

export default function ProcesoSection() {
  const { proceso } = siteContent
  const sectionRef = useRef<HTMLElement>(null)
  const rightColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia()

      // Pin right column (text) on desktop
      mm.add('(min-width: 768px)', () => {
        if (rightColRef.current) {
          ScrollTrigger.create({
            trigger: rightColRef.current,
            start: 'top 80px',
            endTrigger: '#proceso-cards',
            end: 'bottom 50%',
            pin: true,
            pinSpacing: false,
          })
        }
      })

      // Cards clip-path reveal
      const cards = gsap.utils.toArray<HTMLElement>('.proceso-card')
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

  return (
    <section id="proceso" ref={sectionRef} className="proc">
      <div className="proc__grid">
        {/* Left: cards — WQF founders: order-2 md:order-1 md:col-span-6 */}
        <div id="proceso-cards" className="proc__left">
          {proceso.steps.map((step, i) => (
            <div
              key={step.number}
              className="proceso-card"
              style={{ background: STEP_COLORS[i] || 'var(--teal)' }}
            >
              <div className="proceso-card__top">
                <h3 className="proceso-card__title">{step.name}</h3>
                <img
                  className="proceso-card__icon"
                  src={`/card-icons/${i + 1}.svg`}
                  alt=""
                />
              </div>
              <div className="proceso-card__bottom">
                <div className="proceso-card__divider">
                  <span className="proceso-card__number">{step.number}</span>
                </div>
                <p className="proceso-card__description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Right: text + CTA — pinned on desktop */}
        <div ref={rightColRef} className="proc__right" data-lag="0.2">
          <div className="proc__header">
            <span className="proc__preheading">{proceso.preheading}</span>
            <h2 className="proc__heading">{proceso.heading}</h2>
          </div>
          <p className="proc__body">
            {proceso.steps.map(s => s.name).join('. ')}.
          </p>
        </div>
      </div>
    </section>
  )
}
