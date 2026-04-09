import type { Section } from '../data/proposal'
import './Header.css'

interface HeaderProps {
  logo: string
  sections: Section[]
  onNavigate: (index: number) => void
}

export default function Header({ logo, sections, onNavigate }: HeaderProps) {
  const navItems = sections
    .map((s, i) => ('navLabel' in s ? { label: s.navLabel, index: i } : null))
    .filter(Boolean) as { label: string; index: number }[]

  return (
    <header className="header">
      <div className="header-inner">
        <img src={logo} alt="Flowbit" className="header-logo" />
        <nav className="header-nav">
          {navItems.map(item => (
            <button
              key={item.index}
              className="header-nav-link"
              onClick={() => onNavigate(item.index)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </header>
  )
}
