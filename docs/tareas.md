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

### Regla transversal — la identidad de Flowbit no se negocia

Aplica a **todas** las tareas, aunque no lo repita cada una:

- Los tokens de `src/index.css` (`--blue`, `--gray`, `--dark-bg`, `--font-display` Mark Pro,
  `--font-mono` GT America Mono, `--easing`) son la paleta y la tipografía. No introduzcas
  colores, fuentes ni escalas nuevas sin que Andre lo apruebe.
- El tono del copy es el de `src/data/homeContent.ts`: directo, seguro, en español, sin
  corporate genérico. Si una frase podría estar en el sitio de cualquier agencia, no va.
- Al portar animaciones o layouts de referencias externas, solo el comportamiento — nunca
  la tipografía ni los colores del original. Ver `docs/animaciones-externas.md`.
- Todo el contenido va en español y en `homeContent.ts`, nunca hardcodeado en el componente.

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

### T-01 — Conectar el formulario de contacto para que envíe correos

- **Estado:** 🔲 Pendiente
- **Prioridad:** Alta
- **Nota:** solo el paso final (probar el envío real) espera el App Password. Todo lo demás
  se puede construir ya.

**Contexto.** El formulario de `ContactModal.tsx` está completo en UI — 8 campos, selector
de rol, industria, consentimiento — pero **no envía nada**. Su `handleSubmit` solo hace
`console.log` de los datos (línea ~23). Cada persona que llena el formulario cree que
contactó a Flowbit y nadie se entera. Son leads perdiéndose hoy.

⚠️ **Lee esto antes de proponer una solución.** El sitio es **estático**: React + Vite
compilado y servido por nginx en un container. **No hay backend.** No puedes hacer SMTP
desde el navegador — las credenciales quedarían en el bundle de JavaScript, visibles para
cualquiera que abra las DevTools.

**La arquitectura ya está decidida, no la re-discutas:** una **Supabase Edge Function** en
el proyecto Supabase propio de Flowbit. n8n **no** se usa aquí — queda reservado únicamente
para el bot de propuestas.

---

#### 🛑 Advertencia que te va a ahorrar días: NO uses denomailer

`denomailer` es la librería que todo mundo recomienda para SMTP en Deno / Supabase Edge
Functions, y es la que vas a encontrar en la mayoría de los ejemplos. **Está descartada en
Flowbit desde el 20 de julio de 2026.**

Motivo, documentado en la Edge Function `correo-avisos` de otro proyecto de Flowbit: *su
plegado de asuntos UTF-8 rompe los headers MIME y Gmail muestra el mensaje crudo.* Los
acentos del español lo disparan constantemente.

**Usa `nodemailer` (npm).** Arma el MIME correcto: asunto en RFC2047, alternativa de texto
plano y quoted-printable bien separado. Supabase Edge Functions soportan imports de npm.

Si tienes acceso a la Edge Function `correo-avisos`, léela antes de escribir nada: ya
resuelve el transporte, el armado del MIME y el manejo de errores. Cópiale el patrón.

---

**Qué construir.**
1. Una **Supabase Edge Function** que reciba el POST del formulario. Debe desplegarse con
   `verify_jwt: false` — el formulario es público y anónimo, no hay sesión que validar.
2. **Credenciales por secrets de Edge Function**: se cargan con `supabase secrets set` y se
   leen con `Deno.env.get()`. Van host, puerto, usuario, contraseña y remitente.
   *(Nota: otros proyectos de Flowbit guardan esto en Supabase Vault. Aquí se decidió usar
   secrets por simplicidad; el costo es que rotar la contraseña exige redeploy.)*
3. **Correo de notificación a `hola@flowbit.studio`** con todos los campos del formulario
   formateados y legibles.
4. **Correo de autorespuesta a quien llenó el formulario**, confirmando que se recibió. Debe
   respetar la identidad de Flowbit — `src/utils/proposalEmail.ts` ya tiene resuelto el HTML
   de correo con los colores y la estructura de la marca; reutiliza ese criterio visual.
5. **Headers CORS** que permitan el POST desde `flowbit.studio`.
6. **Degradado elegante**: si faltan las credenciales, la función responde 200 con un aviso
   en vez de tronar (es como se comporta `correo-avisos`).
7. Conectar `handleSubmit` en `ContactModal.tsx` a la función, con estados de UI: **loading**
   mientras envía, **éxito** y **error**. Los textos ya existen en `homeContent.ts` →
   `contactForm.successMessage` y `contactForm.errorMessage`, pero el componente hoy no los
   usa. Úsalos.
8. Validación antes de enviar y protección anti-spam (honeypot o rate limiting).

**Criterio de terminado.** Llenar el formulario en producción hace llegar el correo a
`hola@flowbit.studio` con todos los campos; quien lo llenó recibe la autorespuesta desde
`noreply@flowbit.studio`; **los acentos y la ñ se ven correctos en Gmail**, tanto en el
asunto como en el cuerpo; el botón muestra carga y luego éxito o error real; las credenciales
SMTP **no aparecen en ningún archivo del repo ni en el bundle**; y `npm run build` pasa
limpio.

