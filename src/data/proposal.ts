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
import cigarSocietyMxEcosistemaDigital from './cigar-society-mx-ecosistema-digital'
import luzAnayaPodologia from './luz-anaya-podologia'
import type { ProposalData } from './types'

// Registra aquí cada propuesta con su slug (usado en la URL)
export const proposals: Record<string, ProposalData> = {
  'cigar-society': cigarSociety,
  'martiniano': martiniano,
  'rosadito-edicion-copa-del-mundo-mexico': rosaditoEdicionCopaDelMundoMexico,
  'cigar-society-mx-ecosistema-digital': cigarSocietyMxEcosistemaDigital,
  'luz-anaya-podologia': luzAnayaPodologia,
}
