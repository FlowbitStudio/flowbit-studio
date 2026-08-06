# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Documentación complementaria — leer cuando aplique

Este archivo cubre la arquitectura técnica. El contexto que NO se deduce del código vive en `docs/`:

| Cuándo | Leer |
|---|---|
| Vas a escribir el **contenido** de una propuesta (no solo la estructura) | `docs/playbook-propuestas.md` |
| Vas a tocar íconos, `Icon.tsx` o `src/components/origami/` | `docs/iconografia.md` |
| El proyecto involucra archivos, PDFs, fotos o expedientes de clientes | `docs/storage.md` |
| Vas a portar una animación de una referencia externa (Codrops, CodePen) | `docs/animaciones-externas.md` |
| Vas a trabajar en el homepage | `docs/reference/wqf-capture/index.html` (referencia visual) |

## Build & Dev Commands

```bash
npm run dev       # Start Vite dev server with HMR
npm run build     # TypeScript check + production build (tsc -b && vite build)
npm run lint      # ESLint (flat config)
npm run preview   # Preview production build
```

## Tech Stack

- **React 19** + **TypeScript 6** + **Vite 8**
- **react-router-dom** para multi-proposal routing (`/propuestas/:id`)
- Plain CSS con archivos component-scoped (no Tailwind, no CSS modules)
- CSS custom properties definidas en `src/index.css` (incluyendo `--page-padding` responsivo: 32px desktop, 20px mobile)
- Build production con tsc + Vite, deploy via Docker (`Dockerfile` + `nginx.conf` en raíz) en EasyPanel

## Sistema completo (contexto fuera del repo)

Este repo NO vive solo. Es una pieza de un pipeline más grande:

```
Telegram (bot Flowbit)
  ↓
n8n workflows (instancia: https://n8n.flowbit.studio)
  ├── Workflow principal: parseo de briefs, comandos administrativos, generación
  └── Workflow CTA: webhook de aceptación de cliente desde el botón final
  ↓
Wrapper HTTP (Node + Claude Code CLI)
  → Container EasyPanel "claude-wrapper" en project "flowbit"
  → Tiene este repo (flowbit-studio) clonado en /app/workspace
  → Corre Claude Code en modo headless (`claude -p`) con cwd al repo
  → Después de un commit + push exitoso, dispara EasyPanel deploy hook
  ↓
GitHub (repos privados FlowbitStudio/flowbit-studio + FlowbitStudio/flowbit-wrapper)
  ↓
EasyPanel container "website-flowbit" rebuild → flowbit.studio
  ↓
Sistema de tracking en paralelo:
  - Jira project "Propuestas" (PROP) con custom fields y 5 statuses
  - Supabase tabla `propuestas` (mirror de Jira + metadata pipeline)
  - Supabase tabla `leads` (CRM, linkeada via lead_id)
```

**Cuando este Claude Code corre desde el wrapper headless**, NO está editando el repo en local — está editando el clone que vive en el container del VPS. El git push va a GitHub, y de ahí EasyPanel auto-deploya. Todo el ciclo dura ~3 minutos por propuesta.

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
   - `logo`: **SIEMPRE** el string literal `'/logo-flowbit.png'`. NUNCA inventes URLs (figma, placeholder, etc.) — el logo-flowbit.png en `public/` ES el Logotipo Principal de Flowbit, y Vite lo sirve desde la raíz del dominio. NO dejes el campo vacío.
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

## Catálogo de servicios de Flowbit

Flowbit es un estudio multidisciplinario, NO solo una agencia de desarrollo. El catálogo completo de servicios que puedes sugerir en propuestas incluye:

### Servicios core
- **Sistematización / Desarrollo de software** — apps, sitios web, e-commerce, automatizaciones, integraciones, sistemas internos, dashboards, SaaS. Este es el servicio más común y suele ser el alcance principal de las propuestas.
- **Diagnóstico** — análisis previo al desarrollo de cualquier proyecto. **Precio fijo: $10,000 MXN.** Ver regla obligatoria más abajo.

