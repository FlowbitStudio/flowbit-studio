import type { ProposalData } from './types'

const escandalo: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Cotización — Branding',
      title: 'Escándalo\nRebranding Lite',
      cardTitle: 'Qué incluye',
      cardText: 'Reposicionamiento de Escándalo de mezcalería hacia restaurante, con un manual de marca lite y un sistema completo de aplicativos de delivery: bandeja de 1 lt, ramekins de salsas con código cromático propio, bolsa kraft de envío, stickers de sellado e inserto con QR. Todo entregado como arte final listo para imprenta, con ficha técnica de producción por pieza.',
      meta: [
        { label: 'Dirigido a', value: 'Antonio Balassone' },
        { label: 'Fecha', value: 'Agosto 2026' },
        { label: 'Entrega', value: '2 semanas' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Concepto',
      tag: 'concepto',
      title: 'De mezcalería\na cocina.',
      description: 'El reto de Escándalo no es estético, es de categoría. Hoy la marca se lee como bar, y un bar no compite en delivery: nadie pide mezcal a domicilio, pide comida. El rebranding lite mueve la jerarquía — la cocina al frente, el mezcal como carácter — y lleva ese movimiento hasta la pieza donde el cliente de delivery conoce la marca: el empaque.',
      quote: 'El empaque es la sala del restaurante para quien nunca ha entrado. Si llega bien armado, la marca ya sirvió la mesa.',
      cards: [
        {
          title: 'La cocina al frente',
          description: 'Reposicionamiento de la marca hacia restaurante: descriptor, lockups y jerarquía visual donde el platillo manda y el mezcal se queda como alma, no como categoría.',
          category: 'estrategia',
        },
        {
          title: 'Identidad lite',
          description: 'Se conserva el logo actual y se depura. Se suma un sello de marca pensado para packaging — la versión que sí funciona en un ramekin de 4 cm.',
          category: 'identidad',
        },
        {
          title: 'Sistema de salsas',
          description: 'Código cromático, iconografía y escala de picor. Cada salsa se distingue a un metro de distancia y el sistema crece a salsas nuevas sin rediseñar nada.',
          category: 'design',
        },
        {
          title: 'Delivery que regresa',
          description: 'El inserto con QR convierte el pedido en recompra: reseña de Google, pedido directo por WhatsApp sin comisión de app y menú completo en una sola pieza.',
          category: 'conversion',
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Alcance',
      tag: 'alcance',
      title: 'Alcance\ny entregables',
      description: 'Dos semanas de trabajo. La primera define el sistema de marca, la segunda lo aterriza en las piezas que salen a la calle todos los días.',
      blocks: [
        {
          number: '01',
          type: 'semana 1',
          title: 'Reposicionamiento + Guidelines Lite',
          desc: 'Auditamos la marca actual y el pedido de delivery real — armamos un pedido de Escándalo y lo diseccionamos pieza por pieza. De ahí sale la plataforma de marca y el manual que ordena todo lo demás.',
          badge: '1 semana',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Auditoría y plataforma de marca',
              items: [
                'Auditoría express de la identidad actual: qué se conserva, qué se depura y qué se retira.',
                'Diagnóstico del pedido de delivery real: empaque actual, armado, sellado y experiencia de apertura.',
                'Plataforma de marca corta: territorio, personalidad y promesa de la marca como restaurante.',
                'Definición de descriptor y arquitectura de marca (cómo se firma Escándalo de aquí en adelante).',
              ],
            },
            {
              title: 'Sistema visual refinado',
              items: [
                'Refinamiento del logotipo actual: limpieza de trazos, proporciones y versiones de uso.',
                'Sello de marca para packaging: versión compacta y circular que sobrevive a un ramekin de 4 cm.',
                'Lockups, área de respeto, tamaños mínimos y usos incorrectos.',
                'Paleta ampliada calibrada para sustrato kraft — el kraft se come el color y las tintas se prueban antes, no después.',
              ],
            },
            {
              title: 'Entrega de la fase',
              items: [
                'Manual de marca lite en PDF (5 a 8 páginas).',
                'Archivos maestros del logotipo y el sello: AI, EPS, SVG, PNG.',
                'Paleta con valores Pantone, CMYK, RGB y HEX.',
              ],
            },
          ],
        },
        {
          number: '02',
          type: 'semana 2',
          title: 'Sistema de aplicativos delivery',
          desc: 'Diseño y arte final de las piezas del pedido. Todas comparten geometría y sistema para que la producción sea más barata y el pedido se vea igual todas las noches.',
          badge: '1 semana',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Bandeja de 1 lt',
              items: [
                'Etiqueta para tapa de bandeja de 1 lt con dieline a medida.',
                'Versión full color y versión a 1 tinta para tirajes económicos.',
                'Espacio previsto para marcado de platillo y notas del pedido.',
              ],
            },
            {
              title: 'Sistema de salsas + ramekins',
              items: [
                'Sistema cromático de salsas: un color, un ícono y un nivel de picor por salsa.',
                'Diseño escalable — se agregan salsas nuevas sin rediseñar el sistema.',
                'Etiquetas circulares para ramekin, una por tipo de salsa.',
                'Geometría compartida con la etiqueta de bandeja: un solo troquel para dos piezas, menos costo de producción.',
              ],
            },
            {
              title: 'Bolsa kraft de envío',
              items: [
                'Diseño de bolsa kraft de envío en un tamaño estándar.',
                'Arte preparado para impresión flexográfica a 1 y 2 tintas.',
                'Dieline con medidas, fuelles y zona de agarre.',
              ],
            },
            {
              title: 'Stickers de sellado',
              items: [
                'Sticker de sellado tamper-evident: el pedido llega cerrado y se nota si se abrió.',
                'Versión para bolsa kraft y versión para bandeja.',
              ],
            },
            {
              title: 'Inserto con QR',
              items: [
                'Tarjeta inserto que viaja dentro del pedido, diseñada para generar recompra.',
                'QR a reseña de Google, a pedido directo por WhatsApp y al menú completo.',
                'Espacio para cupón o promoción de siguiente pedido.',
              ],
            },
            {
              title: 'Producción y entrega',
              items: [
                'Ficha técnica por pieza: sustrato, tintas, medidas, troquel, acabado y cantidad mínima sugerida.',
                'Artes finales en curvas, con sangrados y marcas de corte, listos para imprenta.',
                'Mockups de presentación del pedido completo armado.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión\ndel proyecto',
      description: 'Precio cerrado por el proyecto completo, entregado en dos semanas. Anticipo del 70% ($8,400 MXN) para arrancar y 30% ($3,600 MXN) contra entrega de artes finales.\n\nFlowbit entrega diseño, artes finales y fichas técnicas de producción. La producción física de las piezas la gestiona el cliente con su proveedor de impresión.\n\nIncluye una ronda de ajustes por semana de trabajo. Rondas adicionales o piezas fuera de las listadas se cotizan por separado.\n\nCotización vigente 30 días. Precio más IVA.',
      cards: [
        {
          title: 'Rebranding Lite + Sistema Delivery',
          desc: 'Auditoría, reposicionamiento, manual de marca lite, sistema de salsas, bandeja de 1 lt, ramekins, bolsa kraft, stickers de sellado, inserto con QR, artes finales y fichas técnicas de producción.',
          price: '$12,000 MXN',
          label: 'precio cerrado',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Que Escándalo\nllegue completo.',
      description: 'El delivery ya está pasando — la pregunta es si la marca llega a esa mesa o solo llega la comida. En dos semanas, cada pedido sale a la calle diciendo exactamente lo que Escándalo es hoy: un restaurante.',
      buttonText: 'Aceptar propuesta por WhatsApp',
      buttonHref: 'https://wa.me/524792305474?text=Hola%2C%20soy%20Antonio%20de%20Esc%C3%A1ndalo.%20Revis%C3%A9%20la%20propuesta%20y%20quiero%20avanzar.',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default escandalo
