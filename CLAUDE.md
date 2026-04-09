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

Un sistema de propuestas comerciales para Flowbit. Cada propuesta es un sitio single-page scrolleable con secciones navegables. El repo soporta **múltiples propuestas al mismo tiempo**: cada cliente tiene su propio archivo `src/data/{slug}.ts` exportando un `ProposalData`, y `src/data/proposal.ts` es el registry que mapea slugs a propuestas. La URL pública es `/propuestas/{slug}` (React Router ya configurado en `src/App.tsx`). Los componentes son layouts reutilizables que reciben props.

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

### Excepción: invocación desde el pipeline automatizado

Cuando este repo lo usa Claude Code en modo headless (`claude -p`) como parte del pipeline de n8n (Telegram → ASISTENTE → wrapper HTTP → Claude Code), la validación de datos **ya se hizo aguas arriba** por el agente ASISTENTE antes de llegar aquí. En ese caso:

- NO preguntes nada. El user prompt viene con todos los datos ya estructurados en JSON.
- Detecta si es una propuesta NUEVA (no existe `src/data/{slug}.ts`) o una ITERACIÓN (el archivo ya existe) y sigue el flujo correspondiente de las secciones "Cómo crear una propuesta NUEVA" o "Cómo ITERAR una propuesta existente".
- Al terminar el archivo, ejecuta `git add`, `git commit` con mensaje descriptivo (ej: `"Nueva propuesta: Tacos El Paisa V01"` o `"Cigar Society V02 — ajustes de precio"`), y `git push origin main`. Vercel auto-deploya.
- Responde ÚNICAMENTE en formato JSON estricto con los metadatos del commit para que el wrapper los pueda parsear:
  ```json
  {
    "slug": "tacos-el-paisa",
    "version": "V01",
    "isNew": true,
    "commitSha": "<sha corto>",
    "previewUrl": "https://flowbit.studio/propuestas/tacos-el-paisa"
  }
  ```
- Si algo falla (git push, conflicto, error de tipo), responde con `{"error": "<descripción>", "stage": "<donde falló>"}` y NO hagas commits parciales.

## Arquitectura de archivos de propuestas

- `src/data/types.ts` — Todos los tipos TypeScript (`ProposalData`, `HeroSection`, `CardCarouselSection`, etc.). Fuente de verdad.
- `src/data/{slug}.ts` — Un archivo por cliente. Exporta default un `ProposalData`. Ejemplos existentes: `cigar-society.ts`, `martiniano.ts`.
- `src/data/proposal.ts` — Registry. Importa cada archivo de cliente y lo registra en `proposals: Record<string, ProposalData>`. También re-exporta todos los tipos de `types.ts` para compatibilidad.

## Cómo crear una propuesta NUEVA

1. Crea `src/data/{slug}.ts` donde `{slug}` es kebab-case del nombre del cliente o proyecto (ej: `tacos-el-paisa.ts`).
2. El archivo exporta default un objeto `ProposalData` con:
   - `logo`: URL del logo para el header
   - `sections[]`: array ordenado de secciones, cada una con un `layout` y su data
3. En `src/data/proposal.ts`:
   a. Añade el import: `import tacosElPaisa from './tacos-el-paisa'`
   b. Regístralo en el objeto `proposals`: `'tacos-el-paisa': tacosElPaisa,`
4. La propuesta queda accesible en `/propuestas/tacos-el-paisa`.

Agrega, quita o reordena secciones según lo que el proyecto necesite. El header/nav se genera automáticamente desde las secciones que tengan `navLabel`.

## Cómo ITERAR una propuesta existente (cambio de versión)

Cuando el cliente pide ajustes sobre una propuesta que ya generaste antes:

1. **NO crees un archivo nuevo.** Edita el existente `src/data/{slug}.ts`.
2. Lee el valor actual del campo `Versión` en el hero meta (ej: `'V01'`).
3. Incrementa la versión: `V01 → V02 → V03` y así. Formato siempre dos dígitos con `V` mayúscula.
4. Sobrescribe el archivo completo con los cambios pedidos + la nueva versión.
5. **NO toques `src/data/proposal.ts`** — el slug y el registry no cambian en iteraciones, solo el contenido del archivo del cliente.

## Hero meta — siempre obligatorio

El `meta` del hero SIEMPRE tiene exactamente estos 4 campos, en este orden, aunque algunos valores sean placeholders:

