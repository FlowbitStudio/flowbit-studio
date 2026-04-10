export type {
  ProposalMeta,
  HeroSection,
  CarouselCard,
  CardCarouselSection,
  ContentEntregable,
  ContentBlock,
  StickyListSection,
  GridCard,
  CardGridSection,
  StickyCard,
  StickyCardsSection,
  Step,
  StepCarouselSection,
  CTASection,
  Section,
  ProposalData,
} from './types'

import cigarSociety from './cigar-society'
import martiniano from './martiniano'
import rosaditoEdicionCopaDelMundoMexico from './rosadito-edicion-copa-del-mundo-mexico'
import type { ProposalData } from './types'

// Registra aquí cada propuesta con su slug (usado en la URL)
export const proposals: Record<string, ProposalData> = {
  'cigar-society': cigarSociety,
  'martiniano': martiniano,
  'rosadito-edicion-copa-del-mundo-mexico': rosaditoEdicionCopaDelMundoMexico,
}
