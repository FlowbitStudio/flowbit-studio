import type { CatalogoBase, SitioContenido } from './tipos'

// Contenido por defecto: lo aprobado en el lienzo de diseño. El sitio lo usa mientras la consola
// no tenga su propia versión publicada (ver fuente.ts). Lo que va entre [corchetes] está pendiente.

const DIAGNOSTICO = '[$5,000 o $10,000 MXN]'

export const contenidoPredeterminado: SitioContenido = {
  navegacion: {
    enlaces: [
      { texto: 'Soluciones', href: '#soluciones' },
      { texto: 'Flowbit Base', href: '#flowbit-base' },
      { texto: 'Casos', href: '#casos' },
      { texto: 'Proceso', href: '#proceso' },
      { texto: 'Nosotros', href: '#nosotros' },
    ],
    demo: { texto: 'Agenda una demo', href: '#contacto' },
  },

  hero: {
    titulo: 'Construimos lo que aún no está a tu alcance',
    descripcion: 'Flowbit es un estudio de soluciones integrales para empresas. Conectamos lo que ya tienes, desarrollamos lo que te falta, e integramos inteligencia artificial para que tu operación sea más rentable — no más complicada.',
    boton: { texto: 'Habla con nosotros', href: '#contacto' },
  },

  ethos: {
    etiqueta: 'Lo que hacemos',
    titulo: 'No llegamos a vender tecnología. Llegamos a entender tu negocio.',
    descripcion: 'Cada empresa tiene fricciones distintas. Algunas las ves todos los días. Otras ni sabes que existen hasta que alguien de afuera las señala. Nosotros hacemos las dos cosas: identificamos dónde se está escapando tu capacidad y construimos los sistemas para recuperarla.',
    boton: { texto: 'Conoce el proceso', href: '#proceso' },
    tarjetas: [
      { titulo: 'Operación\nsin fricción.', descripcion: 'Sistematizamos y automatizamos los procesos que hoy dependen de personas, de memoria o de Excel. Para que tu equipo deje de apagar incendios y empiece a construir.', icono: { url: '/sitio/ethos/1.png', alt: '' }, tono: 'oscura' },
      { titulo: 'Marca que\nvende por ti.', descripcion: 'Una marca bien construida vende antes de que alguien hable contigo. Diseño visual, identidad de marca, animación y contenido que comunica con precisión lo que haces y por qué importa.', icono: { url: '/sitio/ethos/2.png', alt: '' }, tono: 'clara' },
      { titulo: 'Marketing que\ngenera negocio.', descripcion: 'No solo presencia digital — estrategia. Conectamos canales, automatizamos seguimientos y ponemos inteligencia artificial donde más duele: en la conversión y la retención de clientes.', icono: { url: '/sitio/ethos/3.png', alt: '' }, tono: 'oscura' },
      { titulo: 'Software\na tu medida.', descripcion: 'Cuando ninguna solución del mercado encaja, la construimos. Apps, paneles, bots, integraciones. Todo diseñado desde cero para tu operación — no al revés.', icono: { url: '/sitio/ethos/4.png', alt: '' }, tono: 'clara' },
    ],
  },

  bits: {
    etapas: [
      { etiqueta: '00 — Hoy', titulo: 'Así se ve hoy tu operación.', descripcion: 'Datos sueltos. Procesos en la memoria de alguien. Excel, WhatsApp y libretas que no se hablan.' },
      { etiqueta: '01 — Diagnóstico', titulo: 'Primero, orden.', descripcion: 'Entendemos cada pieza y le damos su lugar antes de construir nada.' },
      { etiqueta: '02 — Automatización', titulo: 'Luego, flujo.', descripcion: 'La información se mueve sola entre tus herramientas, sin detenerse. Nadie copia datos a mano.' },
      { etiqueta: '03 — Flowbit Base', titulo: 'Módulos que se encienden.', descripcion: 'Sólo lo que tu giro necesita. El resto espera apagado hasta que lo pidas.' },
      { etiqueta: '04 — Inteligencia de negocios', titulo: 'Y por fin, claridad.', descripcion: 'Ves qué vende, qué cuesta y dónde se fuga el dinero. En tiempo real.' },
      { etiqueta: '05', titulo: 'Eso es Flowbit.', descripcion: 'Un solo sistema: todo conectado, todo en movimiento. Los mismos bits del principio, ahora en orden.' },
    ],
  },

  soluciones: {
    etiqueta: 'Soluciones',
    titulo: 'Todo lo que tu operación necesita,\nen un solo equipo.',
    descripcion: 'Sistemas a la medida, chatbots y agentes de IA, inteligencia de negocios, marca, contenido y soporte. Un solo equipo, sin intermediarios.',
    filas: [
      { numero: '01', nombre: 'Tecnología', color: '#1786FF', tinta: '#ffffff', servicios: ['Sistemas a la medida', 'Chatbots y agentes de IA', 'Inteligencia de negocios', 'Automatizaciones', 'Sitios, apps y e-commerce'], href: '#contacto' },
      { numero: '02', nombre: 'Diseño', color: '#FF4444', tinta: '#111111', servicios: ['Branding e identidad', 'Manual de marca', 'Editorial y presentaciones'], href: '#contacto' },
      { numero: '03', nombre: 'Audiovisual', color: '#00C9A7', tinta: '#111111', servicios: ['Fotografía', 'Video', 'Animación y motion graphics'], href: '#contacto' },
      { numero: '04', nombre: 'Crecimiento', color: '#111111', tinta: '#ffffff', servicios: ['SEO', 'Analytics y tracking', 'Estrategia de contenido y redes'], href: '#contacto' },
      { numero: '05', nombre: 'Operación', color: '#15374C', tinta: '#ffffff', servicios: ['Soporte y mantenimiento', 'Capacitación y onboarding'], href: '#contacto' },
      { numero: '06', nombre: 'Diagnóstico', color: '#ffffff', tinta: '#111111', servicios: ['El punto de partida: dos horas dentro de tu operación', DIAGNOSTICO], href: '#diagnostico' },
    ],
  },

  base: {
    etiqueta: 'Producto · Flowbit Base',
    titulo: 'Tu negocio,\nen un solo HUB.',
    descripcion: 'Caja, inventario, clientes, marketing, facturación y tu equipo en un solo panel. Varias marcas o sucursales, una sola operación. Elige tu giro: se encienden sólo los módulos que necesitas.',
    boton: { texto: 'Agenda una demo de tu giro', href: '#contacto' },
  },

  sectores: {
    etiqueta: 'Para quién es Flowbit',
    titulo: 'Si tienes una operación que crecer, tenemos una solución que escala contigo.',
    descripcion: 'Trabajamos con empresas de distintos sectores, pero con el mismo punto en común: tienen la visión para crecer y necesitan los sistemas para sostenerlo.',
    sectores: [
      { nombre: 'Restaurantes & F&B', descripcion: 'Automatizamos pedidos, delivery, atención y reportes. Conectamos tu operación para que vendas más con el mismo equipo.' },
      { nombre: 'Despachos & Servicios Profesionales', descripcion: 'Sistematizamos la gestión de clientes, seguimientos y facturación para que el negocio corra mientras tú te enfocas en lo que sabes hacer.' },
      { nombre: 'Clínicas & Salud', descripcion: 'Desde agendamiento automático hasta seguimiento post-consulta. Menos fricción administrativa, más atención al paciente.' },
      { nombre: 'Retail & Comercio', descripcion: 'Inventario, ventas, atención al cliente y campañas de reactivación — todo conectado y corriendo en automático.' },
      { nombre: 'Agentes & Desarrolladoras Inmobiliarias', descripcion: 'Captura de leads, seguimiento por WhatsApp, agenda de visitas y CRM integrado. Tu cartera de clientes, siempre activa.' },
      { nombre: 'Manufactura & Operaciones', descripcion: 'Reportes en tiempo real, control de producción y comunicación interna sin fricciones. Visibilidad total de tu planta.' },
    ],
  },

  portfolio: {
    etiqueta: 'Resultados',
    titulo: 'Problemas reales.\nSoluciones que se quedan.',
    boton: { texto: 'Ver todos los casos', href: '#casos' },
    casos: Array.from({ length: 6 }, (_, i) => ({
      slug: `proyecto-0${i + 1}`,
      nombre: `[Proyecto 0${i + 1}]`,
      cliente: '[Cliente]',
      giro: '[Giro]',
      resumen: '[Qué se construyó y qué resultado dio — pendiente de André]',
      servicios: ['[Sistema a la medida]', '[Branding]'],
      stack: ['[React]', '[Supabase]', '[n8n]'],
      tiempo: '[N semanas]',
      reto: '[El problema del cliente en una o dos frases, en sus palabras. Qué le costaba, qué no podía ver, qué dependía de una persona.]',
      piezas: ['[Módulo o pieza entregada]', '[Módulo o pieza entregada]', '[Módulo o pieza entregada]', '[Módulo o pieza entregada]'],
      resultados: [
        { cifra: '[—]', texto: '[Métrica real, con su unidad]' },
        { cifra: '[—]', texto: '[Métrica real, con su unidad]' },
        { cifra: '[—]', texto: '[Métrica real, con su unidad]' },
      ],
      galeria: [],
      publicado: true,
      orden: i,
    })),
  },

  porque: {
    etiqueta: 'Por qué Flowbit',
    titulo: 'Cuatro razones para no buscar a nadie más.',
    pista: 'Desliza para recorrerlas.',
    razones: [
      { palabra: 'Diagnóstico', titulo: 'Diagnóstico antes de propuesta.', descripcion: 'Nunca cotizamos sin entender primero. Eso nos cuesta tiempo y lo asumimos — porque la solución correcta vale más que la venta rápida.' },
      { palabra: 'Inteligencia', titulo: 'IA integrada, no decorativa.', descripcion: 'No usamos inteligencia artificial como argumento de venta. La usamos en el núcleo de lo que construimos: agentes, flujos, análisis y automatizaciones que funcionan en producción.' },
      { palabra: 'Tiempo', titulo: 'Implementación en semanas.', descripcion: 'Sin metodologías eternas. Del diagnóstico al sistema corriendo hay un camino corto — porque sabemos exactamente cómo caminarlo.' },
      { palabra: 'Escala', titulo: 'Modular por definición.', descripcion: 'Cada solución se construye sobre lo anterior. Empiezas donde tiene sentido empezar y escala cuando el negocio lo pide, no cuando el proveedor lo decide.' },
    ],
  },

  equipo: {
    titulo: 'El equipo detrás de Flowbit',
    descripcion: 'Dos personas con experiencia práctica en automatización, diseño y tecnología aplicada a negocios mexicanos. Sin intermediarios, sin estructuras lentas — trabajas directo con quien construye.',
    boton: { texto: 'Conoce al equipo', href: '#nosotros' },
    frases: ['Construimos sistemas.', 'Resolvemos problemas reales.'],
    miembros: [
      { nombre: 'André Cortés', puesto: 'Founder', bio: 'Diseñador, desarrollador y arquitecto de sistemas de automatización. Ha construido infraestructura operativa para negocios en múltiples industrias usando IA, n8n, Supabase y herramientas conversacionales.', foto: { url: '/profile-pics/andre.jpg', alt: 'André Cortés' }, enlace: { texto: 'Conecta con André', href: '[LinkedIn de André]' } },
      { nombre: 'César Almada', puesto: 'Founder', bio: '[Bio de César — pendiente]', enlace: { texto: 'Conecta con César', href: '[LinkedIn de César]' } },
    ],
  },

  clientes: {
    etiqueta: 'Para empresas',
    titulo: 'Tu negocio puede hacer\nmás. Con lo que ya tiene.',
    descripcion: 'No necesitas más empleados, más herramientas ni más presupuesto. Necesitas que lo que ya tienes funcione junto, sin fricciones, sin errores manuales y sin depender de que alguien recuerde hacer algo. Eso es lo que construimos.',
    boton: { texto: 'Empieza con un diagnóstico', href: '#diagnostico' },
    ventajas: [
      { titulo: 'Empieza en días, no en meses', descripcion: 'Diagnóstico claro, propuesta sin rodeos, implementación que arranca rápido. Sin procesos de onboarding eternos ni documentación que nadie lee.', color: '#00C9A7', icono: { url: '/card-icons/1.svg', alt: '' } },
      { titulo: 'Modular y a tu medida', descripcion: 'No vendemos paquetes genéricos. Construimos la solución exacta para tu problema específico — y solo pagas por lo que necesitas.', color: '#FF4444', icono: { url: '/card-icons/2.svg', alt: '' } },
      { titulo: 'Siempre sabes qué está pasando', descripcion: 'Visibilidad total desde el primer día. Reportes, accesos y comunicación directa con el equipo que está construyendo tu sistema.', color: '#e7e7e7', icono: { url: '/card-icons/3.svg', alt: '' } },
    ],
  },

  liston: {
    etiqueta: 'Ya operan con Flowbit',
    pista: 'Pasa el cursor para leer',
    clientes: [
      { nombre: 'Cigar Society', giro: 'Casas de puros' },
      { nombre: 'Can Can Press', giro: 'Editorial y merch' },
      { nombre: 'Camiones a Conciertos', giro: 'Transporte a eventos' },
      { nombre: 'Martiniano', giro: '[giro — por confirmar]' },
    ],
  },

  proceso: {
    etiqueta: 'Cómo trabajamos',
    titulo: 'Sin tecnicismos.\nSin sorpresas.',
    subtitulo: 'Un proceso claro\ndesde el día uno.',
    pista: 'Desliza para recorrerlo',
    etapas: [
      { nombre: 'Diagnóstico', descripcion: `Nos metemos en tu operación. Mapeamos procesos, identificamos fricciones y detectamos exactamente dónde se está perdiendo rentabilidad o capacidad. Tiene un costo de ${DIAGNOSTICO} — y se descuenta del proyecto si decides avanzar.`, color: '#00C9A7' },
      { nombre: 'Propuesta', descripcion: 'Te presentamos la solución con alcance claro, impacto estimado y precio cerrado. Sin letra chica, sin rangos ambiguos. Sabes exactamente qué vas a recibir antes de firmar.', color: '#FF4444' },
      { nombre: 'Construcción', descripcion: 'Implementamos el sistema. Diseño, automatización, desarrollo o lo que corresponda — todo en un timeline definido con entregas visibles. Setup en semanas, no meses.', color: '#e7e7e7' },
      { nombre: 'Crecemos juntos', descripcion: 'No desaparecemos al entregar. Nos quedamos con mantenimiento, ajustes y mejoras continuas. El sistema evoluciona conforme tu negocio crece.', color: '#1786FF', corto: 'Crecemos' },
    ],
  },

  diagnostico: {
    etiqueta: 'El primer paso',
    titulo: 'Un diagnóstico que vale\nlo que cuesta.',
    descripcion: 'Antes de proponer cualquier solución, nos metemos en tu operación. Dos horas donde identificamos exactamente dónde se está perdiendo rentabilidad, qué se puede automatizar y qué te conviene construir. Sin compromisos, con entregables.',
    notaPrecio: 'Se descuenta del proyecto si decides avanzar',
    boton: { texto: 'Agenda tu diagnóstico', href: '#contacto' },
    whatsapp: { texto: '¿Tienes dudas antes de agendar? Escríbenos por WhatsApp', href: '[WhatsApp de Flowbit]' },
  },

  faq: {
    etiqueta: 'Preguntas frecuentes',
    titulo: 'Antes de\nagendar.',
    descripcion: 'Lo que casi todos nos preguntan en la primera llamada. Si tu duda no está aquí, escríbenos.',
    boton: { texto: 'Habla con nosotros', href: '#contacto' },
    preguntas: [
      { pregunta: '¿Cuánto cuesta un proyecto?', respuesta: `Depende de lo que haya que construir, por eso empezamos con un diagnóstico. Después recibes una propuesta con precio cerrado: sin letra chica ni rangos ambiguos. El diagnóstico cuesta ${DIAGNOSTICO} y se descuenta del proyecto si decides avanzar.` },
      { pregunta: '¿Cuánto tarda?', respuesta: 'Semanas, no meses. Cada proyecto lleva un timeline definido con entregas visibles, así que siempre sabes en qué va.' },
      { pregunta: '¿Flowbit Base o algo a la medida?', respuesta: 'Si tu giro ya está en Flowbit Base, arrancas con sus módulos encendidos y lo ajustamos a tu operación. Cuando ninguna solución encaja, lo construimos desde cero. El diagnóstico te dice cuál te conviene.' },
      { pregunta: '¿Tengo que dejar lo que ya uso?', respuesta: 'No. Conectamos lo que ya tienes y desarrollamos lo que te falta. Lo que funciona se queda; lo que estorba, se integra o se reemplaza.' },
      { pregunta: '¿Qué pasa después de entregar?', respuesta: 'No desaparecemos. Nos quedamos con mantenimiento, ajustes y mejoras continuas, y capacitamos a tu equipo para que opere el sistema desde el primer día.' },
      { pregunta: '¿Con quién voy a tratar?', respuesta: 'Directo con quien construye. Sin intermediarios ni estructuras lentas: el mismo equipo te escucha, diseña y entrega.' },
    ],
  },

  footer: {
    correo: 'hola@flowbit.studio',
    ciudad: 'León, Guanajuato, México',
    titulo: '¿Listo para conectar lo que\ntienes con lo que puedes\nhacer?',
    descripcion: 'Empresas con visión. Operaciones que necesitan escalar. Escríbenos y movemos.',
    boton: { texto: 'Habla con nosotros', href: '#contacto' },
    enlaces: [
      { texto: 'Nosotros', href: '#nosotros' },
      { texto: 'Soluciones', href: '#soluciones' },
      { texto: 'Proceso', href: '#proceso' },
      { texto: 'Equipo', href: '#nosotros' },
      { texto: 'Contacto', href: '#contacto' },
    ],
    legales: [
      { texto: 'Política de Privacidad', href: '[url de privacidad]' },
      { texto: 'Términos y Condiciones', href: '[url de términos]' },
    ],
    derechos: '© 2026 Flowbit',
  },

  contacto: {
    intereses: ['Demo de Flowbit Base', 'Diagnóstico', 'Automatización', 'Desarrollo a medida', 'Diseño & Marca', 'Marketing', 'Otro'],
    giros: ['Restaurantes & F&B', 'Servicios Profesionales', 'Clínicas & Salud', 'Retail', 'Inmobiliaria', 'Manufactura', 'Otro'],
    promesa: 'Te contactamos en menos de 24 horas.',
    aviso: 'Acepto el tratamiento de mis datos conforme a la Política de Privacidad de Flowbit.',
    whatsapp: '[WhatsApp de Flowbit]',
  },
}

