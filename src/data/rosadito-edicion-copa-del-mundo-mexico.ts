import type { ProposalData } from './types'

const proposal: ProposalData = {
  logo: '/logo-flowbit.png',
  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial — Diseño gráfico',
      title: 'Rosadito × Copa del Mundo México',
      cardTitle: 'Lata Edición Especial',
      cardText: 'Diseño retro de lata conmemorativa para la Copa del Mundo México 2026, con estética de época y paleta de la bandera mexicana.',
      meta: [
        { label: 'Dirigido a', value: 'Antonio Balassone' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },
    {
      layout: 'card-carousel',
      navLabel: 'Concepto',
      tag: 'concepto',
      title: 'Una lata que lleva el juego dentro.',
      description: 'El diseño une la energía del fútbol con la identidad visual de Rosadito en un objeto de colección único.',
      quote: 'Retro en forma, contemporáneo en alma. Una lata que celebra el fútbol con el estilo inconfundible de Rosadito.',
      cards: [
        {
          title: 'Diseño Retro',
          description: 'Estética de época que evoca las grandes ediciones coleccionables del fútbol mexicano.',
          category: 'design',
        },
        {
          title: 'Identidad Mexicana',
          description: 'Paleta cromática basada en los colores de la bandera de México integrada con el lenguaje visual de la marca.',
          category: 'branding',
        },
        {
          title: 'Arte Final',
          description: 'Entrega de archivos listos para producción industrial de las latas.',
          category: 'diseño',
        },
      ],
    },
    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'alcance',
      title: 'Diseño y producción de arte.',
      blocks: [
        {
          number: '01',
          type: 'Fase única',
          title: 'Diseño y Producción',
          desc: 'Creación del diseño de lata edición especial Copa del Mundo México, desde concepto hasta arte final listo para imprenta.',
          badge: '1.5 a 2 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Diseño de lata',
              items: [
                'Diseño final aprobado',
                'Arte para producción (archivos listos para impresión industrial)',
              ],
            },
          ],
        },
      ],
    },
    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión del proyecto.',
      description: 'Precio fijo por diseño de lata edición especial. El cliente gestiona la producción física de las latas por su cuenta.\n\nCondiciones de pago: 50% al inicio del proyecto, 50% a la entrega del arte final.\n\nPropuesta inicial (V01). Los precios aquí presentados son estimaciones (excepto el Diagnóstico que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente.',
      cards: [
        {
          title: 'Diseño de lata edición especial',
          desc: 'Diseño retro con incorporación de balón de fútbol y colores de la bandera de México. Incluye arte final para producción.',
          price: '$5,000 MXN',
          label: 'diseño lata',
        },
      ],
    },
    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso',
      title: 'Cómo trabajamos juntos.',
      description: 'Un proceso directo para entregar un diseño de impacto en el menor tiempo posible.',
      steps: [
        {
          step: '01',
          title: 'Briefing',
          desc: 'Revisamos referencias, definimos dirección creativa y aprobamos paleta y estilo retro con el cliente.',
        },
        {
          step: '02',
          title: 'Concepto',
          desc: 'Desarrollamos 1-2 propuestas de concepto visual para la lata con los elementos clave: balón, bandera, tipografía retro.',
        },
        {
          step: '03',
          title: 'Refinamiento',
          desc: 'Incorporamos feedback del cliente y ajustamos el diseño hasta aprobación final.',
        },
        {
          step: '04',
          title: 'Arte final',
          desc: 'Entregamos los archivos en formato y especificaciones listas para producción industrial.',
        },
      ],
    },
    {
      layout: 'card-grid',
      navLabel: 'Servicios adicionales',
      tag: 'servicios adicionales',
      title: 'Potencia el lanzamiento.',
      description: 'El Diagnóstico es un servicio fijo de Flowbit con precio cerrado. Los demás son add-ons opcionales no incluidos en el precio total de la propuesta.',
      cards: [
        {
          title: 'Diagnóstico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
          category: 'diagnostico',
        },
        {
          title: 'Fotografía de producto',
          desc: 'Sesión fotográfica de la lata terminada para uso en redes sociales, e-commerce y materiales de campaña.',
          price: 'Desde $8,000 MXN',
          label: 'add-on',
          category: 'fotografia',
        },
        {
          title: 'Animación para redes',
          desc: 'Motion graphic de la lata en formato reel/story para el lanzamiento en redes sociales de Rosadito.',
          price: 'Desde $6,000 MXN',
          label: 'add-on',
          category: 'animacion',
        },
        {
          title: 'Estrategia de contenido',
          desc: 'Plan editorial para el lanzamiento de la edición especial en redes sociales, incluyendo calendario y plantillas.',
          price: 'Desde $5,000 MXN',
          label: 'add-on',
          category: 'contenido',
        },
      ],
    },
    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: '¿Arrancamos?',
      description: 'La Copa del Mundo México 2026 es una ventana única. Hagamos que Rosadito esté en la cancha con una lata que la gente quiera guardar.',
      buttonText: 'Hablemos',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'flowbit.studio',
      footerRight: '© 2026 Flowbit Studio',
    },
  ],
}

export default proposal
