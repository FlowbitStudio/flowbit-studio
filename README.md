# Flowbit Studio — Website + Sistema de Propuestas

Repo del sitio de Flowbit (`flowbit.studio`) y del generador de propuestas comerciales.
Un solo proyecto React + Vite que sirve dos cosas:

| Ruta | Qué es |
|---|---|
| `/` | Homepage de Flowbit (GSAP + Three.js + Swiper) |
| `/propuestas/:slug` | Propuesta comercial de un cliente, single-page scrolleable |

---

## Setup (primera vez)

Requisitos: **Node 20+** y npm.

```bash
git clone https://github.com/FlowbitStudio/flowbit-studio.git
cd flowbit-studio
npm install
npm run dev          # http://localhost:5173
```

No hay archivo `.env` ni llaves que pedir — el proyecto no usa variables de entorno.
Si `npm install` truena, verifica tu versión de Node con `node -v` (debe ser 20 o superior).

### Comandos

```bash
npm run dev       # servidor de desarrollo con HMR
npm run build     # tsc -b && vite build — corre esto ANTES de pushear
npm run lint      # ESLint
npm run preview   # previsualizar el build de producción
```

---

## Cómo trabajamos en equipo

**Pusheamos directo a `main`.** No usamos pull requests. Como somos dos personas
*y además un bot* escribiendo al mismo repo, el orden importa:

```bash
# SIEMPRE antes de empezar a trabajar
git pull --rebase origin main

# ... haces tus cambios ...

npm run build                    # que compile antes de subir
git add .
git commit -m "descripción clara del cambio"
git pull --rebase origin main    # otra vez, por si entró algo mientras trabajabas
git push origin main
```

### Por qué el `git pull --rebase` no es opcional

Hay un **pipeline automatizado** que pushea commits a `main` sin avisar: un bot de
Telegram → n8n → Claude Code headless genera propuestas nuevas y las commitea solo.
Puede meter un commit en cualquier momento del día.

Si tú pusheas sin haber hecho pull, GitHub te rechaza el push. El `--rebase` reaplica
tus commits encima de lo que ya está en remoto en vez de crear merges basura.

### Reglas para evitar pisarse

- **Avísense antes de tocar el mismo archivo.** Especialmente `src/data/proposal.ts`
  (el registry de propuestas) y los CSS del homepage — son los que más se tocan.
- **Un commit por cosa.** Nada de commits gigantes con 30 archivos revueltos: hacen
  imposible el rebase cuando hay conflicto.
- **Nunca `git push --force` a `main`.** Si te enredas con un rebase, `git rebase --abort`
  y pregunta antes de forzar nada.
- Si el bot y tú tocan el mismo archivo de propuesta, gana el bot: ese archivo lo
  genera el pipeline, no lo edites a mano si hay una versión corriendo.

---

## Estructura del repo

```
src/
├── components/          # Layouts de propuestas (Hero, Arquitectura, Fases, ...)
│   ├── home/            # Componentes del homepage (GSAP/Three.js)
│   └── Icon.tsx         # Resuelve category → SVG de las 6 categorías
├── data/
│   ├── types.ts         # Fuente de verdad de todos los tipos de propuesta
│   ├── proposal.ts      # REGISTRY: mapea slug → propuesta
│   ├── homeContent.ts   # Todo el copy del homepage
│   └── {slug}.ts        # Un archivo por cliente
├── pages/
└── assets/icons/categories/   # Los 6 SVGs de categoría
public/                  # Assets estáticos (logo, íconos, placeholders)
prompts/                 # System messages de los agentes de n8n
```

## Cómo agregar una propuesta nueva

1. Crea `src/data/{slug}.ts` en kebab-case, exportando default un `ProposalData`.
2. Regístrala en `src/data/proposal.ts`: agrega el `import` y la entrada en `proposals`.
3. Queda viva en `/propuestas/{slug}`.

Las reglas completas de contenido (hero meta obligatorio, quote obligatorio,
servicios adicionales, el Diagnóstico fijo de $10,000 MXN, catálogo de servicios,
sistema de categorías de íconos, layouts disponibles) están en **`CLAUDE.md`**.

---

## Trabajando con Claude Code

Este repo está preparado para Claude Code. Léelo así:

- **`CLAUDE.md`** es el manual del proyecto y Claude lo carga automáticamente en cada
  sesión. Contiene las convenciones de diseño, los layouts, las reglas de contenido de
  propuestas y el contexto del pipeline de n8n. **Si cambias una convención del proyecto,
  actualiza `CLAUDE.md` en el mismo commit.**
- **`.claude/settings.json`** son los permisos compartidos del equipo (comandos que
  Claude puede correr sin preguntarte cada vez). Está versionado — si agregas uno útil
  para todos, commitéalo.
- **`.claude/settings.local.json`** son tus permisos personales. Está en `.gitignore`,
  no se comparte, no lo subas.

---

## Deploy

`main` → EasyPanel (container `website-flowbit`) → `flowbit.studio`.

El deploy es automático al pushear a `main`. Build vía Docker con el `Dockerfile` y
`nginx.conf` de la raíz. **Todo lo que pushees a `main` sale a producción** — por eso
corre `npm run build` antes de pushear.

## Qué NO va en el repo

- `contratos/` — contratos firmados con datos privados de clientes (en `.gitignore`)
- `node_modules/`, `dist/`, `.DS_Store`
- `.claude/settings.local.json`
- Cualquier `.env` o llave de API

El repo es **privado**. No lo hagas público ni compartas capturas con datos de clientes.
