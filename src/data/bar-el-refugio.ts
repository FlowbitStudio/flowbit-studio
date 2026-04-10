import type { ProposalData } from './types'

const barElRefugio: ProposalData = {
  logo: '',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Bar El\nRefugio',
      cardTitle: 'Core del proyecto',
      cardText: 'Desarrollo de una landing page para Bar El Refugio con sistema de reservas online, menú digital de cocktails y módulo de eventos privados — todo en una sola experiencia web pensada para convertir visitas en reservaciones.',
      meta: [
        { label: 'Dirigido a', value: 'Mariano Azuela' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Módulos',
      tag: 'primera sección',
      title: 'Módulos\ndel proyecto',
      description: 'Tres módulos que trabajan juntos para convertir la landing de El Refugio en el punto de contacto digital más importante del bar — reservas, carta y eventos en un solo sitio.',
      quote: 'Un bar es más que un lugar — es una experiencia. Reserva tu mesa, explora nuestra carta y celebra lo que importa en El Refugio.',
      cards: [
        {
          title: 'Sistema de reservas online',
          category: 'tech',
          items: [
            'Formulario de reservas',
            'Calendario de disponibilidad',
            'Confirmación automática de reservas',
          ],
        },
        {
          title: 'Menú de cocktails',
          category: 'tech',
          items: [
            'Listado de cocktails con descripción y precios',
            'Galería de fotos de cocktails',
            'Diseño optimizado para móvil',
          ],
        },
        {
          title: 'Eventos privados',
          category: 'tech',
          items: [
            'Información de eventos privados',
            'Formulario para rentar el espacio',
            'Galería de eventos anteriores',
          ],
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'segunda sección',
      title: 'Alcance\ny entregables',
      blocks: [
        {
          number: '01',
          type: 'módulo principal',
          title: 'Sistema de reservas online',
          desc: 'Formulario de reservas integrado con un calendario de disponibilidad en tiempo real. El cliente recibe confirmación automática por correo y el bar tiene visibilidad total de las reservaciones del día.',
          badge: 'incluido',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Formulario y calendario',
              items: [
                'Formulario de reservas con campos configurables: nombre, fecha, hora, número de personas, notas.',
                'Calendario de disponibilidad con horarios y capacidad definibles desde el panel.',
                'Confirmación automática vía correo al cliente con los detalles de su reserva.',
                'Vista de administración para ver, aprobar o cancelar reservas.',
                'Diseño 100% responsivo, optimizado para móvil.',
              ],
            },
          ],
        },
        {
          number: '02',
          type: 'módulo principal',
          title: 'Menú de cocktails',
          desc: 'Carta digital interactiva con fotografías profesionales, descripciones y precios. Diseñada para que el cliente explore la propuesta del bar antes de llegar o mientras espera en mesa.',
          badge: 'incluido',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Carta digital',
              items: [
                'Listado de cocktails organizado por categorías configurables.',
                'Descripción, precio y fotografía por cada cocktail.',
                'Sección de destacados o recomendaciones del bar.',
                'Diseño visual de alto impacto, alineado con el branding de El Refugio.',
                'Las fotografías profesionales son provistas por el cliente.',
              ],
            },
          ],
        },
        {
          number: '03',
          type: 'módulo principal',
          title: 'Eventos privados',
          desc: 'Sección dedicada a rentar el espacio para celebraciones, corporativos y eventos especiales. Incluye formulario de contacto directo y galería de eventos anteriores para inspirar al prospecto.',
          badge: 'incluido',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Módulo de eventos',
              items: [
                'Página dedicada con información del espacio, capacidad y servicios incluidos.',
                'Formulario de cotización para renta del espacio privado.',
                'Galería de eventos anteriores (fotos provistas por el cliente).',
                'Call to action directo para agendar una visita o llamada.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'tercera sección',
      title: 'Servicios adicionales',
      description: 'El Diagnóstico tiene precio fijo. Los demás servicios son add-ons opcionales con precios estimados, no incluidos en el total de la propuesta — ideales para complementar el proyecto desde el arranque.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Fotografía de cocktails',
          category: 'fotografia',
          desc: 'Sesión fotográfica profesional de los cocktails y ambientes del bar. Imágenes editadas y optimizadas para web, listas para cargar en el menú digital.',
          price: 'Desde $8,500 MXN',
          label: 'estimado',
        },
        {
          title: 'SEO técnico',
          category: 'seo',
          desc: 'Optimización on-page, schema markup, Core Web Vitals y estrategia de keywords para posicionar El Refugio en búsquedas locales de bares y eventos.',
          price: 'Desde $6,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Soporte y mantenimiento',
          category: 'soporte',
          desc: 'Plan mensual de soporte técnico: actualizaciones, monitoreo, backups y atención a incidencias. Garantiza que el sitio esté siempre en línea y funcionando.',
          price: 'Desde $2,500 MXN/mes',
          label: 'estimado',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'cuarta sección',
      title: 'Inversión total',
      description: '50% al inicio · 50% a la entrega. El cliente proporciona branding y fotografía profesional de cocktails. Flowbit proporciona desarrollo, hosting y soporte técnico. Propuesta inicial (V01). Los precios aquí presentados son estimaciones (excepto el Diagnóstico que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente.',
      cards: [
        {
          title: 'Landing page completa',
          desc: 'Sistema de reservas + menú de cocktails + módulo de eventos privados. Entrega única.',
          price: '$42,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Sistema de reservas',
          desc: 'Formulario, calendario de disponibilidad y confirmaciones automáticas.',
          price: '$16,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Menú de cocktails',
          desc: 'Carta digital con fotografías, descripciones y precios.',
          price: '$12,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Eventos privados',
          desc: 'Sección de renta de espacio, formulario y galería.',
          price: '$14,000 MXN',
          label: 'estimado',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'quinta sección',
      title: 'Proceso\nde arranque',
      description: 'Desde la aprobación hasta el lanzamiento en cuatro pasos claros. Cada entrega se valida en conjunto antes de avanzar.',
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Confirmar alcance, condiciones de pago y fecha de kickoff.' },
        { step: 'paso 2', title: 'Anticipo del 50%', desc: 'El pago inicial activa el proyecto y reserva la agenda del equipo Flowbit.' },
        { step: 'paso 3', title: 'Kickoff + levantamiento', desc: 'Sesión para revisar branding, contenido del menú, flujos de reserva y galería de eventos. El cliente entrega fotografías y materiales de marca.' },
        { step: 'paso 4', title: 'Desarrollo y entregas parciales', desc: 'Acceso a revisiones iterativas cada semana para validar avances en tiempo real.' },
        { step: 'paso 5', title: 'Go-live y pago final', desc: 'Lanzamiento en producción, entrega de accesos y 2 semanas de soporte post-entrega incluidas.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'El Refugio\nen línea',
      description: 'Todo listo para arrancar. Un sitio diseñado para que cada visita se convierta en una reserva y cada reserva en una experiencia memorable en El Refugio. Confirma la propuesta y agendamos el kickoff esta semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit © 2026',
      footerRight: 'Propuesta confidencial',
    },
  ],
}

export default barElRefugio
