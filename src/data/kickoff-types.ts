// ============================================================
// Tipos de los decks de kickoff (/kickoff/:id)
// Son un formato distinto a las propuestas: slides de pantalla
// completa que se presentan con teclado, no una página scrolleable.
// ============================================================

/** Fondo del slide. `blue` se reserva para frases de una sola idea. */
export type SlideTone = 'light' | 'dark' | 'blue'

/** De quién depende una tarea o un insumo. */
export type Owner = 'Flowbit' | 'Cliente' | 'Ambos'

interface BaseSlide {
  /** Nombre corto del capítulo, aparece en la barra superior. */
  chapter: string
  tone?: SlideTone
}

export interface CoverSlide extends BaseSlide {
  kind: 'cover'
  eyebrow: string
  title: string
  subtitle: string
  facts: { label: string; value: string }[]
}

export interface AgendaSlide extends BaseSlide {
  kind: 'agenda'
  title: string
  items: { title: string; desc: string }[]
}

export interface StatementSlide extends BaseSlide {
  kind: 'statement'
  eyebrow: string
  text: string
  footnote?: string
}

export interface PillarsSlide extends BaseSlide {
  kind: 'pillars'
  eyebrow: string
  title: string
  pillars: { title: string; points: string[] }[]
  note?: string
}

export interface SequenceSlide extends BaseSlide {
  kind: 'sequence'
  eyebrow: string
  title: string
  steps: { title: string; why: string }[]
}

export interface TimelineSlide extends BaseSlide {
  kind: 'timeline'
  eyebrow: string
  title: string
  /** Fechas en formato YYYY-MM-DD. `end` es inclusivo. */
  start: string
  end: string
  bars: { label: string; from: string; to: string; accent?: boolean }[]
  milestones: { date: string; label: string }[]
}

export interface BlockSlide extends BaseSlide {
  kind: 'block'
  number: string
  title: string
  dates: string
  summary: string
  tasks: { text: string; when: string; owner?: Owner }[]
  deliverable?: { label: string; date: string }
}

export interface MilestonesSlide extends BaseSlide {
  kind: 'milestones'
  eyebrow: string
  title: string
  note: string
  items: { date: string; title: string; desc: string }[]
}

export interface ChecklistSlide extends BaseSlide {
  kind: 'checklist'
  eyebrow: string
  title: string
  note: string
  rows: { item: string; unlocks: string; due: string }[]
}

export interface RisksSlide extends BaseSlide {
  kind: 'risks'
  eyebrow: string
  title: string
  note: string
  risks: { risk: string; impact: 'Alto' | 'Medio'; effect: string; plan: string }[]
}

export interface FactsSlide extends BaseSlide {
  kind: 'facts'
  eyebrow: string
  title: string
  facts: { value: string; label: string; desc: string }[]
}

export interface NextSlide extends BaseSlide {
  kind: 'next'
  eyebrow: string
  title: string
  actions: { when: string; what: string; owner: Owner }[]
  contact: { label: string; href: string }
}

export type KickoffSlide =
  | CoverSlide
  | AgendaSlide
  | StatementSlide
  | PillarsSlide
  | SequenceSlide
  | TimelineSlide
  | BlockSlide
  | MilestonesSlide
  | ChecklistSlide
  | RisksSlide
  | FactsSlide
  | NextSlide

export interface KickoffData {
  /** Nombre del cliente, aparece en la barra superior de cada slide. */
  client: string
  /** Fecha del kickoff, ya formateada (ej. "05.10.2026"). */
  date: string
  slides: KickoffSlide[]
}
