import { useState, useEffect, useCallback } from 'react'
import { siteContent } from '../../data/homeContent'
import './WebsiteHeader.css'

interface WebsiteHeaderProps {
  onContactClick: () => void
}

export default function WebsiteHeader({ onContactClick }: WebsiteHeaderProps) {
  const navItems = siteContent.nav.filter(item => item.url !== '#contacto')
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    const vh = window.innerHeight
    const scrollThreshold = 50

    setScrolled(currentY > vh * 0.25)

    const prev = Number(document.documentElement.dataset.prevScroll ?? '0')
    const delta = currentY - prev
    const pastFullViewport = currentY > vh

    if (pastFullViewport) {
      if (delta > scrollThreshold) setHidden(true)
      else if (delta < -scrollThreshold) setHidden(false)
    } else {
      setHidden(false)
    }

    if (Math.abs(delta) > scrollThreshold) {
      document.documentElement.dataset.prevScroll = String(currentY)
    }
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  useEffect(() => {
    const onResize = () => {
      if (mobileMenuOpen && window.innerWidth >= 1024) {
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [mobileMenuOpen])

  const closeMobileMenu = () => setMobileMenuOpen(false)

  const headerClasses = [
    'wh',
    scrolled ? '-scrolled' : '',
    hidden && !mobileMenuOpen ? '-hidden' : '',
    mobileMenuOpen ? '-mobile-menu-open' : '',
  ].filter(Boolean).join(' ')

  return (
    <>
      <header className={headerClasses}>
        <div className="wh__container">
          <div className="wh__inner">
            {/* Logo */}
            <a href="/" className="wh__logo" aria-label="Flowbit">
              <span className="wh__logo-full">FLOWBIT</span>
              <span className="wh__logo-icon">F</span>
            </a>

            {/* Desktop nav */}
            <nav className="wh__nav">
              <ul className="wh__nav-list">
                {navItems.map((item) => (
                  <li key={item.url}>
                    <a href={item.url} className="wh__link">
                      <div className="wh__link-inner">
                        <div className="wh__link-dot" />
                        <div className="wh__link-text-wrap">
                          <span className="wh__link-text">{item.label}</span>
                          <span className="wh__link-text-dup" aria-hidden="true">{item.label}</span>
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
                <li>
                  <button type="button" className="wh__link wh__link--cta" onClick={onContactClick}>
                    <div className="wh__link-inner">
                      <div className="wh__link-dot" />
                      <div className="wh__link-text-wrap">
                        <span className="wh__link-text">Contacto</span>
                        <span className="wh__link-text-dup" aria-hidden="true">Contacto</span>
                      </div>
                    </div>
                  </button>
                </li>
              </ul>
            </nav>

            {/* Hamburger */}
            <button
              type="button"
              className={`wh__hamburger${mobileMenuOpen ? ' -open' : ''}`}
              onClick={() => setMobileMenuOpen(v => !v)}
              aria-label="Menu"
            >
              <div className="wh__hamburger-dot" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`wh__overlay${mobileMenuOpen ? ' -open' : ''}`}>
        <div className="wh__overlay-inner">
          <ul className="wh__overlay-list">
            {navItems.map((item) => (
              <li key={item.url}>
                <a href={item.url} className="wh__overlay-link" onClick={closeMobileMenu}>
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="wh__overlay-link"
                onClick={() => { closeMobileMenu(); onContactClick() }}
              >
                Contacto
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
