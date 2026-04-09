# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Dev Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript check + production build (tsc -b && vite build)
npm run lint      # ESLint (flat config)
npm run preview   # Preview production build
```

## Tech Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- Plain CSS with component-scoped files (no Tailwind, no CSS modules)
- CSS custom properties defined in `src/index.css`

## Qué es este repo

Un sistema de propuestas comerciales para Flowbit. Cada propuesta es un sitio single-page scrolleable con secciones navegables. Toda la data de una propuesta vive en `src/data/proposal.ts` — los componentes son layouts reutilizables que reciben props.

## Antes de crear una nueva propuesta

Cuando el usuario pida una propuesta nueva, NO empezar a construirla de inmediato. Primero validar que tienes toda la data necesaria. Si falta algo, preguntar antes de escribir cualquier código.

Datos mínimos requeridos:
- **Cliente**: nombre del proyecto/marca
- **Dirigido a**: nombre de la persona que recibe la propuesta
- **Qué se va a construir**: descripción clara del alcance (módulos, funcionalidades)
- **Fases o entrega única**: si se entrega todo junto o en fases separadas
- **Precios**: desglose o precio único (si no los tiene, preguntar si quiere placeholders)
- **Condiciones de pago**: esquema de pagos (ej. 50/50)
- **Consideraciones especiales**: qué provee el cliente (branding, fotos, contenido), qué se incluye extra (hosting, dominio, soporte)
- **Stack técnico**: si no se menciona, asumir React + Vite (el default de Flowbit)

Si el usuario da la mayoría pero faltan 1-2 datos, preguntar solo por los faltantes. No bloquear por datos menores que se puedan asumir razonablemente.

## Cómo crear una nueva propuesta

Solo edita `src/data/proposal.ts`. La propuesta es un objeto con:
- `logo`: URL del logo para el header
- `sections[]`: array ordenado de secciones, cada una con un `layout` y su data

Agrega, quita o reordena secciones según lo que el proyecto necesite. El header/nav se genera automáticamente desde las secciones que tengan `navLabel`.

### Layouts disponibles

| Layout | Componente | Cuándo usarlo |
|---|---|---|
| `hero` | Hero.tsx | Siempre. Intro con título grande, card de resumen y metadata (cliente, fecha, versión) |
| `card-carousel` | Arquitectura.tsx | Cuando hay varios módulos/marcas/productos que mostrar. Carrusel horizontal con imágenes. Quote opcional al final que ocupa 100vh |
| `sticky-list` | Fases.tsx | Bloques de contenido detallado (fases, alcance, entregables). Título sticky a la izquierda, contenido scrolleable a la derecha. Cada bloque puede tener entregables con listas o listItems directos |
| `card-grid` | Servicios.tsx | Cards de precio edge-to-edge (servicios, add-ons). Cada card tiene título, descripción, label y precio |
| `sticky-cards` | Inversion.tsx | Resumen de inversión. Texto + imagen sticky a la izquierda, grid de cards 2 columnas a la derecha. Primera card siempre ocupa 2 columnas (es el total). Si el resto es impar, la última también se expande |
| `step-carousel` | Pasos.tsx | Proceso/timeline. Carrusel horizontal de pasos, siempre 4 visibles |
| `cta` | CTA.tsx | Siempre al final. Cierre con título, texto de convencimiento, botón de acción y footer |

### Reglas de layout fijas (NO cambiar)

- **card-carousel**: Las cards SIEMPRE ocupan 3 columnas visibles (1/3 del viewport cada una). Si hay más de 3, se navega con las flechas. No se configura el número de columnas visibles.
- **card-carousel quote**: El texto grande de descanso (quote) SIEMPRE ocupa 100vh del viewport, centrado verticalmente.
- **sticky-cards**: Grid de 2 columnas. La primera card (proyecto completo / total) siempre ocupa 2 columnas para mayor jerarquía. El resto se acomoda en pares. Si queda una huérfana, se expande a 2 columnas.
- **sticky-cards (1 sola card)**: Cuando hay una sola card (proyecto no modular), toda la sección mide 70vh. La columna izquierda NO es sticky (no hay scroll), se centra verticalmente. La card se estira al mismo alto. Sin desglose — un solo bloque, un solo precio.
- **step-carousel**: Siempre 4 pasos visibles. Si hay más, se navega con flechas.

### Ejemplo: propuesta simple (1 marca, sin arquitectura)

```ts
const proposal: ProposalData = {
  logo: '...',
  sections: [
    { layout: 'hero', navLabel: 'Inicio', subtitle: '...', title: '...', ... },
    { layout: 'sticky-list', navLabel: 'Alcance', tag: 'alcance', title: '...', blocks: [...] },
    { layout: 'sticky-cards', navLabel: 'Inversión', tag: 'inversión', title: '...', cards: [...] },
    { layout: 'step-carousel', navLabel: 'Proceso', tag: 'proceso', title: '...', steps: [...] },
    { layout: 'cta', tag: '...', title: '...', buttonText: '...', ... },
  ],
}
```

No se usa `card-carousel` porque no hay multi-marca. No se usa `card-grid` porque no hay servicios extra. Solo los layouts que apliquen.

### Tipos completos

Todos los tipos están exportados desde `src/data/proposal.ts`: `HeroSection`, `CardCarouselSection`, `StickyListSection`, `CardGridSection`, `StickyCardsSection`, `StepCarouselSection`, `CTASection`, `ProposalData`.

## Convenciones de diseño

### Tokens (src/index.css)
```css
--blue: #1786FF
--gray: #687787
--light-gray: #e0e0e0
--font-display: 'Mark Pro', 'Helvetica Neue', 'Arial', sans-serif
--font-mono: 'GT America Mono', 'SF Mono', 'Menlo', 'Consolas', monospace
--page-padding: 32px
```

### Patrones visuales
- Fondo negro para secciones de contenido principal (hero, card-carousel, sticky-list, step-carousel, cta)
- Fondo `--light-gray` para secciones de servicios/pricing (card-grid, sticky-cards)
- Cards hover: transición a `--blue` con `0.35s ease`
- Tags de sección: mono, uppercase, color `--blue`
- Títulos: font-display, weight 400, line-height ~1
- Body text: mono, uppercase, line-height 1.6, color gray/light-gray

### Animaciones
- `useFadeIn(delay)`: hook de IntersectionObserver que agrega clase `fade-in-visible`
- Aplicar `fade-in` a cada elemento de texto con delays escalonados por jerarquía: tag (0ms) → título (150ms) → descripción (300ms) → elementos secundarios (450ms+)
- Transición: 1s cubic-bezier(0.25, 0.1, 0.25, 1)
- `StrokeCard`: wrapper con animación de borde al entrar al viewport
- `NoiseOverlay`: canvas animado con noise pixelado sobre toda la página

### Imágenes
Todas las imágenes usan URLs de Figma API (`https://www.figma.com/api/mcp/asset/...`). Expiran cada 7 días — regenerar con el Figma MCP server.

### Navigation
Auto-generada desde `sections[].navLabel`. Las secciones sin `navLabel` (como `cta`) no aparecen en el nav.
