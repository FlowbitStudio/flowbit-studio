# Iconos por categoría — Sistema de cards de propuestas

Esta carpeta contiene los iconos SVG que se renderizan en las cards de los layouts `card-carousel` (Arquitectura) y `card-grid` (Servicios) de las propuestas.

**Cada SVG en esta carpeta representa una CATEGORÍA de servicios de Flowbit, no un icono específico.** Cuando una card declara que pertenece a la categoría "tech", "desarrollo", "website", "ecommerce", etc., el componente `Icon.tsx` resuelve la categoría a uno de los 6 SVGs de aquí.

---

## 📁 Los 6 SVGs requeridos

| Nombre del archivo | Categoría madre | Cubre |
|---|---|---|
| `tech.svg` | Tech / Desarrollo | Websites, apps, CRM, e-commerce, SaaS, automatizaciones, integraciones, sistemas internos, dashboards |
| `design.svg` | Diseño | Branding, identidad visual, ilustración, manual de marca, sistemas gráficos, papelería |
| `visual.svg` | Audiovisual | Fotografía, video, animación, motion graphics, producción audiovisual |
| `growth.svg` | Crecimiento / Marketing | SEO, analytics, contenido, redes sociales, ads, estrategia de growth |
| `support.svg` | Soporte / Operación | Mantenimiento mensual, capacitación, training del equipo, hosting, monitoring |
| `diagnosis.svg` | Diagnóstico / Estrategia | El servicio fijo de Diagnóstico ($10,000 MXN) + consultoría estratégica + auditorías |

**Nombres EXACTOS** (lowercase, sin tildes, extensión `.svg`). El componente busca por estos nombres específicos.

---

## ✏️ Cómo subir tus iconos

1. Diseña los 6 iconos en Figma / Illustrator / cualquier editor vectorial
2. Exporta cada uno como `.svg` con el nombre exacto de la tabla de arriba
3. Reemplaza los archivos placeholder en esta carpeta (los actuales son iconos genéricos de Lucide hasta que los tuyos estén listos)
4. `git add src/assets/icons/categories/*.svg && git commit -m "icons: real category icons" && git push`
5. EasyPanel auto-deploya en ~3 min y los iconos quedan vivos en producción

**No necesitas tocar código.** Los SVGs ya están referenciados en `src/components/Icon.tsx`. Solo el contenido cambia.

---

## 🎨 Especificaciones de diseño para los SVGs

Para que se vean consistentes y se integren bien con el resto del sitio:

| Spec | Valor recomendado | Notas |
|---|---|---|
| **viewBox** | `0 0 24 24` | Estándar de iconos vector. Permite escalar a cualquier tamaño sin pérdida. Si prefieres un canvas más grande (32x32, 48x48, 64x64), también funciona — el CSS controla el tamaño final. |
| **stroke-width** | `1.5` – `2` | Más delgado se ve elegante; más grueso, más bold. Define un grosor y sé consistente entre los 6. |
| **stroke** | `currentColor` | **CRÍTICO**: usa `stroke="currentColor"` (no `stroke="#000"` ni `stroke="#fff"`). Así el icono hereda el color del texto del card y respeta los hover states (cuando la card cambia a azul, el icono también) |
| **fill** | `none` (line icons) o `currentColor` (filled) | Sé consistente entre los 6. Recomiendo line icons (`fill="none"`) que es lo que usa el resto del sistema visual de Flowbit (mono fonts, líneas finas, minimal). |
| **stroke-linecap** | `round` | Esquinas redondeadas en los extremos de las líneas. Más amigable visualmente. |
| **stroke-linejoin** | `round` | Esquinas redondeadas en los joints. Match con linecap. |
| **Optimización** | Pásalo por SVGOMG / SVGO antes de subir | Quita metadata innecesaria, reduce tamaño. https://jakearchibald.github.io/svgomg/ |
| **Tamaño en disco** | < 2 KB cada uno | Si tu SVG sale más grande, hay paths innecesarios. Optimiza. |

### Estructura mínima esperada

```xml
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none"
     stroke="currentColor" stroke-width="1.75" stroke-linecap="round"
     stroke-linejoin="round">
  <!-- tu path aquí -->
</svg>
```

### ⚠️ NO incluir en los SVGs

- ❌ Atributos `width` / `height` fijos (déjalos fuera, el CSS los controla)
- ❌ Colores hardcoded (`#000`, `#1786FF`, etc.) — usa `currentColor`
- ❌ IDs únicos en `<defs>` o `<filter>` que pudieran chocar entre archivos
- ❌ Comentarios XML largos (los placeholders no los tienen, mantenlo limpio)
- ❌ Texto `<text>` (los iconos deben funcionar como gráficos puros, no texto)

---

## 🧠 Cómo Claude Code elige la categoría

Cuando Claude Code genera una nueva propuesta desde el pipeline (Telegram → wrapper → Claude Code), lee `CLAUDE.md` y ahí encuentra el catálogo de aliases. Para cada card que crea, elige una categoría basándose en el contenido de la card.

**Aliases que mapean a cada categoría** (definidos en `src/components/Icon.tsx`):

```
tech.svg ←──── desarrollo, website, app, crm, software, ecommerce,
                saas, sistema, automatizacion, integracion, dashboard

design.svg ←── diseño, design, branding, ilustracion, identidad,
                grafico, manual-marca, papeleria

visual.svg ←── fotografia, video, animacion, motion, produccion,
                audiovisual, foto, reels

growth.svg ←── seo, analytics, marketing, contenido, redes,
                ads, growth, social

support.svg ←─ soporte, mantenimiento, capacitacion, training,
                hosting, monitoring, ops

diagnosis.svg ← diagnostico, estrategia, consultoria, auditoria,
                analisis
```

Si Claude Code usa un alias que no está en la lista, el componente cae al default `tech.svg` (no rompe nada).

---

## 🔧 Dónde se usan los iconos en el código

Los iconos se renderizan en:

1. **`src/components/Arquitectura.tsx`** (`card-carousel`)
   Antes: cada card mostraba una imagen de Figma (URL que expira a los 7 días).
   Ahora: cada card muestra el icono de su categoría.

2. **`src/components/Servicios.tsx`** (`card-grid`)
   Antes: las cards eran solo texto.
   Ahora: opcionalmente pueden tener un icono de categoría arriba.

El componente `Icon.tsx` es el único punto de resolución categoría → SVG. Todo pasa por ahí.

---

## 🆘 Troubleshooting

**No veo el icono después de subir**
- Verifica que el nombre del archivo sea EXACTO (lowercase, `.svg`).
- Verifica que el SVG sea válido (ábrelo en el browser, debe verse).
- Force refresh del browser (Cmd+Shift+R) para limpiar cache.
- En producción, espera ~3 min al rebuild de EasyPanel después del push.

**El icono se ve muy chico / muy grande**
- El tamaño visual lo controla el CSS (`.category-icon` en `Arquitectura.css` y `Servicios.css`), no el SVG. Si quieres cambiar el tamaño global, edita esas reglas.

**El icono no cambia de color en hover**
- Verifica que el SVG use `stroke="currentColor"` y `fill="none"`. Si tiene colores hardcoded, no respeta el currentColor del padre.

**Quiero agregar una categoría nueva**
- Edita `src/components/Icon.tsx` y añade la entrada al `iconMap` con sus aliases.
- Crea el SVG correspondiente en esta carpeta.
- Documenta la nueva categoría en `CLAUDE.md` para que Claude Code la conozca y la use.
