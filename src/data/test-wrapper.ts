import type { ProposalData } from './types'

const testWrapper: ProposalData = {
  logo: 'https://flowbit.studio/logo.svg',
  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta Comercial',
      title: 'Test Wrapper',
      cardTitle: 'Landing de prueba',
      cardText: 'Propuesta de prueba para validar el pipeline automatizado. Confirma que el wrapper, Claude Code y el git push funcionan end-to-end.',
      meta: [
        { label: 'Dirigido a', value: 'Andre Flowbit' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },
    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'alcance',
      title: 'Lo que incluye',
      blocks: [
        {
          number: '01',
          type: 'Módulo',
          title: 'Landing de prueba',
          desc: 'Sitio de una página con las secciones esenciales para validar el pipeline end-to-end.',
          badge: 'Entrega única',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Hero',
            'Alcance',
            'CTA',
          ],
        },
      ],
    },
    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión',
      description: 'Propuesta de prueba del pipeline. Se puede borrar.',
      cards: [
        {
          title: 'Proyecto completo',
          desc: 'Landing de prueba — React + Vite. Condiciones: 100% al arranque.',
          price: '$1,000 MXN',
          label: 'Entrega única',
        },
      ],
    },
    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: '¿Arrancamos?',
      description: 'Esta es una propuesta de prueba para validar el pipeline automatizado de Flowbit.',
      buttonText: 'Contactar',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio',
      footerRight: 'flowbit.studio',
    },
  ],
}

export default testWrapper