### Servicios creativos
- **Diseño gráfico** — branding, identidad visual, guías de marca, sistemas gráficos, papelería, piezas editoriales, decks.
- **Animación** — motion graphics, animaciones para redes, lottie para UI, intros/outros, explainers animados.
- **Video** — producción audiovisual, edición, video institucional, reels, video para campañas, testimoniales.
- **Fotografía** — sesión fotográfica de producto, lifestyle, corporativa, foto para e-commerce, foto de eventos.

### Servicios de crecimiento / operación
- **SEO técnico y de contenido** — optimización on-page, schema, Core Web Vitals, estrategia de keywords.
- **Analytics y tracking** — GA4, GTM, eventos custom, dashboards de performance, integración con pixels.
- **Estrategia de contenido y redes** — plan editorial, plantillas de redes sociales, calendarios de publicación.
- **Soporte y mantenimiento** — planes mensuales de soporte técnico, actualizaciones, monitoreo, backups.
- **Capacitación y onboarding** — training del equipo del cliente para usar el sistema entregado.

### Cómo usar este catálogo

Al generar la propuesta, identifica qué servicios complementarios tendrían sentido según la naturaleza del proyecto y sugiérelos en `servicios_adicionales` (ver regla 2 más abajo). Un proyecto de e-commerce probablemente necesite fotografía de producto + SEO + capacitación; un proyecto de branding podría necesitar animación + fotografía + estrategia de redes; un proyecto de SaaS probablemente necesite video explainer + onboarding + soporte mensual.

## Sistema de iconos por categoría

Las cards de los layouts `card-carousel` y `card-grid` usan un sistema de iconos basado en CATEGORÍAS de servicios. Cada card declara una `category` (string) y el componente `Icon.tsx` resuelve esa categoría a uno de los 6 SVGs en `src/assets/icons/categories/`.

**Regla**: cuando generes una propuesta nueva, **siempre usa el campo `category` en las cards del card-carousel y del card-grid**. NUNCA generes el campo `image` con URLs de Figma — esas URLs expiran a los 7 días y rompen las propuestas.

### Las 6 categorías madre

| Categoría madre | Icono | Aliases válidos para `category` | Cuándo usar |
|---|---|---|---|
| Tech / Desarrollo | `tech.svg` | `tech`, `desarrollo`, `website`, `web`, `app`, `aplicacion`, `crm`, `software`, `ecommerce`, `e-commerce`, `saas`, `sistema`, `automatizacion`, `integracion`, `dashboard`, `api`, `webhook` | Cualquier proyecto de código: webs, apps, e-commerce, CRMs, automatizaciones, integraciones, dashboards, sistemas internos |
| Diseño | `design.svg` | `design`, `diseño`, `branding`, `marca`, `ilustracion`, `identidad`, `grafico`, `manual-marca`, `papeleria` | Branding, identidad visual, ilustración, sistemas gráficos, manual de marca |
| Visual / Audiovisual | `visual.svg` | `visual`, `audiovisual`, `fotografia`, `foto`, `video`, `animacion`, `motion`, `motion-graphics`, `produccion`, `reels`, `filmacion` | Fotografía, video, animación, motion graphics, producción audiovisual |
| Crecimiento / Marketing | `growth.svg` | `growth`, `marketing`, `seo`, `analytics`, `contenido`, `redes`, `redes-sociales`, `ads`, `publicidad`, `social`, `email-marketing`, `conversion` | SEO, analytics, contenido, redes sociales, ads, growth, campañas |
| Soporte / Operación | `support.svg` | `support`, `soporte`, `mantenimiento`, `capacitacion`, `training`, `hosting`, `monitoring`, `monitoreo`, `ops`, `operacion`, `onboarding` | Planes mensuales de soporte, capacitación, hosting, mantenimiento, training del equipo del cliente |
| Diagnóstico / Estrategia | `diagnosis.svg` | `diagnosis`, `diagnostico`, `estrategia`, `consultoria`, `auditoria`, `analisis`, `research`, `discovery` | El servicio fijo de Diagnóstico ($10,000 MXN) + cualquier auditoría, consultoría estratégica o análisis previo |

### Cómo elegir la categoría correcta

- Lee el `nombre` y `features` (o `desc` para card-grid) de la card
- Identifica el servicio principal que la card describe
- Encuentra la categoría madre más cercana en la tabla de arriba
- Usa cualquiera de los aliases (todos mapean al mismo SVG)

