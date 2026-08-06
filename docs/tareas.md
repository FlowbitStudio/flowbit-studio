# Backlog de tareas

Este archivo es la **fuente de verdad** de lo que hay que construir. Andre escribe las
tareas aquí; quien desarrolla las toma de arriba hacia abajo.

---

## Instrucciones para Claude Code

Cuando trabajes en una tarea de este archivo:

1. **Lee la tarea completa antes de escribir código**, incluyendo `No hacer` y
   `Depende de`. El alcance de la tarea es el entregable — no lo amplíes ni lo recortes.
2. **Si `Depende de` no está resuelto, no arranques.** Dilo y pasa a la siguiente.
3. **Si algo de la tarea es ambiguo**, haz primero todo lo que no dependa de esa duda, y
   pregunta solo por lo que sí la necesita. No inventes alcance para rellenar huecos.
4. **El `Criterio de terminado` es el contrato.** No marques una tarea como hecha si no lo
   cumple completo. Si dejaste algo fuera, dilo explícitamente y por qué.
5. **Corre `npm run build` antes de dar una tarea por terminada.** Si truena, no está lista.
6. **Al terminar, actualiza el `Estado` de la tarea a `✅ Hecha`** en este archivo y
   commitéalo junto con el código. Así Andre ve el avance sin preguntar.
7. **Respeta siempre `CLAUDE.md`** — tipos, layouts, convenciones de diseño y reglas de
   contenido de propuestas. Este backlog dice *qué* construir; `CLAUDE.md` dice *cómo*.

### Estados

| Estado | Significa |
|---|---|
| `🔲 Pendiente` | Nadie la ha tomado |
| `🔨 En progreso` | Alguien está trabajando en ella ahora |
| `⛔ Bloqueada` | No se puede avanzar; el motivo está en `Depende de` |
| `✅ Hecha` | Cumple el criterio de terminado y el build pasa |

---

## Plantilla

Copia esto para cada tarea nueva:

```markdown
### T-00 — Título corto y accionable

- **Estado:** 🔲 Pendiente
- **Prioridad:** Alta | Media | Baja

**Contexto.** Por qué existe esta tarea. Qué problema resuelve o qué se quiere lograr.
Sin esto, quien la lea va a inventar la intención.

**Qué construir.** El alcance concreto, en lista. Entre más específico, menos
interpretación. Si son varias piezas, enuméralas.

**Criterio de terminado.** Cómo sabemos objetivamente que está lista. Debe ser verificable,
no subjetivo ("se ve bien" no sirve; "la franja se expande al click y cierra con Esc" sí).

**Archivos involucrados.** Dónde vive esto. Si no lo sabes, dilo — se investiga.

**No hacer.** Lo que queda explícitamente fuera del alcance. Evita que se expanda solo.

**Depende de.** Otras tareas, decisiones tuyas o accesos que hacen falta antes. Si no
depende de nada, escribe "Nada".
```

---

## Tareas

<!--
  Andre: agrega las tareas nuevas abajo siguiendo la plantilla.
  Numéralas T-01, T-02... y ponlas en el orden en que quieres que se trabajen.
-->

### T-01 — Ejemplo (borrar cuando haya tareas reales)

- **Estado:** 🔲 Pendiente
- **Prioridad:** Media

**Contexto.** La sección de Equipo del homepage quedó a medias: la franja de 80px funciona
pero el comportamiento de expansión al hacer click nunca se pulió. `CLAUDE.md` la marca
como ⚠️ Parcial en la tabla de secciones del homepage.

**Qué construir.**
1. Al hacer click en la franja de un miembro, esta se expande revelando su foto y bio.
2. Al hacer click en otro miembro, el anterior se colapsa (solo uno abierto a la vez).
3. Cierre con tecla `Esc` y con click fuera de la sección.
4. Transición suave usando `--easing` (`cubic-bezier(0.25, 0.1, 0.25, 1)`).

**Criterio de terminado.** La franja se expande y colapsa sin saltos de layout, solo un
miembro abierto a la vez, `Esc` cierra, funciona en mobile (≤1024px), y `npm run build`
pasa limpio.

**Archivos involucrados.** `src/components/home/EquipoSection.tsx` y su CSS.

**No hacer.** No sustituir los placeholders de fotos (`public/placeholder-andre.svg`,
`public/placeholder-cesar.svg`) — las fotos reales llegan después. No tocar las otras
secciones del homepage.

**Depende de.** Nada.
