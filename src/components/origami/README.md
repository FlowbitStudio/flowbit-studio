# Origami icons

Importado de https://github.com/d3adrabbit/origami (Codrops). 12 motion graphics 3D con React Three Fiber + GSAP.

## Uso

```tsx
import OrigamiIcon from '@/components/origami/OrigamiIcon'

<OrigamiIcon item={9} size={120} matcap={1} />
```

## Mapeo nombre → Item ID

| Nombre | ID | Animación |
|---|---|---|
| Rings | 1 | 4 toros concéntricos rotando |
| Orbit | 2 | 20 cubos orbitando en anillo |
| Gears | 3 | 8 cilindros con cubos girando |
| Diamond | 4 | 2 toros + conos tipo diamante |
| Stack | 5 | Cubo 3x3x3 con capas rotando |
| Arc | 6 | Esfera viajando por semicírculo |
| Deck | 7 | 5 cajas rotando con back-ease |
| Slide | 8 | Cilindros deslizando sobre barra |
| Pulse | 9 | 10 discos pulsando en yoyo |
| Bloom | 10 | 4 arcos abriendo como flor |
| Wave | 11 | 5 esferas en onda |
| Arrows | 12 | Cubo con 4 flechas direccionales |

## Look oficial

Usa siempre el preset `flowbitIconPreset` de `presets.ts` salvo que se pida variación
explícita. Ver [`docs/iconografia.md`](../../../docs/iconografia.md) para el preset completo
y para la decisión pendiente de mapear las 6 categorías de propuestas a estos íconos.

> El catálogo visual temporal (`/origami`, `src/pages/Origami.tsx`) ya fue eliminado.
