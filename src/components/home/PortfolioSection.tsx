import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Mousewheel } from 'swiper/modules'
import 'swiper/css'
import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import './PortfolioSection.css'

gsap.registerPlugin(ScrollTrigger)

export default function PortfolioSection() {
  const { portfolio } = siteContent
  const sectionRef = useRef<HTMLElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(contentRef.current, {
        opacity: 0, y: 80, duration: 1.2, ease: 'power4.inOut',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="pf">
      {/* WQF: @container container */}
      <div ref={contentRef} className="pf__container" id="portfolio">
        {/* Header — WQF: mx-auto mb-[80px] max-w-[668px] flex-col items-center gap-[15px] text-center */}
        <div className="pf__header">
          <h2 className="pf__preheading">{portfolio.preheading}</h2>
          <p className="pf__heading">{portfolio.heading}</p>
          <WqfButton text={portfolio.cta} dark />
        </div>

        {/* Swiper — WQF exact config */}
        <Swiper
          modules={[Mousewheel]}
          centeredSlides={true}
          slidesPerView="auto"
          speed={500}
          slideToClickedSlide={true}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          grabCursor={true}
          className="pf__swiper"
        >
          {portfolio.cases.map((c) => (
            <SwiperSlide key={c.id} className="pf__slide">
              {/* Card — WQF: the giant class string with all transitions */}
              <div
                className="pf__card"
                style={{
                  '--hover-bg': c.hoverBg,
                  '--hover-text': c.hoverText,
                } as React.CSSProperties}
              >
                {/* Title — WQF: max-w-[270px] px-[40px] md:px-0 */}
                <div className="pf__card-title-wrap">
                  <h3 className="pf__card-title">{c.name}</h3>
                </div>

                {/* Logo — WQF: size-[80px] */}
                <div className="pf__card-logo">
                  <img src={c.logo} alt="" className="pf__card-logo-img" />
                </div>

                {/* Expandable content — WQF: grid grid-rows-[0fr] → [1fr] */}
                <div className="pf__card-expand">
                  <div className="pf__card-expand-inner">
                    <p className="pf__card-desc">{c.description}</p>
                  </div>
                  <div className="pf__card-link">
                    <WqfButton text="Website" dark href={c.url} target="_blank" />
                  </div>
                </div>

                {/* Corner marks — WQF: absolute inset-x-0 top-0 flex justify-between p-[24px] opacity-0 active:opacity-100 */}
                <div className="pf__card-corners">
                  <div className="pf__corner-tl" />
                  <div className="pf__corner-tr" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}