```ts
meta: [
  { label: 'Dirigido a', value: '<nombre de la persona>' },
  { label: 'Fecha', value: '<Mes Año>' },
  { label: 'Versión', value: 'V01' },      // incrementar solo en iteraciones
  { label: 'Vigencia', value: '30 días' },
]
```

## Reglas de contenido obligatorias (toda propuesta)

Estas 3 reglas aplican SIEMPRE, independientemente del tipo de propuesta.

### 1. Siempre incluir un `quote`

Toda propuesta debe tener al menos un `quote` — un texto inspirador/reflexivo de 1-2 oraciones que resuma la filosofía, propuesta de valor o visión del proyecto. El quote se renderea en pantalla completa (100vh) como momento de descanso visual entre secciones, y aporta mucha presencia a la propuesta.

- **Si la propuesta es multi-módulo**: usa el campo `quote` del layout `card-carousel` (ver `cigar-society.ts` como referencia, el quote va después del array de cards).
- **Si la propuesta NO es multi-módulo** (`es_multimodulo: false`): incluye IGUAL un `card-carousel` con 1-3 cards que representen pilares del proyecto (no módulos — ejemplo: "Diseño", "Desarrollo", "Soporte continuo") más el `quote`. El quote es el objetivo principal de la sección; las cards son el vehículo.
- **Tono del quote**: debe sonar a manifiesto o visión, no a descripción técnica. Ejemplo del estilo de Flowbit: "Cuatro marcas, un solo ecosistema. Cada bar vive su identidad mientras comparte la misma infraestructura." Evita frases genéricas tipo "Calidad y compromiso".

### 2. Siempre sugerir servicios adicionales aplicables

Toda propuesta debe incluir un layout `card-grid` con `servicios_adicionales` — **incluso si el brief del cliente no los menciona**. Piensa qué servicios complementarios agregarían valor al proyecto según su naturaleza, y sugiérelos con precios estimados razonables.

Ejemplos de servicios adicionales típicos según el tipo de proyecto:
- **E-commerce**: SEO técnico, analytics setup, integración con ERP, capacitación del equipo, soporte post-launch (mensual)
- **Landing / Marketing site**: A/B testing setup, integración con CRM, campañas de email marketing, mantenimiento mensual
- **SaaS / App**: Onboarding de usuarios, documentación técnica, soporte priorizado, feature roadmap
- **Branding + web**: Guía de marca, plantillas de redes sociales, sesión fotográfica de producto

Incluye 2-4 servicios adicionales. Deja claro en la descripción del layout `card-grid` que son **add-ons opcionales** no incluidos en el precio total de la propuesta. Si los servicios vienen del brief del cliente, úsalos primero; si sobran espacios, completa con sugerencias de Flowbit.

### 3. Primera iteración (V01) = costos estimados

Cuando generes una propuesta **NUEVA** (V01 — el archivo `src/data/{slug}.ts` NO existe previamente), los precios deben tratarse como **estimaciones** sujetas a refinamiento:

- Si el brief da un `precio_total` pero no un `desglose`, tú generas el desglose estimado por componente (módulos, fases, servicios).
- En las descripciones de los precios del `sticky-cards` y en el `card-grid` de servicios adicionales, usa un tono de estimación cuando aplique — prefijos como "Desde", "Estimado" o "Aprox." son apropiados para servicios adicionales.
- En el campo `consideraciones` de la propuesta (que va al final o dentro del sticky-cards como contexto), **siempre** agrega una línea: *"Propuesta inicial (V01). Los precios aquí presentados son estimaciones y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente."*

Cuando **iteres una propuesta existente (V02+)**, esta regla NO aplica:
- Los precios ya fueron discutidos con el cliente, trátalos como firmes.
- NO agregues el disclaimer de "propuesta inicial".
- En el `consideraciones`, si había la nota de V01, bórrala o reemplázala por una nota de iteración: *"Actualizada tras feedback del cliente el <fecha>."*

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

Todos los tipos están **definidos** en `src/data/types.ts` y re-exportados desde `src/data/proposal.ts` por compatibilidad: `ProposalMeta`, `HeroSection`, `CardCarouselSection`, `StickyListSection`, `CardGridSection`, `StickyCardsSection`, `StepCarouselSection`, `CTASection`, `ProposalData`. Al importarlos desde un archivo de cliente, usa siempre `from './types'`.

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
