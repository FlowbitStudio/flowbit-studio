import type { ProposalData } from './types'

const canCanPress: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Sistema de operación',
      title: 'Can Can\nPress',
      cardTitle: 'Panel de operación Can Can Press',
      cardText: 'Can Can Press vende en la galería, en ferias, en línea y en más de treinta librerías, y cada canal lleva hoy sus propias cuentas. Flowbit construirá un solo panel para operar todo: productos, inventario, ventas, eventos, cobros, equipo y administración, conectado a su tienda en WordPress.',
      meta: [
        { label: 'Dirigido a', value: 'Gabino Azuela' },
        { label: 'Fecha', value: 'Octubre 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Arquitectura',
      tag: 'arquitectura',
      title: 'Un catálogo,\ncuatro canales',
      description: 'Una sola base de datos alimenta todos los canales. Cada producto, sea un libro, una playera o un llavero, existe una vez en el sistema, y cada canal ve cuántas piezas tiene, cuántas vendió y cuánto le debe a quién.',
      quote: 'Un libro, una playera, una taza: cada pieza que sale del taller sabe dónde está, quién la tiene y cuándo se pagó.',
      cards: [
        {
          title: 'Galería Can Can Projects',
          category: 'sistema',
          items: ['Inventario propio del punto de venta', 'Ventas de mostrador y de exposición', 'Corte de caja por día'],
        },
        {
          title: 'Ferias de libro',
          category: 'sistema',
          items: ['Inventario que sale y regresa', 'Venta por feria con su propio corte', 'Reporte de lo vendido en cada edición'],
        },
        {
          title: 'Tienda en línea',
          category: 'ecommerce',
          items: ['Su WooCommerce actual, conectado al panel', 'Stock y precios sincronizados con los demás canales', 'Pedidos web en la misma bandeja'],
        },
        {
          title: 'Consignación y mayoreo',
          category: 'crm',
          items: ['Librerías y tiendas como clientes', 'Piezas entregadas, vendidas y por cobrar', 'Liquidaciones y cobranza por cliente'],
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
          type: 'implementación',
          title: 'Panel de operación',
          desc: 'Un solo lugar para ver y manejar todo el negocio, desde la computadora o el teléfono. Hoy cada canal lleva sus propias cuentas; con el panel, cada producto, cada venta y cada peso quedan registrados una vez y se ven desde cualquier ángulo.',
          badge: '5–6 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Catálogo de productos',
              desc: 'Libros, playeras, tazas, gorras, llaveros y lo que vayan sacando: todo vive en un mismo catálogo. Cada producto se da de alta una sola vez con la información que ustedes necesiten llevar de él; qué datos se registran lo definimos juntos en el diagnóstico. Las variantes, como tallas, colores o ediciones, cuelgan del mismo producto. De ahí se alimentan la tienda en línea, la caja de la galería y los reportes, así que un cambio de precio se hace en un solo lugar. Si ya tienen el catálogo en una hoja de cálculo, se sube completo de una vez.',
            },
            {
              title: 'Inventario por canal',
              desc: 'Saben en todo momento cuántas piezas hay de cada producto y dónde están: en bodega, en la galería, en la feria de esta semana o en cada librería. Cuando mueven cajas de un lugar a otro queda registrado quién las movió y cuándo. Cada producción que llega, sea un tiraje de imprenta o un lote de playeras, entra con su costo, y las piezas de cortesía, de archivo o dañadas se separan de las que están a la venta. Si un producto se está acabando en algún lado, el panel avisa.',
            },
            {
              title: 'Pedidos y consignación',
              desc: 'Todos los pedidos llegan a una misma bandeja, vengan de la tienda en línea, de un distribuidor o de una venta de mayoreo, y cada uno muestra en qué va: por pagar, pagado, enviado o entregado. Con las librerías en consignación el panel lleva la cuenta por ustedes: cuántas piezas dejaron, cuántas se vendieron, cuántas regresaron y cuánto falta por cobrar. Las remisiones y las liquidaciones salen en PDF listas para mandar.',
            },
            {
              title: 'Eventos y boletaje',
              desc: 'Presentaciones, exposiciones, talleres y ferias se organizan desde aquí: fecha, sede, cupo y precios de entrada (preventa, general o cortesía). La gente compra su boleto en línea y lo recibe por correo, listo para guardarse en el Apple Wallet o el Google Wallet de su teléfono. En la puerta se escanea con un celular y el boleto queda usado, así que nadie entra dos veces. Al final, cada evento tiene su corte con boletos vendidos, asistencia e ingresos.',
            },
            {
              title: 'Sitio web: WordPress + WooCommerce',
              desc: 'Migramos su sitio actual de WordPress, con su tienda WooCommerce, a nuestra infraestructura: el diseño y el contenido se conservan, y a partir de ahí se administra desde el panel. Cuando dan de alta un producto o cambian un precio, se actualiza solo en la tienda en línea, con las existencias reales. Cuando alguien compra en la web, el pedido aparece en el panel y se descuenta del inventario. Las publicaciones, exposiciones y el calendario de eventos también se editan desde aquí, sin entrar a WordPress.',
            },
            {
              title: 'Pasarela de pago',
              desc: 'Una sola pasarela para cobrar todo lo que venden: libros, mercancía y cualquier producto de la tienda en línea, pedidos de mayoreo y boletos de eventos. En cuanto el pago se aprueba, el pedido se marca como pagado o el boleto se envía, sin que nadie tenga que revisarlo a mano. Los pagos que llegan por otros medios, como transferencia, depósito, efectivo o terminal bancaria, también se capturan en el panel y se ligan a su pedido. Todos los cobros quedan en el panel, separados por canal y por evento, para cuadrar cuentas en minutos.',
            },
            {
              title: 'Administración',
              desc: 'Los gastos del día a día (papel, tinta, encuadernación, envíos, renta de stands) se capturan en el panel junto con sus proveedores, así siempre saben qué se debe y a quién. También se lleva lo que les deben las librerías y los clientes de mayoreo.',
            },
            {
              title: 'Equipo: tareas y roles',
              desc: 'Cada persona del equipo entra con su propio usuario y un rol que define qué puede ver y hacer: quien atiende la galería vende y consulta existencias, quien lleva las cuentas ve la administración, y la dirección lo ve todo. Las tareas del día a día, como preparar una feria, mandar una consignación o sacar una producción, se asignan a alguien con fecha de entrega y se sigue su avance en un tablero. Queda registro de quién hizo qué y cuándo.',
            },
            {
              title: 'Reportes y tablero de dirección',
              desc: 'Un tablero que contesta de un vistazo cómo va el negocio: cuánto se vendió, cuánto quedó de margen, cuánto se gastó y qué cuentas están por vencer. Se puede ver la venta por canal, por producto o por periodo, y cada cierre de mes arma el estado de resultados de la venta a la utilidad. Para socios e inversionistas hay un reporte listo en PDF con los números del mes y un análisis redactado por IA, además del avance contra las metas que ustedes definan.',
            },
          ],
        },
        {
          number: 'fase 2',
          type: 'incluido en la implementación',
          title: 'Punto de venta para galería y ferias',
          desc: 'Una caja en tableta o teléfono que vende contra el mismo inventario del panel, pensada para el mostrador de la galería y para el stand de una feria.',
          badge: 'incluido',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'En la galería',
              desc: 'Se busca el producto por nombre o se escanea su código de barras, se cobra en efectivo, tarjeta o transferencia, y la pieza se descuenta del inventario de la galería al momento. Al cerrar el día, el corte de caja ya está hecho.',
            },
            {
              title: 'En una feria',
              desc: 'Se arma la feria como una ubicación temporal: salen las cajas de bodega, se vende desde el teléfono y lo que no se vendió regresa. Si el internet del recinto falla, la caja sigue vendiendo y se sincroniza sola al recuperar señal. Al final, cada feria tiene su propio reporte.',
            },
          ],
        },
        {
          number: 'fase 3',
          type: 'incluido en la implementación',
          title: 'Facturación y envíos',
          desc: 'Lo último que suele quedar fuera del sistema: facturar y mandar paquetes.',
          badge: 'incluido',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Facturación',
              desc: 'Cuando un cliente o una librería pide factura, se genera desde el pedido o desde la liquidación de consignación, sin volver a capturar datos en otro sistema.',
            },
            {
              title: 'Envíos',
              desc: 'El panel calcula el costo de envío nacional o internacional, genera la guía y le avisa al comprador por correo cuando su pedido sale y cuando va en camino.',
            },
          ],
        },
        {
          number: 'después',
          type: 'cotización aparte',
          title: 'Módulos a la medida',
          desc: 'Con el sistema en operación vamos a ver cosas que hoy no se ven: procesos que se repiten, cuentas que se siguen llevando a mano, oportunidades en algún canal. Cada módulo nuevo que surja de ahí se propone con alcance y precio cerrados antes de construirse, y se suma al mismo panel, sin sistemas paralelos.',
          badge: 'cotización aparte',
          badgeVariant: 'gray',
          isBlue: false,
        },
      ],
    },

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
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Carga del catálogo',
          category: 'soporte',
          desc: 'Alta completa de productos, variantes, precios, fotografías y existencias actuales por canal, para arrancar con el panel lleno desde el primer día.',
          price: 'Desde $4,500 MXN',
          label: 'estimado',
        },
        {
          title: 'Fotografía de catálogo',
          category: 'fotografia',
          desc: 'Fotografía de producto de los libros y la mercancía: portadas, interiores, prendas y detalles de impresión. Editadas y listas para el sitio y la tienda en línea.',
          price: 'Desde $8,000 MXN',
          label: 'estimado',
        },
        {
          title: 'Soporte mensual',
          category: 'mantenimiento',
          desc: 'Ajustes, correcciones y acompañamiento continuo después del go-live, con tiempo de respuesta prioritario.',
          price: 'Desde $3,500 MXN / mes',
          label: 'estimado',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión',
      description: '70% de anticipo al firmar · 30% a la entrega final. Precios más IVA. La implementación incluye las tres fases. El hosting y las bases de datos se pagan mes a mes a partir del go-live. Los módulos nuevos que surjan de la operación se cotizan por separado una vez definido su alcance. Propuesta inicial (V01): el alcance final se ajusta con el cliente en la siguiente iteración.',
      cards: [
        {
          title: 'Implementación completa',
          desc: 'Fases 1 a 3: panel de operación (catálogo, inventario por canal, pedidos y consignación, eventos con boletos en Apple y Google Wallet, WordPress y WooCommerce, pasarela de pago, tareas y roles del equipo, administración y reportes para dirección e inversionistas), punto de venta para galería y ferias, y facturación y envíos.',
          price: '$45,000 MXN',
          label: '+ IVA',
        },
        {
          title: 'Hosting y bases de datos',
          desc: 'Servidor del sitio migrado, del panel y de las bases de datos, con respaldos.',
          price: '$1,800 MXN',
          label: 'mensual + IVA',
        },
        {
          title: 'Módulos a la medida',
          desc: 'Los que surjan de la operación, cada uno con alcance y precio cerrados.',
          price: 'Por cotizar',
          label: 'cotización aparte',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca con cinco pasos. Cada entrega se revisa en conjunto antes de pasar a la siguiente.',
      steps: [
        { step: 'paso 1', title: 'Aprobación', desc: 'Confirmar el alcance y si algún servicio adicional entra desde el inicio.' },
        { step: 'paso 2', title: 'Anticipo del 70%', desc: '$31,500 MXN + IVA. El pago activa el proyecto y agenda el kickoff.' },
        { step: 'paso 3', title: 'Kickoff y levantamiento', desc: 'Revisamos juntos el catálogo, los canales, las librerías en consignación y cómo llevan hoy las cuentas.' },
        { step: 'paso 4', title: 'Entregas cada 2 semanas', desc: 'Acceso al panel desde la semana 3 para ir probando con datos reales.' },
        { step: 'paso 5', title: 'Go-live y capacitación', desc: 'Lanzamiento con acompañamiento y capacitación al equipo. Se liquida el 30% restante.' },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: '¿Arrancamos?',
      description: 'La galería, las ferias, los eventos, la tienda en línea y las librerías van a compartir un solo inventario y un solo panel. Confirma la propuesta y agendamos el kickoff esta misma semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default canCanPress
