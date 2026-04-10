import type { ProposalData } from './types'

const tacosElPaisa: ProposalData = {
  logo: '/favicon.svg',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Tacos\nEl Paisa',
      cardTitle: 'Core del proyecto',
      cardText: 'Desarrollo de un e-commerce completo para Tacos El Paisa: catálogo de productos, carrito de compras e integración con Stripe para pagos en línea — construido en React + Vite con hosting y soporte incluidos.',
      meta: [
        { label: 'Dirigido a', value: 'Carlos Ramírez' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'primera sección',
      title: 'Alcance\ny entregables',
      blocks: [
        {
          number: 'entrega única',
          type: 'entregable completo',
          title: 'E-commerce Tacos El Paisa',
          desc: 'El proyecto se entrega en una sola fase: una tienda en línea completa con catálogo de productos, carrito de compras y pagos integrados con Stripe. Flowbit se encarga del desarrollo, hosting y soporte. El cliente provee el contenido del catálogo y configura su cuenta de Stripe.',
          badge: '4–6 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Catálogo de productos',
              items: [
                'Listado de productos con fotos, descripciones y precios.',
                'Categorías y filtros para facilitar la navegación.',
                'Vista de detalle de producto con galería de imágenes.',
                'Gestión de disponibilidad y variantes de producto.',
              ],
            },
            {
              title: 'Carrito de compras',
              items: [
                'Carrito persistente con resumen de productos seleccionados.',
                'Edición de cantidades y eliminación de productos desde el carrito.',
                'Flujo de checkout claro con resumen de orden.',
                'Confirmación de pedido por correo electrónico.',
              ],
            },
            {
              title: 'Integración con Stripe',
              items: [
                'Pagos en línea seguros con tarjeta de crédito y débito.',
                'Integración directa con la cuenta de Stripe del cliente.',
                'Gestión de transacciones y reembolsos desde el dashboard de Stripe.',
                'SSL incluido para transacciones seguras.',
              ],
            },
            {
              title: 'Infraestructura y soporte',
              items: [
                'Aplicación construida en React + Vite, optimizada para producción.',
                'Hosting incluido (servidor cloud con SSL y alta disponibilidad).',
                'Soporte técnico las primeras 2 semanas post-lanzamiento.',
                'El cliente proporciona el contenido del catálogo: fotos, nombres, descripciones y precios.',
                'El cliente configura su propia cuenta de Stripe para recibir pagos.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'segunda sección',
      title: 'Inversión total',
      description: '50% al inicio del proyecto · 50% a la entrega en producción. Incluye desarrollo, hosting y soporte.',
      cards: [
        {
          title: 'E-commerce completo',
          desc: 'Catálogo de productos, carrito de compras, integración con Stripe, hosting y soporte post-lanzamiento',
          price: '$45,000 MXN',
          label: 'e-commerce',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'tercera sección',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca de inmediato. Cada milestone se valida en conjunto antes de avanzar al siguiente.',
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Confirmar alcance y firmar acuerdo para activar el proyecto.' },
        { step: 'paso 2', title: 'Anticipo del 50%', desc: 'El pago inicial activa el proyecto y agenda el kickoff.' },
        { step: 'paso 3', title: 'Kickoff + contenido', desc: 'Sesión de arranque. El cliente entrega fotos, descripciones y precios del catálogo.' },
        { step: 'paso 4', title: 'Desarrollo y validación', desc: 'Entregas parciales cada 2 semanas para revisar avances y ajustar en tiempo real.' },
        { step: 'paso 5', title: 'Go-live y soporte', desc: 'Lanzamiento en producción. Acompañamiento técnico las primeras 2 semanas post-entrega.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Tu tienda en línea,\nlista para vender',
      description: 'Todo está listo para arrancar. Un e-commerce completo con catálogo, carrito y pagos con Stripe — entregado en una sola fase. Confirma la propuesta y agendamos el kickoff esta semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit © 2026',
      footerRight: 'Propuesta confidencial',
    },
  ],
}

export default tacosElPaisa
