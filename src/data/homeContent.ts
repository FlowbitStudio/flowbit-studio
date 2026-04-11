export const siteContent = {
  meta: {
    title: 'Flowbit — Soluciones que van más allá de tu alcance',
    description: 'Flowbit es un estudio de soluciones integrales para empresas. Automatización, diseño, marketing y desarrollo, impulsados por inteligencia artificial.',
    themeColor: '#1786FF',
  },

  nav: [
    { label: 'Nosotros', url: '#nosotros' },
    { label: 'Soluciones', url: '#soluciones' },
    { label: 'Proceso', url: '#proceso' },
    { label: 'Equipo', url: '#equipo' },
    { label: 'Contacto', url: '#contacto' },
  ],

  hero: {
    headline: 'Construimos lo que aún no está a tu alcance',
    description: 'Flowbit es un estudio de soluciones integrales para empresas. Conectamos lo que ya tienes, desarrollamos lo que te falta, e integramos inteligencia artificial para que tu operación sea más rentable — no más complicada.',
    cta: 'Habla con nosotros',
  },

  ethos: {
    preheading: 'Lo que hacemos',
    heading: 'No llegamos a vender tecnología. Llegamos a entender tu negocio.',
    body: 'Cada empresa tiene fricciones distintas. Algunas las ves todos los días. Otras ni sabes que existen hasta que alguien de afuera las señala. Nosotros hacemos las dos cosas: identificamos dónde se está escapando tu capacidad y construimos los sistemas para recuperarla.',
    cta: 'Conoce el proceso',
    cards: [
      {
        id: 1,
        title: 'Tu operación, sin los cuellos de botella',
        description: 'Sistematizamos y automatizamos los procesos que hoy dependen de personas, de memoria o de Excel. Para que tu equipo deje de apagar incendios y empiece a construir.',
        color: 'default',
      },
      {
        id: 2,
        title: 'Diseño e identidad que trabajan por ti',
        description: 'Una marca bien construida vende antes de que alguien hable contigo. Diseño visual, identidad de marca, animación y contenido que comunica con precisión lo que haces y por qué importa.',
        color: 'teal',
      },
      {
        id: 3,
        title: 'Marketing que genera negocio real',
        description: 'No solo presencia digital — estrategia. Conectamos canales, automatizamos seguimientos y ponemos inteligencia artificial donde más duele: en la conversión y la retención de clientes.',
        color: 'red',
      },
      {
        id: 4,
        title: 'Herramientas hechas para como trabajas tú',
        description: 'Cuando ninguna solución del mercado encaja, la construimos. Apps, paneles, bots, integraciones. Todo diseñado desde cero para tu operación — no al revés.',
        color: 'light',
      },
    ],
  },

  sectores: {
    preheading: 'Para quién es Flowbit',
    heading: 'Si tienes una operación que crecer, tenemos una solución que escala contigo.',
    body: 'Trabajamos con empresas de distintos sectores, pero con el mismo punto en común: tienen la visión para crecer y necesitan los sistemas para sostenerlo.',
    items: [
      { name: 'Restaurantes & F&B', description: 'Automatizamos pedidos, delivery, atención y reportes. Conectamos tu operación para que vendas más con el mismo equipo.' },
      { name: 'Despachos & Servicios Profesionales', description: 'Sistematizamos la gestión de clientes, seguimientos y facturación para que el negocio corra mientras tú te enfocas en lo que sabes hacer.' },
      { name: 'Clínicas & Salud', description: 'Desde agendamiento automático hasta seguimiento post-consulta. Menos fricción administrativa, más atención al paciente.' },
      { name: 'Retail & Comercio', description: 'Inventario, ventas, atención al cliente y campañas de reactivación — todo conectado y corriendo en automático.' },
      { name: 'Agentes & Desarrolladoras Inmobiliarias', description: 'Captura de leads, seguimiento por WhatsApp, agenda de visitas y CRM integrado. Tu cartera de clientes, siempre activa.' },
      { name: 'Manufactura & Operaciones', description: 'Reportes en tiempo real, control de producción y comunicación interna sin fricciones. Visibilidad total de tu planta.' },
    ],
  },

  portfolio: {
    preheading: 'Resultados',
    heading: 'Problemas reales. Soluciones que se quedan.',
    cta: 'Ver todos los casos',
    cases: [
      { id: 1, name: 'Alpha Deal', description: 'Private asset analysis, reimagined.', hoverBg: '#1c412e', hoverText: '#dadada', logo: '/portfolio-logos/1.svg', url: 'https://www.alphadeal.ai/' },
      { id: 2, name: 'Edda', description: 'A better, social-first, audio book streaming platform.', hoverBg: '#5640ff', hoverText: '#dadada', logo: '/portfolio-logos/2.svg', url: 'https://joinedda.com/' },
      { id: 3, name: 'Novyra', description: 'Precision matching for clinical oncology trials.', hoverBg: '#fffebe', hoverText: '#111111', logo: '/portfolio-logos/3.svg', url: 'https://novyra.ai/' },
      { id: 4, name: 'Stratahub', description: 'AI-readiness hub for enterprise data.', hoverBg: '#0000f7', hoverText: '#dadada', logo: '/portfolio-logos/4.svg', url: 'https://stratahub.com/' },
      { id: 5, name: 'Remix Labs', description: 'Advanced time series modeling for tomorrow\'s data flows.', hoverBg: '#e5ff56', hoverText: '#111111', logo: '/portfolio-logos/5.svg', url: 'https://remixlabs.ai/' },
      { id: 6, name: 'US Autonomous Systems', description: 'American-made drone accessories for frontline rescue.', hoverBg: '#090909', hoverText: '#dadada', logo: '/portfolio-logos/6.svg', url: '#' },
    ],
  },

  equipo: {
    heading: 'El equipo detrás de Flowbit',
    taglineTop: 'Construimos sistemas.',
    taglineBottom: 'Resolvemos problemas reales.',
    description: 'Dos personas con experiencia práctica en automatización, diseño y tecnología aplicada a negocios mexicanos. Sin intermediarios, sin estructuras lentas — trabajas directo con quien construye.',
    cta: 'Conoce al equipo',
    members: [
      {
        name: 'André Cortés',
        title: 'Founder',
        bio: 'Diseñador, desarrollador y arquitecto de sistemas de automatización. Ha construido infraestructura operativa para negocios en múltiples industrias usando IA, n8n, Supabase y herramientas conversacionales.',
        linkedin: '#',
        photo: '/placeholder-andre.svg',
      },
      {
        name: 'César Almada',
        title: 'Founder',
        bio: 'Co-fundador de Flowbit. Experiencia en estrategia de negocios y operaciones.',
        linkedin: '#',
        photo: '/placeholder-cesar.svg',
      },
    ],
  },

  clientes: {
    preheading: 'Para empresas',
    heading: 'Tu negocio puede hacer más. Con lo que ya tiene.',
    body: 'No necesitas más empleados, más herramientas ni más presupuesto. Necesitas que lo que ya tienes funcione junto, sin fricciones, sin errores manuales y sin depender de que alguien recuerde hacer algo. Eso es lo que construimos.',
    cta: 'Empieza con un diagnóstico',
    cards: [
      {
        id: 1,
        title: 'Empieza en días, no en meses',
        description: 'Diagnóstico claro, propuesta sin rodeos, implementación que arranca rápido. Sin procesos de onboarding eternos ni documentación que nadie lee.',
        color: 'teal',
      },
      {
        id: 2,
        title: 'Modular y a tu medida',
        description: 'No vendemos paquetes genéricos. Construimos la solución exacta para tu problema específico — y solo pagas por lo que necesitas.',
        color: 'red',
      },
      {
        id: 3,
        title: 'Siempre sabes qué está pasando',
        description: 'Visibilidad total desde el primer día. Reportes, accesos y comunicación directa con el equipo que está construyendo tu sistema.',
        color: 'light',
      },
    ],
  },

  diagnostico: {
    preheading: 'El primer paso',
    heading: 'Un diagnóstico que vale lo que cuesta.',
    body: 'Antes de proponer cualquier solución, nos metemos en tu operación. Dos horas donde identificamos exactamente dónde se está perdiendo rentabilidad, qué se puede automatizar y qué te conviene construir. Sin compromisos, con entregables.',
    price: '$5,000 MXN',
    priceNote: 'Se descuenta del proyecto si decides avanzar',
    cta: 'Agenda tu diagnóstico',
    ctaSecondary: '¿Tienes dudas antes de agendar? Escríbenos por WhatsApp',
    whatsapp: 'https://wa.me/524774792305474',
  },

  proceso: {
    preheading: 'Cómo trabajamos',
    heading: 'Sin tecnicismos. Sin sorpresas. Un proceso claro desde el día uno.',
    steps: [
      { number: '01', name: 'Diagnóstico', description: 'Nos metemos en tu operación. Mapeamos procesos, identificamos fricciones y detectamos exactamente dónde se está perdiendo rentabilidad o capacidad. Tiene un costo de $5,000 MXN — y se descuenta del proyecto si decides avanzar.' },
      { number: '02', name: 'Propuesta', description: 'Te presentamos la solución con alcance claro, impacto estimado y precio cerrado. Sin letra chica, sin rangos ambiguos. Sabes exactamente qué vas a recibir antes de firmar.' },
      { number: '03', name: 'Construcción', description: 'Implementamos el sistema. Diseño, automatización, desarrollo o lo que corresponda — todo en un timeline definido con entregas visibles. Setup en semanas, no meses.' },
      { number: '04', name: 'Crecemos juntos', description: 'No desaparecemos al entregar. Nos quedamos con mantenimiento, ajustes y mejoras continuas. El sistema evoluciona conforme tu negocio crece.' },
    ],
  },

  diferenciadores: [
    { title: 'Diagnóstico antes de propuesta', detail: 'Nunca cotizamos sin entender primero. Eso nos cuesta tiempo y lo asumimos — porque la solución correcta vale más que la venta rápida.' },
    { title: 'IA integrada, no decorativa', detail: 'No usamos inteligencia artificial como argumento de venta. La usamos en el núcleo de lo que construimos: agentes, flujos, análisis y automatizaciones que funcionan en producción.' },
    { title: 'Implementación en semanas', detail: 'Sin metodologías eternas. Del diagnóstico al sistema corriendo hay un camino corto — porque sabemos exactamente cómo caminarlo.' },
    { title: 'Modular por definición', detail: 'Cada solución se construye sobre lo anterior. Empiezas donde tiene sentido empezar y escala cuando el negocio lo pide, no cuando el proveedor lo decide.' },
    { title: 'Hecho en México, para México', detail: 'Entendemos la realidad operativa de las PYMEs mexicanas. Sus restricciones, sus tiempos, su cultura. No adaptamos soluciones de otro contexto — las construimos desde aquí.' },
  ],

  footer: {
    heading: '¿Listo para conectar lo que tienes con lo que puedes hacer?',
    body: 'Empresas con visión. Operaciones que necesitan escalar. Escríbenos y movemos.',
    cta: 'Habla con nosotros',
    nav: [
      { label: 'Nosotros', url: '#nosotros' },
      { label: 'Soluciones', url: '#soluciones' },
      { label: 'Proceso', url: '#proceso' },
      { label: 'Equipo', url: '#equipo' },
      { label: 'Contacto', url: '#contacto' },
    ],
    legal: [
      { label: 'Política de Privacidad', url: '/legal/privacidad' },
      { label: 'Términos y Condiciones', url: '/legal/terminos' },
    ],
    copyright: '© 2026 Flowbit',
    contact: {
      email: 'hola@flowbit.studio',
      whatsapp: 'https://wa.me/524774792305474',
      location: 'León, Guanajuato, México',
    },
  },

  contactForm: {
    title: 'Cuéntanos qué necesitas.',
    submitButton: 'Enviar mensaje',
    successMessage: 'Listo, ya lo tenemos. Te contactamos en menos de 24 horas.',
    errorMessage: 'Algo salió mal. Intenta de nuevo o escríbenos por WhatsApp.',
    fields: {
      role: {
        label: 'Me interesa',
        options: ['Diagnóstico ($5,000 MXN)', 'Automatización', 'Diseño & Marca', 'Marketing', 'Desarrollo a medida', 'Otro'],
      },
      name: { label: 'Nombre', required: true },
      lastName: { label: 'Apellido', required: true },
      email: { label: 'Email', required: true },
      whatsapp: { label: 'WhatsApp', required: true },
      company: { label: 'Nombre de la empresa', required: true },
      industry: {
        label: 'Giro o industria',
        options: ['Restaurantes & F&B', 'Servicios Profesionales', 'Clínicas & Salud', 'Retail', 'Inmobiliaria', 'Manufactura', 'Otro'],
      },
      message: { label: 'Cuéntanos más', placeholder: '¿Qué problema quieres resolver?' },
      consent: { label: 'Acepto el tratamiento de mis datos conforme a la Política de Privacidad de Flowbit.' },
    },
  },
}
