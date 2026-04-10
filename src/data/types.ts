// ============================================================
// Tipos compartidos para todas las propuestas
// ============================================================

export interface ProposalMeta {
  label: string
  value: string
}

export interface HeroSection {
  layout: 'hero'
  navLabel: string
  subtitle: string
  title: string
  cardIcon?: string
  cardTitle: string
  cardText: string
  meta: ProposalMeta[]
}

export interface CarouselCard {
  title: string
  description?: string
  items?: string[]
  /**
   * Categoría del servicio. Mapea a un icono SVG en
   * src/assets/icons/categories/ vía el componente Icon.tsx.
   * Valores aceptados (entre otros): tech, desarrollo, website, ecommerce,
   * design, branding, fotografia, video, growth, seo, support,
   * mantenimiento, diagnostico, estrategia, ...
   * Ver iconMap en Icon.tsx para la lista completa de aliases.
   */
  category?: string
  /**
   * @deprecated Usar `category` en propuestas nuevas. El campo `image`
   * queda solo para backward compatibility con propuestas viejas que
   * todavía usan URLs de Figma.
   */
  image?: string
}

export interface CardCarouselSection {
  layout: 'card-carousel'
  navLabel: string
  tag: string
  title: string
  description: string
  quote?: string
  cards: CarouselCard[]
}

export interface ContentEntregable {
  title: string
  items: string[]
}

export interface ContentBlock {
  number: string
  type: string
  title: string
  desc: string
  badge: string
  badgeVariant: 'blue' | 'gray'
  isBlue: boolean
  entregables?: ContentEntregable[]
  listItems?: string[]
}

export interface StickyListSection {
  layout: 'sticky-list'
  navLabel: string
  tag: string
  title: string
  blocks: ContentBlock[]
}

export interface GridCard {
  title: string
  desc: string
  price: string
  label: string
  /**
   * Categoría del servicio (igual semántica que CarouselCard.category).
   * Si no se especifica, la card del card-grid se renderea sin icono
   * arriba (compatibilidad con propuestas viejas).
   */
  category?: string
}

export interface CardGridSection {
  layout: 'card-grid'
  navLabel: string
  tag: string
  title: string
  description: string
  cards: GridCard[]
}

export interface StickyCard {
  title: string
  desc: string
  price: string
  label: string
}

export interface StickyCardsSection {
  layout: 'sticky-cards'
  navLabel: string
  tag: string
  title: string
  description: string
  image?: string
  cards: StickyCard[]
}

export interface Step {
  step: string
  title: string
  desc: string
}

export interface StepCarouselSection {
  layout: 'step-carousel'
  navLabel: string
  tag: string
  title: string
  description: string
  steps: Step[]
  visibleSteps?: number
}

export interface CTASection {
  layout: 'cta'
  tag: string
  title: string
  description: string
  buttonText: string
  buttonHref: string
  footerLeft: string
  footerRight: string
}

export type Section =
  | HeroSection
  | CardCarouselSection
  | StickyListSection
  | CardGridSection
  | StickyCardsSection
  | StepCarouselSection
  | CTASection

export interface ProposalData {
  logo: string
  sections: Section[]
}
