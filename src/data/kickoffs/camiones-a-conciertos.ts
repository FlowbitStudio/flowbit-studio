import type { KickoffData } from '../kickoff-types'

const camionesAConciertos: KickoffData = {
  client: 'Camiones a Conciertos',
  date: '05.10.2026',

  slides: [
    {
      kind: 'cover',
      chapter: 'Kickoff',
      tone: 'dark',
      eyebrow: 'Kickoff de proyecto',
      title: 'Camiones a\nConciertos',
      subtitle: 'Reservas, cobro, sitio con tienda y bot de WhatsApp. Ocho semanas para que la operación deje el Excel.',
      facts: [
        { label: 'Arranque', value: '05.10' },
        { label: 'En producción', value: '30.11' },
        { label: 'Operación real', value: '01.12' },
        { label: 'Duración', value: '8 semanas' },
      ],
    },

    {
      kind: 'agenda',
      chapter: 'Agenda',
      title: 'Lo que vemos hoy',
      items: [
        { title: 'Objetivo y alcance', desc: 'Qué se entrega el 30 de noviembre y qué queda fuera.' },
        { title: 'Plan de construcción', desc: 'El orden, el cronograma y cada bloque con sus fechas.' },
        { title: 'Hitos de validación', desc: 'Qué van a poder probar ustedes y cuándo.' },
        { title: 'Insumos y riesgos', desc: 'Lo que necesitamos de su lado y lo que puede mover la fecha.' },
        { title: 'Acuerdos y esta semana', desc: 'Cómo vamos a trabajar y qué sale de esta reunión.' },
      ],
    },

    {
      kind: 'statement',
      chapter: 'Objetivo',
      tone: 'blue',
      eyebrow: 'El objetivo',
      text: 'El 30 de noviembre en producción. El 1 de diciembre vendiendo con el sistema nuevo.',
      footnote: 'Fases 1, 2 y 4 · 8 semanas de desarrollo · 2 meses de soporte incluidos',
    },

    {
      kind: 'pillars',
      chapter: 'Alcance',
      eyebrow: 'Alcance aprobado',
      title: 'Cuatro piezas sobre una sola base',
      pillars: [
        {
          title: 'Reservas y panel',
          points: [
            'Cupo por unidad y por punto de abordaje',
            'Apartado de $300, saldo y fecha límite',
            'Lista de espera y reoferta automática',
            'Panel con ficha de pasajero y bitácora',
          ],
        },
        {
          title: 'Pagos y cobranza',
          points: [
            'Link de pago con tarjeta, transferencia y tiendas',
            'Conciliación automática y pagos en oficina',
            'Cargo por servicio configurable',
            'Tablero de cobranza por tour',
          ],
        },
        {
          title: 'Sitio y tienda',
          points: [
            'Página por evento generada desde la agenda',
            'Reserva directa contra cupo real',
            'Tienda CC MERCH con el mismo checkout',
            'SEO técnico y panel de contenido',
          ],
        },
        {
          title: 'Bot de WhatsApp',
          points: [
            'Conectado al número oficial',
            'Reserva dentro del chat con link de pago',
            'Recordatorios de liquidación',
            'Handoff a una persona del equipo',
          ],
        },
      ],
      note: 'Fuera de este proyecto: Fase 3 (boletaje digital y wallet) y Fase 5 (flota y analítica). La base se construye para recibirlas sin rehacer nada.',
    },

    {
      kind: 'sequence',
      chapter: 'Plan',
      tone: 'dark',
      eyebrow: 'Orden de construcción',
      title: 'Primero el cupo real, después todo lo que lo vende',
      steps: [
        { title: 'Reservas', why: 'Es el núcleo. Sin cupo confiable no hay nada que vender en el sitio ni en el chat.' },
        { title: 'Sitio y pagos', why: 'Se montan sobre la API de reservas mientras el panel se termina de cerrar.' },
        { title: 'Tienda', why: 'Reusa el checkout de los tours: entra cuando el cobro ya está probado.' },
        { title: 'Bot', why: 'Llega al final a propósito: se conecta a una API ya probada y vende contra cupo real desde el día uno.' },
      ],
    },

    {
      kind: 'timeline',
      chapter: 'Plan',
      eyebrow: 'Cronograma',
      title: 'Ocho semanas, bloques traslapados',
      start: '2026-10-05',
      end: '2026-11-30',
      bars: [
        { label: 'Arranque y Diagnóstico', from: '2026-10-05', to: '2026-10-09' },
        { label: 'Backend de reservas y panel', from: '2026-10-05', to: '2026-10-30', accent: true },
        { label: 'Frontend público de reservas', from: '2026-10-19', to: '2026-11-13' },
        { label: 'Pagos y cobranza', from: '2026-10-26', to: '2026-11-13' },
        { label: 'Tienda CC MERCH', from: '2026-11-09', to: '2026-11-20' },
        { label: 'Bot de WhatsApp', from: '2026-11-16', to: '2026-11-27' },
        { label: 'Integración y salida', from: '2026-11-16', to: '2026-11-30', accent: true },
      ],
      milestones: [
        { date: '2026-10-19', label: 'Panel en prueba' },
        { date: '2026-10-30', label: 'Backend completo' },
        { date: '2026-11-13', label: 'Sitio y cobro' },
        { date: '2026-11-20', label: 'Tienda' },
        { date: '2026-11-30', label: 'Producción' },
      ],
    },

    {
      kind: 'block',
      chapter: 'Bloque 0',
      tone: 'dark',
      number: '00',
      title: 'Arranque y Diagnóstico',
      dates: '5 – 9 oct',
      summary: 'La semana en la que entendemos la operación como es hoy, con los archivos reales enfrente, y en la que se abren las cuentas de terceros que tardan en aprobarse. De esta semana depende que el 30 de noviembre se sostenga.',
      tasks: [
        { text: 'Kickoff con Alejandro y el responsable operativo', when: 'Lun 5 oct', owner: 'Ambos' },
        { text: 'Enviar los Excel de la operación: tours, pasajeros, apartados, liquidaciones, asignación por camión y punto', when: 'Mié 7 oct', owner: 'Cliente' },
        { text: 'Sesión para recorrer el flujo completo: consulta, reserva, apartado, liquidación, listas y abordaje', when: 'Esta semana', owner: 'Ambos' },
        { text: 'Diagnóstico: agenda, tarifas, unidades, puntos y horarios, política de liquidación, volumen', when: '5 – 9 oct', owner: 'Flowbit' },
        { text: 'Abrir cuenta de pasarela de pago', when: 'Vie 9 oct', owner: 'Cliente' },
        { text: 'Contratar Google Workspace e iniciar verificación de Meta Business', when: 'Vie 9 oct', owner: 'Cliente' },
      ],
      deliverable: { label: 'Diagnóstico y modelo de datos', date: 'Vie 9 oct' },
    },

    {
      kind: 'block',
      chapter: 'Bloque 1',
      number: '01',
      title: 'Backend de reservas y panel',
      dates: '5 – 30 oct',
      summary: 'El corazón del sistema: cómo se guarda un tour, una unidad, un pasajero y un pago, y el motor que decide si hay lugar o no. Desde el 19 de octubre ya pueden entrar al panel y ver avances en vivo.',
      tasks: [
        { text: 'Modelo de datos: tours, unidades, puntos, pasajeros, reservas, pagos, lista de espera', when: '5 – 9 oct' },
        { text: 'Motor de cupos por unidad y por punto (León, Silao, Irapuato, Salamanca, Celaya, Querétaro)', when: '7 – 16 oct' },
        { text: 'Apartado de $300, saldo y fecha límite a 7 días hábiles del evento', when: '12 – 16 oct' },
        { text: 'API de reservas lista para el sitio y el bot', when: '16 oct' },
        { text: 'Cancelación automática, lista de espera, reoferta y cierre por unidad llena', when: '14 – 23 oct' },
        { text: 'Panel: alta de tours, ficha de pasajero, búsqueda, usuarios, permisos y bitácora', when: '12 – 30 oct' },
      ],
      deliverable: { label: 'Panel en prueba 19 oct · completo', date: 'Vie 30 oct' },
    },

    {
      kind: 'block',
      chapter: 'Bloque 2',
      number: '02',
      title: 'Frontend público de reservas',
      dates: '19 oct – 13 nov',
      summary: 'El sitio nuevo con la identidad de Camiones a Conciertos. Cada evento tiene su propia página generada desde la agenda, y el pasajero reserva directo contra el cupo real.',
      tasks: [
        { text: 'Diseño del sitio con la identidad de la marca y aprobación', when: '19 – 23 oct', owner: 'Ambos' },
        { text: 'Página por evento desde la agenda y buscador por artista, fecha, ciudad y destino', when: '26 oct – 6 nov' },
        { text: 'Páginas fijas: unidades, contacto, medidas, términos, política de pagos', when: '2 – 6 nov' },
        { text: 'Flujo de reserva: evento, punto de abordaje, lugares y datos del pasajero', when: '2 – 13 nov' },
        { text: 'SEO técnico y panel de contenido', when: '9 – 13 nov' },
      ],
      deliverable: { label: 'Sitio con reservas en prueba', date: 'Vie 13 nov' },
    },

    {
      kind: 'block',
      chapter: 'Bloque 3',
      number: '03',
      title: 'Pagos y cobranza',
      dates: '26 oct – 13 nov',
      summary: 'El apartado y la liquidación se cobran en línea, el pago se concilia solo y la cobranza se ve por tour sin abrir un Excel. Depende de que la cuenta de la pasarela ya esté aprobada.',
      tasks: [
        { text: 'Pasarela: link de pago de apartado y liquidación con tarjeta, transferencia y efectivo en tiendas', when: '26 oct – 4 nov' },
        { text: 'Conciliación automática, pagos en oficina y cargo por servicio configurable', when: '2 – 6 nov' },
        { text: 'Recordatorio de liquidación por correo (por WhatsApp llega con el bot)', when: '4 – 9 nov' },
        { text: 'Tablero de cobranza por tour y pasajero', when: '6 – 13 nov' },
      ],
      deliverable: { label: 'Cobro en línea en prueba', date: 'Vie 13 nov' },
    },

    {
      kind: 'block',
      chapter: 'Bloque 4',
      number: '04',
      title: 'Tienda CC MERCH',
      dates: '9 – 20 nov',
      summary: 'La tienda comparte checkout con los tours, así que la pieza se ofrece justo cuando el fan está pagando su lugar. Depende de que el catálogo llegue a tiempo.',
      tasks: [
        { text: 'Catálogo con inventario, tallas y variantes', when: '9 – 13 nov' },
        { text: 'Mismo checkout que los tours, entrega en oficina o el día del viaje, merch sugerido', when: '12 – 18 nov' },
        { text: 'Control de stock y reporte de ventas', when: '16 – 20 nov' },
      ],
      deliverable: { label: 'Tienda en prueba', date: 'Vie 20 nov' },
    },

    {
      kind: 'block',
      chapter: 'Bloque 5',
      number: '05',
      title: 'Bot de WhatsApp',
      dates: '16 – 27 nov',
      summary: 'El bot ya existe en demo. Va al final porque así se conecta a una API de reservas ya probada y vende contra cupo real desde el primer día, en lugar de solo pre-apartar.',
      tasks: [
        { text: 'Conectar la demo al número oficial', when: '16 – 17 nov' },
        { text: 'Base de conocimiento con la operación real', when: '16 – 18 nov' },
        { text: 'Consulta de tours y reserva contra cupo real con link de pago', when: '17 – 23 nov' },
        { text: 'Handoff a humano, recordatorios por WhatsApp, panel de respuestas y reportes', when: '19 – 25 nov' },
        { text: 'Pruebas con el equipo de Camiones a Conciertos', when: '24 – 27 nov', owner: 'Ambos' },
      ],
      deliverable: { label: 'Bot vendiendo contra cupo real', date: 'Vie 27 nov' },
    },

    {
      kind: 'block',
      chapter: 'Cierre',
      tone: 'dark',
      number: '06',
      title: 'Integración y salida a producción',
      dates: '16 – 30 nov',
      summary: 'Se migra la operación actual, se monta producción y se prueba el recorrido completo de punta a punta antes de soltarlo con pasajeros reales.',
      tasks: [
        { text: 'Migración de tours y pasajeros actuales desde los Excel', when: '16 – 20 nov' },
        { text: 'Servidor, dominio, certificados, correos, respaldos y monitoreo', when: '16 – 20 nov' },
        { text: 'Pruebas integrales: sitio → reserva → pago → espera → tienda → bot', when: '23 – 27 nov' },
        { text: 'Capacitación a ventas y operación, y manual básico', when: '23 – 27 nov', owner: 'Ambos' },
      ],
      deliverable: { label: 'Entrega final en producción', date: 'Lun 30 nov' },
    },

    {
      kind: 'milestones',
      chapter: 'Hitos',
      eyebrow: 'Hitos de validación',
      title: 'Qué van a ver y cuándo',
      note: 'Cada hito es un entregable en ambiente de prueba. Tienen 3 días hábiles para revisarlo; sin observaciones, se da por aceptado y seguimos.',
      items: [
        { date: '19.10', title: 'Panel en prueba', desc: 'Alta de tours, unidades y pasajeros con el motor de cupos.' },
        { date: '30.10', title: 'Backend completo', desc: 'Apartados, cancelación, lista de espera, usuarios y bitácora.' },
        { date: '13.11', title: 'Sitio y cobro', desc: 'Página por evento, reserva directa, link de pago y conciliación.' },
        { date: '20.11', title: 'Tienda', desc: 'Catálogo con tallas y stock, mismo checkout.' },
        { date: '27.11', title: 'Bot y pruebas', desc: 'Bot en el número oficial y recorrido completo probado.' },
        { date: '30.11', title: 'Producción', desc: 'Todo en vivo con la operación migrada.' },
      ],
    },

    {
      kind: 'checklist',
      chapter: 'Insumos',
      eyebrow: 'Lo que necesitamos de ustedes',
      title: 'Insumos y fechas límite',
      note: 'Si algo llega tarde, la entrega que depende de eso se recorre los mismos días. Las cuentas de terceros van a nombre del negocio.',
      rows: [
        { item: 'Archivos de Excel de la operación actual', unlocks: 'Diagnóstico y migración', due: '07.10' },
        { item: 'Agenda, tarifas, unidades, puntos, horarios y política de liquidación', unlocks: 'Reservas y sitio', due: '09.10' },
        { item: 'Acceso al WhatsApp oficial y Meta Business', unlocks: 'Bot', due: '09.10' },
        { item: 'Cuenta de OpenAI a su nombre con método de pago', unlocks: 'Bot', due: '09.10' },
        { item: 'Google Workspace contratado', unlocks: 'Correos del sistema', due: '09.10' },
        { item: 'Cuenta de pasarela de pago abierta y aprobada', unlocks: 'Cobro en línea', due: '23.10' },
        { item: 'Logos, fotos y textos del sitio', unlocks: 'Sitio', due: '26.10' },
        { item: 'Catálogo de merch: piezas, tallas, precios, stock y fotos', unlocks: 'Tienda', due: '06.11' },
        { item: 'Acceso al dominio', unlocks: 'Salida a producción', due: '13.11' },
        { item: 'Equipo disponible para capacitación', unlocks: 'Cierre', due: '23 – 27.11' },
      ],
    },

    {
      kind: 'risks',
      chapter: 'Riesgos',
      tone: 'dark',
      eyebrow: 'Riesgos del calendario',
      title: 'Lo que puede mover la fecha',
      note: 'Pasar de 12 a 8 semanas deja cero holgura: un retraso de más de 3 días en pagos o en el sitio pega directo al 30 de noviembre.',
      risks: [
        { risk: 'La pasarela tarda en aprobar la cuenta (KYC de 1 a 3 semanas)', impact: 'Alto', effect: 'Sin cobro en línea al 30 nov', plan: 'Abrirla esta semana. Plan B: pagos en oficina registrados en el panel.' },
        { risk: 'Meta bloquea o limita el número al conectarlo', impact: 'Medio', effect: 'El bot no llega al 30 nov', plan: 'Verificar desde la semana 1. Si se atrasa, se opera con sitio y panel.' },
        { risk: 'Catálogo de merch o contenidos del sitio llegan tarde', impact: 'Medio', effect: 'La tienda se recorre', plan: 'Pedirlos desde el Diagnóstico. La tienda puede salir después.' },
        { risk: 'Bot, tienda y cierre se juntan en las dos últimas semanas', impact: 'Medio', effect: 'Sobrecarga 16 – 27 nov', plan: 'API de reservas cerrada el 16 oct. Bot y tienda repartidos en el equipo.' },
        { risk: 'Los Excel actuales vienen inconsistentes', impact: 'Medio', effect: 'Migración incompleta', plan: 'Recibirlos el 7 oct y limpiarlos antes del 13 nov.' },
        { risk: 'Diciembre arranca en plena temporada', impact: 'Alto', effect: 'Bugs en plena venta', plan: 'Respuesta en 4 horas si algo bloquea la venta o el abordaje.' },
      ],
    },

    {
      kind: 'facts',
      chapter: 'Acuerdos',
      eyebrow: 'Cómo vamos a trabajar',
      title: 'Acuerdos del proyecto',
      facts: [
        { value: '$80,000', label: 'MXN · total', desc: 'Fases 1, 2 y 4 con el Diagnóstico incluido.' },
        { value: '50/50', label: 'Esquema de pago', desc: '$40,000 a la firma y $40,000 en la entrega final del 30 de noviembre.' },
        { value: '3 días', label: 'Para validar', desc: 'Hábiles, por entregable. Un solo responsable con decisión de su lado.' },
        { value: '2 meses', label: 'Soporte incluido', desc: 'Del 1 dic al 31 ene. Respuesta en 1 día hábil, 4 horas si bloquea la venta.' },
        { value: '$4,800', label: 'MXN al mes', desc: 'Después de la entrega: operación del bot $4,000 y hosting $800.' },
        { value: 'Terceros', label: 'A su nombre', desc: 'OpenAI, pasarela, Meta y Google Workspace los paga el negocio.' },
      ],
    },

    {
      kind: 'next',
      chapter: 'Esta semana',
      tone: 'blue',
      eyebrow: 'Siguientes pasos',
      title: 'Arrancamos hoy',
      actions: [
        { when: 'Hoy · 05.10', what: 'Confirmar responsable con decisión y canal de comunicación', owner: 'Cliente' },
        { when: 'Mié · 07.10', what: 'Enviar los archivos de Excel de la operación actual', owner: 'Cliente' },
        { when: 'Esta semana', what: 'Sesión para recorrer el flujo completo de la operación', owner: 'Ambos' },
        { when: 'Vie · 09.10', what: 'Pasarela, Google Workspace y Meta Business en trámite', owner: 'Cliente' },
        { when: 'Vie · 09.10', what: 'Diagnóstico y modelo de datos cerrados', owner: 'Flowbit' },
      ],
      contact: {
        label: 'Escribirnos por WhatsApp',
        href: 'https://wa.me/524792305474?text=Hola%2C%20soy%20de%20Camiones%20a%20Conciertos.%20Tengo%20una%20duda%20sobre%20el%20kickoff.',
      },
    },
  ],
}

export default camionesAConciertos
