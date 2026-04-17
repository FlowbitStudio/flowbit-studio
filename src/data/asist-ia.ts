import type { ProposalData } from './types'

const asistIa: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Asist IA\nMotion Graphics',
      cardTitle: 'Dos videos para comunicar automatización',
      cardText: 'Dos piezas de motion graphics, de 1.5 a 2 minutos cada una, diseñadas para explicar con claridad cómo las soluciones de Asist IA automatizan operaciones empresariales — cada video con un objetivo de comunicación propio.',
      meta: [
        { label: 'Dirigido a', value: 'Luis Fernando Ramirez' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Videos',
      tag: 'piezas audiovisuales',
      title: 'Dos videos,\ndos objetivos',
      description: 'Cada video se produce como una pieza independiente con su propio guión, storyboard y lenguaje visual. Juntos cuentan la historia completa de Asist IA: qué es la plataforma y cómo funciona dentro de una empresa real.',
      quote: 'La automatización vive en código invisible. El motion graphics la vuelve tangible — en dos minutos, un cliente entiende lo que tu equipo tardaría una hora en explicar.',
      cards: [
        {
          title: 'Video 1 · ¿Qué es Asist IA?',
          origamiItem: 2,
          description: 'Pieza de introducción a la plataforma. Comunica la propuesta de valor, los dolores que resuelve y por qué la automatización con IA es el siguiente paso para cualquier empresa moderna.',
          items: [
            'Duración 1.5 – 2 minutos',
            'Guión y narrativa conceptual',
            'Estilo visual de marca definido',
            'Entrega en 1080p y 4K',
          ],
        },
        {
          title: 'Video 2 · Casos de uso empresariales',
          origamiItem: 3,
          description: 'Pieza de demostración funcional. Muestra cómo las soluciones de Asist IA operan dentro de flujos reales de una empresa — procesos, integraciones y resultados tangibles.',
          items: [
            'Duración 1.5 – 2 minutos',
            'Storyboard orientado a producto',
            'Animación de flujos e interfaces',
            'Entrega en 1080p y 4K',
          ],
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'alcance del proyecto',
      title: 'Alcance\npor pieza',
      blocks: [
        {
          number: 'pieza 1',
          type: 'entregable principal',
          title: 'Video explicativo institucional',
          desc: 'Pieza de 1.5 a 2 minutos que introduce la marca Asist IA y su propuesta de valor. Narrativa conceptual con animación 2D/3D ligera, foco en claridad y ritmo. Pensada para web, presentaciones comerciales y redes sociales.',
          badge: '1.5 – 2 min',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Entregables',
              items: [
                'Guión redactado y validado con el cliente.',
                'Storyboard visual con dirección de arte y referencias.',
                'Animación final en motion graphics.',
                'Sonorización completa: música, voz en off y efectos.',
                'Versión final en 1080p y 4K, formato 16:9.',
              ],
            },
          ],
        },
        {
          number: 'pieza 2',
          type: 'entregable principal',
          title: 'Video demo de casos de uso',
          desc: 'Pieza de 1.5 a 2 minutos que muestra cómo las soluciones de automatización de Asist IA funcionan dentro de una empresa. Enfoque en flujos operativos, integraciones e impacto medible. Ideal para argumentación comercial B2B.',
          badge: '1.5 – 2 min',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Entregables',
              items: [
                'Guión estructurado por casos de uso concretos.',
                'Storyboard con representación visual de flujos e interfaces.',
                'Animación final en motion graphics.',
                'Sonorización completa: música, voz en off y efectos.',
                'Versión final en 1080p y 4K, formato 16:9.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de producción',
      title: 'Proceso\nde producción',
      description: 'Cada video sigue el mismo pipeline de producción. Ambas piezas se trabajan en paralelo para optimizar tiempos de entrega.',
      steps: [
        {
          step: 'paso 1',
          title: 'Aprobación y anticipo',
          desc: 'Confirmación de propuesta y pago del 50% inicial para activar el proyecto.',
        },
        {
          step: 'paso 2',
          title: 'Brief y guión',
          desc: 'Sesión de kickoff para alinear objetivos de comunicación. Redacción y validación del guión de cada pieza.',
        },
        {
          step: 'paso 3',
          title: 'Storyboard y estilo visual',
          desc: 'Diseño del storyboard, definición de dirección de arte, paleta y referencias. Validación antes de animar.',
        },
        {
          step: 'paso 4',
          title: 'Animación',
          desc: 'Producción de motion graphics frame por frame. Revisiones intermedias para ajustes de ritmo y detalle.',
        },
        {
          step: 'paso 5',
          title: 'Sonorización y entrega',
          desc: 'Música, voz en off y efectos de sonido. Entrega de masters finales en 1080p y 4K. Pago del 50% restante.',
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'Add-ons creativos opcionales para amplificar el alcance de las piezas principales. Precios estimados — disponibles para contratar junto con la propuesta o en cualquier momento posterior.',
      cards: [
        {
          title: 'Versiones cortas para redes',
          category: 'video',
          desc: 'Derivados de 15–30 segundos optimizados para Instagram, TikTok y LinkedIn. Reformateo a 9:16 y 1:1 con textos animados y hooks adaptados a cada plataforma.',
          price: 'Desde $8,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Animación de logo y stingers',
          category: 'animacion',
          desc: 'Intro/outro animado del logo de Asist IA más stingers de transición reutilizables en futuros videos, presentaciones y webinars.',
          price: 'Desde $6,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Fotografía corporativa',
          category: 'fotografia',
          desc: 'Sesión fotográfica del equipo y las instalaciones de Asist IA. Material utilizable como b-roll en los videos y como activo visual para marketing y redes.',
          price: 'Desde $12,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Estrategia de contenido y redes',
          category: 'redes-sociales',
          desc: 'Plan editorial y calendario de publicación para aprovechar al máximo los videos: copy, hashtags, cadencia y plantillas para redes sociales.',
          price: 'Desde $5,000 MXN/mes',
          label: 'estimado',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión\ndel proyecto',
      description: 'Dos piezas de motion graphics con precio fijo de $28,000 MXN cada una. Condiciones de pago: 50% al iniciar el proyecto y 50% contra la entrega de los masters finales. El precio incluye guión, storyboard, animación, sonorización y entrega en 1080p y 4K. Los servicios adicionales son opcionales y se cotizan por separado.',
      cards: [
        {
          title: 'Dos videos en motion graphics',
          desc: 'Producción completa de ambas piezas: Video 1 (¿Qué es Asist IA?) + Video 2 (Casos de uso empresariales). Cada una de 1.5 a 2 minutos, con guión, storyboard, animación, sonorización y entrega en 1080p y 4K. $28,000 MXN por video.',
          price: '$56,000 MXN',
          label: 'total',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Demos vida\na la automatización',
      description: 'Asist IA tiene una historia poderosa que contar — automatización real al servicio de empresas reales. Con dos videos en motion graphics de alto nivel, esa historia se vuelve visual, memorable y lista para cerrar conversaciones comerciales. Confirma la propuesta y arrancamos la producción esta semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default asistIa