// Catálogo de respaldo, igual al que se ve en el lienzo. En producción viene de la base
// (modulos + servicios + plantillas_giro + giro_modulos), ver fuente.ts.
export const catalogoPredeterminado: CatalogoBase = {
  modulos: [
    ['caja', 'Caja'], ['catalogo', 'Inventario'], ['mayoreo', 'Mayoreo'], ['eventos', 'Eventos'], ['crm', 'CRM'], ['correo', 'Correo'],
    ['marketing', 'Marketing'], ['creative', 'Creative HUD'], ['presencia', 'Presencia'], ['administracion', 'Administración'], ['personal', 'Personal'], ['equipo', 'Equipo'],
  ].map(([clave, nombre], orden) => ({ clave, nombre, descripcion: '', orden, precio: null, ciclo: 'mensual' as const })),
  giros: [
    ['cafeteria', 'Cafetería', ['caja', 'catalogo', 'presencia', 'administracion', 'marketing']],
    ['restaurante_bar', 'Restaurante', ['caja', 'catalogo', 'presencia', 'eventos', 'crm', 'administracion', 'marketing']],
    ['pasteleria', 'Pastelería', ['caja', 'catalogo', 'mayoreo', 'crm', 'administracion', 'marketing']],
    ['vinos_licores', 'Vinos', ['caja', 'catalogo', 'mayoreo', 'crm', 'administracion', 'correo']],
    ['puros', 'Puros', ['caja', 'catalogo', 'crm', 'eventos', 'administracion', 'marketing']],
    ['comercio', 'Comercio', ['mayoreo', 'catalogo', 'crm', 'creative', 'presencia', 'administracion']],
    ['agencia', 'Agencia', ['crm', 'correo', 'marketing', 'creative', 'administracion', 'personal', 'equipo']],
    ['servicios', 'Servicios', ['crm', 'correo', 'administracion', 'personal', 'equipo']],
  ].map(([clave, nombre, modulos]) => ({ clave: clave as string, nombre: nombre as string, modulos: modulos as string[] })),
  precioDiagnostico: null,
}
