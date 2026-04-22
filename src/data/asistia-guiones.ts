import type { ProposalData } from './types'

const asistiaGuiones: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta de guiones · aprobación',
      title: 'AsistIA\nSerie de dos videos',
      cardTitle: 'Dos guiones listos para tu aprobación',
      cardText:
        'Video 1 vende la promesa emocional. Video 2 demuestra el producto. Lee cada escena y deja tus comentarios al final de cada video. Con tu aprobación pasamos a storyboard y animación.',
      meta: [
        { label: 'Dirigido a', value: 'AsistIA' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V1.0' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'La serie',
      tag: 'los dos videos',
      title: 'Una promesa,\nuna demostración',
      description:
        'Cada video tiene un rol distinto en la comunicación de AsistIA. Juntos cuentan la historia completa — por qué importa y cómo funciona.',
      quote:
        'Video 1 vende la transformación. Video 2 demuestra la mecánica. Mismo aire de marca, dos intenciones que se complementan.',
      cards: [
        {
          title: 'Video 1 · Hero',
          origamiItem: 2,
          description:
            'Pieza de marca para awareness. Dos dueños, dos caminos, un mismo mensaje. Contraste emocional continuo hasta el reveal de AsistIA.',
          items: [
            'Duración · 60 – 65 segundos',
            'Frase ancla · "Hay dos formas de crecer. Elige la que te libera."',
            'Uso · landing page, ads, presentaciones comerciales',
          ],
        },
        {
          title: 'Video 2 · Showcase',
          origamiItem: 3,
          description:
            'Pieza de demostración para consideración. Tour guiado por el bot AsistIA en tres actos: habla, se encarga, entrega control.',
          items: [
            'Duración · 60 – 65 segundos',
            'Frase ancla · "Esto no es un asistente. Es tu nuevo estándar de operación."',
            'Uso · página de producto, remarketing, sales follow-ups',
          ],
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Video 1',
      tag: 'video 1 · hero',
      title: 'Dos formas\nde llevar un negocio',
      description:
        'El Video 1 vende la promesa emocional de AsistIA. Durante el primer minuto el espectador ve, en paralelo, dos dueños de negocio viviendo la misma realidad de formas opuestas — uno consumido por la operación, el otro libre. El contraste se sostiene hasta el segundo 31, cuando las dos zonas se colapsan en una y aparece AsistIA como la razón de esa diferencia. El resto del video muestra, de forma breve, cómo AsistIA atiende, agenda, cierra ventas y organiza la operación. Cierra con una frase ancla que invita a elegir el camino libre. El tono es cinematográfico, sereno, con pausas largas entre líneas — más cercano a un trailer de Apple que a un video corporativo.',
      blocks: [
        {
          number: 'escena 01',
          type: '0:00 – 0:05 · apertura',
          title: 'Dos líneas de luz',
          desc: '"Hay dos formas de llevar un negocio."',
          badge: '5 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Dos líneas de luz horizontales aparecen desde el centro y dividen el cuadro en dos zonas sobre fondo azul marino.',
          ],
        },
        {
          number: 'escena 02',
          type: '0:05 – 0:10 · tesis',
          title: 'Te consume · Te libera',
          desc: '"Una te consume. La otra te libera."',
          badge: '5 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Arriba (gris): dueño encorvado sobre el celular con chats acumulándose. Abajo (verde lima): dueño erguido, celular guardado, luz cálida detrás.',
          ],
        },
        {
          number: 'escena 03',
          type: '0:10 – 0:17 · horario',
          title: 'Las once de la noche',
          desc: '"Mientras unos responden mensajes a las once de la noche, otros ya cerraron la venta sin tocar el celular."',
          badge: '7 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Arriba: cuarto a oscuras, dueño iluminado por la pantalla del celular. Abajo: misma hora, familia cenando, celular bocabajo. En la pantalla "Venta cerrada ✓" sin que él lo vea.',
          ],
        },
        {
          number: 'escena 04',
          type: '0:17 – 0:24 · respuesta',
          title: 'Cliente que se va, cliente que entra',
          desc: '"Mientras unos pierden clientes por no contestar a tiempo, otros los atienden al instante, a cualquier hora."',
          badge: '7 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Arriba: WhatsApp con 131 no leídos, "ya no, gracias" se apaga. Abajo: chats respondiéndose solos en tiempo real, mensajes verdes fluyendo.',
          ],
        },
        {
          number: 'escena 05',
          type: '0:24 – 0:31 · control',
          title: 'El negocio visible',
          desc: '"Mientras unos llevan su negocio en la cabeza, otros lo ven completo desde un solo lugar."',
          badge: '7 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Arriba: dueño rodeado de post-its, papeles y alarmas. Abajo: mismo dueño frente al dashboard AsistIA, métricas vivas y ordenadas.',
          ],
        },
        {
          number: 'escena 06',
          type: '0:31 – 0:36 · pivote',
          title: 'La diferencia',
          desc: '"La diferencia no es trabajar más. Es tener a AsistIA trabajando por ti."',
          badge: '5 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Las dos zonas se colapsan en una sola. Aparece el bot AsistIA al centro con animación de encendido. Texto ASISTIA en verde lima tipo typewriter.',
          ],
        },
        {
          number: 'escena 07',
          type: '0:36 – 0:42 · atención',
          title: 'Todos los canales, 24/7',
          desc: '"Un agente de inteligencia artificial que atiende a tus clientes en WhatsApp, web y redes sociales, las veinticuatro horas."',
          badge: '6 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Tres mockups de canal aparecen alrededor del bot: WhatsApp, sitio web, redes sociales. Líneas verde lima conectan cada canal con el bot.',
          ],
        },
        {
          number: 'escena 08',
          type: '0:42 – 0:48 · agenda y ventas',
          title: 'Agenda, recordatorios, ventas',
          desc: '"Que agenda citas por ti, manda recordatorios y cierra ventas con el tono de tu marca."',
          badge: '6 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Tres micro-acciones encadenadas: calendario que se llena, notificación "15 min" hacia un cliente, contador de ventas subiendo.',
          ],
        },
        {
          number: 'escena 09',
          type: '0:48 – 0:54 · documentos',
          title: 'Contratos y dashboard',
          desc: '"Que redacta contratos, organiza tu operación y te entrega todo en un solo tablero."',
          badge: '6 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Contrato se autocompleta con datos del cliente. Transición a dashboard AsistIA en vivo con contadores, gráficas y tareas en tiempo real.',
          ],
        },
        {
          number: 'escena 10',
          type: '0:54 – 0:57 · síntesis',
          title: 'Un equipo completo',
          desc: '"Un equipo completo, trabajando sin descanso, dentro de tu negocio."',
          badge: '3 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'El bot se multiplica sutilmente en 3–4 versiones operando distintas partes del dashboard simultáneamente.',
          ],
        },
        {
          number: 'escena 11',
          type: '0:57 – 1:00 · frase ancla',
          title: 'Elige la que te libera',
          desc: '"Hay dos formas de crecer. Elige la que te libera."',
          badge: '3 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Fondo azul marino limpio. Tipografía grande centrada: ELIGE LA QUE TE LIBERA. El bot aparece pequeño al lado del texto.',
          ],
        },
        {
          number: 'escena 12',
          type: '1:00 – 1:05 · cierre',
          title: 'Bienvenido a AsistIA',
          desc: '"Bienvenido a AsistIA. Estrategias aplicadas con inteligencia que transforma."',
          badge: '5 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Logo AsistIA centrado en verde lima sobre azul marino. Tagline y datos de contacto al pie: by mobiria · 477 662 00 05 · asistiabot.com',
          ],
        },
      ],
    },

    {
      layout: 'feedback',
      navLabel: 'Comentarios V1',
      tag: 'feedback · video 1',
      title: 'Tus comentarios\nsobre el Video 1',
      description: 'Deja aquí cualquier ajuste o duda sobre el guion del Video 1. Referencia escenas por número si aplica. Lo que escribas se envía al equipo de Flowbit.',
      videoLabel: 'Video 1 — Hero · Dos formas de llevar un negocio',
      emailTo: 'andre@flowbit.studio',
      emailSubject: 'Comentarios sobre Video 1 — AsistIA (Hero)',
      placeholder: 'Ejemplo: en la escena 03 preferiría que la familia esté en la sala, no cenando...',
      buttonText: 'Enviar comentarios',
    },

    {
      layout: 'sticky-list',
      navLabel: 'Video 2',
      tag: 'video 2 · showcase',
      title: 'Tu nuevo estándar\nde operación',
      description:
        'El Video 2 demuestra el producto. A diferencia del Video 1 —que trabaja en el plano emocional— aquí el bot AsistIA es el protagonista. Aparece en cuadro desde el primer segundo y actúa como anfitrión en un recorrido de tres actos: primero habla (atiende en todos los canales, 24/7), después se encarga (cierra ventas, redacta documentos, da seguimiento), y al final entrega el control (el dueño observa el dashboard completo mientras la operación avanza sola). En la recta final el bot voltea a cámara por primera y única vez en la serie para declarar la frase ancla. Es un video funcional, claro y demostrativo, pensado para quien ya conoce la promesa y ahora necesita ver cómo funciona en la práctica.',
      blocks: [
        {
          number: 'escena 01',
          type: '0:00 – 0:05 · encendido',
          title: 'Conoce a quien se hará cargo',
          desc: '"Conoce a quien se hará cargo de tu operación."',
          badge: '5 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'El bot aparece sobre fondo azul marino con animación sutil de encendido. Ajusta su postura, da un paso al frente, inclina levemente la cabeza.',
          ],
        },
        {
          number: 'escena 02',
          type: '0:05 – 0:12 · multicanal',
          title: 'Todos los canales',
          desc: '"Responde en todos los canales donde te buscan tus clientes."',
          badge: '7 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Panel frente al bot se ilumina. Aparecen íconos de WhatsApp, sitio web, Instagram y Facebook activándose uno tras otro, con líneas verde lima que los conectan al bot.',
          ],
        },
        {
          number: 'escena 03',
          type: '0:12 – 0:18 · 24/7',
          title: 'Todos los días del año',
          desc: '"A cualquier hora del día. Todos los días del año."',
          badge: '6 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Reloj análogo gira acelerado por las horas del día. Ciclo día-noche al fondo. El bot opera al mismo ritmo, sin alterarse.',
          ],
        },
        {
          number: 'escena 04',
          type: '0:18 – 0:25 · cierre de venta',
          title: 'Cierra la venta por ti',
          desc: '"Y cuando el cliente está listo, cierra la venta por ti."',
          badge: '7 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Chat de WhatsApp en primer plano: cliente consulta, respuesta en segundos, pregunta precio, precio enviado, cliente confirma. Sello "Venta cerrada ✓" cae en la esquina.',
          ],
        },
        {
          number: 'escena 05',
          type: '0:25 – 0:34 · documentos',
          title: 'Listos para firmar',
          desc: '"Redacta contratos, propuestas y documentos con los datos de cada cliente. Listos para firmar en segundos."',
          badge: '9 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Un contrato aparece y se autocompleta campo por campo con datos del cliente. Firma digital al final. Tipografía LISTO PARA FIRMAR en verde lima.',
          ],
        },
        {
          number: 'escena 06',
          type: '0:34 – 0:42 · seguimiento',
          title: 'Nada se te escapa',
          desc: '"Da seguimiento a cada cita, cada propuesta y cada compromiso, para que nada se te escape."',
          badge: '8 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Timeline visual de un día completo. Notificaciones salen hacia distintos clientes con countdown de 15 minutos. Cada entrega se marca con check verde.',
          ],
        },
        {
          number: 'escena 07',
          type: '0:42 – 0:53 · dashboard',
          title: 'El negocio completo',
          desc: '"Mientras tu operación avanza sola, tú ves el negocio completo en un solo tablero. Cada conversación, cada venta, cada movimiento. En tiempo real."',
          badge: '11 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'El bot se hace pequeño al lado de una laptop. Dashboard AsistIA en vivo con métricas moviéndose. El dueño, de espaldas en primer plano, observa con calma.',
          ],
        },
        {
          number: 'escena 08',
          type: '0:53 – 0:58 · declaración',
          title: 'Tu nuevo estándar de operación',
          desc: '"Esto no es un asistente. Es tu nuevo estándar de operación."',
          badge: '5 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'El bot voltea a cámara por primera y única vez. Inclinación sutil de cabeza. Texto TU NUEVO ESTÁNDAR DE OPERACIÓN en verde lima.',
          ],
        },
        {
          number: 'escena 09',
          type: '0:58 – 1:05 · cierre',
          title: 'Bienvenido a AsistIA',
          desc: '"Bienvenido a AsistIA. Estrategias aplicadas con inteligencia que transforma."',
          badge: '7 seg',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Logo AsistIA centrado en verde lima sobre azul marino. Tagline y datos de contacto al pie: by mobiria · 477 662 00 05 · asistiabot.com',
          ],
        },
      ],
    },

    {
      layout: 'feedback',
      navLabel: 'Comentarios V2',
      tag: 'feedback · video 2',
      title: 'Tus comentarios\nsobre el Video 2',
      description: 'Deja aquí cualquier ajuste o duda sobre el guion del Video 2. Referencia escenas por número si aplica. Lo que escribas se envía al equipo de Flowbit.',
      videoLabel: 'Video 2 — Showcase · Tu nuevo estándar de operación',
      emailTo: 'andre@flowbit.studio',
      emailSubject: 'Comentarios sobre Video 2 — AsistIA (Showcase)',
      placeholder: 'Ejemplo: la escena 04 me gustaría que el cierre de venta sea más lento...',
      buttonText: 'Enviar comentarios',
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Aprueba los guiones\ny arrancamos',
      description:
        'Con tu visto bueno integramos tus comentarios y pasamos a storyboard y animación. Cualquier cambio mayor genera una nueva versión del documento.',
      buttonText: 'Aprobar guiones',
      buttonHref: 'mailto:andre@flowbit.studio?subject=Aprobaci%C3%B3n%20de%20guiones%20AsistIA',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'andre@flowbit.studio',
    },
  ],
}

export default asistiaGuiones