Ejemplos:

```ts
// E-commerce de tacos → tech
{ title: 'Sistema de e-commerce', category: 'ecommerce', items: [...] }

// Sesión fotográfica de productos → visual
{ title: 'Fotografía de producto', category: 'fotografia', desc: '...', price: '...' }

// SEO para landing → growth
{ title: 'Optimización SEO', category: 'seo', desc: '...', price: '...' }

// El Diagnóstico fijo → diagnosis (SIEMPRE en servicios_adicionales)
{ title: 'Diagnóstico', category: 'diagnostico', desc: '...', price: '$10,000 MXN', label: 'fijo' }

// Soporte mensual → support
{ title: 'Soporte y mantenimiento', category: 'soporte', desc: '...', price: '...' }
```

### Si no encuentras una categoría que aplique

Usa `tech` como fallback. El componente `Icon.tsx` también cae al icono `tech.svg` si recibe una category desconocida — no rompe nada.

### Para añadir una categoría madre nueva (futuro)

Solo aplica si Flowbit incorpora un nuevo grupo de servicios que no encaja en ninguna de las 6 actuales. En ese caso:
1. Diseñar el SVG nuevo y guardarlo en `src/assets/icons/categories/{nombre}.svg`
2. Importarlo y mapear sus aliases en `src/components/Icon.tsx`
3. Documentarlo en esta sección de CLAUDE.md

## Reglas de contenido obligatorias (toda propuesta)

Estas 3 reglas aplican SIEMPRE, independientemente del tipo de propuesta.

### 1. Siempre incluir un `quote`

Toda propuesta debe tener al menos un `quote` — un texto inspirador/reflexivo de 1-2 oraciones que resuma la filosofía, propuesta de valor o visión del proyecto. El quote se renderea en pantalla completa (100vh) como momento de descanso visual entre secciones, y aporta mucha presencia a la propuesta.

- **Si la propuesta es multi-módulo**: usa el campo `quote` del layout `card-carousel` (ver `cigar-society.ts` como referencia, el quote va después del array de cards).
- **Si la propuesta NO es multi-módulo** (`es_multimodulo: false`): incluye IGUAL un `card-carousel` con 1-3 cards que representen pilares del proyecto (no módulos — ejemplo: "Diseño", "Desarrollo", "Soporte continuo") más el `quote`. El quote es el objetivo principal de la sección; las cards son el vehículo.
- **Tono del quote**: debe sonar a manifiesto o visión, no a descripción técnica. Ejemplo del estilo de Flowbit: "Cuatro marcas, un solo ecosistema. Cada bar vive su identidad mientras comparte la misma infraestructura." Evita frases genéricas tipo "Calidad y compromiso".

### 2. Siempre sugerir servicios adicionales aplicables

Toda propuesta debe incluir un layout `card-grid` con `servicios_adicionales` — **incluso si el brief del cliente no los menciona**. Pincha del **catálogo de servicios de Flowbit** (sección arriba) los servicios complementarios que tengan sentido para la naturaleza del proyecto, y sugiérelos como add-ons opcionales.

#### Diagnóstico — SIEMPRE obligatorio

El primer item del `servicios_adicionales` de CUALQUIER propuesta DEBE ser el **Diagnóstico**, con precio **fijo $10,000 MXN**. Este precio NO se estima, NO lleva prefijo "Desde"/"Estimado", es un número firme en V01, V02, V03 y en iteraciones futuras. El diagnóstico es un servicio estándar de Flowbit que siempre se ofrece.

Estructura exacta de la entrada:

```ts
{
  nombre: 'Diagnóstico',
  precio: '$10,000 MXN',
  descripcion: 'Análisis inicial del proyecto: levantamiento de requerimientos, auditoría técnica del estado actual, definición de alcance detallado y roadmap de implementación. Necesario antes de arrancar cualquier desarrollo.',
  label: 'fijo'
}
```

#### Servicios adicionales sugeridos (después del Diagnóstico)

Después del Diagnóstico, añade **2-4 servicios adicionales más** del catálogo de Flowbit que apliquen al proyecto. Ejemplos de combinaciones típicas:

