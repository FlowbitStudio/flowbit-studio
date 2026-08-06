# Prompt: replicar el "morphing" del logo en el header al hacer scroll

Quiero que repliques en este proyecto un efecto que tengo en otro sitio: el logotipo
completo en el header se "colapsa" hasta quedar solo la inicial cuando el usuario hace
scroll, y vuelve a expandirse cuando sube. Abajo te explico EXACTAMENTE cómo funciona
para que lo entiendas y lo adaptes a este proyecto (mi logo es distinto, así que tendrás
que sustituir el SVG, pero la mecánica es idéntica).

## Qué es el efecto (concepto)

No es un "morph" de paths SVG de verdad (no se interpolan formas). Es un truco visual
mucho más simple y robusto, compuesto de 3 piezas:

1. **El logo es un SVG inline donde CADA letra es un `<path>` separado.** La primera
   letra (la inicial) lleva una clase extra que la marca como "la que se queda".
2. **Un estado `scrolled`** (booleano) que se activa cuando el scroll pasa cierto umbral.
   Se controla en JS con un listener de scroll y se refleja como una clase en el `<header>`.
3. **Transiciones CSS** que, cuando el header tiene la clase `scrolled`:
   - encogen el contenedor del logo (de ~110px a ~24px de ancho), y
   - a TODAS las letras MENOS la inicial les aplican `opacity: 0` + `translateX(-60%)
     scaleX(0)`, de modo que se desvanecen y se aplastan hacia la izquierda (hacia la
     inicial) en lugar de simplemente desaparecer de golpe.

El resultado es que las letras "se comen" unas a otras deslizándose hacia la inicial,
y queda solo la inicial. Al revertir el estado, vuelven a desplegarse. La sensación de
"morph" la dan el `transform-origin: center`, el `scaleX` y la curva de easing suave.

## Pieza 1 — El markup del logo (SVG inline, una letra por path)

Importante: el logo tiene que ser un SVG **inline** (no un `<img>`), con un `<path>` por
cada letra/glifo. Cada path lleva `className="wh__logo-letter"`, y SOLO la inicial lleva
además `wh__logo-letter--f` (la "f" es de Flowbit; en tu caso será la inicial de tu marca).

```tsx
<a href="/" className="wh__logo" aria-label="NombreMarca">
  <svg className="wh__logo-svg" viewBox="0 0 802.36 178.17" xmlns="http://www.w3.org/2000/svg">
    {/* La INICIAL: lleva la clase --f, es la que NO se colapsa */}
    <path className="wh__logo-letter wh__logo-letter--f" d="…inicial…" fill="#1786FF"/>
    {/* El RESTO de las letras: solo wh__logo-letter, estas se colapsan */}
    <path className="wh__logo-letter" d="…letra 2…" fill="#1786FF"/>
    <path className="wh__logo-letter" d="…letra 3…" fill="#1786FF"/>
    {/* …tantos paths como letras tenga el logo… */}
  </svg>
</a>
```

