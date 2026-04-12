import type { ProposalData } from './types'

const luzAnayaPodologia: ProposalData = {
  logo: '/logo-flowbit.png',

  sections: [
    {
      layout: 'hero',
      navLabel: 'Inicio',
      subtitle: 'Propuesta comercial',
      title: 'Luz Anaya\nPodología',
      cardTitle: 'CRM y Automatización de Clínica',
      cardText: 'Sistema integral basado en Odoo para gestionar leads, automatizar la atención al paciente y controlar la agenda de la clínica — todo desde una sola plataforma.',
      meta: [
        { label: 'Dirigido a', value: 'Liz Anaya' },
        { label: 'Fecha', value: 'Abril 2026' },
        { label: 'Versión', value: 'V01' },
        { label: 'Vigencia', value: '30 días' },
      ],
    },

    {
      layout: 'card-carousel',
      navLabel: 'Módulos',
      tag: 'arquitectura del sistema',
      title: 'Tres módulos,\nuna sola clínica',
      description: 'El sistema CRM en Odoo se entrega en tres módulos interconectados. Cada uno resuelve un flujo crítico de la operación: captación y seguimiento de nuevos pacientes, comunicación automatizada y control total de la agenda.',
      quote: 'Una clínica que recuerda a cada paciente, agenda sin fricciones y nunca pierde un lead. El sistema trabaja — tú te enfocas en atender.',
      cards: [
        {
          title: 'Gestión de Leads',
          category: 'crm',
          items: [
            'Registro y seguimiento de leads',
            'Clasificación automática de clientes',
            'Alertas y notificaciones de seguimiento',
          ],
        },
        {
          title: 'Automatización de Atención',
          category: 'automatizacion',
          items: [
            'Respuestas automáticas personalizadas',
            'Recordatorios de citas',
            'Canales de comunicación integrados',
          ],
        },
        {
          title: 'Control de Agenda',
          category: 'sistema',
          items: [
            'Programación y gestión de citas',
            'Visualización diaria y semanal',
            'Sincronización con calendario',
          ],
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
          type: 'entregable principal',
          title: 'Diagnóstico y Preparación',
          desc: 'Análisis de las necesidades de la clínica, configuración inicial de Odoo y puesta a punto del sistema. Se genera un informe de análisis y un plan de implementación detallado antes de arrancar el desarrollo.',
          badge: '1 semana',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Diagnóstico',
              items: [
                'Informe de análisis de necesidades de la clínica.',
                'Plan de implementación detallado con roadmap por módulo.',
              ],
            },
          ],
        },
        {
          number: 'fase 2',
          type: 'entregable principal',
          title: 'Desarrollo e Implementación',
          desc: 'Desarrollo e integración del CRM en Odoo con los tres módulos principales: gestión de leads, automatización de atención al cliente y control de agenda. Todo configurado a la medida de la operación de la clínica.',
          badge: '3–4 semanas',
          badgeVariant: 'blue',
          isBlue: true,
          entregables: [
            {
              title: 'Sistema CRM personalizado',
              items: [
                'Módulo de gestión de leads con clasificación automática y alertas de seguimiento.',
                'Automatización de atención: respuestas personalizadas, recordatorios de citas y canales integrados.',
                'Control de agenda: programación de citas, vistas diaria/semanal y sincronización con calendario.',
              ],
            },
          ],
        },
        {
          number: 'fase 3',
          type: 'entregable principal',
          title: 'Capacitación y Puesta en Marcha',
          desc: 'Sesiones de capacitación al equipo de la clínica para asegurar una adopción exitosa del sistema, más soporte inicial post-implementación para resolver dudas operativas.',
          badge: '1 semana',
          badgeVariant: 'gray',
          isBlue: false,
          entregables: [
            {
              title: 'Capacitación y soporte',
              items: [
                'Sesiones de capacitación para el equipo de la clínica.',
                'Soporte inicial post-implementación para asegurar operación fluida.',
              ],
            },
          ],
        },
      ],
    },

    {
      layout: 'card-grid',
      navLabel: 'Servicios',
      tag: 'servicios adicionales',
      title: 'Servicios adicionales',
      description: 'El Diagnóstico tiene precio fijo. Los demás son add-ons opcionales con precios estimados — disponibles para contratar junto con el proyecto principal o en cualquier momento posterior.',
      cards: [
        {
          title: 'Diagnóstico',
          category: 'diagnostico',
          desc: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
          price: '$10,000 MXN',
          label: 'fijo',
        },
        {
          title: 'Soporte y mantenimiento',
          category: 'soporte',
          desc: 'Plan mensual de soporte técnico para el sistema Odoo: actualizaciones, monitoreo, resolución de incidencias y backups regulares.',
          price: 'Desde $2,500 MXN/mes',
          label: 'estimado',
        },
        {
          title: 'Capacitación avanzada',
          category: 'capacitacion',
          desc: 'Sesiones adicionales de capacitación para nuevos integrantes del equipo o para profundizar en funciones avanzadas del CRM.',
          price: 'Desde $3,500 MXN',
          label: 'estimado',
        },
        {
          title: 'Estrategia de contenido y redes',
          category: 'redes-sociales',
          desc: 'Plan editorial, plantillas de redes sociales y calendario de publicación orientado a la captación de nuevos pacientes para la clínica.',
          price: 'Desde $5,000 MXN/mes',
          label: 'estimado',
        },
      ],
    },

    {
      layout: 'sticky-cards',
      navLabel: 'Inversión',
      tag: 'inversión',
      title: 'Inversión\ndel proyecto',
      description: '50% al inicio · 50% a la entrega. El cliente provee dominio existente; Flowbit incluye hosting y configuración inicial del sistema. Propuesta inicial (V01). Los precios aquí presentados son estimaciones (excepto el Diagnóstico en servicios adicionales que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente.',
      cards: [
        {
          title: 'Proyecto completo',
          desc: 'Diagnóstico y preparación + Desarrollo e implementación del CRM + Capacitación y puesta en marcha. Incluye hosting y configuración inicial del sistema.',
          price: '$35,000 MXN',
          label: 'total estimado',
        },
        {
          title: 'Diagnóstico y Preparación',
          desc: 'Análisis de necesidades, configuración inicial de Odoo y plan de implementación detallado.',
          price: '$5,000 MXN',
          label: 'fase 1',
        },
        {
          title: 'Sistematización y Automatización CRM',
          desc: 'Desarrollo e integración de los tres módulos: gestión de leads, automatización de atención y control de agenda.',
          price: '$30,000 MXN',
          label: 'fases 2–3',
        },
      ],
    },

    {
      layout: 'step-carousel',
      navLabel: 'Proceso',
      tag: 'proceso de arranque',
      title: 'Proceso\nde arranque',
      description: 'Una vez aprobada la propuesta, el proyecto arranca de inmediato. El proceso está diseñado para que la clínica tenga el sistema operativo en menos de 6 semanas.',
      steps: [
        {
          step: 'paso 1',
          title: 'Aprobación de propuesta',
          desc: 'Confirmar alcance, módulos y condiciones de arranque.',
        },
        {
          step: 'paso 2',
          title: 'Anticipo del 50%',
          desc: '$17,500 MXN — El pago inicial activa el proyecto y agenda el kickoff.',
        },
        {
          step: 'paso 3',
          title: 'Kickoff + levantamiento',
          desc: 'Sesión para revisar flujos operativos de la clínica, estructura de leads y requerimientos de agenda.',
        },
        {
          step: 'paso 4',
          title: 'Desarrollo e implementación',
          desc: 'Configuración y desarrollo de los módulos en Odoo con entregas parciales cada semana para validación.',
        },
        {
          step: 'paso 5',
          title: 'Capacitación y go-live',
          desc: 'Sesiones de capacitación al equipo, puesta en marcha y soporte inicial. Hosting incluido el primer año.',
        },
      ],
    },

    {
      layout: 'cta',
      tag: 'siguiente paso',
      title: 'Empecemos\na sistematizar',
      description: 'La clínica tiene todo para crecer — solo falta el sistema que lo soporte. Con el CRM en Odoo, cada lead se registra, cada cita se agenda y cada paciente recibe seguimiento automático. Confirma la propuesta y arrancamos esta semana.',
      buttonText: 'Aceptar propuesta',
      buttonHref: 'https://flowbit.studio',
      footerLeft: 'Flowbit Studio · León, Gto.',
      footerRight: 'hola@flowbit.studio',
    },
  ],
}

export default luzAnayaPodologia
