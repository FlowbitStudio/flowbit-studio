import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { siteContent } from '../../data/homeContent'
import HeroCanvas from './HeroCanvas'
import WqfButton from './WqfButton'
import './HeroSection.css'

interface HeroSectionProps {
  onCtaClick: () => void
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const { hero } = siteContent
  const sectionRef = useRef<HTMLElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero title: clip reveal + translateY
      if (headlineRef.current) {
        gsap.from(headlineRef.current, {
          clipPath: 'inset(100% 0 0 0)',
          y: -48,
          duration: 1.4,
          ease: 'power3.inOut',
          delay: 0.5,
        })
      }

      // Bottom content fade in
      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: 'power4.inOut',
          delay: 1.2,
        })
      }
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="hero" ref={sectionRef}>
      <HeroCanvas />
      <div className="hero__container">
        <div className="hero__layout">
          {/* Top spacer — pushes headline down on desktop */}
          <div className="hero__spacer" />

          {/* Headline zone — centered */}
          <div className="hero__headline-zone">
            <h1 ref={headlineRef} className="hero__headline">
              {hero.headline}
            </h1>
          </div>

          {/* Bottom bar — CTA left, description right */}
          <div className="hero__bottom" ref={bottomRef}>
            <div className="hero__divider" />
            <div className="hero__bottom-row">
              <div className="hero__bottom-left">
                {/* CTA button with dot-blur + text-slide hover */}
                <WqfButton text={hero.cta} onClick={onCtaClick} />
              </div>
              <div className="hero__bottom-right">
                <p className="hero__description">{hero.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
