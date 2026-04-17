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
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null)
  const [activeInfo, setActiveInfo] = useState<number | null>(null)

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
    if (expandedIndex === i) {
      // Close: remove info first, then collapse card after transition
      setActiveInfo(null)
      setTimeout(() => {
        setExpandedIndex(null)
      }, 400)
    } else {
      if (expandedIndex !== null) {
        // Switch: close current info, then open new
        setActiveInfo(null)
        setTimeout(() => {
          setExpandedIndex(i)
          setTimeout(() => setActiveInfo(i), 50)
        }, 400)
      } else {
        // Open fresh: expand card, then show info
        setExpandedIndex(i)
        setTimeout(() => setActiveInfo(i), 50)
      }
    }
  }

  return (
    <div className="eq__outer">
      {/* Blur overlay — fixed covers viewport, but inside eq__outer stacking context */}
      <div
        className={`eq__overlay${expandedIndex !== null ? ' -active' : ''}`}
        onClick={() => expandedIndex !== null && handleCardClick(expandedIndex)}
      />
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

              {/* Photo grid — each card expands as overlay with info below */}
              <div className="eq__grid-wrapper">
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

                      {/* Info — always in DOM, visibility controlled by class */}
                      <div className={`eq__info${activeInfo === i ? ' -visible' : ''}`}>
                        <div className="eq__info-bar">
                          <div className="eq__info-left">
                            <p className="eq__info-counter">
                              {String(i + 1).padStart(2, '0')} / {String(equipo.members.length).padStart(2, '0')}
                            </p>
                          </div>
                          <div className="eq__info-right">
                            <p className="eq__info-name">{member.name}</p>
                            <span className="eq__info-badge">{member.title}</span>
                          </div>
                        </div>
                        <div className="eq__info-content">
                          <div className="eq__info-links">
                            <WqfButton text={`Connect with ${member.name.split(' ')[0]}`} href={member.linkedin} target="_blank" />
                            <WqfButton text="Full Bio" />
                          </div>
                          <div className="eq__info-bio">
                            <p>{member.bio}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>{/* close eq__grid-wrapper */}

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
