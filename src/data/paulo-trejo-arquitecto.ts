import type { ProposalData } from './types'

const pauloTrejoArquitecto: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'propuesta comercial',
      title: 'Paulo Trejo\nArquitectura',
      cardTitle: 'CRM a la medida · sistema operativo del despacho',
      cardText: 'Un CRM integral construido a la medida del despacho — no un Autodesk Construction Cloud, un ERP genérico ni un Excel dopado. Reemplaza hojas de cálculo, WhatsApp con el supervisor y Word para reportes con una sola plataforma. Desde el primer cálculo de presupuesto hasta la firma del cliente en el reporte final, todo vive en el mismo sistema — y sigue corriendo mientras tú estás diseñando.',
      meta: [
        { label: 'Dirigido a', value: 'Paulo Trejo' },
        { label: 'Fecha', value: '20 de abril de 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'arquitectura del sistema',
      title: 'Un CRM,\ncuatro fases',
      description: 'Un CRM construido a la medida para la operación real del despacho — no un Autodesk, un HubSpot ni un ERP genérico forzado a entrar en tu flujo. Se entrega en cuatro fases progresivas: operación interna, supervisión de obra, biometría de horas e inventario. Las cuatro viven sobre la misma base de datos, el mismo panel y la misma sesión.',
      quote: 'Cada hora que gastas en nómina, cobranza o reportes a mano es una hora que no estás diseñando. El sistema debería pensar solo — tú dedícate al proyecto.',
      cards: [
        {
          title: 'Fase 1 · Core operativo y presupuestos',
          category: 'tech',
          description: 'CRM, calculadora de presupuestos y control de pagos. La fundación del despacho.',
          items: [
            'CRM interno con clientes, proyectos, tareas y seguimiento',
            'Calculadora de presupuestos arquitectónicos con partidas y parametrías',
            'Control de pagos con captura manual (ingresos y egresos)',
            'Dashboard del despacho: proyectos activos, cobranza pendiente, presupuestos en pipeline',
            'Roles diferenciados: titular, colaborador, administrativo',
          ],
        },
        {
          title: 'Fase 2 · Supervisión, nómina y reportes al cliente',
          category: 'design',
          description: 'Todo lo que pasa en obra + cómo lo ve tu cliente — una sola cadena.',
          items: [
            'Portal/app para supervisor: bitácora, avances, fotos, incidencias desde campo',
            'Nómina de personas de obra con captura manual inicial',
            'Generador automático de reportes para el cliente con datos de bitácora',
            'Portal del cliente: avances, presupuesto, fotos y firma digital',
            'Integración con Fase 1 — cada obra aparece ligada a su proyecto y presupuesto',
          ],
        },
        {
          title: 'Fase 3 · Reloj checador biométrico',
          category: 'tech',
          description: 'Hardware con huella digital que reemplaza la nómina manual de Fase 2.',
          items: [
            'Integración con reloj checador biométrico (huella digital)',
            'Captura automática de entradas, salidas y horas extras',
            'Sincronización en tiempo real con el módulo de nómina',
            'Reportes de asistencia por trabajador, proyecto y periodo',
            'Hardware con precio estimado — puede comprarlo el cliente por su cuenta',
          ],
        },
        {
          title: 'Fase 4 · Control de inventario',
          category: 'tech',
          description: 'Materiales, movimientos y alertas — el último cabo suelto de la operación.',
          items: [
            'Inventario de materiales con SKU, unidades y costos',
            'Descuento automático de materiales por obra o proyecto',
            'Alertas de stock bajo y órdenes de compra sugeridas',
            'Reportes de consumo por proyecto para afinar presupuestos futuros',
            'Dashboard de inventario integrado al panel general',
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
          type: 'core operativo y presupuestos',
          title: 'CRM, presupuestos y pagos — la fundación',
          desc: 'La primera fase ataca los tres frentes que hoy viven dispersos entre Excel, Word y WhatsApp: la gestión de clientes y proyectos, el cálculo de presupuestos arquitectónicos y el control de pagos. Sin esta base, el resto del sistema no tiene sobre qué parar. Todo lo demás se construye enganchado a la data que genera esta fase.',
          badge: '6–8 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          listItems: [
            'CRM interno: alta de clientes, proyectos y tareas con estado y responsable.',
            'Vista de pipeline de proyectos (prospecto → cotizado → contratado → en ejecución → entregado).',
            'Calculadora de presupuestos arquitectónicos por partidas, con catálogo de materiales y mano de obra.',
            'Plantillas de presupuesto reutilizables — partir de un proyecto anterior con un clic.',
            'Generación de presupuesto en PDF con branding del despacho, listo para mandar al cliente.',
            'Control de pagos con captura manual: registro de ingresos, egresos y categorías.',
            'Conciliación manual contra estados de cuenta bancarios.',
            'Dashboard general: proyectos activos, cobranza pendiente, presupuestos enviados sin respuesta.',
            'Roles diferenciados: titular (Paulo), colaborador (otros arquitectos), administrativo.',
            'Exportación de reportes para contador o socios.',
          ],
        },
        {
          number: 'fase 2',
          type: 'supervisión, nómina y reportes al cliente',
          title: 'Portal del supervisor + nómina + reportes al cliente',
          desc: 'Con la base lista, esta fase conecta las dos puntas del proyecto: lo que pasa en obra (bitácora del supervisor, nómina de obra) y lo que recibe el cliente (reportes formales con fotos, avances y firma digital). Hoy el supervisor probablemente manda fotos por WhatsApp y tú re-empaquetas todo a mano para el cliente. Esta fase corta ese trabajo doble.',
          badge: '7–9 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Portal/app mobile-friendly para el supervisor de obra.',
            'Bitácora de obra: registro de avances, incidencias, pendientes y desviaciones.',
            'Carga de fotos del supervisor con geolocalización y timestamp.',
            'Módulo de nómina de personas de obra con captura manual de horas trabajadas.',
            'Cálculo automático de sueldos semanales/quincenales con deducciones configurables.',
            'Generador automático de reportes de avance para el cliente (semanal o mensual).',
            'Portal del cliente: acceso al proyecto, fotos, presupuesto, avances y firma digital.',
            'Firma digital de reportes y entregables — sin impresiones ni escaneos.',
            'Integración con Fase 1: cada obra está ligada a su proyecto, cliente y presupuesto base.',
          ],
        },
        {
          number: 'fase 3',
          type: 'reloj checador biométrico',
          title: 'Biometría de horas — la nómina deja de ser manual',
          desc: 'La nómina de Fase 2 arranca con captura manual porque es la forma más rápida de tener algo operando. Esta fase instala un reloj checador biométrico (huella digital) que captura horas automáticamente y las sincroniza con el módulo de nómina ya funcionando. Sin discrepancias, sin horas fantasma, sin trabajadores diciendo que entraron antes de lo que realmente entraron.',
          badge: '3–4 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Integración de reloj checador biométrico con huella digital.',
            'Captura automática de entradas, salidas, horas extras y ausencias.',
            'Sincronización en tiempo real con el módulo de nómina de Fase 2.',
            'Reportes de asistencia por trabajador, por obra y por periodo.',
            'Alertas de anomalías: checadas fuera de horario, ausencias sin justificar.',
            'Hardware incluido con costo estimado — el cliente puede comprar el propio con specs compatibles (te pasamos la lista).',
            'Configuración inicial del reloj con las huellas de todo el equipo de obra.',
          ],
        },
        {
          number: 'fase 4',
          type: 'control de inventario',
          title: 'Inventario de materiales y control de consumo',
          desc: 'El último módulo cierra el círculo operativo: cada material que entra al almacén queda registrado, y cada material que sale se descuenta automáticamente de la obra que lo consume. Esto permite dos cosas fuertes — saber cuánto se gastó realmente en cada obra (vs lo presupuestado) y afinar los presupuestos futuros con data real de consumo propio.',
          badge: '4–5 semanas',
          badgeVariant: 'gray',
          isBlue: false,
          listItems: [
            'Catálogo de materiales con SKU, unidades, costos y proveedor.',
            'Registro de entradas al almacén (compras, devoluciones, transferencias).',
            'Salidas automáticas por obra/proyecto con descuento de stock en tiempo real.',
            'Alertas de stock bajo con sugerencia de orden de compra.',
            'Reportes de consumo por obra: presupuestado vs real, diferencia y causas.',
            'Data de consumo alimenta la calculadora de presupuestos de Fase 1 — cada presupuesto futuro es más preciso.',
            'Dashboard de inventario integrado al panel general del despacho.',
          ],
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión · precio especial',
      title: 'Inversión\ndel proyecto',
      description: 'Aplica descuento especial del 50% sobre el alcance estándar: el proyecto normalmente se cotiza en $180,000 MXN y en esta propuesta se ofrece en $90,000 MXN.\n\nTres formas de pago:\n· Pago único — $90,000 MXN (sin recargo)\n· Plan 6 meses — $16,500 MXN/mes ($99,000 total, +10% por financiamiento)\n· Plan 12 meses — $8,625 MXN/mes ($103,500 total, +15% por financiamiento)\n\nAl ser un CRM a la medida, no hay licencias mensuales ni cobros por usuario: pagas el desarrollo una vez y el sistema queda siendo tuyo. Comparado con un Autodesk/ERP del mismo alcance, ahorras entre $4,000 y $12,000 MXN/mes en licencias recurrentes desde el día 1.\n\nIncluye hosting y dominio el primer año — a partir del año 2, $3,500 MXN/año corren por cuenta del despacho.',
      cards: [
        {
          title: 'CRM completo · 3 formas de pago',
          desc: 'El CRM entregado en 4 fases. Precio base con 50% de descuento aplicado: $90,000 MXN pago único sin recargo. O distribuye el pago: plan 6 meses a $16,500 MXN/mes ($99,000 total, +10% por financiamiento) o plan 12 meses a $8,625 MXN/mes ($103,500 total, +15% por financiamiento). Terminado el pago, el sistema queda siendo tuyo — sin licencias recurrentes ni costo por usuario.',
          price: '$90,000 MXN',
          label: 'pago único · 50% OFF · o plan 6m / 12m',
        },
        {
          title: 'Fase 1 · Core operativo y presupuestos',
          desc: 'CRM interno, calculadora de presupuestos arquitectónicos, control de pagos manual y dashboard. Es la fundación — todo lo demás se engancha aquí. Precio normal $60,000 MXN, precio con descuento $30,000 MXN.',
          price: '$30,000 MXN',
          label: '50% OFF · normal $60K',
        },
        {
          title: 'Fase 2 · Supervisión + nómina + reportes',
          desc: 'Portal del supervisor de obra, nómina manual, generador de reportes para el cliente, portal del cliente y firma digital. La fase más grande en módulos. Precio normal $55,000 MXN, precio con descuento $27,500 MXN.',
          price: '$27,500 MXN',
          label: '50% OFF · normal $55K',
        },
        {
          title: 'Fase 3 · Reloj checador biométrico',
          desc: 'Integración de reloj con huella digital + reemplazo de nómina manual por captura automática. El hardware (reloj físico) está estimado ~$7,000 MXN aparte — puede cotizarse por Flowbit o comprarse por cuenta del cliente con specs compatibles. Precio normal $35,000 MXN, precio con descuento $17,500 MXN.',
          price: '$17,500 MXN',
          label: '50% OFF · normal $35K',
        },
        {
          title: 'Fase 4 · Control de inventario',
          desc: 'Catálogo de materiales, descuento automático por obra, alertas de stock y reportes de consumo que afinan presupuestos futuros. La última pieza del rompecabezas. Precio normal $30,000 MXN, precio con descuento $15,000 MXN.',
          price: '$15,000 MXN',
          label: '50% OFF · normal $30K',
        },
      ],
    },

    {
      layout: 'roi',
      navLabel: 'Retorno',
      tag: 'retorno estimado',
      title: 'Qué recuperas —\ny cuándo',
      description: 'Como todavía no tenemos data específica de tu operación actual, los números aquí abajo son benchmarks de la industria arquitectónica pequeña/mediana en México. Son conservadores — tus números reales pueden ser mejores o peores, y los afinamos durante el Diagnóstico incluido de cortesía.',
      cards: [
        {
          kind: 'cost',
          title: 'Qué te cuesta la operación manual (benchmarks)',
          intro: 'Estos son los costos silenciosos típicos de un despacho pequeño/mediano que opera con Excel, Word y WhatsApp:',
          points: [
            '15–25 horas/mes armando reportes de avance en Word/PowerPoint para clientes — tiempo que no se cobra.',
            '5–10% de los presupuestos cierran con sobrecosto por errores de cálculo manual — margen perdido proyecto a proyecto.',
            'Cobranza promedio de 45–60 días sin portal formal ni firma digital vs 15–20 días con portal.',
            '3–5 horas/semana gestionando nómina de obra a mano y cotejando horas reportadas por el supervisor.',
            '0% de visibilidad del consumo real de materiales por obra — cada presupuesto siguiente se arma a ciegas.',
          ],
        },
        {
          kind: 'benefit',
          title: 'Qué cambia con el sistema operando',
          items: [
            {
              title: 'Tiempo liberado del despacho · beneficio principal',
              desc: 'Las ~60 horas mensuales en tareas operativas (reportes, nómina, cobranza, re-cálculos) regresan a ti. Valoradas conservadoramente a $500/hora.',
              value: '+$30,000 MXN/mes equivalente',
              highlight: true,
            },
            {
              title: 'Presupuestos más precisos',
              desc: 'Calculadora automatizada + data real de consumo de obras pasadas. Reducción típica de errores de cálculo del 80% — margen defendido proyecto tras proyecto.',
            },
            {
              title: 'Cobranza más rápida · beneficio cualitativo',
              desc: 'Portal del cliente con avances en tiempo real + firma digital de reportes. Menos fricción al cobrar, menos proyectos colgados esperando que el cliente apruebe una hoja impresa.',
            },
            {
              title: 'Visibilidad total del negocio · beneficio cualitativo',
              desc: 'Un solo dashboard con proyectos activos, cobranza pendiente, presupuestos en pipeline y consumo real por obra. Decisiones con data, no con intuición.',
            },
          ],
        },
        {
          kind: 'breakeven',
          title: 'Punto de equilibrio estimado',
          rows: [
            { label: 'Inversión total (con 50% OFF)', value: '$90,000 MXN' },
            { label: 'Beneficio estimado mensual', value: '~$30,000 MXN' },
            { label: 'Punto de equilibrio', value: '~3 meses', emphasis: true },
          ],
        },
        {
          kind: 'projection',
          title: 'Proyección a 12 y 24 meses',
          intro: 'Una vez pagado el proyecto, el beneficio es flujo neto recuperado. Estas proyecciones son conservadoras:',
          rows: [
            { label: 'A 12 meses', value: '~$270,000 MXN recuperados' },
            { label: 'A 24 meses', value: '~$630,000 MXN recuperados' },
          ],
          note: 'Números basados en benchmarks de industria, calculados sobre la inversión con 50% de descuento. No cuentan efectos compuestos como: más proyectos cerrados por tener capacidad liberada, presupuestos ganados por ser más precisos, ni el valor de la paz mental de no cargar toda la operación en la cabeza.',
        },
      ],
      closingLine: 'Cuando el sistema corre, tú vuelves a ser solo arquitecto.',
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'Add-ons opcionales no incluidos en el precio principal del proyecto. Mezcla de servicios recurrentes (soporte mensual, bot de enriquecimiento) y servicios anuales (hosting+dominio). El Diagnóstico tiene valor de $10,000 MXN — en este caso se ofrece como cortesía por haberse realizado ya durante nuestra cita previa.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Auditoría profunda del flujo actual del despacho, stack, puntos de fuga y data para refinar los números de ROI con tu operación real. Valor regular $10,000 MXN — cortesía por haberse hecho en la cita previa.',
          price: 'Cortesía',
          label: 'ya realizado',
        },
        {
          title: 'Soporte y mantenimiento mensual',
          category: 'soporte',
          desc: 'Monitoreo de infraestructura, resolución de bugs, pequeños ajustes y capacitación continua al equipo. Incluye los primeros 3 meses sin costo post go-live como parte del acompañamiento de transición — a partir del mes 4, $3,000 MXN/mes si decides continuar.',
          price: '$3,000 MXN/mes',
          label: '3 meses incluidos',
        },
        {
          title: 'Bot de enriquecimiento de data (n8n)',
          category: 'automatizacion',
          desc: 'Automatización vía n8n que alimenta el CRM con data que hoy capturas a mano: fichas de clientes enriquecidas desde fuentes externas, precios de mercado de materiales actualizándose solos en los presupuestos, sincronización con sistemas contables o bancarios. No es un bot de atención a cliente — es un conector invisible que mantiene la data del sistema viva y actualizada. Configuración y mantenimiento de los workflows incluidos.',
          price: '$4,500 MXN/mes',
          label: 'opcional · recurrente',
        },
        {
          title: 'Hosting y dominio · año 2 en adelante',
          category: 'soporte',
          desc: 'El primer año del proyecto, hosting y dominio vienen incluidos sin costo adicional. A partir del año 2, corre por cuenta del despacho el costo operativo anual para mantener el CRM en línea y el dominio activo.',
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
          desc: 'Alineación de alcance, definición de plan de pago (6 o 12 meses), accesos a sistemas actuales y calendario de validaciones.',
        },
        {
          step: 'paso 2',
          title: 'Discovery técnico',
          desc: 'Auditoría de flujo actual: cómo se arman presupuestos hoy, cómo se cobra, cómo reporta el supervisor, qué formatos se mandan al cliente. Sale un mapeo de data y arquitectura objetivo.',
        },
        {
          step: 'paso 3',
          title: 'Diseño y aprobación',
          desc: 'Prototipos de dashboard, calculadora de presupuestos, portal del supervisor y portal del cliente. Validación antes de escribir una línea de código.',
        },
        {
          step: 'paso 4',
          title: 'Desarrollo por sprints',
          desc: 'Entregas iterativas cada 2 semanas. Ves y pruebas cada módulo a medida que se construye. Fase 1 arranca primero porque todo lo demás se engancha.',
        },
        {
          step: 'paso 5',
          title: 'Integración del reloj checador',
          desc: 'Al llegar a Fase 3, instalamos el reloj, configuramos las huellas del equipo de obra y hacemos pruebas en vivo antes de activar la sincronización con nómina.',
        },
        {
          step: 'paso 6',
          title: 'Go-live y transición asistida',
          desc: 'Lanzamiento con el despacho operando el sistema. Primeros 15 días con soporte activo para dudas en tiempo real + 3 meses de mantenimiento sin costo.',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: '¿Arrancamos?',
      description: 'Tienes un despacho que ya funciona. Lo que no escala es la operación manual que tú cargas arriba del diseño. Este CRM no es un software más — es la pieza que opera toda tu práctica y te regresa las horas que hoy te quita Excel.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default pauloTrejoArquitecto
