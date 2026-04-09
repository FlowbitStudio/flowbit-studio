import { forwardRef, useRef } from 'react'
import NavArrows from './NavArrows'
import StrokeCard from './StrokeCard'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { StepCarouselSection } from '../data/proposal'
import './Pasos.css'

const StepCarousel = forwardRef<HTMLElement, StepCarouselSection>((props, ref) => {
  const { tag, title, description, steps, visibleSteps = 4 } = props
  const scrollRef = useRef<HTMLDivElement>(null)
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)

  const scroll = (dir: number) => {
    if (!scrollRef.current) return
    const containerW = scrollRef.current.offsetWidth
    const cardW = containerW / visibleSteps
    scrollRef.current.scrollBy({ left: dir * cardW, behavior: 'smooth' })
  }

  const totalSteps = steps.length

  return (
    <section className="pasos" ref={ref}>
      <div className="pasos-header">
        <div className="pasos-header-left">
          <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
          <h2 className="pasos-title fade-in" ref={titleRef}>{renderLines(title)}</h2>
        </div>
        <p className="pasos-desc fade-in" ref={descRef}>{description}</p>
        <NavArrows onPrev={() => scroll(-1)} onNext={() => scroll(1)} />
      </div>

      <div className="pasos-scroll" ref={scrollRef}>
        <div
          className="pasos-cards"
          style={{ width: `calc(100vw / ${visibleSteps} * ${totalSteps})` }}
        >
          {steps.map((s, i) => (
            <StrokeCard
              key={s.step}
              className="paso-card"
              delay={i * 150}
              style={{ flex: `0 0 calc(100vw / ${visibleSteps})`, width: `calc(100vw / ${visibleSteps})` }}
            >
              <div className="paso-card-content">
                <span className="paso-tag">{s.step}</span>
                <h3 className="paso-title">{s.title}</h3>
                <p className="paso-desc">{s.desc}</p>
              </div>
            </StrokeCard>
          ))}
        </div>
      </div>
    </section>
  )
})

StepCarousel.displayName = 'StepCarousel'
export default StepCarousel
