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
  FeedbackSection,
  RoiCard,
  RoiCostCard,
  RoiBenefitCard,
  RoiBenefitItem,
  RoiBreakevenCard,
  RoiProjectionCard,
  RoiSection,
  Section,
  ProposalData,
} from './types'

import cigarSociety from './cigar-society'
import martiniano from './martiniano'
import rosaditoEdicionCopaDelMundoMexico from './rosadito-edicion-copa-del-mundo-mexico'
import luzAnayaPodologia from './luz-anaya-podologia'
import lizAnayaPodologia from './liz-anaya-podologia'
import pauloTrejoArquitecto from './paulo-trejo-arquitecto'
import formaQ3 from './forma-q3'
import asistIa from './asist-ia'
import asistiaGuiones from './asistia-guiones'
import camionesAConciertos from './camiones-a-conciertos'
import type { ProposalData } from './types'

// Registra aquí cada propuesta con su slug (usado en la URL)
export const proposals: Record<string, ProposalData> = {
  'cigar-society': cigarSociety,
  'martiniano': martiniano,
  'rosadito-edicion-copa-del-mundo-mexico': rosaditoEdicionCopaDelMundoMexico,
  'luz-anaya-podologia': luzAnayaPodologia,
  'liz-anaya-podologia': lizAnayaPodologia,
  'paulo-trejo-arquitecto': pauloTrejoArquitecto,
  'forma-q3': formaQ3,
  'asist-ia': asistIa,
  'asistia-guiones': asistiaGuiones,
  'camiones-a-conciertos': camionesAConciertos,
}
