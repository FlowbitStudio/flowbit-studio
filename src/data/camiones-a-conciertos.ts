import type { ProposalData } from './types'

const camionesAConciertos: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Camiones a\nConciertos',
      cardTitle: 'Plataforma de tours, boletaje y operación',
      cardText: 'Quince años moviendo fans del Bajío a CDMX, Guadalajara, Querétaro y Puebla. Hoy todo ese negocio se sostiene en hojas de Excel y conversaciones de WhatsApp. Flowbit va a construir el sistema que lo sostenga de verdad.',
      meta: [
        { label: 'Dirigido a', value: 'Alejandro Téllez Rodríguez' },
        { label: 'Fecha', value: 'Agosto 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Situación actual',
      tag: 'la operación hoy',
      title: 'Dónde se está\nyendo el dinero',
      description: 'Antes de hablar de lo que se va a construir, vale la pena nombrar con precisión lo que pasa hoy. Camiones a Conciertos mueve gente a más de cuarenta eventos al año desde seis ciudades, y lo hace sostenido en herramientas que no fueron hechas para eso: hojas de Excel y conversaciones de WhatsApp. Funciona —lleva quince años funcionando— pero cada viaje cuesta más trabajo y más dinero del que debería.',
      blocks: [
        {
          number: '01',
          type: 'situación actual',
          title: 'Todo vive en Excel',
          desc: 'La lista de pasajeros, los cupos, quién pagó el apartado y quién ya liquidó viven en hojas de cálculo que se editan a mano. Cada tour es un archivo, cada archivo tiene versiones, y nadie puede estar seguro de cuál es la buena hasta que alguien la revisa. La información existe, pero no es confiable ni consultable en el momento en que se necesita.',
          badge: 'sin fuente única de verdad',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Un archivo distinto por tour, sin conexión entre ellos.',
            'Dos personas editando la misma lista producen dos realidades distintas.',
            'Nadie puede consultar el cupo real sin abrir el archivo y contar.',
            'Si se pierde o se corrompe la hoja, se pierde el viaje completo.',
          ],
        },
        {
          number: '02',
          type: 'situación actual',
          title: 'El negocio depende de que WhatsApp no se caiga',
          desc: 'Toda la venta, la atención y el seguimiento pasan por WhatsApp. Cuando la cuenta se satura, se bloquea o simplemente se cae, no se detiene la comunicación: se detiene la venta. En temporada alta, con varios eventos abiertos al mismo tiempo, ese riesgo deja de ser hipotético.',
          badge: 'riesgo operativo',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Sin WhatsApp no hay canal de venta alterno funcionando.',
            'Los mensajes se pierden entre cientos de conversaciones abiertas.',
            'La información de una reserva vive en un chat que solo una persona vio.',
            'Si se va el colaborador, se va el historial de sus clientes.',
          ],
        },
        {
          number: '03',
          type: 'situación actual',
          title: 'Asignar la gente a los camiones toma horas',
          desc: 'Cuadrar quién sube en qué unidad y en qué punto de abordaje es un rompecabezas que se arma a mano antes de cada salida. Seis ciudades, horarios escalonados y unidades de distinta capacidad, todo resuelto con hojas y memoria. Son horas de trabajo por viaje que no le aportan nada al cliente.',
          badge: 'horas perdidas por salida',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'La lista de abordaje se rehace manualmente para cada salida.',
            'Cambiar a un pasajero de punto o de unidad obliga a rehacer el cuadro.',
            'La decisión de abrir una segunda unidad se toma tarde y sin datos.',
            'El conteo real de quién subió se conoce cuando el camión ya arrancó.',
          ],
        },
        {
          number: '04',
          type: 'situación actual',
          title: 'Dinero que se va sin que nadie lo vea',
          desc: 'La pérdida no ocurre de golpe, ocurre gota a gota: el apartado que nunca se liquidó y nadie persiguió a tiempo, el lugar cancelado que se quedó vacío porque no había a quién ofrecérselo, el pago que entró y no se registró. Cada uno es pequeño; sumados a lo largo de una temporada, no lo son.',
          badge: 'pérdida directa',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Apartados de $300 que no se liquidan y se pierden sin seguimiento.',
            'Lugares cancelados que salen vacíos por no tener lista de espera.',
            'Pagos conciliados a ojo contra fotos de comprobante.',
            'Sin corte por tour, no se sabe cuál salida dejó dinero y cuál no.',
          ],
        },
        {
          number: '05',
          type: 'situación actual',
          title: 'Prácticas que hoy funcionan por costumbre, no por diseño',
          desc: 'Datos bancarios dictados por chat, comprobantes que viven en la galería de un celular, reservas confirmadas de palabra y sin registro. Son atajos que resuelven el día pero dejan al negocio sin trazabilidad: cuando algo se reclama, no hay dónde verificarlo.',
          badge: 'sin trazabilidad',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'No hay bitácora de quién cambió qué ni cuándo.',
            'La política de liquidación se aplica según quién atienda.',
            'Datos sensibles circulando por conversaciones personales.',
            'Sin historial del cliente, no se puede premiar al que viaja seguido.',
          ],
        },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'arquitectura',
      title: 'Ocho módulos,\nun solo sistema',
      description: 'Una sola base de datos de tours, unidades, pasajeros y pagos alimenta todo: el bot de WhatsApp, el sitio público, el panel de operación y el escáner del camión. Nadie vuelve a capturar el mismo dato dos veces y el cupo es el mismo número en todos lados, en tiempo real.',
      quote: 'El viaje empieza cuando el fan aparta su lugar, no cuando arranca el camión. Todo lo que pasa en medio debería sentirse igual de fácil.',
      cards: [
        {
          title: 'Bot de WhatsApp con IA',
          category: 'tech',
          items: [
            'Agenda de tours en vivo',
            'Preguntas frecuentes 24/7',
            'Reserva sin salir del chat',
            'Handoff al equipo humano',
          ],
        },
        {
          title: 'Motor de reservas y cupos',
          category: 'sistema',
          items: [
            'Cupo real por unidad y punto de abordaje',
            'Apartado y liquidación con fechas límite',
            'Lista de espera automática',
            'Liberación y reventa del lugar cancelado',
          ],
        },
        {
          title: 'Pagos en línea',
          category: 'ecommerce',
          items: [
            'Apartado de $300 con link de pago',
            'Liquidación en línea o en oficina',
            'Conciliación automática, sin foto de comprobante',
            'Factura CFDI automática',
          ],
        },
        {
          title: 'Boletaje digital y wallet',
          category: 'app',
          items: [
            'Pase con QR único por pasajero',
            'Apple Wallet y Google Wallet',
            'Itinerario automático 3 días antes',
            'Portal "Mi Viaje" con saldo y punto de abordaje',
          ],
        },
        {
          title: 'Control de acceso',
          category: 'app',
          items: [
            'Escaneo de QR al abordar',
            'Manifiesto en vivo por unidad y por punto',
            'Marca de no-show a los 10 min de tolerancia',
            'Funciona sin señal y sincroniza después',
          ],
        },
        {
          title: 'Gestión de camiones',
          category: 'dashboard',
          items: [
            'Catálogo de unidades y capacidad',
            'Asignación de unidad y operador por tour',
            'Segunda unidad cuando la demanda lo pide',
            'Ocupación y punto de equilibrio por salida',
          ],
        },
        {
          title: 'Sitio web y tienda',
          category: 'website',
          items: [
            'Página por evento generada desde la agenda',
            'Precios y pasos en texto real, indexables',
            'Tienda CC MERCH con el mismo checkout',
            'Hosting, dominio y certificados administrados',
          ],
        },
        {
          title: 'Panel de control',
          category: 'dashboard',
          items: [
            'Corte por tour: ingresos, ocupación, margen',
            'Historial y recompra por fan',
            'Cobranza pendiente en un solo tablero',
            'Reportes exportables',
          ],
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Fases',
      tag: 'fases y entregables',
      title: 'Fases\ny entregables',
      description: 'Cinco fases pensadas para que el negocio vea valor desde la segunda semana y no tenga que detenerse mientras se construye lo demás. Cada fase se entrega funcionando y se valida antes de arrancar la siguiente. El tiempo total estimado es de 17 a 19 semanas si se contratan las cinco de corrido.',
      blocks: [
        {
          number: 'fase 1',
          type: 'arranque rápido',
          title: 'Bot de WhatsApp con IA',
          desc: 'Ya está construido y corriendo en demo. Esta fase lo conecta a la agenda real, lo carga con la información verdadera del negocio —los seis puntos de abordaje, horarios, precios, qué incluye cada tour, política de liquidación— y lo pone a atender en el WhatsApp oficial. Es la fase más corta y la que descarga de inmediato al equipo de contestar lo mismo cien veces al día.',
          badge: '2 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Atención automática 24/7',
              items: [
                'Consulta de tours disponibles por artista, fecha y ciudad de salida.',
                'Respuestas a preguntas frecuentes: qué incluye, dónde se aborda, a qué hora, cómo se paga.',
                'Base de conocimiento cargada con la operación real: 6 puntos de abordaje, horarios, tolerancia de 10 minutos, paradas técnicas y política de liquidación.',
                'Captación de reserva dentro del chat: evento, ciudad de abordaje, número de lugares y datos del pasajero.',
                'Escalamiento a una persona del equipo cuando la conversación lo requiere, sin perder el hilo.',
                'Nunca dicta datos bancarios de forma automática: los pagos siempre pasan por el flujo seguro.',
              ],
            },
            {
              title: 'Infraestructura del canal',
              items: [
                'Conexión al número oficial de WhatsApp con historial de conversaciones.',
                'Panel para editar respuestas y cargar tours nuevos sin tocar código.',
                'Reportes de conversaciones atendidas, reservas captadas y temas más preguntados.',
                'El consumo del modelo de IA corre por cuenta del cliente en su propia cuenta.',
              ],
            },
          ],
        },
        {
          number: 'fase 2',
          type: 'entregable principal',
          title: 'Núcleo de reservas, cupos y cobro',
          desc: 'El corazón del sistema y la fase más grande. Aquí deja de existir la lista manual: cada tour tiene cupo real por unidad y por punto de abordaje, cada apartado de $300 se cobra en línea, cada liquidación tiene fecha límite con recordatorio automático, y el lugar que se cancela regresa al inventario y se le ofrece al siguiente en la lista de espera. A partir de esta fase, el bot de la Fase 1 reserva contra cupo real en lugar de solo pre-apartar.',
          badge: '5–6 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Motor de reservas y cupos',
              items: [
                'Alta de tours con destino, fecha, unidad asignada y capacidad.',
                'Cupo en tiempo real por unidad y desglosado por punto de abordaje (León, Silao, Irapuato, Salamanca, Celaya, Querétaro).',
                'Reserva con apartado y saldo pendiente calculado automáticamente.',
                'Fecha límite de liquidación calculada sola a 7 días hábiles antes del evento.',
                'Cancelación automática del lugar no liquidado, con el registro de la política aplicada.',
                'Lista de espera por tour: cuando se libera un lugar, se ofrece al siguiente en la fila con una ventana de tiempo para pagarlo.',
                'Cierre de ventas y bloqueo de cupo por unidad cuando se llena.',
              ],
            },
            {
              title: 'Pagos en línea y cobranza',
              items: [
                'Cobro del apartado de $300 con link de pago (tarjeta, transferencia y efectivo en tiendas).',
                'Liquidación en línea desde el mismo link, sin volver a pedir datos.',
                'Registro de pagos hechos en oficina para que el saldo sea el mismo en todos lados.',
                'Conciliación automática: se acabó cruzar fotos de comprobante contra una lista.',
                'Recordatorio automático de liquidación por WhatsApp antes de la fecha límite.',
                'Facturación CFDI automática al pasajero que la solicite.',
                'Tablero de cobranza pendiente por tour y por pasajero.',
              ],
            },
            {
              title: 'Panel de administración',
              items: [
                'Un solo panel para operar todos los tours desde cualquier dispositivo.',
                'Ficha de pasajero con historial de viajes, pagos y contacto.',
                'Usuarios y permisos: administrador, ventas y operación.',
                'Búsqueda instantánea de una reserva por nombre, teléfono o folio.',
                'Bitácora de cambios con auditoría por usuario.',
                'Migración de la información de tours y pasajeros actuales al sistema nuevo.',
              ],
            },
          ],
        },
        {
          number: 'fase 3',
          type: 'entregable principal',
          title: 'Boletaje digital, wallet y control de acceso',
          desc: 'El pasajero deja de traer una captura de pantalla y el operador deja de traer una lista impresa. Cada reserva liquidada genera un pase con QR único que se guarda en Apple Wallet o Google Wallet, y en el punto de abordaje se escanea desde el celular del encargado. El manifiesto se arma solo y en vivo.',
          badge: '3–4 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Boleto digital',
              items: [
                'Pase con QR único e irrepetible por pasajero, emitido al liquidar.',
                'Guardado en Apple Wallet y Google Wallet con el arte del tour.',
                'El pase se actualiza solo si cambia el horario o el punto de abordaje.',
                'Envío automático del itinerario 3 días antes del evento.',
                'Reenvío del pase por WhatsApp cuando el pasajero lo pide.',
              ],
            },
            {
              title: 'Control de acceso y abordaje',
              items: [
                'App de escaneo para el encargado de cada punto de abordaje.',
                'Validación instantánea: pase válido, ya usado, no liquidado o de otra salida.',
                'Manifiesto en vivo por unidad y por punto: quién subió, quién falta.',
                'Marca de no-show al cerrar la tolerancia de 10 minutos.',
                'Funciona sin señal y sincroniza cuando recupera conexión.',
                'Conteo de abordaje contra cupo vendido al cierre de cada punto.',
              ],
            },
            {
              title: 'Portal "Mi Viaje"',
              items: [
                'El pasajero consulta su reserva, saldo y fecha límite de liquidación.',
                'Descarga o guarda su pase en la wallet cuando quiera.',
                'Punto de abordaje con dirección, mapa y hora exacta de salida.',
                'Itinerario del viaje y qué incluye su tour.',
                'Acceso sin contraseña, con un enlace propio enviado por WhatsApp.',
              ],
            },
          ],
        },
        {
          number: 'fase 4',
          type: 'entregable principal',
          title: 'Sitio web nuevo, página por evento y tienda CC MERCH',
          desc: 'El sitio actual esconde su información más importante dentro de imágenes: los precios, los pasos para reservar y buena parte de la agenda no son texto, así que Google no los lee y el cliente no los encuentra. El sitio nuevo genera una página por cada evento directamente desde la agenda del sistema, con precio, horarios y puntos de abordaje en texto real, y suma la tienda de merch al mismo checkout.',
          badge: '4 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Sitio público',
              items: [
                'Diseño nuevo, responsivo y rápido, con la identidad de Camiones a Conciertos.',
                'Página por evento generada automáticamente desde la agenda: artista, fecha, destino, precio, horarios y puntos de abordaje.',
                'Buscador de tours por artista, fecha, ciudad de salida y destino.',
                'Reserva directa desde la página del evento, contra el cupo real de la Fase 2.',
                'Precios, pasos para reservar, qué incluye y política de pagos en texto indexable.',
                'Páginas de unidades, contacto, medidas y términos.',
                'Optimización SEO técnica y de contenido para búsquedas de tipo "camión al concierto de…".',
                'Panel de contenido para publicar sin depender de nosotros.',
              ],
            },
            {
              title: 'Tienda CC MERCH',
              items: [
                'Catálogo de mercancía con inventario, tallas y variantes.',
                'Mismo checkout y misma pasarela de pago que los tours.',
                'Opción de recoger en oficina o entregar el día del viaje.',
                'Merch sugerido durante la compra del tour.',
                'Control de stock y reporte de ventas.',
              ],
            },
            {
              title: 'Hosting e infraestructura',
              items: [
                'Configuración del servidor, dominio, certificados de seguridad y correos.',
                'Respaldos automáticos diarios de la base de datos.',
                'Monitoreo de caída con alertas.',
                'La operación mensual de esta infraestructura se cotiza aparte como plan (ver servicios adicionales).',
              ],
            },
          ],
        },
        {
          number: 'fase 5',
          type: 'entregable principal',
          title: 'Flota, operación y analítica',
          desc: 'La capa que convierte la operación en decisiones. Qué unidad va a qué tour, qué salida está a la mitad del cupo tres semanas antes, cuál ya pasó el punto de equilibrio y cuál conviene cancelar a tiempo. Más el seguimiento en vivo del camión el día del viaje.',
          badge: '3 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Gestión de camiones',
              items: [
                'Catálogo de unidades (Irizar 8i, i6, NC, Volvo, Sprinter) con capacidad y amenidades.',
                'Asignación de unidad y operador por tour, con detección de traslapes.',
                'Apertura de segunda unidad cuando la demanda lo justifica.',
                'Calendario de flota: qué camión está comprometido y cuándo.',
                'Bitácora de mantenimiento y disponibilidad por unidad.',
              ],
            },
            {
              title: 'Analítica de negocio',
              items: [
                'Ocupación en vivo por tour, por unidad y por punto de abordaje.',
                'Punto de equilibrio por salida: cuántos lugares faltan para que el tour sea rentable.',
                'Alerta temprana de tours con baja venta, para reforzar promoción o cancelar a tiempo.',
                'Corte por tour: ingresos, apartados pendientes, cancelaciones y margen.',
                'Historial y recompra por fan, con segmentos para campañas.',
                'Reportes exportables a Excel.',
              ],
            },
            {
              title: 'Seguimiento del viaje',
              items: [
                'Avisos automáticos el día del viaje: unidad en camino, salida confirmada, llegada al destino.',
                'Seguimiento de la unidad para el equipo de operación.',
                'Aviso de hora de regreso al terminar el concierto.',
                'Encuesta de satisfacción automática al cierre del viaje.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'roi',
      navLabel: 'Retorno',
      tag: 'retorno estimado',
      title: 'Qué recuperas —\ny cuándo',
      description: 'Todavía no tenemos la data interna de la operación, así que los números de abajo son estimaciones construidas sobre lo que sí es público de su negocio: seis ciudades de salida, una agenda de más de cuarenta artistas con fechas múltiples, tarifas de $1,400 a CDMX y $999 a Guadalajara, y un apartado de $300. Son deliberadamente conservadores y se afinan con datos reales durante el Diagnóstico.',
      cards: [
        {
          kind: 'cost',
          title: 'Qué cuesta hoy operar a mano',
          intro: 'Hoy el negocio completo se sostiene en conversaciones de WhatsApp y en listas hechas a mano. Esto es lo que eso cuesta, punto por punto:',
          points: [
            'Cada reserva se captura a mano. Alguien lee el mensaje, busca la foto del comprobante, la compara contra una lista y la anota. Miles de veces al año.',
            'Nadie sabe el cupo exacto en el momento. Si dos personas venden al mismo tiempo, cuántos lugares quedan de verdad se descubre hasta que alguien revisa la lista.',
            'Cobrar la liquidación es trabajo de persecución. Hay que acordarse de quién debe, escribirle uno por uno y revisar si pagó, antes de la fecha límite de cada evento.',
            'El lugar que se cancela se pierde. No hay una fila de gente esperando a quién ofrecérselo, así que el camión sale con un asiento vacío que ya se había vendido.',
            'El sitio web no vende. Los precios y los pasos para reservar están dentro de imágenes: Google no puede leerlos, así que quien busca "camión al concierto de…" no llega a la página.',
            'No se sabe cómo va un tour hasta que ya es tarde. Sin ver la ocupación en vivo, abrir un segundo camión o cancelar una salida se termina decidiendo sobre la marcha.',
            'La lista de abordaje se arma cada viaje. Seis puntos de salida, seis listas en papel, y el conteo real se conoce cuando el camión ya arrancó.',
          ],
        },
        {
          kind: 'benefit',
          title: 'Qué cambia con el sistema operando',
          items: [
            {
              title: 'Lugares recuperados · beneficio principal',
              desc: 'Recordatorio automático de liquidación, cancelación con reglas claras y lista de espera que reofrece el lugar liberado en minutos. Cada asiento que hoy se pierde por falta de seguimiento vuelve al inventario y se vende.',
              value: '+$10,000 MXN/mes estimado',
              highlight: true,
            },
            {
              title: 'Horas de operación liberadas',
              desc: 'Captura de reservas, cobranza y conciliación de comprobantes dejan de ser trabajo manual. Estimamos ~25 horas al mes que regresan al equipo, valoradas conservadoramente a $250 por hora.',
              value: '+$6,250 MXN/mes equivalente',
            },
            {
              title: 'Tráfico que hoy no existe · beneficio cualitativo',
              desc: 'Una página indexable por evento captura las búsquedas de "camión al concierto de…" que hoy se van a la competencia o a nadie. Es demanda que ya está buscando y no encuentra el sitio.',
            },
            {
              title: 'Abordaje sin lista impresa · beneficio cualitativo',
              desc: 'QR en la wallet del pasajero y escaneo desde el celular del encargado. Se elimina la sobreventa, el pase duplicado y la duda de quién ya subió, en los seis puntos a la vez.',
            },
            {
              title: 'Decisiones con ocupación real · beneficio cualitativo',
              desc: 'Ver tres semanas antes que un tour va a la mitad del cupo permite reforzar promoción o cancelar a tiempo, en lugar de enterarse el día de la salida.',
            },
          ],
        },
        {
          kind: 'breakeven',
          title: 'Punto de equilibrio del arranque recomendado',
          rows: [
            { label: 'Inversión Fases 1 + 2 (bot + núcleo de reservas y cobro), con IVA', value: '$64,728 MXN' },
            { label: 'Beneficio estimado mensual', value: '~$16,250 MXN' },
            { label: 'Menos planes mensuales de operación (bot + hosting)', value: '−$4,800 MXN' },
            { label: 'Beneficio neto mensual', value: '~$11,450 MXN' },
            { label: 'Punto de equilibrio', value: '~6 meses', emphasis: true },
          ],
        },
        {
          kind: 'projection',
          title: 'Proyección a 12 y 24 meses',
          intro: 'Una vez cubierta la inversión del arranque, el beneficio neto es flujo recuperado mes con mes:',
          rows: [
            { label: 'A 12 meses', value: '~$137,000 MXN recuperados' },
            { label: 'A 24 meses', value: '~$275,000 MXN recuperados' },
          ],
          note: 'Estimaciones conservadoras sobre las Fases 1 y 2. No incluyen el costo de los correos corporativos de Google Workspace ($295 por bandeja al mes, pagados directamente a Google), porque depende de cuántas personas atiendan. Tampoco cuentan a favor la venta de merch en línea, ni la recompra del fan que viaja a varios conciertos al año, ni los tours adicionales que se vuelven viables cuando se puede medir la demanda antes de comprometer una unidad.',
        },
      ],
      closingLine: 'Quince años llenando camiones. Que el sistema trabaje al mismo ritmo.',
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión\npor fases',
      description: '50% al firmar cada fase · 50% al entregarla en vivo. Cada fase se contrata por separado y se puede pausar entre una y otra. El proyecto incluye 2 meses de soporte y mantenimiento sin costo a partir de la entrega final, y el costo del Diagnóstico se acredita a esta inversión. Todos los precios son antes de IVA: el proyecto completo son $140,000 MXN + $22,400 MXN de IVA, es decir $162,400 MXN en total. Propuesta inicial (V01): los precios aquí presentados son estimaciones (excepto el Diagnóstico, que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente.',
      cards: [
        {
          title: 'Ecosistema completo',
          desc: 'Las cinco fases: bot de WhatsApp, núcleo de reservas y cobro, boletaje digital con wallet y control de acceso, sitio nuevo con página por evento y tienda CC MERCH, y gestión de flota con analítica. De 17 a 19 semanas. Incluye 2 meses de soporte sin costo tras la entrega final y acredita el Diagnóstico. Con IVA: $162,400 MXN.',
          price: '$140,000 MXN',
          label: 'fases 1-5 + IVA',
        },
        {
          title: 'Fase 1 — Bot de WhatsApp con IA',
          desc: 'Ya construido en demo. Se conecta a la agenda real, se carga con la información del negocio y sale a producción en el número oficial. A partir del go-live, su operación son $4,000 MXN/mes.',
          price: '$10,000 MXN',
          label: '2 semanas + IVA',
        },
        {
          title: 'Fase 2 — Núcleo de reservas y cobro',
          desc: 'Cupo real por unidad y punto de abordaje, apartados y liquidaciones en línea, lista de espera, CFDI y panel de administración.',
          price: '$45,800 MXN',
          label: '5-6 semanas + IVA',
        },
        {
          title: 'Fase 3 — Boletaje digital y acceso',
          desc: 'Pase con QR en Apple y Google Wallet, escaneo de abordaje, manifiesto en vivo y portal "Mi Viaje" para el pasajero.',
          price: '$29,300 MXN',
          label: '3-4 semanas + IVA',
        },
        {
          title: 'Fase 4 — Sitio web y tienda',
          desc: 'Sitio nuevo con página indexable por evento, reserva directa, tienda CC MERCH con el mismo checkout y configuración de infraestructura.',
          price: '$33,600 MXN',
          label: '4 semanas + IVA',
        },
        {
          title: 'Fase 5 — Flota y analítica',
          desc: 'Catálogo y asignación de unidades, ocupación en vivo, punto de equilibrio por salida, reportes y seguimiento del viaje.',
          price: '$21,300 MXN',
          label: '3 semanas + IVA',
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'El Diagnóstico tiene precio fijo y su costo se acredita al proyecto: si se contrata cualquier fase, los $5,000 se descuentan de la inversión. Ninguno de estos conceptos está incluido en la inversión del proyecto y todos arrancan al liberar la primera fase en vivo. Los correos corporativos de Google Workspace no son opcionales: el sistema los necesita para operar, y se contratan y se pagan directamente con Google. Todos los precios son antes de IVA.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo. Su costo se acredita íntegro a la inversión del proyecto al contratar la primera fase.',
          price: '$5,000 MXN',
          label: 'acreditable al proyecto',
        },
        {
          title: 'Operación del bot',
          category: 'tech',
          desc: 'Mensualidad del bot de WhatsApp una vez en vivo: conexión al número oficial, alojamiento del asistente, actualización de la agenda de tours y ajustes de sus respuestas. El consumo del modelo de IA corre por cuenta del cliente en su propia cuenta.',
          price: '$4,000 MXN/mes',
          label: 'mensual',
        },
        {
          title: 'Hosting e infraestructura',
          category: 'hosting',
          desc: 'Operación mensual del sistema de reservas y del sitio: servidor, dominio, certificados de seguridad, correos, respaldos diarios y monitoreo con alertas. Aplica a partir de la Fase 2.',
          price: '$800 MXN/mes',
          label: 'mensual',
        },
        {
          title: 'Correos corporativos (Google Workspace)',
          category: 'operacion',
          desc: 'Necesario para que el sistema pueda mandar y recibir correo del negocio: confirmaciones de reserva, itinerarios, facturas y respuestas a los pasajeros. Se requiere una bandeja por persona que atienda, más una de sistema para los envíos automáticos. Lo contrata el cliente directamente con Google y se paga a Google, no a Flowbit.',
          price: '$295 MXN/mes por bandeja',
          label: 'necesario · lo contrata el cliente',
        },
        {
          title: 'Soporte y mantenimiento',
          category: 'soporte',
          desc: 'Atención priorizada, ajustes menores, actualizaciones de seguridad, alta de tours de temporada alta y capacitación continua del equipo de ventas y operación. El proyecto incluye los primeros 2 meses sin costo a partir de la entrega final; a partir del tercer mes es opcional.',
          price: 'Desde $6,500 MXN/mes',
          label: '2 meses incluidos',
        },
        {
          title: 'Creación y planeación de contenidos',
          category: 'contenido',
          desc: 'Módulo que se construye una sola vez y queda en manos del equipo para que lo gestione internamente: estrategia de contenido para la temporada de tours, calendario editorial ligado a la agenda de eventos, plantillas editables para Instagram, TikTok y Facebook, y guía de uso para operarlo sin depender de nadie. Costo único de creación del módulo, sin mensualidad.',
          price: '$22,000 MXN',
          label: 'costo único',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Proceso\nde arranque',
      description: 'Aprobada la propuesta, el proyecto arranca de inmediato. La Fase 1 puede estar en vivo en dos semanas mientras el resto se construye en paralelo.',
      steps: [
        { step: 'paso 1', title: 'Aprobación de propuesta', desc: 'Confirmar el alcance y decidir con qué fases arranca el proyecto.' },
        { step: 'paso 2', title: 'Diagnóstico', desc: 'Una semana de levantamiento: agenda real, tarifas vigentes, capacidad de cada unidad, datos de contacto oficiales y volumen actual de reservas. Su costo se acredita al proyecto.' },
        { step: 'paso 3', title: 'Anticipo del 50%', desc: 'El pago inicial de la primera fase contratada activa el proyecto y agenda el kickoff.' },
        { step: 'paso 4', title: 'Bot en vivo', desc: 'A las dos semanas el bot ya está atendiendo en el WhatsApp oficial mientras arranca la construcción del núcleo de reservas.' },
        { step: 'paso 5', title: 'Entregas cada 2 semanas', desc: 'Acceso al panel desde la semana 3 de la Fase 2 para validar en tiempo real, no al final.' },
        { step: 'paso 6', title: 'Go-live y acompañamiento', desc: 'Lanzamiento con capacitación al equipo de ventas y de operación, acompañamiento en las primeras salidas con QR y 2 meses de soporte incluidos desde la entrega final.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Que el sistema\nsuba al camión',
      description: 'El bot ya existe y está corriendo en demo — se puede ver funcionando esta misma semana. Escríbenos por WhatsApp y arrancamos con el Diagnóstico para afinar números y alcance con la data real de la operación.',
      buttonText: 'Aceptar propuesta por WhatsApp',
      buttonHref: 'https://wa.me/524792305474?text=Hola%2C%20soy%20de%20Camiones%20a%20Conciertos.%20Revis%C3%A9%20la%20propuesta%20y%20quiero%20avanzar.',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default camionesAConciertos
