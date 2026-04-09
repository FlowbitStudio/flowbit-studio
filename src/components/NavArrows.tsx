import './NavArrows.css'

interface NavArrowsProps {
  onPrev: () => void
  onNext: () => void
  className?: string
  variant?: 'dark' | 'light'
}

export default function NavArrows({ onPrev, onNext, className = '', variant = 'dark' }: NavArrowsProps) {
  return (
    <div className={`nav-arrows ${className}`}>
      <button className={`nav-arrow-btn nav-arrow-btn--${variant}`} onClick={onPrev} aria-label="Anterior">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
      <button className={`nav-arrow-btn nav-arrow-btn--${variant}`} onClick={onNext} aria-label="Siguiente">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  )
}
