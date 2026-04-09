import type { ProposalData } from './types'

const cigarSociety: ProposalData = {
  logo: 'https://www.figma.com/api/mcp/asset/e6917789-972d-4e29-a612-ebd2f5eb466a',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Cigar\nSociety MX',
      cardIcon: 'https://www.figma.com/api/mcp/asset/ff0125cf-06a3-4ec3-ae27-2e6f796e9c6c',
      cardTitle: 'Core del proyecto',
      cardText: 'Esta propuesta contempla el desarrollo de interfaces interconectadas entre sí para una gestión de inventario, menús en frontend con arquitectura escalable en vista hacia una completa digitalización de procesos internos y externos del grupo Cigar Society MX.',
      meta: [
        { label: 'Dirigido a', value: 'Mariano Azuela' },
        { label: 'Fecha', value: 'Junio 2025' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'primera sección',
      title: 'Arquitectura del sistema propuesta',
      description: 'Una base de datos centralizada alimenta cuatro experiencias digitales independientes. Cada marca tiene su propio frontend con identidad visual propia, pero comparte productos, inventario y lógica de operación.',
      quote: 'Cuatro marcas, un solo ecosistema. Cada bar vive su identidad mientras comparte la misma infraestructura, inventario y lógica de negocio.',

      cards: [
        {
          title: 'Backend único',
          description: 'Una sola API y base de datos que alimenta todos los frontends, el inventario y el panel de administración.',
          image: 'https://www.figma.com/api/mcp/asset/48417cfd-962e-4d43-8b47-8113fa973225',
        },
        {
          title: 'Cigar Society MX',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
        },
        {
          title: 'Salón Oliva',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
        },
        {
          title: 'La Casa del Habano',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
          image: 'https://www.figma.com/api/mcp/asset/f3b01418-9121-4c24-af26-d76dfa2808ca',
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Fases',
      tag: 'segunda sección',
      title: 'Fases\ny entregables',
      blocks: [
        {
          number: 'fase 1',
          type: 'entregable principal',
          title: 'Core del ecosistema',
          desc: 'La base sobre la que se construye todo: menús digitales para las 4 marcas, inventario centralizado, panel de administración y la integración con Soft Restaurant que conecta la operación actual con el nuevo ecosistema.',
          badge: '5–6 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Menú digital × 4 marcas',
              items: [
                '4 webapps independientes con branding completo de cada marca (colores, tipografía, logo, tono).',
                'Acceso vía QR por mesa — el comensal escanea y ve el menú de su bar en su celular.',
                'Carta de cócteles compartida, configurable por bar (mostrar/ocultar por establecimiento).',
                'Secciones configurables: platillos, cócteles, cigarros, carta de vinos y destilados según aplique.',
                'Módulo de promociones y productos destacados con vigencia configurable.',
                'Diseño 100% responsivo y optimizado para móvil.',
                'Soporte para fotografías de productos cargadas desde el panel admin.',
              ],
            },
            {
              title: 'Control de inventario centralizado',
              items: [
                'Dashboard unificado con stock en tiempo real para los 4 bares.',
                'Gestión de insumos compartidos con descuento automático por bar al consumir.',
                'Alertas de bajo inventario por producto e insumo.',
                'Registro de movimientos: entradas, mermas, consumo por establecimiento.',
                'Reportes de consumo exportables (diario, semanal, mensual).',
                'Activar/desactivar productos del menú automáticamente cuando no hay stock.',
              ],
            },
            {
              title: 'Panel de administración',
              items: [
                'Un solo panel para gestionar los 4 bares desde cualquier dispositivo.',
                'Gestión de usuarios y permisos: admin general, admin por marca, operador de barra.',
                'Editor visual de menús sin tocar código — agregar, editar, reordenar, ocultar.',
                'Gestión de promociones con fechas y productos aplicables.',
                'Vista previa del menú antes de publicar cambios.',
                'Historial de cambios con auditoría por usuario.',
              ],
            },
            {
              title: 'Integración con Soft Restaurant',
              items: [
                'Sincronización de productos y precios desde Soft Restaurant hacia Flowbit.',
                'Mapeo de SKUs entre ambos sistemas.',
                'Documentación técnica completa — base para la migración al POS nativo en noviembre.',
              ],
            },
          ],
        },
        {
          number: 'fase 2',
          type: 'entregable opcional',
          title: 'Sitios web públicos',
          desc: 'Presencia digital propia para cada marca. Cuatro landing pages con identidad visual diferenciada, optimizadas para posicionamiento y con enlace directo al menú digital de cada establecimiento.',
          badge: '2–3 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Landing page pública para cada una de las cuatro marcas.',
            'Secciones: concepto/historia, menú (enlaza al menú digital), eventos, ubicación, contacto.',
            'Diseño con branding individual de cada marca.',
            'Optimizado para SEO y velocidad de carga.',
            'Formulario de reservaciones o contacto.',
            'Un solo lugar para gestionar contenido de los 4 sitios y los 4 menús.',
          ],
        },
        {
          number: 'fase 3',
          type: 'entregable opcional',
          title: 'POS nativo',
          desc: 'Punto de venta propio que reemplaza Soft Restaurant por completo. Comandas en tiempo real, pedidos desde mesa y control de caja — todo conectado al mismo backend de la Fase 1, sin licencias recurrentes.',
          badge: '3–4 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Módulo de punto de venta nativo integrado al ecosistema Flowbit.',
            'Comandas en tiempo real para meseros y cocina.',
            'Pedidos desde mesa: el comensal ordena desde su celular y la comanda llega directo.',
            'Control de caja por turno y por establecimiento.',
            'Reemplaza Soft Restaurant completamente — sin costos de licencia recurrentes.',
            'La DB y API de la Fase 1 ya están diseñadas para soportar esta capa.',
          ],
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'tercera sección',
      title: 'Servicios adicionales',
      description: 'Disponibles para contratar junto con cualquier fase. Se recomiendan al arrancar la Fase 1 para llegar al go-live con el menú 100% listo — sin depender de que el equipo cargue la información después.',
      cards: [
        {
          title: 'Sesión fotográfica',
          desc: 'Toma fotográfica profesional de productos, cócteles y platillos de las 4 marcas. Imágenes editadas y optimizadas, listas para cargar al menú.',
          price: '$11,000',
          label: 'costo',
        },
        {
          title: 'Carga de datos',
          desc: 'Alta completa del menú en la app — productos, descripciones, precios, categorías y fotografías de las 4 marcas.',
          price: '$11,000',
          label: 'costo',
        },
        {
          title: 'Paquete foto + carga',
          desc: 'Ambos servicios juntos. Ahorro de $1,500 vs contratarlos por separado.',
          price: '$11,000',
          label: 'costo',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'cuarta sección',
      title: 'Inversión total',
      description: '50% al firmar acuerdo · 50% al entregar los menús en vivo. Los servicios adicionales y fases posteriores se pagan en su totalidad al momento de contratar cada uno.',
      image: 'https://www.figma.com/api/mcp/asset/70a618f3-3d32-47f5-b83a-80669c9ab481',
      cards: [
        { title: 'Fase 1', desc: 'Core — menús, inventario, backend, integración SR', price: '$52,200', label: 'costo c/IVA' },
        { title: 'Fase 2', desc: 'Sitios web públicos × 4 marcas (opcional)', price: '$20,880', label: 'costo c/IVA' },
        { title: 'Fase 3', desc: 'POS nativo (noviembre 2025)', price: '$23,200', label: 'costo c/IVA' },
        { title: 'Fase 4', desc: 'App móvil nativa iOS + Android (opcional)', price: '$34,800', label: 'costo c/IVA' },
        { title: 'Fase 5', desc: 'Módulo de analítica y reportes avanzados', price: '$18,500', label: 'costo c/IVA' },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'quinta sección',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca de inmediato con un proceso claro de cinco pasos. Cada entrega se valida en conjunto antes de avanzar a la siguiente fase.',
      visibleSteps: 4,
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Confirmar alcance, definir qué fases y servicios adicionales van desde el inicio.' },
        { step: 'paso 2', title: 'Anticipo del 50%', desc: 'El pago inicial activa el proyecto y agenda el kickoff.' },
        { step: 'paso 3', title: 'Kickoff + levantamiento', desc: 'Sesión para revisar branding de cada marca, estructura de menús, usuarios y flujos. Si se contrató fotografía, se agenda la sesión para la semana 3.' },
        { step: 'paso 4', title: 'Entregas cada 2 semanas', desc: 'Acceso al panel admin desde la semana 3 para ir validando en tiempo real.' },
        { step: 'paso 5', title: 'Go-live y soporte', desc: 'Lanzamiento en producción con acompañamiento las primeras 2 semanas post-entrega.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Construyamos\nel ecosistema',
      description: 'Todo está listo para arrancar. Un solo equipo, una sola visión técnica y un ecosistema diseñado para escalar con el grupo. Confirma la propuesta y agendamos el kickoff esta misma semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'mailto:hola@flowbit.dev?subject=Acepto%20propuesta%20Cigar%20Society%20MX',
      footerLeft: 'Flowbit © 2025',
      footerRight: 'Propuesta confidencial',
    },
  ],
}

export default cigarSociety
