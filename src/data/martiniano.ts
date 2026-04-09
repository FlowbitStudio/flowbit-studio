import type { ProposalData } from './types'

const martiniano: ProposalData = {
  logo: 'https://www.figma.com/api/mcp/asset/e6917789-972d-4e29-a612-ebd2f5eb466a',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Martiniano\nClub',
      cardTitle: 'Core del proyecto',
      cardText: 'Desarrollo de la plataforma web completa para Martiniano: marketplace con catálogo y checkout, menú digital con pedidos en tiempo real, sistema de membresías anuales y panel de administración con control total de inventario — construido en React + Vite con hosting y dominio incluido por un año.',
      meta: [
        { label: 'Dirigido a', value: 'Mariana Azuela' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Módulos',
      tag: 'primera sección',
      title: 'Módulos de la plataforma',
      description: 'Cuatro módulos que cubren la operación digital completa del club: marketplace para venta de productos, menú digital con pedidos, membresías anuales y un panel de administración con gestión de inventario — todo desde una sola plataforma.',
      quote: 'Un club, una plataforma. Marketplace, menú, membresías e inventario viviendo en el mismo ecosistema.',
      cards: [
        {
          title: 'Marketplace',
          items: ['Catálogo de productos', 'Carrito y checkout', 'Historial de compras'],
          image: 'https://www.figma.com/api/mcp/asset/48417cfd-962e-4d43-8b47-8113fa973225',
        },
        {
          title: 'Menú digital',
          items: ['Pedidos en tiempo real', 'QR desde mesa', 'Categorías dinámicas'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
        },
        {
          title: 'Membresías',
          items: ['Planes anuales', 'Niveles y beneficios', 'Panel de miembro'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
        },
        {
          title: 'Administración',
          items: ['Control de inventario', 'Gestión de pedidos', 'Reportes y métricas'],
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
          number: 'entrega única',
          type: 'entregable completo',
          title: 'Plataforma digital Martiniano',
          desc: 'Todo el proyecto se entrega en una sola fase de producción: marketplace, menú digital, membresías y panel de administración con inventario. Construido en React + Vite. Incluye hosting y dominio por un año. El cliente proporciona todos los assets de branding (logo, colores, tipografía, fotografías).',
          badge: '8–10 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Marketplace',
              items: [
                'Catálogo de productos con fotos, variantes, tallas y precios.',
                'Carrito de compras persistente con flujo de checkout completo.',
                'Pasarela de pago integrada (Stripe / Mercado Pago).',
                'Historial de compras por usuario.',
                'Descuentos exclusivos para miembros según su nivel de membresía.',
                'Notificaciones por correo en cada etapa del pedido.',
                'Gestión de pedidos y estados de envío desde el panel admin.',
              ],
            },
            {
              title: 'Menú digital con pedidos',
              items: [
                'Menú interactivo construido en React con navegación por categorías.',
                'Acceso vía QR desde mesas o barra del venue.',
                'Sistema de pedidos en tiempo real: el cliente ordena desde su celular.',
                'Categorías configurables: cócteles, shots, botellas, snacks, etc.',
                'Módulo de destacados y promociones activas visibles en el menú.',
                'Fotografías de productos gestionadas desde el panel admin.',
                'Estado del pedido visible para el cliente en tiempo real.',
              ],
            },
            {
              title: 'Sistema de membresías anuales',
              items: [
                'Niveles de membresía configurables (ej. Silver, Gold, Black).',
                'Beneficios diferenciados por nivel: descuentos, acceso prioritario, invitados.',
                'Flujo de registro y onboarding para nuevos miembros.',
                'Cobro anual con pasarela de pago integrada.',
                'Dashboard del miembro: estado de membresía, beneficios activos, historial de compras y pedidos.',
                'Panel admin: miembros activos, vencimientos próximos, reportes de retención.',
              ],
            },
            {
              title: 'Panel de administración e inventario',
              items: [
                'Panel unificado para gestionar toda la plataforma desde cualquier dispositivo.',
                'Inventario completo: alta, edición, baja y consulta de productos (CRUD).',
                'Control de stock en tiempo real con alertas de bajo inventario.',
                'Gestión de usuarios y roles (admin, staff, miembro).',
                'Gestión visual del menú y del catálogo del marketplace.',
                'Dashboard con métricas clave: ventas, pedidos activos, miembros, inventario.',
                'Reportes exportables de ventas, inventario y membresías.',
              ],
            },
            {
              title: 'Infraestructura y despliegue',
              items: [
                'Aplicación construida en React + Vite, optimizada para producción.',
                'Hosting incluido por un año (servidor cloud con SSL).',
                'Dominio incluido por un año (registro y configuración DNS).',
                'Despliegue en producción con pipeline de CI/CD.',
                'Soporte técnico las primeras 2 semanas post-lanzamiento.',
              ],
            },
            {
              title: 'Consideraciones importantes',
              items: [
                'El cliente proporciona todos los assets de branding: logo, paleta de colores, tipografía y guía de estilo.',
                'El cliente proporciona las fotografías de productos para el menú y el marketplace.',
                'Cualquier ajuste de branding o diseño fuera de los assets entregados se cotiza por separado.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'tercera sección',
      title: 'Inversión total',
      description: '50% al firmar acuerdo · 50% al entregar el proyecto completo en producción. Incluye hosting y dominio por un año.',
      cards: [
        { title: 'Proyecto completo', desc: 'Marketplace, menú digital con pedidos, membresías anuales, panel de administración con inventario, hosting y dominio por un año', price: 'Por definir', label: 'costo c/IVA' },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'cuarta sección',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca de inmediato en una sola fase de producción. Cada milestone se valida en conjunto antes de avanzar.',
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Confirmar alcance y firmar acuerdo para activar el proyecto.' },
        { step: 'paso 2', title: 'Anticipo del 50%', desc: 'El pago inicial activa el proyecto y agenda el kickoff.' },
        { step: 'paso 3', title: 'Kickoff + assets', desc: 'Sesión para revisar flujos del club. El cliente entrega assets de branding, logo, fotos de productos y estructura del menú.' },
        { step: 'paso 4', title: 'Entregas cada 2 semanas', desc: 'Acceso al panel admin desde la semana 3 para validar marketplace, menú y membresías en tiempo real.' },
        { step: 'paso 5', title: 'Go-live y soporte', desc: 'Lanzamiento en producción con hosting y dominio configurados. Acompañamiento las primeras 2 semanas post-entrega.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Llevemos Martiniano\nal siguiente nivel',
      description: 'Todo está listo para arrancar. Una sola fase, una sola entrega — marketplace, menú, membresías e inventario funcionando desde el día uno. Confirma la propuesta y agendamos el kickoff esta semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'mailto:hola@flowbit.dev?subject=Acepto%20propuesta%20Martiniano',
      footerLeft: 'Flowbit © 2025',
      footerRight: 'Propuesta confidencial',
    },
  ],
}

export default martiniano
