# Animaciones externas — solo comportamiento, nunca estilo

Cuando portes una animación de una referencia externa (Codrops, CodePen, otro repo), trae
**solo el comportamiento**: GSAP timelines, filters, transforms, triggers, staggers,
easings.

**No copies** tipografías, tamaños de fuente, colores, spacing ni estructura visual del
demo original.

## Por qué

El look & feel de Flowbit ya está definido en el repo: los tokens de `src/index.css`
(`--font-display` Mark Pro, `--font-mono` GT America Mono, `--blue`, `--gray`,
`--page-padding`), las clases tipográficas existentes y los patrones de animación propios
(`useFadeIn`, transiciones cubic-bezier).

Mezclar estilos de demos rompe la coherencia visual del sitio. La animación es la parte
reutilizable; el estilo del demo es de otra marca.

## Cómo aplicarlo

Cuando se pida "pon [tal efecto] en este texto":

1. Aplica la animación al elemento de texto **tal como está**, con su font, size y color
   actuales.
2. No cambies `font-family`, `font-size`, `font-weight`, `color`, `letter-spacing` ni el
   wrapping del texto original.
3. Si la animación necesita split de chars/words (SplitType y similares), mantén el styling
   heredado del contenedor.
4. El único CSS que añades es el mínimo para que la animación funcione — `will-change`,
   `display: inline-block` si hace falta para los transforms.

## Antes de portar

Verifica que los paths de componentes que menciona la referencia **existan realmente en
este repo**. Las referencias externas describen su propia arquitectura, no la de Flowbit.
