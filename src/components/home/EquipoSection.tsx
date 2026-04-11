import { useRef, useEffect, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import './EquipoSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function EquipoSection() {
  const { equipo } = siteContent
  const sectionRef = useRef<HTMLElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)

  // Animate expand/collapse — WQF: the clicked photo expands as an overlay
  // covering the section, others dim. It's NOT an in-grid expand.
  useEffect(() => {
    if (!gridRef.current) return
    const isMobile = window.innerWidth < 768
    if (isMobile) return

    const buttons = gridRef.current.querySelectorAll<HTMLElement>('.eq__card-button')

    const info = infoRef.current

    buttons.forEach((button, i) => {
      if (expandedIndex === i) {
        // Open: photo expands, info slides up
        button.style.position = 'absolute'
        button.style.zIndex = '20'
        button.style.top = '50%'
        button.style.left = '50%'
        button.style.transform = 'translate(-50%, -50%)'
        gsap.fromTo(button,
          { width: '100%', height: '80px' },
          { width: '100%', height: '70vh', duration: 0.6, ease: 'power3.inOut' }
        )
        // info animates via CSS transitions (max-height + opacity)
      } else {
        // Close: photo shrinks back, THEN reset position
        gsap.to(button, {
          height: '80px',
          duration: 0.6,
          ease: 'power3.inOut',
          onComplete: () => {
            button.style.position = 'relative'
            button.style.zIndex = ''
            button.style.top = ''
            button.style.left = ''
            button.style.transform = ''
            gsap.set(button, { height: '100%' })
          },
        })
      }
    })

    // info close is handled by CSS (content removed → :has(> *) no longer matches)
  }, [expandedIndex])

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.eq__title-bar', {
        opacity: 0, y: 20, duration: 1, ease: 'power4.inOut',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 70%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  const handleCardClick = (i: number) => {
    setExpandedIndex(prev => prev === i ? null : i)
  }

  return (
    <div className="eq__outer">
      <section id="equipo" ref={sectionRef} className="eq">
        <div className="eq__container">
          {/* Title bar — WQF: p2-mono spread */}
          <div className="eq__title-bar">
            <span aria-hidden="true">{equipo.heading}</span>
            <h2>{equipo.heading}</h2>
            <span className="eq__hide-mobile" aria-hidden="true">{equipo.heading}</span>
          </div>

          {/* Main layout — WQF: flex-col md:h-dvh */}
          <div className="eq__layout">
            {/* Mobile tagline */}
            <div className="eq__tagline-mobile">
              {equipo.taglineTop} {equipo.taglineBottom}
            </div>

            {/* Center: description + CTA */}
            <div className="eq__center">
              <p className="eq__description">{equipo.description}</p>
              <WqfButton text={equipo.cta} />
            </div>

            {/* Bottom: taglines + photo strip + info */}
            <div className="eq__bottom">
              {/* Top tagline — WQF: h4 uppercase, hidden on mobile */}
              <div className="eq__tagline-desktop">
                {equipo.taglineTop}<br />
                <span className="eq__hide-desktop">{equipo.taglineBottom}</span>
              </div>

              {/* Photo grid — WQF: md:grid-cols-3, each md:h-[80px], expand on click */}
              <div ref={gridRef} className="eq__grid">
                {equipo.members.map((member, i) => (
                  <div
                    key={i}
                    className={`eq__card${expandedIndex === i ? ' -expanded' : ''}`}
                    onClick={() => handleCardClick(i)}
                  >
                    <button className="eq__card-button">
                      <span className="sr-only">Ver {member.name}, {member.title}</span>
                      <div className="eq__card-job">
                        <div className="eq__card-dot" />
                        <span className="eq__card-job-text">{member.title}</span>
                      </div>
                      <div
                        className="eq__card-photo"
                        style={{
                          backgroundImage: `url(${member.photo})`,
                          backgroundPosition: '50% 30%',
                        }}
                      />
                    </button>
                  </div>
                ))}
              </div>

              {/* Info section — sits right after photo grid */}
              <div ref={infoRef} className="eq__info">
              {expandedIndex !== null && (
                <>
                  <div className="eq__info-bar">
                    <div className="eq__info-left">
                      <p className="eq__info-counter">
                        {String(expandedIndex + 1).padStart(2, '0')} / {String(equipo.members.length).padStart(2, '0')}
                      </p>
                    </div>
                    <div className="eq__info-right">
                      <p className="eq__info-name">{equipo.members[expandedIndex].name}</p>
                      <span className="eq__info-badge">Founder</span>
                    </div>
                  </div>
                  <div className="eq__info-content">
                    <div className="eq__info-links">
                      <WqfButton text={`Connect with ${equipo.members[expandedIndex].name.split(' ')[0]}`} href={equipo.members[expandedIndex].linkedin} target="_blank" />
                      <WqfButton text="Full Bio" />
                    </div>
                    <div className="eq__info-bio">
                      <p>{equipo.members[expandedIndex].bio}</p>
                    </div>
                  </div>
                </>
              )}
              </div>

              {/* Bottom tagline */}
              <div className="eq__tagline-desktop">
                {equipo.taglineBottom}
              </div>
            </div>{/* close eq__bottom */}
          </div>{/* close eq__layout */}
        </div>{/* close eq__container */}
      </section>
    </div>
  )
}
