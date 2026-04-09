import { forwardRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { HeroSection } from '../data/proposal'
import './Hero.css'

const Hero = forwardRef<HTMLElement, HeroSection>((props, ref) => {
  const { subtitle, title, cardIcon, cardTitle, cardText, meta } = props
  const subtitleRef = useFadeIn<HTMLParagraphElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const cardTitleRef = useFadeIn<HTMLHeadingElement>(300)
  const cardTextRef = useFadeIn<HTMLParagraphElement>(450)
  const metaRef = useFadeIn(600)

  return (
    <section className="hero" ref={ref}>
      <div className="hero-inner">
        <div className="hero-left">
          <p className="hero-subtitle fade-in" ref={subtitleRef}>{subtitle}</p>
          <h1 className="hero-title fade-in" ref={titleRef}>{renderLines(title)}</h1>
        </div>

        <div className="hero-card">
          {cardIcon && <img src={cardIcon} alt="" className="hero-card-icon" />}
          <h2 className="hero-card-title fade-in" ref={cardTitleRef}>{cardTitle}</h2>
          <p className="hero-card-text fade-in" ref={cardTextRef}>{cardText}</p>
        </div>
      </div>

      <div className="hero-meta fade-in" ref={metaRef}>
        {meta.map(item => (
          <div key={item.label} className="hero-meta-item">
            <span className="meta-label">{item.label}</span>
            <span className="meta-value">{item.value}</span>
          </div>
        ))}
      </div>
    </section>
  )
})

Hero.displayName = 'Hero'
export default Hero
