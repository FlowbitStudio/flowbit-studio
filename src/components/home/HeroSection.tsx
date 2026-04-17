import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import './HeroSection.css'

interface HeroSectionProps {
  onCtaClick: () => void
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const { hero } = siteContent
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const bottomRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stagger each word in the headline
      if (headlineRef.current) {
        const words = headlineRef.current.querySelectorAll('.hero__word')
        gsap.from(words, {
          y: '100%',
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
          stagger: 0.08,
          delay: 0.3,
        })
      }

      // Bottom content fade in after headline
      if (bottomRef.current) {
        gsap.from(bottomRef.current, {
          opacity: 0,
          y: 20,
          duration: 1,
          ease: 'power4.inOut',
          delay: 1.2,
        })
      }
    })

    // Orb follows cursor with lerp
    const orb = document.getElementById('hero-orb')
    const section = sectionRef.current
    if (orb && section) {
      const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 }
      const target = { x: pos.x, y: pos.y }

      const handleMouseMove = (e: MouseEvent) => {
        target.x = e.clientX
        target.y = e.clientY
      }

      const tick = () => {
        pos.x += (target.x - pos.x) * 0.02
        pos.y += (target.y - pos.y) * 0.02
        orb.style.transform = `translate(${pos.x - 750}px, ${pos.y - 600}px)`
        requestAnimationFrame(tick)
      }

      section.addEventListener('mousemove', handleMouseMove)
      const animId = requestAnimationFrame(tick)

      return () => {
        ctx.revert()
        section.removeEventListener('mousemove', handleMouseMove)
        cancelAnimationFrame(animId)
      }
    }

    return () => ctx.revert()
  }, [])

  // Split headline into individual words for stagger animation
  const words = hero.headline.split(' ')

  return (
    <section className="hero" ref={sectionRef}>
      <div className="hero__container">
        <div className="hero__layout">
          {/* Top spacer — pushes headline down on desktop */}
          <div className="hero__spacer" />

          {/* Headline zone — word-by-word stagger reveal */}
          <div className="hero__headline-zone">
            <h1 ref={headlineRef} className="hero__headline">
              {words.map((word, i) => (
                <span key={i} className="hero__word-wrap">
                  <span className="hero__word">{word}</span>
                </span>
              ))}
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