**Archivos involucrados.** `src/components/home/ContactModal.tsx` (el `handleSubmit`, línea
~23), `src/data/homeContent.ts` (textos de estado, ya existen), y la función nueva en
`supabase/functions/contacto/index.ts` dentro de este repo.

**No hacer.** No uses denomailer (ver arriba). No metas credenciales SMTP en el repo, ni
siquiera en un `.env` versionado. No uses n8n. No rediseñes el formulario ni cambies sus
campos — solo se conecta. No cambies el copy existente de `contactForm`.

**Dónde se despliega.** Proyecto Supabase de Flowbit:

```
ref:  lxbvlawujewnxvipxjua
url:  https://lxbvlawujewnxvipxjua.supabase.co
```

⚠️ **No confundir con el proyecto al que apunta el MCP `supabase-flowbit`** de la máquina de
Andre: ese es el de **Cigar Society**, un cliente. La Edge Function del sitio **no** va ahí.

**Depende de.** ⛔ Andre debe entregar el **App Password de `noreply@flowbit.studio`** en
Google Workspace. Con 2FA activo hay que generar un App Password específico — la contraseña
normal de la cuenta no sirve para SMTP. Config esperada: `smtp.gmail.com`, puerto `465`, SSL.

Todo lo demás de esta tarea (la función, el HTML de los correos, los estados de UI, el CORS,
el anti-spam) **se puede construir y probar sin el App Password**, gracias al degradado
elegante del punto 6. No esperes a que llegue para arrancar.

---

### T-02 — Comunicar qué servicios ofrece Flowbit

- **Estado:** 🔲 Pendiente
- **Prioridad:** Alta

**Contexto.** El homepage explica muy bien *para quién* es Flowbit (`sectores`: 6 industrias)
y *cómo* trabaja (`ethos`, `diferenciadores`, `proceso`), pero **nunca dice qué se puede
comprar**. Servicios concretos como chatbots, sistemas a la medida e inteligencia de negocios
no aparecen nombrados en ningún lado. Las 4 cards del `ethos` son temáticas y abstractas
("Operación sin fricción", "Software a tu medida") — no son un catálogo.

Dos hallazgos que hay que resolver dentro de esta tarea:
- **El nav tiene un enlace roto.** `homeContent.ts` → `nav` y `footer.nav` apuntan a
  `#soluciones`, pero **no existe ninguna sección con ese id** en `Home.tsx`. El enlace no
  lleva a ningún lado. La sección nueva debe ocupar ese `id="soluciones"`.
- **Hay una contradicción de precio.** `contactForm.role.options` ofrece
  `'Diagnóstico ($5,000 MXN)'`, pero `CLAUDE.md` establece que el Diagnóstico es **fijo en
  $10,000 MXN** en todas las propuestas. Uno de los dos está mal. Ver `Depende de`.

**Qué construir.**
1. Una sección de servicios en el homepage con `id="soluciones"`, que arregle el enlace roto
   del nav y del footer.
