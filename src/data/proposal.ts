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
import testWrapper from './test-wrapper'
import tacosElPaisa from './tacos-el-paisa'
import cafeCondesa from './cafe-condesa'
import type { ProposalData } from './types'

// Registra aquí cada propuesta con su slug (usado en la URL)
export const proposals: Record<string, ProposalData> = {
  'cigar-society': cigarSociety,
  'martiniano': martiniano,
  'test-wrapper': testWrapper,
  'tacos-el-paisa': tacosElPaisa,
  'cafe-condesa': cafeCondesa,
}