- **E-commerce** → Fotografía de producto + SEO técnico + Analytics + Soporte mensual
- **Landing / Marketing site** → Fotografía corporativa + SEO + Estrategia de contenido + Soporte
- **SaaS / App** → Video explainer (animación) + Onboarding/capacitación + Soporte priorizado
- **Branding + web** → Diseño gráfico (manual de marca) + Fotografía de producto + Animación para redes + Plantillas de redes
- **Proyecto con componente visual fuerte** → siempre incluir Fotografía y/o Video del catálogo

Deja claro en el `description` del layout `card-grid` que el **Diagnóstico es fijo** y que los demás son **add-ons opcionales** con precios estimados, no incluidos en el precio total de la propuesta.

### 3. Primera iteración (V01) = costos estimados

Cuando generes una propuesta **NUEVA** (V01 — el archivo `src/data/{slug}.ts` NO existe previamente), los precios deben tratarse como **estimaciones** sujetas a refinamiento:

- Si el brief da un `precio_total` pero no un `desglose`, tú generas el desglose estimado por componente (módulos, fases, servicios).
- En las descripciones de los precios del `sticky-cards` y en el `card-grid` de servicios adicionales, usa un tono de estimación cuando aplique — prefijos como "Desde", "Estimado" o "Aprox." son apropiados para los servicios adicionales.
- En el campo `consideraciones` de la propuesta (que va al final o dentro del sticky-cards como contexto), **siempre** agrega una línea: *"Propuesta inicial (V01). Los precios aquí presentados son estimaciones (excepto el Diagnóstico que es fijo) y pueden ajustarse en siguientes iteraciones según el alcance final definido con el cliente."*

**Excepción importante** — el precio del **Diagnóstico siempre es $10,000 MXN firme**, aunque estemos en V01. NO lo presentes como estimación, NO le pongas prefijo "Desde"/"Estimado", NO varíes el número. Es el único precio fijo desde la primera iteración.

Cuando **iteres una propuesta existente (V02+)**, esta regla NO aplica:
- Los precios ya fueron discutidos con el cliente, trátalos como firmes.
- NO agregues el disclaimer de "propuesta inicial".
- En el `consideraciones`, si había la nota de V01, bórrala o reemplázala por una nota de iteración: *"Actualizada tras feedback del cliente el <fecha>."*
- El Diagnóstico sigue siendo $10,000 MXN (no cambia nunca).

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

- **card-carousel**: En desktop las cards ocupan **3 columnas visibles** (1/3 del viewport cada una). En tablet y mobile (≤1024px) cambia a **1 columna full-width** para mejor legibilidad — la navegación entre cards se hace con las flechas o swipe nativo. Esto se controla con la CSS variable `--visible-cards` en `Arquitectura.css` (default 3, override a 1 en media queries).
- **card-carousel quote**: El texto grande de descanso (quote) SIEMPRE ocupa 100vh del viewport, centrado verticalmente.
- **sticky-cards**: Grid de 2 columnas. La primera card (proyecto completo / total) siempre ocupa 2 columnas para mayor jerarquía. El resto se acomoda en pares. Si queda una huérfana, se expande a 2 columnas.
- **sticky-cards (1 sola card)**: Cuando hay una sola card (proyecto no modular), toda la sección mide 70vh. La columna izquierda NO es sticky (no hay scroll), se centra verticalmente. La card se estira al mismo alto. Sin desglose — un solo bloque, un solo precio.
- **step-carousel**: En desktop **4 pasos visibles**. En tablet y mobile (≤1024px) cambia a **1 paso full-width** para legibilidad. Mismo sistema que `card-carousel`: CSS variable `--visible-cards` en `Pasos.css` (default 4, override a 1 en media queries). Si hay más pasos que los visibles, se navegan con las flechas o swipe nativo.

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

---

## Website Homepage (ruta `/`)

El repo ahora también tiene el homepage de Flowbit en la ruta `/`. Los componentes viven en `src/components/home/` y la página en `src/pages/Home.tsx`.

### Referencia visual
El diseño replica la estructura visual y animaciones de WorldQuant Foundry (worldquantfoundry.com). El HTML original descargado está versionado en el repo en `docs/reference/wqf-capture/index.html` como referencia para traducir las clases de Tailwind a CSS plano. Los estilos originales están en `docs/reference/wqf-capture/main.min.css`.

