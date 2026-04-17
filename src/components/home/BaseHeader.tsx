import { useState, useEffect, useCallback, type ReactNode } from 'react'
import './WebsiteHeader.css'

export interface NavItem {
  label: string
  onClick?: () => void
  href?: string
}

interface BaseHeaderProps {
  navItems: NavItem[]
  /** Optional trailing CTA item rendered as a prominent button */
  cta?: NavItem
  /** Optional extra content rendered inside the mobile overlay (e.g. contact info) */
  mobileExtra?: ReactNode
}

/**
 * Shared header used by both the marketing site (Home) and individual proposals.
 * The layout, animations, logo morphing and mobile overlay are identical — only
 * the list of nav items changes between contexts.
 */
export default function BaseHeader({ navItems, cta, mobileExtra }: BaseHeaderProps) {
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
      if (mobileMenuOpen && window.innerWidth >= 1024) setMobileMenuOpen(false)
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

  const renderNavLink = (item: NavItem, isCta = false) => {
    const inner = (
      <div className="wh__link-inner">
        <div className="wh__link-dot" />
        <div className="wh__link-text-wrap">
          <span className="wh__link-text">{item.label}</span>
          <span className="wh__link-text-dup" aria-hidden="true">{item.label}</span>
        </div>
      </div>
    )

    const className = `wh__link${isCta ? ' wh__link--cta' : ''}`

    if (item.href) {
      return <a href={item.href} className={className}>{inner}</a>
    }
    return (
      <button type="button" className={className} onClick={item.onClick}>{inner}</button>
    )
  }

  return (
    <>
      <header className={headerClasses}>
        <div className="wh__container">
          <div className="wh__inner">
            {/* Logo — SVG with letter-by-letter morph to "F" on scroll */}
            <a href="/" className="wh__logo" aria-label="Flowbit">
              <svg className="wh__logo-svg" viewBox="0 0 802.36 178.17" xmlns="http://www.w3.org/2000/svg">
                <path className="wh__logo-letter wh__logo-letter--f" d="M118.18,106.85H33.61v68.3H0V6.51h123.84v30.96H33.61v38.43h84.57v30.96Z" fill="#1786FF"/>
                <path className="wh__logo-letter" d="M168.59,175.16h-31.44V1.69h31.44v173.47Z" fill="#1786FF"/>
                <path className="wh__logo-letter" d="M310.21,116.73c0,35.18-26.86,61.44-63.25,61.44s-63-26.26-63-61.44,26.74-61.44,63-61.44,63.25,26.26,63.25,61.44ZM216,116.73c0,18.91,13.25,32.16,30.96,32.16s31.08-13.25,31.08-32.16-13.37-32.16-31.08-32.16-30.96,13.25-30.96,32.16Z" fill="#1786FF"/>
                <path className="wh__logo-letter" d="M452.27,140.34l25.06-81.92h32.89l-39.51,116.73h-35.9l-25.9-78.91-25.66,78.91h-35.66l-39.51-116.73h33.49l24.94,81.56,26.14-81.56h33.13l26.5,81.92Z" fill="#1786FF"/>
                <path className="wh__logo-letter" d="M641.53,116.73c0,35.06-24.33,61.44-56.5,61.44-16.14,0-27.35-6.51-34.94-15.9v12.89h-30.72V1.69h31.32v68.91c7.59-9.16,18.55-15.3,34.21-15.3,32.28,0,56.62,26.38,56.62,61.44ZM549.13,116.73c0,18.43,12.17,32.16,30,32.16s30.12-14.34,30.12-32.16-11.56-32.16-30.12-32.16-30,13.73-30,32.16Z" fill="#f4f4f4"/>
                <path className="wh__logo-letter" d="M692.35,20.24c0,11.32-8.79,20-20.12,20s-20-8.67-20-20,8.67-20.24,20-20.24,20.12,8.91,20.12,20.24ZM688.13,175.16h-31.44V58.43h31.44v116.73Z" fill="#f4f4f4"/>
                <path className="wh__logo-letter" d="M793.69,86.38h-42.28v42.64c0,14.58,7.71,19.88,17.47,19.88,7.47,0,15.54-3.73,21.92-7.59l11.56,24.58c-10.24,6.99-22.05,12.29-38.67,12.29-28.91,0-43.73-16.38-43.73-46.62v-45.17h-22.53v-27.95h22.53V23.73h31.44v34.69h42.28v27.95Z" fill="#f4f4f4"/>
              </svg>
            </a>

            {/* Desktop nav */}
            <nav className="wh__nav">
              <ul className="wh__nav-list">
                {navItems.map((item, i) => (
                  <li key={i}>{renderNavLink(item)}</li>
                ))}
                {cta && <li>{renderNavLink(cta, true)}</li>}
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
            {navItems.map((item, i) => (
              <li key={i}>
                {item.href ? (
                  <a href={item.href} className="wh__overlay-link" onClick={closeMobileMenu}>
                    {item.label}
                  </a>
                ) : (
                  <button
                    type="button"
                    className="wh__overlay-link"
                    onClick={() => { closeMobileMenu(); item.onClick?.() }}
                  >
                    {item.label}
                  </button>
                )}
              </li>
            ))}
            {cta && (
              <li>
                <button
                  type="button"
                  className="wh__overlay-link"
                  onClick={() => { closeMobileMenu(); cta.onClick?.() }}
                >
                  {cta.label}
                </button>
              </li>
            )}
          </ul>
          {mobileExtra}
        </div>
      </div>
    </>
  )
}
