import type { ProposalData } from './types'

const calzadoBlade: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Contenido y estrategia de marca',
      title: 'Propuesta\nCalzado Blade',
      cardTitle: 'Qué es esto',
      cardText:
        'Un diagnóstico con desarrollo estilográfico que define cómo se ve Blade, y sobre esa base un plan mensual de contenido: producción de foto y video, estrategia editorial, gestión de comunidad en Instagram y TikTok, creativos para pauta y material para la tienda en línea. Tres planes con distinto volumen y profundidad, para que elijas a qué velocidad quieres crecer.',
      meta: [
        { label: 'Dirigido a', value: 'Miguel Becerra' },
        { label: 'Fecha', value: 'Septiembre 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Oportunidad',
      tag: 'la oportunidad',
      title: 'Producto de lujo,\ncero presencia.',
      description:
        'Blade ya tiene lo difícil resuelto: piel exótica grabada a mano, hechura de León, una tienda que vende bajo demanda y un lenguaje de marca que ya existe — "Piel con filo, hecha a tu paso". Lo que no existe es el lugar donde ese producto se ve todos los días. No hay una sola red social enlazada en calzadoblade.com. Cada par que sale de León se vende sin que nadie haya visto cómo se hizo. Ahí está el hueco, y ahí trabaja esta propuesta.',
      quote:
        'Un sneaker de piel grabada a mano no se vende con una foto de catálogo. Se vende mostrando la mano que lo grabó.',
      cards: [
        {
          title: 'Un estilográfico propio',
          description:
            'Antes de la primera foto se define cómo se ve Blade: luz, superficies, encuadres, tratamiento de color, paleta y tipografías de contenido. Es el entregable del diagnóstico y rige los tres planes. Sin él, el contenido se vuelve un montón de fotos bonitas sin marca detrás.',
          category: 'identidad',
        },
        {
          title: 'Producción constante',
          description:
            'Foto y video mensual con modelo y set: macro de textura de piel, producto en estudio y lifestyle en calle. Material suficiente para publicar sin repetir y para alimentar pauta y tienda al mismo tiempo.',
          category: 'fotografia',
        },
        {
          title: 'Estrategia editorial',
          description:
            'Calendario mensual con qué se publica, cuándo y por qué. Copies escritos en el tono que Blade ya construyó, no en tono de agencia. Reporte con lo que funcionó y lo que se corrige el mes siguiente.',
          category: 'estrategia',
        },
        {
          title: 'Comunidad activa',
          description:
            'Publicación y respuesta a comentarios y mensajes directos en horario hábil. Una marca de $1,600 el par se pierde en el DM que nadie contestó — ahí es donde se cierra la venta.',
          category: 'redes',
        },
        {
          title: 'Contenido que convierte',
          description:
            'Creativos pensados para pauta en Meta y TikTok, y fotografía de ficha y banners para calzadoblade.com. El contenido no solo se ve bien: empuja tráfico a la tienda que ya está funcionando.',
          category: 'conversion',
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Planes',
      tag: 'alcance',
      title: 'Tres planes,\nuna misma marca.',
      description:
        'Los tres arrancan sobre el mismo desarrollo estilográfico —el entregable del diagnóstico previo— y los tres incluyen producción, edición, estrategia y publicación. Lo que cambia es el volumen de contenido, la profundidad de la gestión y, en el plan Total, hasta dónde se lleva ese estilográfico. Crecimiento y Total incluyen modelo, set y locación; en el Esencial esa parte la resuelve Blade —o la contratamos como adicional— y Flowbit llega a producir.',
      blocks: [
        {
          number: '01',
          type: 'plan esencial',
          title: 'Esencial — arrancar bien',
          desc: 'Para poner a Blade en redes con contenido a la altura del producto. Una jornada de producción al mes, calendario editorial y publicación. El piso mínimo para que la marca deje de ser invisible.',
          badge: '16 piezas/mes',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Producción',
              items: [
                '1 jornada de producción mensual. Flowbit pone dirección de arte, cámara, iluminación, styling de producto y edición completa.',
                'Modelo, locación y set corren por cuenta de Blade. Tú decides dónde grabamos —tu tienda, el taller, la bodega o la locación que elijas— y quién modela; nosotros llegamos, montamos y dirigimos en sitio.',
                'Si prefieres no resolverlo, lo contratamos nosotros como adicional: modelo $3,500 MXN y set o estudio $2,500 MXN por sesión.',
                'Si la sesión va sin modelo, la jornada se resuelve en producto: macro de textura de piel, detalle de suela y hechura, y bodegón con dirección de arte.',
                '10 fotografías editadas.',
                '6 videos verticales editados para Reels y TikTok, con música, cortes y subtítulos.',
                'Entrega en formatos listos para publicar (9:16, 4:5 y 1:1).',
              ],
            },
            {
              title: 'Estrategia y publicación',
              items: [
                'Toda la producción se ejecuta bajo el desarrollo estilográfico definido en el diagnóstico: misma luz, misma paleta, mismos encuadres mes con mes.',
                'Calendario editorial mensual entregado antes del día 1.',
                'Copies y hashtags escritos en el tono de la marca.',
                'Programación y publicación en Instagram y TikTok.',
                'Respuesta a comentarios en las publicaciones.',
              ],
            },
            {
              title: 'Medición',
              items: [
                'Reporte mensual de alcance, crecimiento y piezas con mejor desempeño.',
                'Recomendación concreta de qué repetir y qué cortar el mes siguiente.',
              ],
            },
          ],
        },
        {
          number: '02',
          type: 'plan crecimiento',
          title: 'Crecimiento — el ritmo real',
          desc: 'Producción quincenal y gestión completa de comunidad. Es el plan que recomendamos: con dos jornadas al mes hay material para publicar diario, alimentar pauta y vestir la tienda en línea sin recurrir dos veces a la misma foto.',
          badge: '30 piezas/mes',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Producción',
              items: [
                '2 jornadas de producción al mes con modelo y set incluidos.',
                '18 fotografías editadas: estudio, macro de piel exótica, lifestyle y detalle de suela y hechura.',
                '12 videos verticales editados: producto, uso en calle, proceso y formatos de tendencia.',
                'Banco de material en bruto disponible para usos futuros de la marca.',
              ],
            },
            {
              title: 'Estrategia y comunidad',
              items: [
                'Producción ejecutada bajo el desarrollo estilográfico del diagnóstico, con ajustes de dirección de arte por temporada.',
                'Calendario editorial mensual con línea narrativa definida por temporada y lanzamiento.',
                'Publicación completa en Instagram y TikTok.',
                'Gestión de comunidad: respuesta a comentarios y mensajes directos en horario hábil.',
                'Canalización de intención de compra directo a la tienda o a WhatsApp.',
              ],
            },
            {
              title: 'Pauta y tienda',
              items: [
                '4 creativos mensuales diseñados específicamente para Meta y TikTok Ads.',
                'Fotografía de ficha de producto para calzadoblade.com de los modelos del mes.',
                'Recomendación de segmentación y presupuesto sugerido de pauta.',
              ],
            },
            {
              title: 'Medición',
              items: [
                'Reporte quincenal de desempeño por canal y por pieza.',
                'Lectura de qué contenido está moviendo tráfico real a la tienda.',
              ],
            },
          ],
        },
        {
          number: '03',
          type: 'plan total',
          title: 'Total — darle forma a la marca',
          desc: 'Todo lo del plan Crecimiento, más una jornada de campaña en locación y la expansión del estilográfico a sistema visual completo: plantillas, guía de estilo y dirección de arte por temporada. El estilográfico base ya viene del diagnóstico; aquí se convierte en el manual con el que Blade se reconoce antes de leer el nombre.',
          badge: '45 piezas/mes',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Sistema visual ampliado — mes 1',
              items: [
                'Toma el desarrollo estilográfico del diagnóstico y lo lleva a sistema completo.',
                'Plantillas editables para historias, carruseles, anuncios de lanzamiento y precios.',
                'Guía de estilo en PDF: tono de voz, uso de la marca en piezas y ejemplos de qué sí y qué no.',
                'Dirección de arte por temporada: cómo evoluciona el estilográfico en cada lanzamiento sin perder la marca.',
                'Sistema de nomenclatura y presentación de modelos (Manchester, Londres, New York…) consistente en todas las piezas.',
                'Queda como activo de Blade, más allá de la duración del contrato.',
              ],
            },
            {
              title: 'Producción',
              items: [
                '3 jornadas de producción al mes, una de ellas de campaña en locación externa.',
                '26 fotografías editadas, incluyendo serie de campaña con dirección de arte.',
                '19 videos verticales editados, con al menos una pieza de campaña de mayor producción.',
                'Modelo, set y locación incluidos.',
              ],
            },
            {
              title: 'Estrategia, comunidad y pauta',
              items: [
                'Todo lo incluido en el plan Crecimiento.',
                'Sesión estratégica mensual en vivo para planear lanzamientos y temporadas.',
                '8 creativos mensuales para pauta con variantes A/B de hook y encuadre.',
                'Banners de campaña y material de temporada para la tienda en línea.',
              ],
            },
            {
              title: 'Medición',
              items: [
                'Reporte quincenal por canal, por pieza y por creativo de pauta.',
                'Seguimiento de tráfico a calzadoblade.com atribuido a contenido.',
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
      title: 'Inversión\nmensual.',
      description:
        'Antes de cualquier plan va el Diagnóstico + Desarrollo estilográfico: $10,000 MXN de pago único, obligatorio y no se vende por separado.\n\nCompromiso mínimo de 3 meses, luego renovación mes a mes. Pago por adelantado en los primeros 5 días.\n\nIncluye producción, edición, estrategia, publicación y comunidad. Crecimiento y Total incluyen además modelo, set y locación; en Esencial los pone Blade, o los cotizamos aparte.\n\nNo incluye el presupuesto de pauta, que se paga directo a la plataforma, ni la logística de envío de los pares.\n\nPropuesta inicial (V01): precios estimados, excepto el Diagnóstico, que es fijo. Más IVA.',
      cards: [
        {
          title: 'Plan Crecimiento',
          desc: '2 jornadas de producción al mes con modelo y set, 30 piezas entregadas (18 fotos + 12 videos), estrategia y calendario editorial, publicación y gestión completa de comunidad, 4 creativos para pauta, fotografía de ficha para la tienda y reporte quincenal.',
          price: '$28,000 MXN/mes',
          label: 'recomendado',
        },
        {
          title: 'Plan Esencial',
          desc: '1 jornada de producción al mes, 16 piezas entregadas (10 fotos + 6 videos), calendario editorial, publicación en Instagram y TikTok, respuesta a comentarios y reporte mensual. En este plan el modelo, la locación y el set corren por cuenta de Blade; Flowbit pone dirección, equipo y edición. Si quieres que los resolvamos nosotros, se cotizan aparte.',
          price: '$15,000 MXN/mes',
          label: 'entrada',
        },
        {
          title: 'Plan Total',
          desc: 'Todo lo del plan Crecimiento, más el sistema visual de contenido entregado en el mes 1, 3 jornadas al mes (una de campaña en locación), 45 piezas, 8 creativos de pauta con variantes A/B, banners de campaña y sesión estratégica mensual.',
          price: '$45,000 MXN/mes',
          label: 'marca completa',
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description:
        'Opcionales, no incluidos en el precio mensual de ningún plan. Se cotizan y se contratan por separado cuando Blade los necesite.',
      cards: [
        {
          title: 'Diagnóstico + Desarrollo estilográfico',
          category: 'diagnostico',
          desc: 'Punto de partida obligatorio de cualquier plan, y no se venden por separado. Incluye auditoría de marca —tienda, catálogo, público que ya compra y competencia en sneakers de piel— y el desarrollo estilográfico que sale de ahí: dirección de arte fotográfica, paleta, tipografías de contenido y tablero de referencia. Es lo que rige la producción de los tres planes.',
          price: '$10,000 MXN',
          label: 'obligatorio · pago único previo al arranque',
        },
        {
          title: 'Modelo y locación para sesión',
          category: 'produccion',
          desc: 'Solo aplica al plan Esencial, donde esa parte corre por cuenta de Blade. Si prefieres no resolverla, la tomamos nosotros: casting, contratación y honorarios de modelo ($3,500 MXN por sesión) y renta de set o estudio ($2,500 MXN por sesión). Se contrata sesión por sesión, sin comprometerte al mes siguiente.',
          price: 'Desde $2,500 MXN',
          label: 'por sesión · solo plan Esencial',
        },
        {
          title: 'Fichas para marketplace',
          category: 'ecommerce',
          desc: 'Fotografía de fondo blanco bajo lineamientos de Mercado Libre y Amazon, infografías de producto (materiales, suela, tallas, guía de medida) y video corto de listing. Blade no está en marketplaces hoy — este es el paquete para entrar. Se cotiza por lote de modelos.',
          price: 'Desde $12,000 MXN',
          label: 'por lote de modelos',
        },
        {
          title: 'Manual de marca completo',
          category: 'branding',
          desc: 'Un paso más allá del sistema visual del plan Total: depuración de logotipo, arquitectura de marca, aplicaciones en caja, etiqueta, bolsa y papelería, y manual completo con artes finales listos para imprenta. Se bonifica 30% si se contrata junto con el plan Total.',
          price: 'Desde $45,000 MXN',
          label: 'proyecto único',
        },
        {
          title: 'Video de campaña',
          category: 'video',
          desc: 'Pieza de mayor producción para lanzamiento de un modelo nuevo o temporada: guion, dirección, locación, talento y postproducción. Formato horizontal y vertical, con cortes de 30, 15 y 6 segundos para pauta.',
          price: 'Desde $25,000 MXN',
          label: 'por campaña',
        },
        {
          title: 'Gestión de pauta',
          category: 'ads',
          desc: 'Configuración, segmentación, optimización y reporte de campañas en Meta y TikTok Ads. Los planes entregan los creativos; este servicio los pone a correr y los administra. El presupuesto publicitario se paga aparte, directo a la plataforma.',
          price: '$8,000 MXN/mes',
          label: 'opcional · recurrente',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'cómo trabajamos',
      title: 'De la firma\na la primera publicación.',
      description:
        'Cinco pasos. En menos de tres semanas desde el arranque, Blade está publicando contenido propio todos los días.',
      steps: [
        {
          step: 'paso 1',
          title: 'Diagnóstico + estilográfico',
          desc: 'Auditamos marca, catálogo, tienda y competencia, y de ahí sale el desarrollo estilográfico: cómo se fotografía Blade, con qué luz, qué paleta y qué encuadres. Es el documento que rige todo lo que viene después.',
        },
        {
          step: 'paso 2',
          title: 'Kickoff y plan editorial',
          desc: 'Elección del plan, accesos a las cuentas, definición de modelos a producir y entrega del primer calendario editorial para tu validación.',
        },
        {
          step: 'paso 3',
          title: 'Primera producción',
          desc: 'Blade envía los pares. Producimos con modelo y set en León. Tú apruebas la selección antes de que entre a edición.',
        },
        {
          step: 'paso 4',
          title: 'Publicación y comunidad',
          desc: 'Arranca el calendario. Publicamos, respondemos comentarios y mensajes, y canalizamos a quien pregunta precio directo a la tienda.',
        },
        {
          step: 'paso 5',
          title: 'Reporte y ajuste',
          desc: 'Cierre de mes con números en la mano: qué creció, qué convirtió y qué cambia el mes siguiente. El plan se corrige con data, no con corazonadas.',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Que Blade\nse vea como se siente.',
      description:
        'El producto ya está a la altura: piel exótica grabada a mano, hechura de León, una tienda que entrega en cuatro días. Lo único que falta es que alguien lo esté contando todos los días. Dinos qué plan y arrancamos con la primera producción este mes.',
      buttonText: 'Aceptar propuesta por WhatsApp',
      buttonHref:
        'https://wa.me/524792305474?text=Hola%2C%20soy%20Miguel%20de%20Calzado%20Blade.%20Revis%C3%A9%20la%20propuesta%20y%20quiero%20avanzar.',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default calzadoBlade