### Stack adicional para el homepage
- **GSAP** (ScrollTrigger, ScrollSmoother) — animaciones de scroll, pin, parallax
- **Three.js** — escenas 3D con partículas (canvas backgrounds)
- **Swiper** — carrusel de portfolio con container-query units

### Contenido
Todo el contenido en español está en `src/data/homeContent.ts`. NUNCA usar textos del sitio original — siempre usar la arquitectura de datos de Flowbit.

### Tokens adicionales (src/index.css)
```css
--dark-bg: #111111
--deep-navy: #15374C
--teal: #00C9A7
--red: #FF4444
--header-height: 80px (5rem desktop, 4rem mobile)
--easing: cubic-bezier(0.25, 0.1, 0.25, 1)
```

### Secciones del homepage (orden en Home.tsx)

| # | Sección | Componente | Estado |
|---|---------|-----------|--------|
| 1 | Hero | HeroSection + HeroCanvas | ✓ (canvas deshabilitado) |
| 2 | Header | WebsiteHeader | ✓ pill flotante + dot-blur hover |
| 3 | Ethos | EthosSection | ✓ cards horizontales + clip-path scroll reveal |
| 4 | Sectores | SectoresSection | ✓ text-slide + gradient overlay pinned |
| 5 | Portfolio | PortfolioSection | ✓ Swiper cqw + clip-path color reveal + DragCursor |
| 6 | Equipo | EquipoSection | ⚠️ Parcial — franja 80px funciona, expand al click pendiente de pulir |
| 7 | Clientes | ClientesSection | ✓ cards clip-path reveal + texto pinned |
| 8 | Proceso | ProcesoSection | ✓ cards izq + texto der (mirror de Clientes) |
| 9 | Diagnóstico | DiagnosticoSection | ✓ texto izq + espacio der |
| 10 | Footer | FooterSection | ✓ panel azul grid 2x2 + nav hover grande |
| 11 | Contact Modal | ContactModal | Pendiente |
| 12 | Drag Cursor | DragCursor | ✓ pill "Drag" sobre portfolio |

### Componente reutilizable: WqfButton
`src/components/home/WqfButton.tsx` — botón con dot-blur + text-slide + corner accent SVGs. Props: `text`, `dark?`, `onClick?`, `href?`, `target?`. Usar en vez de markup inline.

### Patrones técnicos clave

**ScrollSmoother** (en Home.tsx): `smooth: 1.25, effects: true`. Requiere `#smooth-wrapper > #smooth-content`. Elementos con `data-lag="0.2"` se mueven con parallax.

**Gradient overlay en Sectores**: `position: absolute` + ScrollTrigger pin (`trigger: #light-section, start: top top, end: bottom top, pinSpacing: false`). NO usar `position: sticky` — no funciona con ScrollSmoother.

**Stacking cards (Clientes/Proceso)**: NO usar pin en las cards — fluyen normalmente con clip-path reveal. Solo la columna de texto se pinnea con ScrollTrigger.

**Container query units**: El portfolio usa `cqw` para sizing responsivo de slides. El contenedor necesita `container-type: inline-size`.

**Secciones envueltas**: Sectores + Portfolio están dentro de un `<div id="light-section" style="background: #dadada">` en Home.tsx porque ambas comparten el fondo claro (neural-fog).

### Recursos descargados
- `/public/ethos-icons/1-4.svg` — íconos de las cards del ethos
- `/public/portfolio-logos/1-6.svg` — logos SVG de las empresas del portfolio
- `/public/card-icons/1-6.svg` — íconos de las stacking cards
- `/public/placeholder-andre.svg`, `/public/placeholder-cesar.svg` — placeholders fotos equipo

### Approach de desarrollo
- Leer el HTML original en `docs/reference/wqf-capture/index.html` para replicar estructura
- Traducir clases Tailwind a CSS plano directamente, una por una
- Validar cada sección con el usuario antes de pasar a la siguiente
- NO delegar CSS a agentes — el resultado no es fiel. Hacer directo
- NO cambiar textos de homeContent.ts — siempre usar la arquitectura de Flowbit
