import type { ProposalData } from './types'

const formaQ3: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Design System\nQ3 — Forma',
      cardTitle: 'Evolución Trimestral del Design System',
      cardText: 'Audit de componentes existentes, diseño de 8 nuevos componentes, documentación en Storybook y handoff técnico con training al equipo de Estudio Forma.',
      meta: [
        { label: 'Dirigido a', value: 'Mariana Castillo' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V02' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Alcance',
      tag: 'alcance',
      title: 'Cuatro entregas, un sistema más sólido.',
      description: 'El ciclo Q3 cubre el estado actual del sistema, expande la librería con nuevos componentes, los documenta en Storybook y transfiere el conocimiento al equipo interno.',
      quote: 'Un design system no es un proyecto que se termina — es una infraestructura viva que crece con cada sprint. Q3 es el siguiente ciclo.',
      cards: [
        {
          title: 'Audit de componentes',
          description: 'Revisión exhaustiva de los componentes y tokens actuales: consistencia visual, uso real, deuda técnica y oportunidades de consolidación.',
          category: 'diagnostico',
        },
        {
          title: 'Diseño de 8 componentes',
          description: 'Creación de 8 nuevos componentes alineados con el lenguaje visual existente. Cada uno entregado en Figma con variantes, estados y especificaciones de uso.',
          category: 'design',
        },
        {
          title: 'Documentación en Storybook',
          description: 'Implementación y publicación de los componentes en Storybook: stories, props API, ejemplos de uso y guías de integración para el equipo de desarrollo.',
          category: 'tech',
        },
        {
          title: 'Handoff + Training',
          description: 'Dos sesiones de transferencia técnica: revisión del sistema actualizado, flujos de contribución y guía de adopción para el equipo de Forma.',
          category: 'capacitacion',
        },
      ],
    },

    {
      layout: 'sticky-list',
      navLabel: 'Detalle',
      tag: 'detalle',
      title: 'Qué incluye cada entrega',
      blocks: [
        {
          number: '01',
          type: 'Audit',
          title: 'Audit de componentes + tokens actuales',
          desc: 'Análisis del design system en su estado actual: inventario de componentes, revisión de tokens (color, tipografía, espaciado, sombras), detección de inconsistencias y duplicados, y reporte con recomendaciones de consolidación previo al inicio del diseño.',
          badge: '$15,000 MXN',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Entregables',
              items: [
                'Inventario completo de componentes existentes',
                'Mapa de tokens actuales y propuesta de ajustes',
                'Reporte de deuda técnica y acciones prioritarias',
                'Documento de decisiones de diseño (ADR)',
              ],
            },
          ],
        },
        {
          number: '02',
          type: 'Diseño',
          title: 'Diseño de 8 componentes nuevos',
          desc: 'Creación de 8 componentes en Figma, definidos en conjunto con el equipo de Forma a partir del audit. Cada componente incluye variantes de estado (default, hover, focus, disabled, error), documentación de uso y especificaciones de handoff para desarrollo.',
          badge: '$24,000 MXN',
          badgeVariant: 'blue',
          isBlue: false,
          entregables: [
            {
              title: 'Entregables',
              items: [
                '8 componentes en Figma con variantes y estados',
                'Anotaciones de interacción y comportamiento',
                'Guía de uso por componente (cuándo y cuándo no usar)',
                'Tokens actualizados o nuevos necesarios para los componentes',
              ],
            },
          ],
        },
        {
          number: '03',
          type: 'Documentación',
          title: 'Documentación en Storybook',
          desc: 'Setup o actualización del entorno de Storybook con los 8 componentes nuevos. Cada componente tendrá stories que cubren sus variantes, una descripción del API de props, ejemplos de uso en contexto y código de referencia para el equipo de desarrollo.',
          badge: '$12,000 MXN',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Entregables',
              items: [
                'Storybook actualizado y desplegado',
                'Stories para los 8 componentes nuevos',
                'Documentación de props y variantes en MDX',
                'Guía de contribución para agregar componentes futuros',
              ],
            },
          ],
        },
        {
          number: '04',
          type: 'Handoff',
          title: 'Handoff + training (2 sesiones)',
          desc: 'Dos sesiones de trabajo con el equipo de Forma: la primera de revisión técnica del sistema actualizado (componentes, tokens, Storybook) y la segunda de flujos de contribución — cómo proponer, diseñar y documentar componentes nuevos de forma autónoma.',
          badge: '$8,000 MXN',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Entregables',
              items: [
                'Sesión 1: recorrido del sistema actualizado (grabada)',
                'Sesión 2: flujo de contribución y governance del DS (grabada)',
                'Checklist de contribución para el equipo interno',
                'Acceso al repositorio de Storybook con permisos de escritura',
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
      title: 'Inversión Q3',
      description: 'Pago único al cierre del proyecto. Facturación mensual según contrato maestro existente.\n\nActualizada tras feedback del cliente.',
      cards: [
        {
          title: 'Q3 Design System Evolution',
          desc: 'Cobertura completa del ciclo trimestral: audit, diseño de 8 componentes, documentación en Storybook y handoff con training.',
          price: '$59,000 MXN',
          label: 'total',
        },
        {
          title: 'Audit de componentes + tokens',
          desc: 'Inventario, análisis de tokens y reporte de deuda técnica.',
          price: '$15,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Diseño de 8 componentes nuevos',
          desc: '8 componentes en Figma con variantes, estados y specs de handoff.',
          price: '$24,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Documentación en Storybook',
          desc: 'Stories, docs MDX y guía de contribución para el equipo.',
          price: '$12,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Handoff + Training',
          desc: 'Dos sesiones de transferencia técnica y flujos de contribución.',
          price: '$8,000 MXN',
          label: 'fijo',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso',
      title: 'Cómo trabajamos el ciclo Q3',
      description: 'Un proceso estructurado en cuatro fases que asegura que cada entrega construye sobre la anterior. De la revisión del estado actual al equipo autónomo.',
      steps: [
        {
          step: '01',
          title: 'Audit',
          desc: 'Revisión completa del design system actual. Inventario de componentes, análisis de tokens, detección de inconsistencias y definición de los 8 componentes a desarrollar en Q3.',
        },
        {
          step: '02',
          title: 'Diseño',
          desc: 'Creación de los 8 componentes en Figma. Revisiones intermedias con Mariana para validar dirección visual y alineación con el lenguaje existente de Forma antes del handoff técnico.',
        },
        {
          step: '03',
          title: 'Storybook',
          desc: 'Implementación y publicación de los componentes en Storybook. Stories, documentación de props, ejemplos de uso en contexto y guía de contribución para el equipo de desarrollo.',
        },
        {
          step: '04',
          title: 'Entrega',
          desc: 'Dos sesiones de handoff y training con el equipo de Forma. Transferencia del sistema actualizado, flujos de contribución y acceso completo al repositorio.',
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Adicionales',
      tag: 'servicios adicionales',
      title: 'Servicios complementarios',
      description: 'El Diagnóstico es un servicio fijo de Flowbit a precio cerrado. Los demás son add-ons opcionales que pueden complementar el ciclo Q3 o contratarse de forma independiente — precios estimados.',
      cards: [
        {
          title: 'Diagnóstico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
          category: 'diagnostico',
        },
        {
          title: 'Soporte mensual del design system',
          desc: 'Plan de soporte recurrente: resolución de dudas del equipo, revisión de nuevos componentes propuestos, actualizaciones de tokens y mantenimiento del entorno de Storybook.',
          price: 'Desde $6,000 MXN / mes',
          label: 'mensual',
          category: 'support',
        },
        {
          title: 'Animación y motion para componentes',
          desc: 'Definición de microinteracciones y animaciones para los componentes del design system: transiciones, loaders, feedback visual y especificaciones de motion para el equipo de desarrollo.',
          price: 'Desde $8,000 MXN',
          label: 'estimado',
          category: 'animacion',
        },
        {
          title: 'Expansión del design system (Q4)',
          desc: 'Ciclo siguiente: nuevos módulos de componentes, revisión de tokens post-Q3, cobertura de patrones complejos (tablas de datos, formularios avanzados, navegación anidada) y actualización de documentación.',
          price: 'Estimado según alcance',
          label: 'estimado',
          category: 'design',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Arrancamos Q3 cuando quieras.',
      description: 'El design system de Forma ya tiene una base sólida. Q3 la hace crecer de forma ordenada, documentada y transferible. Acepta esta propuesta y coordinamos el kick-off.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'flowbit.studio',
      footerRight: '© 2026 Flowbit Studio',
    },
  ],
}

export default formaQ3
