import type { ProposalData } from './types'

const cigarSocietyMxEcosistemaDigital: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Cigar\nSociety MX',
      cardTitle: 'Ecosistema Digital Multi-Marca',
      cardText: 'Cuatro marcas con identidad propia — Cigar Society MX, Salón Oliva, Arturo Fuente y Casa del Habano — operando sobre un solo backend. Menús digitales por QR, inventario centralizado, sitios web públicos y un POS nativo que reemplaza Soft Restaurant por completo.',
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
      tag: 'arquitectura del sistema',
      title: 'Seis módulos,\nun solo ecosistema',
      description: 'El sistema se entrega en tres fases progresivas. Cada módulo es independiente pero comparte la misma base de datos centralizada, garantizando consistencia de inventario y operación entre los cuatro establecimientos.',
      quote: 'Cuatro marcas, un solo ecosistema. Cada bar vive su identidad mientras comparte la misma infraestructura, inventario y lógica de negocio.',
      cards: [
        {
          title: 'Menú digital por QR',
          category: 'ecommerce',
          items: [
            'Webapp independiente por bar',
            'Carta compartida configurable',
            'Módulo de promociones',
            'Diseño responsivo',
          ],
        },
        {
          title: 'Control de inventario',
          category: 'dashboard',
          items: [
            'Dashboard unificado',
            'Stock en tiempo real',
            'Alertas de bajo inventario',
            'Desactivación automática sin stock',
          ],
        },
        {
          title: 'Panel de administración',
          category: 'sistema',
          items: [
            'Gestión de usuarios y permisos',
            'Editor visual de menús',
            'Gestión de promociones',
            'Vista previa antes de publicar',
          ],
        },
        {
          title: 'Integración Soft Restaurant',
          category: 'integracion',
          items: [
            'Sincronización de productos y precios',
            'Mapeo de SKUs',
            'Documentación técnica para migración al POS nativo',
          ],
        },
        {
          title: 'Sitios web públicos',
          category: 'website',
          items: [
            'Landing page por marca',
            'Optimizado para SEO',
            'Formulario de reservaciones',
            'Panel unificado de contenido',
          ],
        },
        {
          title: 'POS nativo',
          category: 'software',
          items: [
            'Pedidos desde mesa por celular',
            'Control de caja por turno',
            'Comandas en tiempo real',
          ],
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
                'Módulo de promociones y productos destacados con vigencia configurable.',
                'Diseño 100% responsivo y optimizado para móvil.',
              ],
            },
            {
              title: 'Control de inventario centralizado',
              items: [
                'Dashboard unificado con stock en tiempo real para los 4 bares.',
                'Alertas de bajo inventario por producto e insumo.',
                'Registro de movimientos: entradas, mermas, consumo por establecimiento.',
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
          ],
        },
        {
          number: 'fase 2',
          type: 'entregable opcional',
          title: 'Sitios web públicos',
          desc: 'Presencia digital propia para cada marca. Cuatro landing pages con identidad visual diferenciada, optimizadas para posicionamiento y con formulario de reservaciones integrado.',
          badge: '2–3 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Landing page pública para cada una de las cuatro marcas.',
            'Diseño con branding individual de cada marca.',
            'Optimizado para SEO y velocidad de carga.',
            'Formulario de reservaciones o contacto por marca.',
            'Un solo panel para gestionar contenido de los 4 sitios y los 4 menús.',
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
            'Pedidos desde mesa: el comensal ordena desde su celular.',
            'Comandas en tiempo real para meseros y cocina.',
            'Control de caja por turno y por establecimiento.',
            'Reemplaza Soft Restaurant — sin costos de licencia recurrentes.',
          ],
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'El Diagnóstico tiene precio fijo. Los demás son add-ons opcionales con precios estimados — disponibles para contratar junto con cualquier fase. Se recomienda contratar el paquete foto + carga al arrancar la Fase 1 para llegar al go-live con el menú 100% listo.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Sesión fotográfica',
          category: 'fotografia',
          desc: 'Sesión fotográfica profesional de productos, cócteles y platillos de las 4 marcas. Imágenes editadas y optimizadas, listas para cargar al menú.',
          price: 'Desde $9,280 MXN',
          label: 'estimado',
        },
        {
          title: 'Carga de datos',
          category: 'soporte',
          desc: 'Carga completa del menú en la app — productos, descripciones, precios, categorías y fotografías de las 4 marcas.',
          price: 'Desde $5,220 MXN',
          label: 'estimado',
        },
        {
          title: 'Paquete foto + carga',
          category: 'fotografia',
          desc: 'Sesión fotográfica y carga de datos completa. Combinados en un solo paquete con precio especial.',
          price: 'Desde $12,760 MXN',
          label: 'paquete',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Escenarios\nde inversión',
      description: '50% al inicio · 50% a la entrega de cada fase. Los servicios adicionales y fases posteriores se pagan al contratar. Propuesta inicial (V01). Los precios aquí presentados son estimaciones (excepto el Diagnóstico que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente.',
      cards: [
        {
          title: 'Ecosistema completo',
          desc: 'Fases 1 + 2 + 3 — Menú digital, inventario, panel admin, integración Soft Restaurant, sitios web × 4 marcas y POS nativo.',
          price: '$96,280 MXN',
          label: 'total estimado',
        },
        {
          title: 'Fase 1: Core del ecosistema',
          desc: 'Menú digital × 4 marcas, inventario centralizado, panel de administración e integración con Soft Restaurant.',
          price: '$52,200 MXN',
          label: 'fase 1',
        },
        {
          title: 'Fase 2: Sitios web',
          desc: 'Cuatro landing pages públicas con branding individual, SEO y formulario de reservaciones.',
          price: '$20,880 MXN',
          label: 'fase 2',
        },
        {
          title: 'Fase 3: POS nativo',
          desc: 'Sistema de punto de venta propio que reemplaza Soft Restaurant — sin licencias recurrentes.',
          price: '$23,200 MXN',
          label: 'fase 3',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca de inmediato con un proceso claro. Cada entrega se valida en conjunto antes de avanzar a la siguiente fase.',
      steps: [
        {
          step: 'paso 1',
          title: 'Aprobación de propuesta',
          desc: 'Confirmar alcance, definir qué fases y servicios adicionales van desde el inicio.',
        },
        {
          step: 'paso 2',
          title: 'Anticipo del 50%',
          desc: '$26,100 MXN — El pago inicial activa el proyecto y agenda el kickoff.',
        },
        {
          step: 'paso 3',
          title: 'Kickoff + levantamiento',
          desc: 'Sesión para revisar branding de cada marca, estructura de menús, usuarios y flujos. Si se contrató fotografía, se agenda la sesión la semana 3.',
        },
        {
          step: 'paso 4',
          title: 'Entregas cada 2 semanas',
          desc: 'Acceso al panel admin desde la semana 3 para ir validando en tiempo real.',
        },
        {
          step: 'paso 5',
          title: 'Go-live y capacitación',
          desc: 'Lanzamiento con acompañamiento. 2 sesiones de capacitación incluidas. Hosting y dominio el primer año sin costo adicional.',
        },
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

export default cigarSocietyMxEcosistemaDigital
