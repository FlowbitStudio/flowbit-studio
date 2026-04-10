// ════════════════════════════════════════════════════════════════════════
// Sistema de iconos por categoría
// ════════════════════════════════════════════════════════════════════════
//
// Cada card de las propuestas declara una `category` (string). Este
// componente resuelve esa categoría a uno de los 6 SVGs en
// src/assets/icons/categories/ y los renderea inline (no como <img>)
// para que `stroke="currentColor"` herede el color del padre y funcione
// con los hover states de las cards.
//
// Vite carga los SVGs como string raw via `?raw` (built-in, sin plugins).
//
// Para AÑADIR/MODIFICAR aliases: solo edita el objeto `iconMap` abajo.
// Para AÑADIR una categoría madre nueva (un 7mo icono): añade el import
// del SVG nuevo + entradas al iconMap + documéntalo en CLAUDE.md y en
// el README de src/assets/icons/categories/.
//
// ════════════════════════════════════════════════════════════════════════

import techIcon from '../assets/icons/categories/tech.svg?raw'
import designIcon from '../assets/icons/categories/design.svg?raw'
import visualIcon from '../assets/icons/categories/visual.svg?raw'
import growthIcon from '../assets/icons/categories/growth.svg?raw'
import supportIcon from '../assets/icons/categories/support.svg?raw'
import diagnosisIcon from '../assets/icons/categories/diagnosis.svg?raw'

// ── Mapping aliases → SVG content ──────────────────────────────────────
// Las keys son strings que Claude Code (o tú a mano) escribís en el
// campo `category` de las cards. El componente normaliza a lowercase
// antes de buscar, así que las keys aquí TODAS van en lowercase.
const iconMap: Record<string, string> = {
  // ── Tech / Desarrollo ──
  tech: techIcon,
  desarrollo: techIcon,
  website: techIcon,
  web: techIcon,
  app: techIcon,
  aplicacion: techIcon,
  crm: techIcon,
  software: techIcon,
  ecommerce: techIcon,
  'e-commerce': techIcon,
  saas: techIcon,
  sistema: techIcon,
  automatizacion: techIcon,
  automatización: techIcon,
  integracion: techIcon,
  integración: techIcon,
  dashboard: techIcon,
  api: techIcon,
  webhook: techIcon,

  // ── Diseño ──
  design: designIcon,
  diseño: designIcon,
  diseno: designIcon,
  branding: designIcon,
  marca: designIcon,
  ilustracion: designIcon,
  ilustración: designIcon,
  identidad: designIcon,
  grafico: designIcon,
  gráfico: designIcon,
  'manual-marca': designIcon,
  'guia-marca': designIcon,
  'guía-marca': designIcon,
  papeleria: designIcon,
  papelería: designIcon,

  // ── Visual / Audiovisual ──
  visual: visualIcon,
  audiovisual: visualIcon,
  fotografia: visualIcon,
  fotografía: visualIcon,
  foto: visualIcon,
  video: visualIcon,
  animacion: visualIcon,
  animación: visualIcon,
  motion: visualIcon,
  'motion-graphics': visualIcon,
  produccion: visualIcon,
  producción: visualIcon,
  reels: visualIcon,
  reel: visualIcon,
  filmacion: visualIcon,
  filmación: visualIcon,

  // ── Crecimiento / Marketing ──
  growth: growthIcon,
  marketing: growthIcon,
  seo: growthIcon,
  analytics: growthIcon,
  contenido: growthIcon,
  redes: growthIcon,
  'redes-sociales': growthIcon,
  ads: growthIcon,
  publicidad: growthIcon,
  social: growthIcon,
  campania: growthIcon,
  campaña: growthIcon,
  email: growthIcon,
  'email-marketing': growthIcon,
  conversion: growthIcon,
  conversión: growthIcon,

  // ── Soporte / Operación ──
  support: supportIcon,
  soporte: supportIcon,
  mantenimiento: supportIcon,
  capacitacion: supportIcon,
  capacitación: supportIcon,
  training: supportIcon,
  hosting: supportIcon,
  monitoring: supportIcon,
  monitoreo: supportIcon,
  ops: supportIcon,
  operacion: supportIcon,
  operación: supportIcon,
  onboarding: supportIcon,

  // ── Diagnóstico / Estrategia ──
  diagnosis: diagnosisIcon,
  diagnostico: diagnosisIcon,
  diagnóstico: diagnosisIcon,
  estrategia: diagnosisIcon,
  consultoria: diagnosisIcon,
  consultoría: diagnosisIcon,
  auditoria: diagnosisIcon,
  auditoría: diagnosisIcon,
  analisis: diagnosisIcon,
  análisis: diagnosisIcon,
  research: diagnosisIcon,
  discovery: diagnosisIcon,
}

interface IconProps {
  category?: string
  size?: number
  className?: string
}

export default function Icon({ category, size = 80, className = '' }: IconProps) {
  // Default si no se pasa category o si la category no existe en el map
  const normalized = (category ?? '').toLowerCase().trim()
  const svgContent = iconMap[normalized] ?? iconMap.tech

  // Renderea el SVG inline via dangerouslySetInnerHTML para que
  // currentColor herede del padre y los hover states funcionen.
  // El span wrapper le da el tamaño; el CSS hace que el SVG interno
  // ocupe el 100% del wrapper.
  return (
    <span
      className={`category-icon ${className}`.trim()}
      style={{ width: size, height: size }}
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  )
}
