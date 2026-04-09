import { forwardRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { CTASection } from '../data/proposal'
import './CTA.css'

const CTA = forwardRef<HTMLElement, CTASection>((props, ref) => {
  const { tag, title, description, buttonText, buttonHref, footerLeft, footerRight } = props
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)
  const btnRef = useFadeIn(450)

  return (
    <section className="cta" ref={ref}>
      <div className="cta-inner">
        <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
        <h2 className="cta-title fade-in" ref={titleRef}>{renderLines(title)}</h2>
        <p className="cta-desc fade-in" ref={descRef}>{description}</p>
        <div className="cta-action fade-in" ref={btnRef}>
          <a href={buttonHref} className="cta-button">{buttonText}</a>
        </div>
      </div>

      <footer className="cta-footer">
        <span className="cta-footer-text">{footerLeft}</span>
        <span className="cta-footer-text">{footerRight}</span>
      </footer>
    </section>
  )
})

CTA.displayName = 'CTA'
export default CTA
