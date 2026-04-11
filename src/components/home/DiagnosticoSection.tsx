import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import './DiagnosticoSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function DiagnosticoSection({ onCtaClick }: { onCtaClick: () => void }) {
  const { diagnostico } = siteContent
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (contentRef.current) {
        gsap.from(contentRef.current, {
          opacity: 0, y: 64, duration: 1.2, ease: 'power4.inOut',
          scrollTrigger: { trigger: contentRef.current, start: 'top 70%' },
        })
      }
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="diag">
      <div className="diag__container">
        <div className="diag__grid">
          <div ref={contentRef} className="diag__left">
            <div className="diag__header">
              <span className="diag__preheading">{diagnostico.preheading}</span>
              <h2 className="diag__heading">{diagnostico.heading}</h2>
            </div>
            <p className="diag__body">{diagnostico.body}</p>
            <p className="diag__price-info">
              <strong>{diagnostico.price}</strong> — {diagnostico.priceNote}
            </p>
            <WqfButton text={diagnostico.cta} onClick={onCtaClick} />
            <a href={diagnostico.whatsapp} target="_blank" rel="noopener noreferrer" className="diag__whatsapp">
              {diagnostico.ctaSecondary}
            </a>
          </div>
          <div className="diag__right" />
        </div>
      </div>
    </section>
  )
}