2. Su contenido en `homeContent.ts`, en una llave nueva `servicios`. Toma como fuente el
   **catálogo completo que ya está documentado en `CLAUDE.md`** (sección "Catálogo de
   servicios de Flowbit"): servicios core, creativos, y de crecimiento/operación. Asegúrate
   de que queden nombrados explícitamente **chatbots / agentes conversacionales, sistemas a
   la medida e inteligencia de negocios**, que son los que Andre quiere visibles.
3. Cada servicio: nombre, una línea de qué resuelve en lenguaje de negocio (no técnico), y
   la categoría que le corresponde de las 6 madre (tech / design / visual / growth / support
   / diagnosis).
4. Colocarla en `Home.tsx` en el orden que tenga sentido narrativo — probablemente después
   de `EthosSection` (que plantea el qué abstracto) y antes de `SectoresSection` (que plantea
   el para quién).

**Criterio de terminado.** Existe la sección con `id="soluciones"`, los enlaces del nav y del
footer llegan a ella, chatbots + sistemas a la medida + inteligencia de negocios están
nombrados explícitamente, todo el contenido vive en `homeContent.ts`, la contradicción del
precio del Diagnóstico quedó resuelta, y `npm run build` pasa limpio.

**Archivos involucrados.** `src/data/homeContent.ts`, `src/pages/Home.tsx`, y el componente
nuevo en `src/components/home/`.

**No hacer.** No reescribas `ethos`, `sectores` ni `diferenciadores` — la sección nueva
convive con ellos, no los reemplaza. No inventes servicios que Flowbit no ofrece: el catálogo
de `CLAUDE.md` es la fuente. No metas precios de los servicios en el homepage salvo el
Diagnóstico.

**Depende de.** Andre debe confirmar si el Diagnóstico cuesta **$5,000 o $10,000 MXN**, y si
la respuesta es $10,000, hay que corregir `contactForm.role.options`.

---

### T-03 — Terminar la sección de Equipo

- **Estado:** 🔲 Pendiente
- **Prioridad:** Media

**Contexto.** `CLAUDE.md` marca esta sección como ⚠️ Parcial: la franja de 80px funciona pero
la expansión al hacer click nunca se pulió. Además el contenido está incompleto de tres
formas concretas:
- **César aparece con la foto de André.** Los dos miembros en `homeContent.ts` apuntan a
  `photo: '/profile-pics/andre.jpg'`, y en `public/profile-pics/` solo existe ese archivo.
- **La bio de César es un stub** de una línea ("Experiencia en estrategia de negocios y
  operaciones") contra la de André, que es completa y específica.
- **Los LinkedIn están vacíos**: `linkedin: '#'` en ambos.

**Qué construir.**
1. La interacción de expansión: al hacer click en la franja de un miembro se expande
   revelando foto y bio; al abrir otro, el anterior se colapsa (solo uno abierto a la vez);
   cierra con `Esc` y con click fuera.
2. Transición con `--easing` (`cubic-bezier(0.25, 0.1, 0.25, 1)`), sin saltos de layout.
3. Funcionamiento correcto en mobile (≤1024px).
4. Integrar la foto real y la bio de César, y los dos enlaces de LinkedIn, cuando Andre los
   entregue.

**Criterio de terminado.** La franja expande y colapsa suave, solo un miembro abierto a la
vez, `Esc` cierra, funciona en mobile, cada miembro muestra su propia foto, y `npm run build`
pasa limpio.

**Archivos involucrados.** `src/components/home/EquipoSection.tsx`, `EquipoSection.css`,
`src/data/homeContent.ts` (llave `equipo`), `public/profile-pics/`.

**No hacer.** No inventes la bio de César ni le pongas una foto de stock — si no ha llegado,
implementa la interacción y deja el contenido pendiente marcado. No rediseñes el concepto de
la franja horizontal, solo termínalo.

**Depende de.** Andre debe entregar: la **foto de César**, su **bio real**, y las **URLs de
LinkedIn** de ambos. La interacción sí se puede construir sin esperar nada de esto.

---

### T-04 — Fichas de proyecto con el trabajo real de Flowbit

- **Estado:** ⛔ Bloqueada
- **Prioridad:** Alta

**Contexto.** ⚠️ **Los 6 casos que muestra el portfolio hoy no son de Flowbit.** Alpha Deal,
Edda, Novyra, Stratahub, Remix Labs y US Autonomous Systems son proyectos ajenos, con
descripciones en inglés y enlaces a sitios de terceros — quedaron del sitio que se usó como
referencia visual (`docs/reference/wqf-capture/`). `CLAUDE.md` es explícito: *"NUNCA usar
textos del sitio original"*. El sitio está presentando trabajo de otras empresas como
propio. Esto es lo más urgente de la tarea.

Además el botón `portfolio.cta` ("Ver todos los casos") no lleva a ningún lado.

**Qué construir.**
1. **Reemplazar los 6 casos** de `homeContent.ts` → `portfolio.cases` por proyectos reales de
   Flowbit, con descripciones en español.
2. **La ficha de proyecto**: una vista de detalle por proyecto con problema del cliente,
   qué se construyó, stack usado, resultado y visuales. Andre debe definir si es una página
   propia (`/proyectos/:slug`, que ya encajaría con el React Router existente) o un modal
   sobre el portfolio — ver `Depende de`.
3. Conectar cada card del carrusel a su ficha, y darle destino al CTA "Ver todos los casos".
4. Sustituir los logos de `public/portfolio-logos/1-6.svg`, que son de las empresas ajenas.

**Criterio de terminado.** No queda ningún rastro de los 6 casos ajenos ni de sus logos; cada
proyecto real tiene su ficha accesible desde el carrusel; el CTA lleva a algún lado; todo el
contenido está en español y en `homeContent.ts`; y `npm run build` pasa limpio.

**Archivos involucrados.** `src/data/homeContent.ts` (llave `portfolio`),
`src/components/home/PortfolioSection.tsx` y su CSS, `public/portfolio-logos/`,
`src/App.tsx` si se hace por ruta.

**No hacer.** No inventes proyectos, métricas ni resultados: si Andre no entregó el dato, se
queda pendiente y se marca. No publiques nombres de clientes que no hayan autorizado
aparecer. No rehagas la mecánica del carrusel Swiper ni el `DragCursor` — funcionan.

**Depende de.** ⛔ **Andre debe entregar la lista de proyectos reales**: nombre del cliente,
qué se construyó, con qué stack, qué resultado dio, logo y capturas o visuales. También debe
decidir si la ficha es **página propia o modal**. Sin los proyectos, esta tarea no puede
avanzar más allá de dejar la estructura lista.
