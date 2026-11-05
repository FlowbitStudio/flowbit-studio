import type { ProposalData } from './types'

const sxuso: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    // ───────────────── HERO
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Seguro de auto por uso',
      title: 'SXUso',
      cardTitle: 'Plataforma SXUso para Seguros El Potosí',
      cardText: 'SXUso es un seguro de auto donde quien maneja bien paga menos. El asegurado descarga un app obligatorio que registra sus viajes con el celular; a los 60 días, Seguros El Potosí le devuelve dinero a su tarjeta según cómo manejó. Flowbit construye la plataforma completa — app iOS y Android, servidor, motor de score, web de venta en 3 clics, panel y flujo de siniestros — y en paralelo construye para CBS Colombia la capa de datos y operación que hoy les falta. Piloto en León entre enero y febrero de 2027.',
      meta: [
        { label: 'Dirigido a', value: 'Alberto Ventosa' },
        { label: 'Fecha', value: 'Noviembre 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '60 días' },
      ],
    },

    // ───────────────── ARQUITECTURA / QUÉ CONSTRUIMOS
    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'qué construimos',
      title: 'Una plataforma,\ndos productos',
      description: 'Una base de datos y un motor de score alimentan dos productos: SXUso para Seguros El Potosí en México (celular) y la capa de datos para CBS en Colombia (OBD). Lo que aprendemos con la data de CBS alimenta el score de México con 6 a 12 meses de siniestros reales, antes de que México haya acumulado los suyos.',
      quote: 'Una plataforma debajo, dos productos encima. El celular en México, el OBD en Colombia, un solo cerebro atrás.',
      cards: [
        {
          title: 'App iOS y Android',
          category: 'app',
          description: 'Por donde entra la data. Sin app no hay score, no hay devolución, no hay póliza activa.',
          items: [
            'Registro de viajes en segundo plano',
            'Score mensual con explicación en lenguaje natural',
            'Reporte de siniestros con fotos y fuerza G del impacto',
            'Aviso automático si el app deja de enviar datos',
          ],
        },
        {
          title: 'Servidor y motor de score',
          category: 'sistema',
          description: 'El cerebro. Recibe los viajes, los limpia, los califica y calcula cuánto se devuelve a cada quien.',
          items: [
            'Limpieza y normalización de datos del celular',
            'Motor de score con reglas transparentes y documentadas',
            'Cálculo de devoluciones a 60 días con la tabla de El Potosí',
            'Bitácora completa de qué entró y cómo se calificó',
          ],
        },
        {
          title: 'Web de venta en 3 clics',
          category: 'ecommerce',
          description: 'La puerta de entrada. Cotización, pago y activación en un solo flujo.',
          items: [
            'Cotización, pago y activación de la póliza',
            'Activación condicionada al app (sin app, no hay póliza activa)',
            'Integración con el sistema de emisión de El Potosí',
          ],
        },
        {
          title: 'Panel de administración',
          category: 'dashboard',
          description: 'Tu consola. Lo que tu equipo abre cada mañana para saber qué pasa con la cartera.',
          items: [
            'Asegurados activos y su score',
            'Apps inactivas: alerta temprana para contactar',
            'Scores, devoluciones y tickets',
            'Reportes mensuales listos para que se los presentes a El Potosí',
            'Integrado con el copiloto de datos (IA) para interpretar, resumir y priorizar',
          ],
        },
        {
          title: 'Siniestros',
          category: 'sistema',
          description: 'Lo que tú entregas a El Potosí cuando pasa algo: un expediente armado, no una llamada telefónica.',
          items: [
            'Reporte con fotos de ambos autos',
            'Fuerza G del impacto registrada como evidencia',
            'Expediente listo para pasárselo a El Potosí',
          ],
        },
        {
          title: 'Capa de datos CBS (Colombia)',
          category: 'dashboard',
          description: 'Lo que a CBS hoy le falta para operar sin apagar incendios. En paralelo a México, con el mismo equipo y stack.',
          items: [
            'Decodificador corregido de la data del OBD',
            'Dashboard de flota y conductores',
            'Panel de tickets con alertas',
            'Score comparativo entre autos con y sin siniestro',
          ],
        },
        {
          title: 'Copiloto de datos con IA',
          category: 'automatizacion',
          description: 'Una capa de inteligencia sobre toda la plataforma que convierte datos en decisiones. Interpreta, resume, explica y prioriza, en lenguaje natural. La integración queda lista y operando; los tokens de API los contrata tu empresa directo con el proveedor (Anthropic u OpenAI).',
          items: [
            'Preguntas de la cartera en lenguaje natural ("cuántos asegurados perdimos esta semana", "qué conductores subieron de score")',
            'Resúmenes automáticos de tickets, expedientes de siniestro y comportamiento mensual',
            'Borradores de reportes mensuales para El Potosí, listos para revisar y enviar',
            'Explicación de scores atípicos y detección de anomalías',
            'Priorización de tareas y próximas acciones para tu equipo',
            'Consumo de tokens de API a nombre de tu empresa; tú controlas el presupuesto y la cuenta',
          ],
        },
      ],
    },

    // ───────────────── AUDITORÍA CBS
    {
      layout: 'sticky-list',
      navLabel: 'Auditoría',
      tag: 'lo que ya hicimos',
      title: 'Auditoría a la\ndata de CBS',
      description: 'Antes de armar esta propuesta hicimos una auditoría a fondo de los dispositivos OBD de CBS: 10 dispositivos, 7,067 viajes, 3.1 millones de puntos GPS entre septiembre de 2025 y octubre de 2026. Cada hallazgo es un problema real que, sin arreglar, hace que cualquier decisión tomada sobre esta data salga torcida. Un score mal calibrado, un reporte a la aseguradora que no cuadra, un cálculo de siniestralidad que no puedes defender. Este es el nivel de rigor con el que vamos a entrar al producto de México.',
      blocks: [
        {
          number: '01',
          type: 'hallazgos',
          title: 'Lo que encontramos',
          desc: '8 defectos de decodificación y 18% de viajes inválidos. El cruce de kilómetros GPS contra kilómetros reales pasó de 1.58 a 1.08 al corregirlos.',
          badge: '10 dispositivos',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'Hora al doble en los puntos GPS', desc: 'Entre 25% y 33% de puntos reportan hora posterior a la que fueron recibidos; la velocidad calculada por posición es 0.53× la del GPS.' },
            { title: 'Unidades mezcladas entre millas y kilómetros', desc: 'Las métricas de viaje vienen en millas y mph; el GPS en km/h. Velocidad máxima GPS ÷ velocidad máxima OBD ≈ 1.58.' },
            { title: 'Odómetro multiplicado por 256', desc: 'El odómetro de inicio llega multiplicado por 256, y es del dispositivo, no del auto. Cuadra en 9 de 10 dispositivos; uno no.' },
            { title: 'VIN y zona horaria vacíos', desc: 'El VIN está vacío en 6 de 10 dispositivos; zona horaria y protocolo aparecen como "NP". Campos vacíos en el 60% del parque.' },
            { title: '18% de viajes no usables', desc: '39 viajes sin registro de fin, 1,206 con distancia cero. Sin filtrarlos, cualquier reporte de siniestralidad queda distorsionado.' },
            { title: 'Valores de relleno que distorsionan', desc: 'Voltaje en reposo de 25.5, altitudes imposibles de ~65,400 metros, picos de velocidad de 250 km/h. Si se usan como datos reales, el score se rompe.' },
            { title: 'Eventos del acelerómetro sin decodificar', desc: 'Solo se lee el encabezado del evento; el detalle queda sin interpretar. En toda la flota solo hay 3 excesos de velocidad reportados, cuando debería haber muchos más.' },
            { title: 'Dispositivos silenciados por meses', desc: 'Un dispositivo lleva 136 días sin reportar sin que nadie se entere. Otro lleva 69 días. Otro no reporta desde el 1 de octubre. Ese silencio es lo que el panel de operación debe hacer visible.' },
          ],
        },
        {
          number: '02',
          type: 'lo que hicimos con eso',
          title: 'Cómo lo resolvimos',
          desc: 'La data limpia sale del script, la documentación ayuda a cerrar el decodificador y el dashboard de auditoría se usa para seguir validando conforme CBS crezca.',
          badge: 'ya entregado',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            { title: 'Script de limpieza', desc: 'Corrige hora, unidades, odómetro y filtra viajes inválidos. El cruce de kilómetros GPS contra kilómetros reales pasó de 1.58 a 1.08: los números finalmente cuadran.' },
            { title: 'Protocolo documentado', desc: 'Lo que falta decodificar del protocolo del dispositivo (eventos de acelerómetro, catálogo de dispositivo → VIN/placa) queda descrito para que CBS lo complete internamente.' },
            { title: 'Dashboard de auditoría', desc: 'Todos los hallazgos viajables dispositivo por dispositivo, para seguir validando la data conforme CBS siga creciendo.' },
          ],
        },
      ],
    },

    // ───────────────── FASES Y ENTREGABLES
    {
      layout: 'sticky-list',
      navLabel: 'Fases',
      tag: 'fases y entregables',
      title: 'Fases\ny entregables',
      description: 'Cotizamos por entregable, no por horas. Cada fase cierra con algo concreto que puedes abrir, usar o mostrar. MX 0 no obliga a MX 1, y MX 1 no obliga a CO. Cada fase se firma por separado.',
      blocks: [
        {
          number: 'mx 0',
          type: 'definición y diseño',
          title: 'Definición, diseño e identidad',
          desc: 'Dejamos firmes las reglas del score, los flujos de venta y siniestro, el diseño de producto y la identidad visual de SXUso. Al final tienes el documento de reglas listo para validarlo con El Potosí a tu ritmo, y la especificación técnica con la que arrancamos MX 1.',
          badge: '3 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'Taller contigo', desc: 'Para dejar firmes las reglas del score y los flujos de venta y siniestro.' },
            { title: 'Reglas del score', desc: 'Documento listo para que lo valides con El Potosí al ritmo de esa conversación.' },
            { title: 'Tabla de devoluciones integrada', desc: 'Con los parámetros que nos pases, lista para el motor de MX 1.' },
            { title: 'Diseño de app, web y panel', desc: 'Con sistema de diseño reutilizable para todo el proyecto.' },
            { title: 'Especificación técnica y de arquitectura', desc: 'El documento que guía el desarrollo de MX 1.' },
            { title: 'Identidad visual de SXUso', desc: 'Logo, paleta, tono.' },
          ],
        },
        {
          number: 'mx 1',
          type: 'piloto léon',
          title: 'Piloto en León',
          desc: 'El producto completo en producción: app publicada, servidor corriendo, score mensual funcionando, web vendiendo, panel operando, siniestros reportándose. Primeros asegurados activos entre enero y febrero de 2027.',
          badge: '8 a 10 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'App iOS y Android', desc: 'Publicadas en App Store y Google Play.' },
            { title: 'Servidor en producción', desc: 'En AWS México, con monitoreo y respaldos activos.' },
            { title: 'Motor de score mensual', desc: 'Funcionando con la tabla de El Potosí.' },
            { title: 'Web de venta en 3 clics', desc: 'Con activación condicionada al app.' },
            { title: 'Panel de administración', desc: 'Con todas las vistas del día a día.' },
            { title: 'Reporte de siniestros', desc: 'Con fotos y fuerza G registrada como evidencia.' },
            { title: 'Copiloto de datos con IA', desc: 'Capa de inteligencia sobre el panel: interpreta datos, responde preguntas en lenguaje natural, genera borradores de reportes, explica scores atípicos y prioriza tareas. Alcance adaptable según lo que más sirva a tu operación. La integración queda lista y operando; los tokens de API los contrata tu empresa directo con el proveedor (Anthropic u OpenAI), así controlas el presupuesto y los costos escalan con el uso real.' },
            { title: 'Garantía 90 días', desc: 'Sobre todo lo entregado, desde el día del lanzamiento.' },
          ],
        },
        {
          number: 'co',
          type: 'capa de datos y operación',
          title: 'Capa de datos y operación para CBS',
          desc: 'Lo que CBS hoy no tiene: data confiable, dashboard operativo, panel de tickets y score comparativo entre autos con y sin siniestro. Se construye en paralelo a MX 1, con el mismo equipo y el mismo stack.',
          badge: '4 a 6 semanas (en paralelo)',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'Decodificador corregido', desc: 'Desplegado en la cuenta de AWS de CBS.' },
            { title: 'Dashboard de flota y conductores', desc: 'Accesible a CBS.' },
            { title: 'Panel de tickets', desc: 'Con las 4 alertas base (dispositivos silenciados, pagos rechazados, voltaje crítico, comportamiento errático).' },
            { title: 'Score comparativo', desc: 'Entre autos con y sin siniestro, para alimentar el modelo de riesgo.' },
            { title: 'Garantía 90 días', desc: 'Sobre lo entregado.' },
          ],
        },
        {
          number: 'después',
          type: 'cotización aparte',
          title: 'Escala al Bajío',
          desc: 'Con el piloto validado, el siguiente contrato cubre el onboarding masivo de los asegurados actuales de El Potosí, el modelo de riesgo predictivo con datos reales, detección de fraude y liquidación de siniestros en línea. Opcionales como el SOS en vivo con ajustador en tiempo real se exploran y cotizan cuando se decidan.',
          badge: 'siguiente contrato',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Onboarding masivo para los asegurados actuales de El Potosí.',
            'Modelo de riesgo predictivo con los datos acumulados del piloto.',
            'Detección de fraude (app apagada a propósito, GPS falso, choques inconsistentes).',
            'Liquidación de siniestros en línea.',
            'Opcionales a explorar: SOS en vivo con ajustador en tiempo real y otras funciones que surjan del piloto. No forman parte del alcance comprometido; se cotizan como ampliación cuando se decidan.',
          ],
        },
      ],
    },

    // ───────────────── CÓMO OPERA LA PLATAFORMA
    {
      layout: 'sticky-list',
      navLabel: 'Cómo opera',
      tag: 'cómo lo operamos',
      title: 'Cómo opera\nla plataforma',
      description: 'Esta sección existe para que tengas respuestas concretas cuando sistemas de El Potosí te pregunte por tu proveedor de tecnología. Infraestructura, protección de datos, cómo se calcula el score y quién construye.',
      blocks: [
        {
          number: '01',
          type: 'infraestructura',
          title: 'Dónde vive tu plataforma',
          desc: 'Stack moderno diseñado para esto: Supabase (Postgres + PostGIS + Auth + Storage + Realtime), cómputo en Hetzner Cloud, archivos crudos en Cloudflare R2 (sin cargos de egreso) y ClickHouse para la analítica de Colombia. Cloudflare al frente, red privada para el equipo, respaldos y alta disponibilidad a partir de 50k asegurados.',
          badge: 'supabase + hetzner + r2',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'Dónde viven los datos', desc: 'Base transaccional en Supabase (Postgres 15 con PostGIS): viajes, scores, pólizas y tickets. Datos crudos de GPS y fotos de siniestro en Cloudflare R2, borrados automáticamente a los 90 días en México y 12 meses en Colombia. La analítica de Colombia corre en ClickHouse sobre Hetzner.' },
            { title: 'Cómo está protegida la entrada', desc: 'Todo el tráfico que llega al servidor pasa primero por Cloudflare, que filtra ataques automatizados y bloquea intentos de saturación. Es la misma capa que usan bancos y aseguradoras grandes.' },
            { title: 'Cómo entra el equipo a trabajar', desc: 'Nadie se conecta directo al servidor. Pasamos por una línea privada con doble factor; cada acceso queda registrado. Si alguien del equipo se va, se cierra su acceso y queda constancia.' },
            { title: 'Cómo evitamos caídas', desc: 'Desde 50,000 asegurados activos arranca alta disponibilidad: réplica de la base de datos y recuperación a un punto en el tiempo (PITR). Los backups diarios viven desde el día uno, con ventana de 7 días en el piloto y 14+ días en producción.' },
            { title: 'Quién es dueño de la infraestructura', desc: 'Las cuentas de Supabase, Hetzner, Cloudflare y los demás proveedores están a nombre de tu empresa, no de Flowbit. Nosotros las administramos con roles limitados; si algún día cambias de proveedor, el control es tuyo desde el día uno. Postgres es estándar: la base de datos se exporta y se mueve sin reescribir nada.' },
            { title: 'Opción México-residente', desc: 'Si en tus conversaciones con El Potosí aparece una exigencia contractual de residencia de datos en México, movemos la base transaccional a AWS México (región Querétaro). Sobrecosto real estimado: 3 a 10% en infraestructura + 4 a 6 semanas adicionales de puesta en marcha. La arquitectura queda equivalente; no hay reescritura.' },
            { title: 'Costo mensual estimado (lo paga tu empresa directo)', desc: 'Piloto (hasta 1,000) ~$2,400 MXN · Bajío (10,000) ~$6,200 MXN · Expansión (50,000) ~$17,800 (o ~$25,400 con HA+PITR) · Cartera completa (180,000) ~$25,500 (Plan Pro) o ~$36,200 MXN (Plan Team con SOC 2 + ISO 27001) · Colombia (~5,000 autos) ~$2,000 MXN. No entra en la sección de inversión.' },
          ],
        },
        {
          number: '02',
          type: 'seguridad y datos',
          title: 'Protección de datos y ciberseguridad',
          desc: 'Operamos bajo la LFPDPPP vigente de México (DOF 20 de marzo de 2025, con reforma del 14 de noviembre de 2025) y la Ley 1581 de Colombia. Tu empresa y El Potosí son responsables; Flowbit es encargado bajo contrato. El blindaje se cierra con un DPA de 12 cláusulas y una política explícita sobre qué no aceptamos aunque el cliente lo pida.',
          badge: 'lfpdppp mx · ley 1581 co',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'Rol de cada quien', desc: 'El Potosí (MX) y CBS (CO) son responsables: deciden finalidades, aviso de privacidad, consentimientos, retenciones, transferencias, respuesta a titulares y autoridades. Tu empresa es encargado comercial sobre los datos de cobro y comerciales. Flowbit es encargado técnico, bajo contrato firmado, actuando solo por instrucciones del responsable. Los proveedores (Supabase, Cloudflare, Hetzner, Mapbox, Stripe, Firebase, Meta, Resend, Sentry, GitHub) son subencargados listados en el contrato.' },
            { title: 'Clasificación de los datos', desc: 'GPS, aceleración y datos de manejo son datos personales (no sensibles). Nombre, RFC y pago son datos personales/financieros. Lesiones y datos de salud en un siniestro son datos sensibles por ley: exigen consentimiento expreso y por escrito en México, autorización explícita en Colombia. Cada categoría tiene retención distinta: GPS crudo 90 días (MX) / 12 meses (CO), viaje resumido 24 meses, scores vigencia + 5 años, póliza y pago 5 años.' },
            { title: 'Lo que hace nuestra línea de ciberseguridad', desc: 'Modelo de amenazas al inicio. Configuración segura durante el desarrollo. Pentest antes del lanzamiento con reporte entregable a El Potosí si lo pide. Plan de respuesta a incidentes con aviso en 72 horas conforme a la ley. Revisiones trimestrales de accesos y vulnerabilidades.' },
            { title: 'Las 12 cláusulas que te blindan en el DPA', desc: 'Solo-por-instrucciones, prohibición de uso secundario, lista cerrada de subencargados, flujo descendente de obligaciones, auditoría, aviso de brecha en plazo acotado, portabilidad y devolución de datos al terminar, borrado verificable, tope de responsabilidad, confidencialidad del equipo, cumplimiento de solicitudes de titulares, ubicación de datos. El contrato lo revisa y firma el abogado de El Potosí (o el tuyo), nosotros lo cumplimos.' },
            { title: 'Lo que no aceptamos (y te protege)', desc: 'No recibimos autorizaciones generales para usar datos con fines propios, no aceptamos cláusulas de propiedad intelectual sobre los datos del asegurado, no firmamos NDAs que nos obliguen a ocultar brechas al responsable, no asumimos responsabilidad legal frente al titular (eso es del responsable por ley). Son 8 cosas que, aunque el cliente las pida, es mejor no firmar: te explican en una reunión aparte.' },
            { title: 'Qué pasa con los datos del asegurado', desc: 'Al bajar el app, el asegurado acepta qué cosas usa SXUso por separado de cosas opcionales. Cifrado en tránsito y en reposo. Roles y bitácora: cada acción queda registrada. Bandeja de solicitudes del titular (acceso, rectificación, cancelación, oposición, revocación del consentimiento) con tiempos de respuesta documentados. Los reportes que compartes con El Potosí van en agregado, sin nombres individuales.' },
          ],
        },
        {
          number: '03',
          type: 'inteligencia',
          title: 'Cómo calificamos el manejo',
          desc: 'El piloto arranca con reglas transparentes, no con cajas negras. Cualquier asegurado puede recibir una respuesta concreta sobre por qué su score es el que es. Modelo de riesgo predictivo queda para la fase post-piloto, cuando ya hay siniestros reales mexicanos.',
          badge: 'reglas explicables',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'Reglas documentadas y validables', desc: 'Frenadas bruscas, excesos de velocidad, manejo nocturno, distancia total mensual. Las reglas las firmas tú tras validarlas con El Potosí en MX 0.' },
            { title: 'Choque real vs celular que se cae', desc: 'Los sensores del celular registran cualquier golpe; filtramos para no castigar al asegurado porque se le cayó el teléfono en el estacionamiento.' },
            { title: 'Conductor vs pasajero', desc: 'Un viaje en Uber, en camión o como copiloto no debe contar en el score. Usamos patrones de aceleración, posición respecto al volante y transiciones típicas de inicio y fin.' },
            { title: 'Explicación mensual del score', desc: 'Cada asegurado recibe un resumen mensual en palabras: por qué su score fue el que fue, qué mejoró, qué empeoró. En lenguaje natural, no en fórmulas.' },
            { title: 'Lo que queda listo para post-piloto', desc: 'Modelo de riesgo predictivo (requiere 6 a 12 meses de siniestros reales), detección de fraude, segmentos de conductores para ofertas, renovaciones y retención.' },
          ],
        },
        {
          number: '04',
          type: 'equipo',
          title: 'Quiénes construyen y cómo trabajamos',
          desc: 'Equipo chico por diseño. Hablas con quien construye, las decisiones se toman en horas, no hay overhead de agencia. Flowbit opera como extensión de tu equipo; la relación con El Potosí la llevas tú.',
          badge: 'extensión de tu equipo',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            { title: 'André Cortés', desc: 'Producto y arquitectura. Diseña el sistema, decide trade-offs, es tu contraparte directa.' },
            { title: 'César Almada', desc: 'Ingeniería. Construye y mantiene lo que diseñamos.' },
            { title: 'Músculo propio de ciberseguridad', desc: 'Integrado al equipo: modelo de amenazas, pentest, respuesta a incidentes y revisiones trimestrales.' },
            { title: 'Cómo trabajamos juntos', desc: 'Tú llevas la relación con El Potosí. Nosotros construimos, probamos, entregamos y te damos todo el material que necesites para tus conversaciones (documentación técnica, reportes de seguridad, demos, especificaciones). El Potosí marca sus tiempos contigo; tú marcas los tuyos con nosotros. Las iteraciones que surjan de tus conversaciones con ellos se cotizan como ampliación, sin que tengas que coordinar dos agendas.' },
          ],
        },
      ],
    },

    // ───────────────── SERVICIOS ADICIONALES
    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'El Diagnóstico tiene precio fijo. Los demás son opcionales, con precios estimados, y no están incluidos en el total de la implementación.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Análisis inicial para refinar el alcance antes de firmar MX 0: levantamiento de requerimientos, auditoría técnica, definición de alcance detallado y roadmap de implementación. Opcional si quieres un paso previo más corto que MX 0.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Sesión de arquitectura con sistemas de El Potosí',
          category: 'consultoria',
          desc: 'Una sesión conjunta con el equipo técnico de El Potosí para revisar la arquitectura propuesta y responder dudas de integración, cumplimiento y auditoría. Solo si lo requieren para aprobar el piloto.',
          price: 'Desde $18,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Bolsa de horas para mejoras',
          category: 'soporte',
          desc: 'Para funciones nuevas o cambios de alcance después del lanzamiento. Prepagada, con descuento sobre tarifa individual. Se consume contra alcance acordado, sin caducidad.',
          price: 'Desde $45,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Soporte priorizado',
          category: 'mantenimiento',
          desc: 'Ventana de respuesta más corta, revisiones extra y acompañamiento semanal durante los primeros meses del piloto. Se suma a la operación mensual.',
          price: 'Desde $8,000 MXN / mes',
          label: 'estimado',
        },
      ],
    },

    // ───────────────── INVERSIÓN
    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión',
      description: 'MX 0 se liquida completo al kickoff del proyecto, en un solo pago: funciona como enganche y arranque formal de la relación. MX 1 y CO: 40% a la firma de cada fase, 60% contra entrega final. Cada fase se firma por separado. Precios más IVA. La operación mensual arranca desde el lanzamiento y crece con los asegurados activos. Propuesta inicial (V01): el alcance final se ajusta contigo en la siguiente iteración.',
      cards: [
        {
          title: 'Engagement inicial (MX 0 + MX 1 + CO)',
          desc: 'El paquete completo: definición y diseño (MX 0), piloto León con app, servidor, score, web, panel y siniestros (MX 1), y capa de datos y operación para CBS (CO). Cada fase se firma por separado, pero éste es el total si vas con todo.',
          price: '$1,480,000 MXN',
          label: '+ IVA',
        },
        {
          title: 'MX 0 — Definición y diseño',
          desc: 'Taller contigo, reglas del score, tabla de devoluciones integrada, diseño de app/web/panel, especificación técnica, identidad visual de SXUso. 3 semanas. Se liquida completo al kickoff.',
          price: '$180,000 MXN',
          label: '+ IVA',
        },
        {
          title: 'MX 1 — Piloto León',
          desc: 'App iOS y Android publicadas, servidor en producción, motor de score, web de venta, panel y siniestros. 8 a 10 semanas. 40% a la firma, 60% contra entrega.',
          price: '$950,000 MXN',
          label: '+ IVA',
        },
        {
          title: 'CO — Capa de datos y operación CBS',
          desc: 'Decodificador corregido, dashboard, panel de tickets y score comparativo para CBS Colombia. 4 a 6 semanas en paralelo a MX 1. 40% a la firma, 60% contra entrega.',
          price: '$350,000 MXN',
          label: '+ IVA',
        },
        {
          title: 'Operación mensual México',
          desc: 'Base $15,000 MXN + $6 por asegurado hasta 1,000 · $3 adicional hasta 10,000 · $1.50 adicional hasta 50,000 · tarifa negociada arriba de 50,000. Incluye monitoreo, respaldos, actualizaciones de iOS y Android, parches de seguridad, revisión trimestral de ciberseguridad y cierre mensual de scores y devoluciones.',
          price: 'Desde $15,000 MXN',
          label: 'mensual + IVA',
        },
        {
          title: 'Operación mensual Colombia',
          desc: 'Mensualidad fija por operación, dashboard y alertas de CBS Colombia.',
          price: '$12,000 MXN',
          label: 'mensual + IVA',
        },
        {
          title: 'Lo que pagas directo a terceros (fuera de estas cifras)',
          desc: 'Infraestructura (Supabase + Hetzner + Cloudflare R2): piloto ~$2,400 MXN, cartera completa ~$25,500–36,200 MXN al mes · Consumo de API de IA para el copiloto (Anthropic u OpenAI): escala con uso real, estimado $50–200 MXN/mes en piloto y $1,500–5,000 USD/mes a cartera completa según intensidad · Cuentas de App Store y Google Play (anuales) · Dominio (anual) · Pasarela de pago (por transacción) · WhatsApp Business API de Meta (por conversación) · Mapbox (por uso) · Licencia de geolocalización en segundo plano para Android (mensual). Todo se contrata a nombre de tu empresa; tú controlas las cuentas, el presupuesto y los proveedores.',
          price: 'Variable',
          label: 'pagas directo',
        },
      ],
    },

    // ───────────────── COMPARATIVA VS DESARROLLO CONVENCIONAL
    {
      layout: 'roi',
      navLabel: 'Comparativa',
      tag: 'flowbit vs desarrollo convencional',
      title: 'Lo que costaría\nde la forma tradicional',
      description: 'Mismo alcance, dos caminos. Con una agencia convencional de desarrollo en México (equipo grande, procesos de agencia, stack enterprise sobre AWS, cero herramientas modernas de productividad), el piloto costaría alrededor de 3 veces más y tardaría cerca de 4 veces más en salir al aire. Las cifras usan tarifas de mercado (~$55 USD por hora de agencia mexicana × tipo de cambio referencia) y alcance idéntico al que te estamos cotizando. No son estimaciones nuestras: son cifras públicas de mercado (Hauer Power 2026 y referencias equivalentes).',
      cards: [
        {
          kind: 'breakeven',
          title: 'Comparativa por fase',
          rows: [
            { label: 'MX 0 — Definición y diseño', value: '$180,000 · 3 sem' },
            { label: 'MX 0 con agencia tradicional', value: '~$350,000 · 6 a 8 sem' },
            { label: 'MX 1 — Piloto León', value: '$950,000 · 8 a 10 sem', emphasis: true },
            { label: 'MX 1 con agencia tradicional', value: '~$2,800,000 · 24 a 32 sem' },
            { label: 'CO — Capa de datos CBS', value: '$350,000 · 4 a 6 sem (paralelo)' },
            { label: 'CO con agencia tradicional', value: '~$900,000 · 16 a 20 sem (serial)' },
            { label: 'Total engagement con Flowbit', value: '$1,480,000 MXN', emphasis: true },
            { label: 'Total engagement con agencia tradicional', value: '~$4,050,000 MXN' },
          ],
        },
        {
          kind: 'projection',
          title: 'Lo que te ahorras eligiendo Flowbit',
          intro: 'En dinero y en tiempo. El tiempo importa: cada mes que el piloto llega más tarde es un mes que no estás generando data ni mostrando resultados a El Potosí.',
          rows: [
            { label: 'Ahorro directo en inversión inicial', value: '~$2,570,000 MXN' },
            { label: 'Ahorro en infraestructura año 1 (stack moderno vs enterprise)', value: '~$150,000 MXN' },
            { label: 'Ahorro acumulado a cartera completa (año 1)', value: '~$600,000 MXN' },
            { label: 'Tiempo al mercado más rápido', value: '~7 a 10 meses antes' },
          ],
          note: 'Con Flowbit llegas al piloto en febrero de 2027. Con una agencia tradicional llegas a fin de 2027 o principios de 2028: te pierdes toda la ventana de temporada y la relación con El Potosí arranca con un año de retraso.',
        },
        {
          kind: 'benefit',
          title: 'Por qué somos más eficientes (sin bajar calidad)',
          items: [
            { title: 'Equipo compacto por diseño', desc: 'Un grupo lean de perfiles seniors construyendo directo sobre tu producto, sin capas intermedias. Hablas con quien decide y con quien construye. Las decisiones se toman en horas, no en semanas. Nada de gerentes de proyecto, cuentas, coordinadores o juniors aprendiendo en tu factura.', highlight: true },
            { title: 'Stack moderno y arquitectura eficiente', desc: 'Supabase + Hetzner + Cloudflare R2 bajan el esfuerzo de DevOps un 60 a 70% comparado con una arquitectura enterprise sobre AWS. La misma seguridad, la misma disponibilidad, menos piezas que mantener.' },
            { title: 'Herramientas de productividad avanzada', desc: 'Usamos asistentes de código modernos donde aceleran tareas repetitivas sin sacrificar calidad; las decisiones de arquitectura, seguridad, revisión y relación con el cliente son humanas. Lo que una agencia resuelve con tres juniors y dos semanas, nosotros lo resolvemos en días.' },
            { title: 'Sin overhead de agencia', desc: 'Hablas con quien construye. Menos reuniones, menos ciclos de revisión, menos horas facturadas en coordinación interna. El costo de lo que te entregamos es casi todo producto, no proceso.' },
          ],
        },
      ],
      closingLine: 'La diferencia no es que cobremos poco. Es que gastamos tu dinero donde importa — en el producto, no en el proceso — y ese ahorro se queda contigo.',
    },

    // ───────────────── DEPENDENCIAS Y RIESGOS
    {
      layout: 'sticky-list',
      navLabel: 'Dependencias',
      tag: 'dependencias y riesgos',
      title: 'Dependencias\ny riesgos',
      description: 'Lo que necesitamos de ti para que las fechas se cumplan, y lo que no prometemos. Varias dependencias vienen de El Potosí; tú marcas el ritmo de esa conversación. Mientras tanto avanzamos en todo lo que no las bloquee.',
      blocks: [
        {
          number: '01',
          type: 'dependencias',
          title: 'Lo que necesitamos de ti',
          desc: 'Varias de estas cosas dependen de El Potosí. Tú marcas el ritmo de esa conversación y nos las entregas cuando las tengas.',
          badge: 'requerido',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'Tabla de devoluciones. Sin la tabla, el motor de devoluciones queda en espera. La necesitamos para MX 0; tú decides cuándo y cómo se la pides a El Potosí.',
            'Decisión sobre quién emite la póliza y hace la devolución a la tarjeta. Define si la web de venta se conecta a un sistema existente o lo armamos nosotros. Afecta alcance.',
            'Acceso continuo a la data de CBS. API o réplica de base de datos. Sin acceso, no hay dashboard.',
            'Siniestros reales de Colombia. Casos con y sin choque, con el expediente completo. Es lo que calibra el score de México.',
            'Cuentas de App Store y Google Play a nombre de tu empresa o de El Potosí desde el inicio.',
            'Requisitos técnicos que El Potosí pida a sus proveedores. Ya proponemos AWS México; si aparecen revisiones adicionales en tus conversaciones, nos las pasas y las entregamos.',
            'Decisión sobre quién es dueño de la data (tu empresa o El Potosí). Define el contrato de encargo y el aviso de privacidad.',
          ],
        },
        {
          number: '02',
          type: 'riesgos',
          title: 'Lo que no prometemos',
          desc: 'Dejamos claro de entrada qué sí comprometemos y qué no.',
          badge: 'acuerdo transparente',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'No prometemos un monto de descuento específico al asegurado. Lo pone la tabla de El Potosí.',
            'No prometemos aprobaciones ni tiempos de El Potosí. Tú llevas esa conversación; nosotros no tenemos control sobre ella.',
            'No prometemos que el score reduzca siniestros sin un piloto que lo mida. Lo construimos para que se pueda medir.',
            'Si tus dependencias con El Potosí tardan más de lo esperado (tabla, integración, requisitos), la fecha del piloto se recorre. Lo notificamos la semana en que se detecte y te damos opciones para absorber el retraso donde se pueda.',
          ],
        },
      ],
    },

    // ───────────────── PROCESO DE ARRANQUE
    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca con estos pasos. Cada entrega se revisa en conjunto antes de pasar a la siguiente.',
      steps: [
        { step: 'paso 1', title: 'Firma de MX 0', desc: 'Noviembre 2026. Autorización y liquidación completa de MX 0 ($180,000 MXN + IVA) como enganche y arranque formal del proyecto.' },
        { step: 'paso 2', title: 'Validación con El Potosí', desc: 'Primera semana de MX 0. Tomas los materiales de arranque (reglas del score, flujos de venta y siniestro, requisitos técnicos) y los validas con El Potosí; nos regresas su feedback y con eso arrancamos el diseño.' },
        { step: 'paso 3', title: 'Entrega de MX 0', desc: 'Final de diciembre 2026. Diseño, especificación técnica e identidad visual listos.' },
        { step: 'paso 4', title: 'Arranque de MX 1', desc: 'Enero 2027. Firma de MX 1 (40% a la firma, 60% contra entrega) y arranque del desarrollo del piloto. En paralelo arranca CO.' },
        { step: 'paso 5', title: 'Piloto en vivo', desc: 'Fin de febrero 2027. App publicada, servidor en producción, score mensual, panel operando, primeros asegurados activos. Checkpoint quincenal contigo durante MX 1.' },
      ],
    },

    // ───────────────── CTA
    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: '¿Arrancamos?',
      description: 'El piloto de León cierra el calendario de enero y febrero de 2027. Para llegar con todo listo (app en tiendas, servidor en producción, panel operando y los primeros asegurados activos) necesitamos firmar MX 0 en noviembre. Confirma la propuesta y arrancamos el taller de definición esta misma semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'mailto:hola@flowbit.studio?subject=SXUso%20—%20Aceptaci%C3%B3n%20de%20propuesta',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default sxuso
