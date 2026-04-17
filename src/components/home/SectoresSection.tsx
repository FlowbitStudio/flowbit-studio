import { useState, useEffect, useRef, useCallback } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { siteContent } from '../../data/homeContent'
import './SectoresSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function SectoresSection() {
  const { sectores } = siteContent
  const wrapperRef = useRef<HTMLDivElement>(null)
  const introRef = useRef<HTMLElement>(null)
  const listSectionRef = useRef<HTMLElement>(null)
  const listContentRef = useRef<HTMLDivElement>(null)
  const listRef = useRef<HTMLUListElement>(null)
  const indicatorRef = useRef<HTMLDivElement>(null)
  const preheadingRef = useRef<HTMLHeadingElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const descRef = useRef<HTMLParagraphElement>(null)
  const [activeLink, setActiveLink] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener('resize', check)
    return () => window.removeEventListener('resize', check)
  }, [])

  useEffect(() => {
    if (isMobile && activeLink === null) setActiveLink(0)
  }, [isMobile, activeLink])

  // Update indicator position when active item changes
  useEffect(() => {
    if (!listRef.current || !indicatorRef.current) return
    const items = listRef.current.querySelectorAll<HTMLLIElement>('.sectores-item')
    if (activeLink === null || !items[activeLink]) return

    const item = items[activeLink]
    const list = listRef.current

    // Animate dimensions after a short delay (let grid-rows transition start)
    const update = () => {
      const ind = indicatorRef.current!
      ind.style.width = `${item.offsetWidth}px`
      ind.style.height = `${item.offsetHeight - 60}px`
      ind.style.left = `${list.offsetLeft + item.offsetLeft}px`
      ind.style.top = `${list.offsetTop + item.offsetTop + 30}px`
    }

    // Start update loop for 300ms to track expanding animation
    const start = Date.now()
    const loop = () => {
      update()
      if (Date.now() - start < 300) requestAnimationFrame(loop)
    }
    setTimeout(loop, 200)
  }, [activeLink])

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Intro text fade-in
      gsap.timeline({
        scrollTrigger: { trigger: introRef.current, start: 'top 50%' },
      }).from(
        [preheadingRef.current, headingRef.current, descRef.current],
        { opacity: 0, y: 64, ease: 'power4.inOut', duration: 1.2 },
      )

      // List content fade-in
      gsap.from(listContentRef.current, {
        opacity: 0, y: 80, duration: 1.2, ease: 'power4.inOut',
        scrollTrigger: { trigger: listSectionRef.current, start: 'top 60%' },
      })

    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  const handleHover = useCallback((i: number) => {
    if (!isMobile) setActiveLink(i)
  }, [isMobile])

  const handleLeave = useCallback(() => {
    if (!isMobile) setActiveLink(null)
  }, [isMobile])

  const handleClick = useCallback((i: number) => {
    setActiveLink(prev => prev === i ? null : i)
  }, [])

  return (
    <>
      <div ref={wrapperRef} className="sectores-wrapper" id="soluciones">

        {/* Intro sub-section — WQF: flex h-dvh items-center */}
        <section ref={introRef} className="sectores-intro">
          <div className="sectores-intro__container">
            <div className="sectores-intro__inner">
              <div className="sectores-intro__headings">
                <h2 ref={preheadingRef} className="sectores-intro__preheading">{sectores.preheading}</h2>
                <h3 ref={headingRef} className="sectores-intro__heading">{sectores.heading}</h3>
              </div>
              <p ref={descRef} className="sectores-intro__description">{sectores.body}</p>
            </div>
          </div>
        </section>

        {/* Industries list — WQF: -mt-px min-h-dvh */}
        <section ref={listSectionRef} className="sectores-list-section">
          <div ref={listContentRef} className="sectores-list__container">
            <ul ref={listRef} className="sectores-list">
              {sectores.items.map((item, i) => {
                const isActive = activeLink === i
                return (
                  <li
                    key={item.name}
                    className="sectores-item"
                    data-active={isActive || undefined}
                    onMouseEnter={() => handleHover(i)}
                    onMouseLeave={handleLeave}
                  >
                    <button
                      className="sectores-item__button"
                      onClick={() => handleClick(i)}
                      aria-expanded={isActive}
                    >
                      <h3 className="sectores-item__name">{item.name}</h3>
                      <span className="sectores-item__name-dup" aria-hidden="true">{item.name}</span>
                    </button>
                    <div className="sectores-item__body">
                      <p className="sectores-item__description">{item.description}</p>
                    </div>
                  </li>
                )
              })}
            </ul>

            {/* Floating indicator — WQF: absolute, 4 corner SVGs, blur transition */}
            <div
              ref={indicatorRef}
              className={`sectores-indicator${activeLink !== null ? ' -visible' : ''}`}
            >
              <svg className="sectores-indicator__corner -tl" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor"/>
              </svg>
              <svg className="sectores-indicator__corner -tr" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor"/>
              </svg>
              <svg className="sectores-indicator__corner -bl" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor"/>
              </svg>
              <svg className="sectores-indicator__corner -br" width="10" height="10" viewBox="0 0 10 10" fill="none">
                <path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor"/>
              </svg>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