Para adaptarlo a MI logo: abre el SVG de mi logotipo (te lo paso aparte / está en
`public/`), y asegúrate de que esté descompuesto en un path por glifo. Si mi SVG viene
como un solo path combinado, hay que separarlo por letra (en Illustrator: "Release
Compound Path" / soltar trazado compuesto, o exportar cada letra por separado). La clave
es que la inicial sea un path independiente con la clase `--f`.

## Pieza 2 — El estado `scrolled` (React + listener de scroll)

En el componente del header (React con hooks). Lo esencial es el `useState` + el
listener de scroll que activa `scrolled` cuando pasas ~25% del viewport. (El componente
real también oculta el header al bajar y lo muestra al subir; eso es secundario al morph,
pero lo incluyo porque conviven.)

```tsx
import { useState, useEffect, useCallback } from 'react'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = useCallback(() => {
    const currentY = window.scrollY
    const vh = window.innerHeight
    // Activa el morph cuando bajas más del 25% de la altura de la ventana:
    setScrolled(currentY > vh * 0.25)
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [handleScroll])

  // La clase `-scrolled` en el header es lo que dispara TODO el morph vía CSS:
  const headerClasses = ['wh', scrolled ? '-scrolled' : ''].filter(Boolean).join(' ')

  return (
    <header className={headerClasses}>
      {/* …el SVG del logo de la Pieza 1 va aquí… */}
    </header>
  )
}
```

Si este proyecto NO usa React, el equivalente vanilla es: un listener de scroll que hace
`header.classList.toggle('-scrolled', window.scrollY > window.innerHeight * 0.25)`.

## Pieza 3 — El CSS (aquí está toda la magia visual)

Necesito una variable de easing suave. Si el proyecto no la tiene, defínela:

```css
:root {
  --easing: cubic-bezier(0.25, 0.1, 0.25, 1);
}
```

Y el CSS del logo:

```css
/* Contenedor del logo: ancho completo en reposo */
.wh__logo {
  position: relative;
  display: flex;
  align-items: center;
  height: 30px;
  width: 110px;            /* ancho del logo completo */
  flex-shrink: 0;
  text-decoration: none;
  color: currentColor;
  transition: width 600ms var(--easing);   /* anima el encogido del contenedor */
}

/* Al hacer scroll, el contenedor se encoge al ancho de solo la inicial */
.-scrolled .wh__logo {
  width: 24px;
}

/* El SVG escala a su contenedor. overflow: visible es importante:
   deja que las letras que se colapsan se animen "saliendo" en vez de cortarse en seco */
.wh__logo-svg {
  height: 22px;
  width: auto;
  display: block;
  overflow: visible;
}

/* Cada letra: estado base + qué propiedades animar.
   transform-origin: center hace que el scaleX colapse hacia el centro de cada letra */
.wh__logo-letter {
  transform-origin: center;
  transition: transform 700ms var(--easing), opacity 500ms var(--easing);
}

/* AL HACER SCROLL: todas las letras MENOS la inicial (--f)
   se desvanecen y se aplastan hacia la izquierda (hacia la inicial) */
.-scrolled .wh__logo-letter:not(.wh__logo-letter--f) {
  opacity: 0;
  transform: translateX(-60%) scaleX(0);
}
```

## Cómo encajan las 3 piezas (resumen del flujo)

1. Usuario hace scroll > 25% del viewport → JS pone `setScrolled(true)`.
2. El `<header>` recibe la clase `-scrolled`.
3. CSS reacciona a `.-scrolled`:
   - `.wh__logo` transiciona su `width` de 110px → 24px (600ms).
   - Cada `.wh__logo-letter` que NO sea la inicial transiciona a `opacity: 0` +
     `translateX(-60%) scaleX(0)` (700ms transform / 500ms opacity).
   - La inicial (`--f`) no recibe ninguna regla, así que se queda intacta.
4. Visualmente: las letras se deslizan/aplastan hacia la inicial y se desvanecen, el
   contenedor encoge, y queda solo la inicial. Al subir, todo revierte por la misma
   transición (CSS interpola de vuelta solo).

## Detalles que NO debes omitir (si no, el efecto se ve mal)

- **Una letra = un path.** Si el logo es un path único, el efecto NO funciona. Hay que
  separar glifos. La inicial DEBE tener su propia clase (`--f`).
- **`transform-origin: center`** en cada letra: sin esto el `scaleX(0)` colapsa desde la
  esquina y se ve raro. Con `center` cada letra se aplasta sobre sí misma de forma limpia.
- **`overflow: visible`** en el SVG: deja que la animación de salida se vea fluida en vez
  de recortarse contra el contenedor que está encogiendo.
- **Easing suave (`cubic-bezier(0.25, 0.1, 0.25, 1)`)** y duraciones distintas para
  transform (≈700ms) vs opacity (≈500ms): la opacidad termina antes que el desplazamiento,
  lo que da una sensación más orgánica de "comerse" las letras.
- **El umbral del scroll** (`vh * 0.25`) es ajustable: súbelo si quieres que tarde más en
  colapsar, bájalo para que reaccione antes.
- **Anima `width` del contenedor, no del SVG.** El SVG usa `width: auto` y escala por
  altura; el que se anima es el `<a>` contenedor para que el layout del header reflowee.

## Lo que necesito de ti (Claude Code)

1. Identifica/crea el componente del header de ESTE proyecto.
2. Mete mi logo como SVG inline descompuesto por letras (pregúntame por el archivo del
   logo si no lo encuentras; dime si necesitas que lo separe por glifos).
3. Marca la inicial con la clase `--f` (o renómbrala como prefieras, pero mantén la idea
   de "la letra que se queda").
4. Aplica las 3 piezas adaptando los nombres de clase a las convenciones de este repo.
5. Ajusta anchos (`110px` reposo / `24px` colapsado) a las dimensiones reales de mi logo.
6. Pruébalo en el navegador haciendo scroll y confirma que colapsa al bajar y se expande
   al subir. Avísame si mi logo viene como path único y hay que separarlo.
