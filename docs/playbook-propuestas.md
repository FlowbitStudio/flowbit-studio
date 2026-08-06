# Playbook de contenido de propuestas

`CLAUDE.md` cubre la **arquitectura** de una propuesta (tipos, layouts, en qué archivo va
cada cosa). Este documento cubre lo otro: **el contenido narrativo** — qué va adentro y en
qué orden convence.

Úsalo cuando armes una propuesta a mano después de una cita de diagnóstico. El pipeline
automatizado de n8n ya trae el brief estructurado y no lo necesita.

---

## Filosofía — qué es una propuesta Flowbit

No es una cotización. Es un documento que convence. Tiene que:

- Demostrar que entendiste el problema del cliente (a veces mejor que él mismo).
- Mostrar la visión del proyecto **antes** que el precio.
- Hacer que el cliente sienta que ya está trabajando con Flowbit al leerla.
- Cerrar con una acción clara, sin fricción.

**Tono:** directo, seguro, profesional pero humano. Nada de corporate genérico
("soluciones a la medida", "calidad y compromiso"). Si una frase podría estar en la
propuesta de cualquier agencia, bórrala.

---

## Paso a paso — de la cita a la propuesta

### Paso 1 — Destila el brief

Antes de escribir nada, contesta:

1. ¿Qué problema real tiene el cliente? (no lo que pidió — lo que necesita)
2. ¿Qué vamos a construir exactamente? Lista módulos y entregables.
3. ¿Es monolítico o multi-módulo (varias marcas, productos, fases)?
4. ¿Qué tipo de cliente es? (startup, negocio establecido, creativo, técnico)
5. ¿Qué va a mover la decisión? (precio, tiempo, calidad visual, seguridad técnica)

Si no puedes contestar las 5, la cita no dio para armar propuesta. Pide más data.

### Paso 2 — Hero: la portada que engancha

- **Subtítulo corto** que nombre QUÉ es esto ("Sistema de e-commerce", "Plataforma SaaS
  de gestión de citas", "Rediseño de marca + landing").
- **Título grande** con la visión en 1 frase potente. No descriptiva: aspiracional.
  *"El sistema que convierte cada cliente en un comensal recurrente"* le gana a
  *"E-commerce para restaurante"*.
- **Card de resumen** con 2-3 frases que explican el alcance en lenguaje llano.
- **Meta obligatorio**: Dirigido a / Fecha / Versión (V01 en nuevas) / Vigencia (30 días).

### Paso 3 — ¿Es multi-módulo? → Arquitectura

Si el proyecto tiene varias marcas, productos o piezas distinguibles, muéstralas como
cards individuales. Cada card lleva: nombre, 1 línea de qué hace, 3-5 features clave, y
`category` (define el ícono — ver la tabla de categorías en `CLAUDE.md`).

Si **no** es multi-módulo, incluye igual 1-3 cards pero representando **pilares** del
proyecto ("Diseño", "Desarrollo", "Soporte continuo"). Nunca saltes esta sección, porque
es el vehículo del siguiente punto.

### Paso 4 — El Quote (el manifiesto) — OBLIGATORIO

Una frase de 1-2 oraciones, a pantalla completa, que resume la visión. No es descripción
técnica, es manifiesto.

✓ *"Cuatro marcas, un solo ecosistema. Cada bar vive su identidad mientras comparte la misma infraestructura."*
✓ *"Un sistema pensado para crecer contigo, no para reemplazarte en seis meses."*
✗ *"Soluciones innovadoras para tu negocio."* — genérico, fuera
✗ *"Desarrollamos tu e-commerce con las mejores prácticas."* — descriptivo, fuera

El quote es un momento de pausa visual. El cliente respira, asimila, sigue.

### Paso 5 — Alcance detallado

El detalle fino de qué vas a entregar. Organízalo en **fases** si se entrega por etapas, o
en **bloques temáticos** si va todo junto (Frontend, Backend, Integraciones...).

Cada bloque: título claro + 1 párrafo de contexto (qué se hace y por qué) + lista de
entregables concretos con verbos accionables ("Configuración de...", "Integración con...").

El cliente debe poder contar los entregables con el dedo. Si suena abstracto, está mal.
Si suena a checklist, está bien.

### Paso 6 — Inversión

Regla dura: **el total arriba, el desglose abajo.** La primera card ocupa más espacio
visual y dice el número grande. Las siguientes desglosan por módulo o fase.

Cada card de precio: qué incluye (1-2 líneas), el precio con formato `$149,000 MXN`, y si
aplica las condiciones ("50% al inicio, 50% a la entrega").

**V01 vs V02+:**
- **V01** (propuesta nueva) → precios ESTIMADOS. Disclaimer obligatorio en consideraciones:
  *"Propuesta inicial (V01). Los precios son estimaciones (excepto el Diagnóstico, que es
  fijo) y pueden ajustarse en iteraciones siguientes según el alcance final."*
- **V02+** (iteración) → precios firmes, sin disclaimers de estimación.

### Paso 7 — Servicios adicionales — OBLIGATORIO

El **primer item SIEMPRE es el Diagnóstico, precio fijo $10,000 MXN**. Siempre. En V01,
V02, V03, para siempre.

Después, 2-4 servicios del catálogo Flowbit que apliquen:

| Tipo de proyecto | Add-ons típicos |
|---|---|
| E-commerce | Fotografía de producto + SEO + Analytics + Soporte mensual |
| Landing / Marketing | Fotografía + SEO + Contenido + Soporte |
| SaaS / App | Video explainer + Onboarding + Soporte priorizado |
| Branding + web | Manual de marca + Fotografía + Animación redes + Plantillas |

Tono de precios: "Desde $X" o "Estimado: $X". Deja claro que son opcionales y que no están
incluidos en el total principal.

### Paso 8 — Proceso

Timeline de 4-6 pasos que el cliente pueda seguir. No es cronograma técnico, es narrativa:
qué pasa primero, qué después, cuándo participa el cliente. Ej: Kickoff → Discovery →
Diseño → Desarrollo → QA → Entrega. Cada paso: título + 1 línea.

### Paso 9 — CTA

Título con pregunta o afirmación que invite a la acción ("¿Arrancamos?", "Listos cuando tú
digas"). 1 párrafo que condense el valor. Un botón único y claro: "Aceptar propuesta".
Footer con contacto.

---

## Checklist final antes de entregar

- [ ] ¿El hero tiene visión aspiracional, no descripción técnica?
- [ ] ¿Hay un quote manifiesto? (obligatorio)
- [ ] ¿El primer servicio adicional es Diagnóstico $10,000 MXN fijo? (obligatorio)
- [ ] ¿Cada precio tiene contexto de qué incluye?
- [ ] Si es V01, ¿está el disclaimer de precios estimados en consideraciones?
- [ ] ¿El CTA es una acción clara, no una despedida?
- [ ] ¿Borraste cualquier frase que sonaría igual en la propuesta de otra agencia?
