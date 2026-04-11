import { siteContent } from '../../data/homeContent'
import WqfButton from './WqfButton'
import './FooterSection.css'

interface FooterSectionProps {
  onCtaClick: () => void
}

export default function FooterSection({ onCtaClick }: FooterSectionProps) {
  const { footer } = siteContent

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__inner">
          {/* Left — canvas placeholder (empty dark area) */}
          <div className="footer__left" />

          {/* Right — the blue panel */}
          <div className="footer__panel">
            {/* Cell 1 (top-left): heading + body + CTA */}
            <div className="footer__cell footer__cell--cta">
              <h2 className="footer__panel-heading">{footer.heading}</h2>
              <p className="footer__panel-body">{footer.body}</p>
              <WqfButton text={footer.cta} dark onClick={onCtaClick} />
            </div>

            {/* Cell 2 (top-right): logo/emblem placeholder */}
            <div className="footer__cell footer__cell--logo">
              <img
                src="/logo-flowbit.png"
                alt="Flowbit"
                className="footer__logo"
              />
            </div>

            {/* Cell 3 (bottom-left): nav links */}
            <div className="footer__cell footer__cell--nav">
              {footer.nav.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  className="footer__nav-link"
                >
                  <div className="footer__nav-link-inner">
                    <div className="footer__nav-dot" />
                    <div className="footer__nav-text-wrap">
                      <span className="footer__nav-text">{link.label}</span>
                      <span className="footer__nav-text-dup" aria-hidden="true">
                        {link.label}
                      </span>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Cell 4 (bottom-right): legal + copyright */}
            <div className="footer__cell footer__cell--legal">
              <div className="footer__legal-links">
                {footer.legal.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    className="footer__legal-link"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
              <span className="footer__copyright">{footer.copyright}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
