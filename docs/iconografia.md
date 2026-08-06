# Iconografía — Origami como sistema oficial

## La decisión

**Origami es la librería oficial de íconos para todo el sitio Flowbit**, incluyendo las
propuestas (`/propuestas/:slug`). El sistema actual de 6 SVGs por categoría en
`src/components/Icon.tsx` (tech / design / visual / growth / support / diagnosis) va a
quedar reemplazado por íconos 3D de `src/components/origami/`.

**Por qué:** consistencia visual entre el homepage y las propuestas. Hoy el home usa
Origami 3D y las propuestas usan SVGs planos — se ven como dos productos distintos.

## Estado actual — NO implementado todavía

⚠️ Esto es una decisión tomada, no código escrito. Lee esto antes de asumir cualquier cosa:

- Las cards de propuestas (`card-carousel`, `card-grid`) **siguen usando** `<Icon category="..." />`
  con los 6 SVGs originales. Eso es lo correcto hoy.
- `src/components/origami/` ya existe con los 12 items, el wrapper `OrigamiIcon.tsx` y el
  preset `flowbitIconPreset`.
- **El mapeo de las 6 categorías madre → qué Origami item usar para cada una todavía NO
  está decidido.** Se define cuando se vea cada categoría en contexto, no en abstracto.

## Cómo implementarlo cuando se defina el mapeo

Cuando exista la decisión (ej. "tech → Gears, design → Bloom, growth → Wave..."):

1. Actualizar `src/components/Icon.tsx` para renderizar `<OrigamiIcon>` en vez del
   `dangerouslySetInnerHTML` con SVG raw. **Mantener la misma API externa** (`category: string`
   → ícono) para no tocar ninguna propuesta existente.
2. Usar `flowbitIconPreset` como material/look default (ver abajo).
3. Verificar el tamaño de `.category-icon` en `src/index.css` y su uso en `Arquitectura.css`
   / `Servicios.css` antes de sustituir — probablemente haya que ajustar el `size` del preset
   para propuestas.
4. **No eliminar** los 6 SVGs de `src/assets/icons/categories/` todavía. Se quedan como
   fallback hasta confirmar que el reemplazo funciona en todas las propuestas existentes.

La tabla de categorías madre y sus aliases en `CLAUDE.md` **sigue vigente** — solo cambia
la implementación del render, no el sistema de `category`.

---

## El preset oficial: `flowbitIconPreset`

Look canónico de los íconos Origami del sitio. Vive en `src/components/origami/presets.ts`.

```ts
{
  size: 267,
  envPreset: 'studio',
  material: {
    mode: 'standard',
    color: '#2e2e2e',
    metalness: 0.88,
    roughness: 0.47,
    envIntensity: 0,
    emissive: '#000000',
    emissiveIntensity: 0.95,
  },
}
```

Gris oscuro metálico, standard PBR (no matcap, no physical), env `studio` pero con
intensidad 0 — solo contribución de luces.

### Cómo usarlo

```tsx
import OrigamiIcon from '@/components/origami/OrigamiIcon'
import { flowbitIconPreset } from '@/components/origami/presets'

<OrigamiIcon
  item={9}
  size={flowbitIconPreset.size}
  material={flowbitIconPreset.material}
  envPreset={flowbitIconPreset.envPreset}
/>
```

**Reglas:**
- Este preset es el default. Úsalo salvo que se pida variación explícita.
- Si la card no permite 267px, ajusta `size` a lo que quepa — pero **mantén el resto del
  material intacto**.

El mapeo de los 12 íconos (nombre → Item ID) está en
[`src/components/origami/README.md`](../src/components/origami/README.md).
