import { siteContent } from '../../data/homeContent'
import BaseHeader, { type NavItem } from './BaseHeader'

interface WebsiteHeaderProps {
  onContactClick: () => void
}

export default function WebsiteHeader({ onContactClick }: WebsiteHeaderProps) {
  const navItems: NavItem[] = siteContent.nav
    .filter(item => item.url !== '#contacto')
    .map(item => ({ label: item.label, href: item.url }))

  const cta: NavItem = { label: 'Contacto', onClick: onContactClick }

  return <BaseHeader navItems={navItems} cta={cta} />
}
