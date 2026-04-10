import type { ProposalData } from './types'

const cafeCondesa: ProposalData = {
  logo: 'https://www.figma.com/api/mcp/asset/e6917789-972d-4e29-a612-ebd2f5eb466a',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Café\nCondesa',
      cardTitle: 'Core del proyecto',
      cardText: 'Desarrollo de una landing page para Café Condesa con sistema de reservas, menú digital y módulo de eventos privados. Una presencia digital que refleje la experiencia del café y facilite la conexión con sus clientes.',
      meta: [
        { label: 'Dirigido a', value: 'Ana Martínez' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Módulos',
      tag: 'primera sección',
      title: 'Módulos del proyecto',
      description: 'Tres módulos integrados en una sola experiencia digital. Cada uno resuelve una necesidad concreta del café: reservar, explorar el menú y contratar eventos — todo desde la misma página.',
      quote: 'Una sola página que reserva, informa y convierte. La experiencia del café comienza mucho antes de llegar.',
      cards: [
        {
          title: 'Sistema de reservas',
          items: ['Formulario de reservas', 'Calendario de disponibilidad', 'Confirmación automática'],
          image: 'https://www.figma.com/api/mcp/asset/48417cfd-962e-4d43-8b47-8113fa973225',
        },
        {
          title: 'Menú digital',
          items: ['Listado de productos', 'Fotos y descripciones', 'Precios actualizables'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
        },
        {
          title: 'Eventos privados',
          items: ['Información del servicio', 'Formulario de solicitud', 'Galería de imágenes'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
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
          title: 'Sistema de reservas',
          desc: 'Formulario intuitivo para que los clientes reserven mesa en pocos pasos. Incluye visualización de disponibilidad en calendario y confirmación automática para reducir la fricción operativa del equipo del café.',
          badge: 'incluido',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Formulario de reservas con validación en tiempo real.',
            'Calendario interactivo de disponibilidad.',
            'Confirmación automática vía correo electrónico al cliente.',
            'Panel administrativo para gestionar y consultar reservas activas.',
          ],
        },
        {
          number: '02',
          type: 'módulo principal',
          title: 'Menú digital',
          desc: 'Catálogo visual del menú con fotografías, descripciones y precios. El cliente proporciona el contenido (imágenes, textos, precios); Flowbit lo estructura, sube y optimiza para la web.',
          badge: 'incluido',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Listado de productos organizado por categorías.',
            'Fotografías y descripciones por producto (contenido provisto por Café Condesa).',
            'Precios visibles y actualizables desde panel administrativo.',
            'Diseño responsivo optimizado para móvil y desktop.',
          ],
        },
        {
          number: '03',
          type: 'módulo principal',
          title: 'Eventos privados',
          desc: 'Sección dedicada a la renta del espacio para eventos privados: propuesta de valor, galería de eventos anteriores y formulario de solicitud para capturar leads interesados en rentar el café.',
          badge: 'incluido',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Página con información del espacio, capacidad y servicios para eventos privados.',
            'Galería de imágenes de eventos anteriores (imágenes provistas por Café Condesa).',
            'Formulario de solicitud con campos de fecha, número de personas y descripción del evento.',
            'Notificación al equipo del café por correo por cada solicitud recibida.',
          ],
        },
        {
          number: '04',
          type: 'incluido en el proyecto',
          title: 'Hosting y dominio',
          desc: 'Configuración y puesta en marcha del hosting y dominio sin costo adicional. Flowbit se encarga del despliegue, seguridad y soporte técnico del sitio durante el primer año de operación.',
          badge: 'sin costo adicional',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Hosting de alto rendimiento por 12 meses incluido.',
            'Configuración y apuntado del dominio.',
            'Certificado SSL y seguridad básica del servidor.',
            'Soporte técnico a cargo de Flowbit durante el primer año.',
          ],
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'tercera sección',
      title: 'Servicios adicionales',
      description: 'El Diagnóstico es un servicio fijo de Flowbit ($10,000 MXN), recomendado antes de arrancar cualquier desarrollo. Los demás son add-ons opcionales con precios estimados — no incluidos en el precio total de la propuesta.',
      cards: [
        {
          title: 'Diagnóstico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Fotografía de producto',
          desc: 'Sesión fotográfica profesional de platillos, bebidas y el espacio del café. Imágenes editadas y optimizadas para web, listas para cargar al menú digital.',
          price: 'Desde $8,000 MXN',
          label: 'estimado',
        },
        {
          title: 'SEO técnico',
          desc: 'Optimización on-page del sitio: metadatos, schema markup, estructura de encabezados y Core Web Vitals para mejorar el posicionamiento orgánico en Google.',
          price: 'Desde $6,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Soporte y mantenimiento',
          desc: 'Plan mensual de soporte técnico: actualizaciones, monitoreo, backups y atención a incidencias. Para mantener el sitio seguro y funcionando correctamente después del primer año.',
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
      description: '60% al inicio del proyecto · 40% a la entrega. Hosting y dominio incluidos por un año sin costo adicional.',
      image: 'https://www.figma.com/api/mcp/asset/70a618f3-3d32-47f5-b83a-80669c9ab481',
      cards: [
        {
          title: 'Landing page completa',
          desc: 'Sistema de reservas + Menú digital + Módulo de eventos privados. Hosting y dominio por 12 meses incluidos. Propuesta inicial (V01). Los precios aquí presentados son estimaciones (excepto el Diagnóstico que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente.',
          price: '$38,000 MXN',
          label: 'estimado',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'quinta sección',
      title: 'Proceso\nde entrega',
      description: 'El proyecto se entrega en una sola iteración. Desde el kickoff hasta el go-live, el proceso es claro y con validaciones en cada etapa para garantizar el resultado.',
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Se confirma el alcance y se formaliza el acuerdo de trabajo entre Café Condesa y Flowbit.' },
        { step: 'paso 2', title: 'Anticipo del 60%', desc: 'El pago inicial activa el proyecto y se agenda el kickoff de arranque.' },
        { step: 'paso 3', title: 'Kickoff y levantamiento', desc: 'Sesión para revisar branding, contenido del menú, imágenes y flujos de reserva y eventos.' },
        { step: 'paso 4', title: 'Desarrollo y revisiones', desc: 'Flowbit construye el sitio con revisiones parciales para validar avance y ajustar detalles antes del go-live.' },
        { step: 'paso 5', title: 'Go-live y entrega', desc: 'Lanzamiento en producción. Liquidación del 40% restante y acompañamiento técnico en las primeras semanas.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Abrimos\njuntos la puerta digital',
      description: 'Café Condesa merece una presencia digital a la altura de su experiencia. Confirma la propuesta y comenzamos esta semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit © 2026',
      footerRight: 'Propuesta confidencial',
    },
  ],
}

export default cafeCondesa
