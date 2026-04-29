import type { ProposalData } from './types'

const cigarSociety: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Cigar\nSociety MX',
      cardTitle: 'Ecosistema Digital Multi-Marca',
      cardText: 'El grupo opera cuatro marcas con identidad, experiencia y público distintos. El reto: mantener esa independencia visual mientras comparten inventario, catálogo de cócteles y operación en un solo backend, con un asistente IA que ayuda al cliente en cada webapp y una landing corporativa del grupo hacia importadores y exportadores. Flowbit construirá el ecosistema completo — con una arquitectura que también soportará el POS nativo a partir de noviembre 2026.',
      meta: [
        { label: 'Dirigido a', value: 'Mariano Azuela' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V03' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'arquitectura',
      title: 'Ecosistema multi-marca',
      description: 'Una base de datos centralizada alimenta cuatro experiencias digitales independientes. Cada marca tiene su propio frontend con identidad visual propia, pero comparte productos, inventario y lógica de operación.',
      quote: 'Cuatro marcas, un solo ecosistema. Cada bar vive su identidad mientras comparte la misma infraestructura, inventario y lógica de negocio.',
      cards: [
        {
          title: 'Cigar Society MX',
          category: 'desarrollo',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
        },
        {
          title: 'Salón Oliva',
          category: 'desarrollo',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
        },
        {
          title: 'Arturo Fuente',
          category: 'desarrollo',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
        },
        {
          title: 'Casa del Habano',
          category: 'desarrollo',
          items: ['Webapp propia', 'Branding completo', 'QR por mesa'],
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Fases',
      tag: 'fases y entregables',
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
                '4 webapps independientes con branding completo de cada marca.',
                'Acceso vía QR por mesa — el comensal escanea y ve el menú de su bar.',
                'Carta de cócteles compartida, configurable por bar.',
                'Secciones configurables: platillos, cócteles, cigarros, carta de vinos y destilados.',
                'Módulo de promociones y productos destacados con vigencia configurable.',
                'Diseño 100% responsivo y optimizado para móvil.',
              ],
            },
            {
              title: 'Control de inventario centralizado',
              items: [
                'Dashboard unificado con stock en tiempo real para los 4 bares.',
                'Gestión de insumos compartidos con descuento automático por bar.',
                'Alertas de bajo inventario por producto e insumo.',
                'Registro de movimientos: entradas, mermas, consumo por establecimiento.',
                'Reportes de consumo exportables (diario, semanal, mensual).',
                'Desactivación automática de productos sin stock.',
              ],
            },
            {
              title: 'Panel de administración',
              items: [
                'Un solo panel para gestionar los 4 bares desde cualquier dispositivo.',
                'Gestión de usuarios y permisos: admin general, admin por marca, operador.',
                'Editor visual de menús — agregar, editar, reordenar, ocultar.',
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
                'Documentación técnica completa para la migración al POS nativo.',
              ],
            },
            {
              title: 'Chatbot conversacional con IA',
              items: [
                'Asistente integrado en las 4 webapps de menú con un LLM de OpenAI por debajo.',
                'Resuelve dudas sobre carta de cigarros, cócteles, maridajes y recomendaciones.',
                'Recibe consultas de reservas y eventos y las escala al equipo del bar.',
                'Base de conocimiento entrenada con el inventario y la carta del grupo.',
                'Disponible 24/7 sin depender de personal en línea.',
                'El consumo de tokens del modelo corre por cuenta del cliente en su propia cuenta de OpenAI.',
              ],
            },
          ],
        },
        {
          number: 'fase 2',
          type: 'entregable opcional',
          title: 'Sitios web públicos + landing del grupo',
          desc: 'Presencia digital propia para cada marca y para el grupo. Cuatro landing pages con identidad visual diferenciada más una landing corporativa de Cigar Society MX como grupo — la cara hacia clientes finales, exportadores, importadores y convenciones, con blog y eventos para sumar formalidad.',
          badge: '3 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Landing page pública para cada una de las cuatro marcas.',
            'Secciones por marca: concepto, menú (enlaza al menú digital), eventos, ubicación, contacto.',
            'Diseño con branding individual de cada marca.',
            'Landing corporativa del grupo Cigar Society MX (one-pager): identidad del grupo, las 4 marcas, blog y eventos, contacto para distribuidores y prensa.',
            'CMS sencillo para que el equipo publique blog y eventos sin tocar código.',
            'Optimizado para SEO y velocidad de carga.',
            'Formulario de reservaciones o contacto en cada sitio.',
            'Un solo panel para gestionar contenido de los 5 sitios y los 4 menús.',
          ],
        },
        {
          number: 'fase 3',
          type: 'entregable opcional',
          title: 'POS nativo (noviembre 2026)',
          desc: 'Punto de venta propio que reemplaza Soft Restaurant por completo. Comandas en tiempo real, pedidos desde mesa y control de caja — todo conectado al mismo backend de la Fase 1, sin licencias recurrentes.',
          badge: '3–4 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Módulo de punto de venta nativo integrado al ecosistema Flowbit.',
            'Comandas en tiempo real para meseros y cocina.',
            'Pedidos desde mesa: el comensal ordena desde su celular.',
            'Control de caja por turno y por establecimiento.',
            'Reemplaza Soft Restaurant completamente — sin costos de licencia recurrentes.',
          ],
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'Disponibles para contratar junto con cualquier fase. Se recomiendan al arrancar la Fase 1 para llegar al go-live con el menú 100% listo.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Sesión fotográfica',
          category: 'fotografia',
          desc: 'Toma fotográfica profesional de productos, cócteles y platillos de las 4 marcas. Imágenes editadas y optimizadas, listas para cargar al menú.',
          price: '$8,000 MXN',
          label: 'costo',
        },
        {
          title: 'Carga de datos',
          category: 'soporte',
          desc: 'Alta completa del menú en la app — productos, descripciones, precios, categorías y fotografías de las 4 marcas.',
          price: '$4,500 MXN',
          label: 'costo',
        },
        {
          title: 'Paquete foto + carga',
          category: 'fotografia',
          desc: 'Ambos servicios juntos. Ahorro de $1,500 vs contratarlos por separado.',
          price: '$11,000 MXN',
          label: 'paquete',
        },
        {
          title: 'Bot IA en WhatsApp Business',
          category: 'tech',
          desc: 'Extiende el chatbot de las webapps al WhatsApp Business del grupo con un LLM de OpenAI. Atiende dudas, reservas y eventos sin depender de personal en línea, usando la misma base de conocimiento de la carta y el inventario.',
          price: '$7,000 MXN',
          label: 'add-on',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Escenarios\nde inversión',
      description: '50% al firmar acuerdo · 50% al entregar los menús en vivo. Los servicios adicionales y fases posteriores se pagan en su totalidad al momento de contratar. Todos los precios incluyen IVA.',
      cards: [
        {
          title: 'Escenario mínimo',
          desc: 'Solo Fase 1 — menús, inventario, backend, integración Soft Restaurant y chatbot IA en las 4 webapps.',
          price: '$52,200 MXN',
          label: 'fase 1 c/IVA',
        },
        {
          title: 'Recomendado',
          desc: 'Fase 1 + paquete fotográfico + carga de datos. Menú listo desde el día 1.',
          price: '$64,960 MXN',
          label: 'fase 1 + servicios c/IVA',
        },
        {
          title: 'Completo',
          desc: 'Fase 1 + Fase 2 (sitios web × 4 marcas + landing corporativa del grupo) + paquete foto + carga.',
          price: '$85,840 MXN',
          label: 'fases 1-2 + servicios c/IVA',
        },
        {
          title: 'Todo el ecosistema',
          desc: 'Fases 1 + 2 + 3 (POS nativo) + paquete foto + carga. Reemplaza Soft Restaurant por completo.',
          price: '$109,040 MXN',
          label: 'fases 1-3 + servicios c/IVA',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca de inmediato con un proceso claro de cinco pasos. Cada entrega se valida en conjunto antes de avanzar a la siguiente fase.',
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Confirmar alcance, definir qué fases y servicios adicionales van desde el inicio.' },
        { step: 'paso 2', title: 'Anticipo del 50%', desc: '$22,500 MXN + IVA — El pago inicial activa el proyecto y agenda el kickoff.' },
        { step: 'paso 3', title: 'Kickoff + levantamiento', desc: 'Sesión para revisar branding de cada marca, estructura de menús, usuarios y flujos. Si se contrató fotografía, se agenda la sesión para la semana 3.' },
        { step: 'paso 4', title: 'Entregas cada 2 semanas', desc: 'Acceso al panel admin desde la semana 3 para ir validando en tiempo real.' },
        { step: 'paso 5', title: 'Go-live y soporte', desc: 'Lanzamiento con acompañamiento. Si se contrató carga de datos, el menú ya está completo desde el primer día.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Construyamos\nel ecosistema',
      description: 'Todo está listo para arrancar. Un solo equipo, una sola visión técnica y un ecosistema diseñado para escalar con el grupo. Confirma la propuesta y agendamos el kickoff esta misma semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default cigarSociety
