import type { ProposalData } from './types'

const lizAnayaPodologia: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Clínica\nLiz Anaya\nPodología',
      cardTitle: 'CRM a la medida · core del proyecto',
      cardText: 'Un CRM integral construido a la medida de tu clínica — no un Odoo adaptado ni un ERP genérico rentado. Reemplaza WhatsApp manual, Excel disperso y reportes desalineados con una sola plataforma. Desde la primera conversación del paciente hasta el corte de caja diario, todo vive en el mismo CRM — y sigue corriendo cuando tú no estás.',
      meta: [
        { label: 'Dirigido a', value: 'Jaqueline Trejo' },
        { label: 'Fecha', value: '20 de abril de 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'arquitectura del sistema',
      title: 'Un CRM,\ntres fases',
      description: 'Un CRM construido a la medida para la operación real de la clínica — no un Odoo, un HubSpot ni un ERP genérico forzado a entrar en tu flujo. Se entrega en tres fases progresivas: control financiero, experiencia clínica y comunicación unificada. Las tres viven sobre la misma base de datos, el mismo panel y la misma sesión.',
      quote: 'Tu clínica atiende 391 citas al mes. Una de cada cinco se pierde. No es cosa del staff — es cosa del sistema.',
      cards: [
        {
          title: 'Fase 1 · Control operativo y financiero',
          category: 'tech',
          description: 'Agenda con cobro, dashboards, bonos y cortes — todo lo que hoy vive en Excel.',
          items: [
            'Agenda digital con cobro de anticipo obligatorio integrado',
            'Recordatorios automáticos 24h antes (adiós al copy-paste manual)',
            'Dashboard financiero unificado (ingresos, egresos, utilidad real)',
            'Tablero de bonos en tiempo real por operadora',
            'Inventario dual + cortes de caja diarios',
          ],
        },
        {
          title: 'Fase 2 · Experiencia clínica',
          category: 'design',
          description: 'Del papel y los tres Excels a un expediente digital que vive con el paciente.',
          items: [
            'Portal de paciente: historial, citas, pagos, pre-agenda',
            'Expediente digital con diagnósticos escaneados vinculados',
            'Migración supervisada de +3,000 pacientes',
            'Roles diferenciados: admin, operadora, host, paciente',
            'Firma digital de consentimientos clínicos',
          ],
        },
        {
          title: 'Fase 3 · Unificación de la comunicación',
          category: 'growth',
          description: 'Cinco canales, una sola bandeja — y por fin, saber de dónde vienen los pacientes.',
          items: [
            'Bandeja unificada WhatsApp, Instagram, Facebook, web y llamadas',
            'Bot conversacional para triage, FAQ y ruteo',
            'Atribución automática del canal de cada lead',
            'Métricas conversacionales: volumen, tiempo de respuesta, conversión',
            'Integración bidireccional con el portal de paciente de Fase 2',
          ],
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'alcance detallado',
      title: 'Qué\nentregamos',
      blocks: [
        {
          number: 'fase 1',
          type: 'control operativo y financiero',
          title: 'Agenda, dinero y reportes en un solo lugar',
          desc: 'Aquí está el dinero. Hoy pierdes ~$54,000 MXN al mes en cancelaciones y no-shows porque no hay anticipo obligatorio ni política sistematizada — el SE033 de penalización existe en tu sistema pero no se cobra. Calculas utilidad a mano en Excel. Tus dos fuentes de "la verdad" reportaron marzo con 19% de diferencia ($160,539 vs $134,765). Los bonos dependen de que las operadoras se auto-reporten y tú cotejes. No hay corte de caja diario. El inventario mezcla reventa con insumos. Esta fase ataca todo eso.',
          badge: '6–8 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Agenda digital con cobro de anticipo obligatorio al momento de reservar.',
            'Envío automático de recordatorios 24h antes de cada cita.',
            'Sistema de políticas de cancelación con cobro automático de penalización.',
            'Atribución de canal en el formulario de agenda ("¿cómo nos conociste?").',
            'Dashboard financiero unificado con una sola fuente de verdad.',
            'Módulo de ingresos con atribución automática por operadora (reemplaza las iniciales escritas a mano en 108 transacciones de marzo).',
            'Módulo de egresos categorizado (reemplaza las 12 hojas del Machote).',
            'Cálculo automático de utilidad neta por periodo.',
            'Tablero de bonos en tiempo real visible para cada operadora.',
            'Inventario dual con descuento automático de insumos por servicio completado.',
            'Cortes de caja diarios con conciliación efectivo/tarjeta/transferencia.',
            'Exportación de reportes para el contador externo.',
          ],
        },
        {
          number: 'fase 2',
          type: 'experiencia clínica',
          title: 'Expediente digital + portal del paciente',
          desc: 'Tu base de +3,000 pacientes vive entre el sistema clínico de 2021, el Excel de Expediente (115 activos + 61 por sesión + 78 pendientes + 257 en histórico) y papel físico. No hay una sola fuente de verdad del historial. Cada consentimiento informado se firma, escanea y archiva sin ligarse digitalmente al expediente. Y el agendamiento obligatoriamente pasa por la host — no hay self-service.',
          badge: '6–8 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Portal web de paciente con acceso personal y self-service de citas.',
            'Módulo de expediente digital con campos por tratamiento (láser, onicomicosis, REV3, ortonixia, pedicura, masajes).',
            'Carga y vinculación de diagnósticos escaneados al expediente.',
            'Sistema de roles: admin (tú), operadora, host de piso, paciente.',
            'Migración supervisada de +3,000 pacientes del sistema actual.',
            'Firma digital de consentimientos informados.',
            'Integración con el backend financiero de Fase 1 — cada consulta ya cobra y se contabiliza.',
          ],
        },
        {
          number: 'fase 3',
          type: 'unificación de la comunicación',
          title: 'Bandeja multicanal y atribución real',
          desc: 'Con el backend financiero estable y el expediente digital en pie, el último paso es la capa que ve el paciente. Hoy la host recibe 60–80 mensajes/día en picos de campaña a través de WhatsApp, Instagram, Facebook y formulario web — ninguno habla con otro. Responde con plantillas que selecciona a mano. Aunque en Fase 1 ya capturamos atribución básica, solo Facebook (55 citas) y Referidos (5) aparecen en tus reportes. Google, web directo y WhatsApp orgánico quedan invisibles. Esta fase cierra ese hueco.',
          badge: '3–4 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Bandeja unificada que integra WhatsApp, Instagram, Facebook, formulario web y llamadas.',
            'Bot conversacional para primeras respuestas, FAQ y ruteo inteligente.',
            'Atribución automática avanzada del canal de cada conversación.',
            'Dashboard conversacional: volumen por canal, tiempos de respuesta, conversión a cita.',
            'Integración bidireccional con el portal de paciente y el expediente.',
            'Capacitación del equipo en el nuevo flujo multicanal.',
          ],
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión\ndel proyecto',
      description: '50% al arranque de cada fase · 50% a la entrega de cada fase. Tres fases entregadas en 4–5 meses. Al ser un CRM a la medida, no hay licencias mensuales ni cobros por usuario — pagas el desarrollo una sola vez y el sistema queda siendo tuyo. Comparado con un Odoo/HubSpot con el mismo alcance, ahorras entre $3,000 y $8,000 MXN/mes en licencias recurrentes desde el día 1. Incluye hosting y dominio el primer año — a partir del año 2, $3,500 MXN/año corren por cuenta de la clínica.',
      cards: [
        {
          title: 'CRM completo · inversión total',
          desc: 'El CRM entregado en tres fases, 4–5 meses. Control operativo + experiencia clínica + comunicación unificada. Pago único, sin licencias recurrentes ni costo por usuario.',
          price: '$90,000 MXN',
          label: 'proyecto completo',
        },
        {
          title: 'Fase 1 · Control operativo y financiero',
          desc: 'Agenda con anticipo, dashboards financieros, bonos, inventario y cortes diarios.',
          price: '$45,000 MXN',
          label: 'fase 1 · 50/50',
        },
        {
          title: 'Fase 2 · Experiencia clínica',
          desc: 'Portal del paciente, expediente digital y migración supervisada de +3,000 pacientes.',
          price: '$35,000 MXN',
          label: 'fase 2 · 50/50',
        },
        {
          title: 'Fase 3 · Unificación de la comunicación',
          desc: 'Bandeja multicanal, bot conversacional, atribución automática y dashboard conversacional.',
          price: '$10,000 MXN',
          label: 'fase 3 · 50/50',
        },
      ],
    },

    {
      layout: 'roi',
      navLabel: 'Retorno',
      tag: 'retorno de inversión',
      title: 'Qué recuperas —\ny cuándo',
      description: 'El CRM no es un gasto: es la inversión que cierra las fugas silenciosas de la operación. Las cifras aquí abajo se basan en datos reales de Q1 2026 que tú misma compartiste (1,174 citas, ticket promedio $683 MXN, 238 citas perdidas en el trimestre) con supuestos conservadores.',
      cards: [
        {
          kind: 'cost',
          title: 'El costo de no hacer nada',
          intro: 'Tu operación hoy pierde dinero de forma silenciosa. No en un solo evento, sino en fugas pequeñas que suman todos los meses:',
          points: [
            '~$54,000 MXN/mes en citas canceladas o no presentadas sin cobro de anticipo (238 citas perdidas en Q1 × $683 ticket promedio ÷ 3 meses).',
            '~38 horas/mes de tu tiempo como dueña en tareas mecánicas: revisar agenda, mandar recordatorios uno por uno, calcular utilidad en Excel, cotejar comisiones y hacer cortes de caja.',
            '19% de discrepancia entre tus dos fuentes financieras — estás tomando decisiones con datos que no cuadran.',
            '95% de leads sin atribución — no sabes qué canal trae pacientes, así que no sabes dónde invertir mejor.',
          ],
        },
        {
          kind: 'benefit',
          title: 'Qué cambia con el sistema operando',
          items: [
            {
              title: 'Recuperación de cancelaciones · beneficio principal',
              desc: 'El anticipo obligatorio convierte la intención en compromiso. Recuperación conservadora del 60% de las citas que hoy se pierden.',
              value: '+$32,400 MXN/mes',
              highlight: true,
            },
            {
              title: 'Tiempo liberado de la dueña',
              desc: 'Las 38 horas mensuales en tareas mecánicas regresan a ti. Valoradas conservadoramente a $500/hora.',
              value: '+$19,000 MXN/mes equivalente',
            },
            {
              title: 'Atribución real de campañas · beneficio cualitativo',
              desc: 'Por primera vez sabes qué canal trae pacientes rentables. Puedes duplicar lo que funciona y cortar lo que no. Impacto directo en el ROAS de Facebook, Google y futuras inversiones.',
            },
            {
              title: 'Una sola fuente de verdad financiera · beneficio cualitativo',
              desc: 'Sin discrepancias entre sistema y machote. Cierres de mes en minutos, no en días. Decisiones basadas en el número correcto.',
            },
          ],
        },
        {
          kind: 'breakeven',
          title: 'Punto de equilibrio',
          rows: [
            { label: 'Inversión total', value: '$90,000 MXN' },
            { label: 'Beneficio estimado mensual', value: '$47,400 MXN' },
            { label: 'Punto de equilibrio', value: 'Menos de 2 meses', emphasis: true },
          ],
        },
        {
          kind: 'projection',
          title: 'Proyección a 12 y 24 meses',
          intro: 'Una vez pagado el proyecto, todo lo demás es flujo neto recuperado:',
          rows: [
            { label: 'A 12 meses', value: '~$478,800 MXN recuperados' },
            { label: 'A 24 meses', value: '~$1,047,600 MXN recuperados' },
          ],
          note: 'Los números anteriores solo cuentan cancelaciones recuperadas y tiempo liberado. No cuentan el crecimiento por optimizar campañas, el upsell del portal de paciente, ni la reducción de carga mental. Esos son extra.',
        },
      ],
      closingLine: 'En términos prácticos: el CRM se paga solo antes de que termines de entregarlo.',
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'Add-ons opcionales no incluidos en el precio principal del proyecto. Mezcla de servicios recurrentes (soporte mensual, chatbot con IA) y servicios one-shot (campañas, capacitación). El Diagnóstico tiene valor de $10,000 MXN — en este caso se ofrece como cortesía por haberse realizado ya durante nuestra cita previa.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Auditoría profunda del stack actual, workflows y puntos de fuga. Entregable documental con mapeo completo. Valor regular: $10,000 MXN — incluido como cortesía por haberse realizado en la cita previa.',
          price: 'Cortesía',
          label: 'ya realizado',
        },
        {
          title: 'Soporte y mantenimiento mensual',
          category: 'soporte',
          desc: 'Monitoreo de infraestructura, resolución de bugs, pequeños ajustes y capacitación continua al equipo. Incluye los primeros 3 meses sin costo post go-live como parte del acompañamiento de transición — a partir del mes 4, $3,000 MXN/mes si decides continuar con el servicio.',
          price: '$3,000 MXN/mes',
          label: '3 meses incluidos',
        },
        {
          title: 'Chatbot conversacional con IA',
          category: 'automatizacion',
          desc: 'Agente de IA que responde conversaciones completas con pacientes: agenda citas, contesta dudas, da seguimiento y escala a la host cuando hace falta. Diferente al bot de triage/FAQ de la Fase 3 — este mantiene conversaciones enteras 24/7 y libera al equipo de responder mensajes repetitivos. Incluye operación, entrenamiento continuo y ajustes del guion.',
          price: '$6,000 MXN/mes',
          label: 'opcional',
        },
        {
          title: 'Hosting y dominio · año 2 en adelante',
          category: 'soporte',
          desc: 'El primer año del proyecto, hosting y dominio vienen incluidos sin costo adicional. A partir del año 2, corre por cuenta de la clínica el costo operativo anual para mantener el CRM en línea y el dominio activo.',
          price: '$3,500 MXN/año',
          label: 'recurrente · desde año 2',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Cómo vamos\na trabajar',
      description: 'Seis pasos claros desde la aprobación hasta el go-live. Validación contigo en cada punto de entrega, sin sorpresas al final.',
      steps: [
        {
          step: 'paso 1',
          title: 'Kickoff',
          desc: 'Alineación de alcance, accesos a sistemas actuales, definición de calendario y puntos de validación.',
        },
        {
          step: 'paso 2',
          title: 'Discovery técnico',
          desc: 'Auditoría del sistema clínico actual, mapeo de datos y definición de la arquitectura objetivo.',
        },
        {
          step: 'paso 3',
          title: 'Diseño y aprobación',
          desc: 'Prototipos de portal, dashboard y flujos conversacionales. Validación contigo antes de escribir una línea de código.',
        },
        {
          step: 'paso 4',
          title: 'Desarrollo por sprints',
          desc: 'Entregas iterativas cada 2 semanas. Puedes ver y probar cada módulo a medida que se construye.',
        },
        {
          step: 'paso 5',
          title: 'Migración y pruebas reales',
          desc: 'Carga de tus +3,000 pacientes reales, pruebas con casos reales (no dummy data) y ajustes finos.',
        },
        {
          step: 'paso 6',
          title: 'Go-live y transición asistida',
          desc: 'Lanzamiento en vivo con el equipo operando. Nos quedamos activos los primeros 15 días para resolver cualquier duda en tiempo real.',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: '¿Arrancamos?',
      description: 'Tienes una clínica que ya funciona. Lo que no escala es el modo en que tú la sostienes. Este CRM no es un software más — es la pieza que opera toda tu clínica y te devuelve el lugar de dueña.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default lizAnayaPodologia
