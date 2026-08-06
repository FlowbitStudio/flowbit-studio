# Documentación del proyecto

Contexto que no se puede deducir leyendo el código: decisiones tomadas, criterios de
contenido y material de referencia.

`CLAUDE.md` (en la raíz) es el manual técnico — tipos, layouts, convenciones de diseño,
cómo funciona el pipeline de n8n. Esto es el complemento.

| Documento | De qué trata |
|---|---|
| [playbook-propuestas.md](playbook-propuestas.md) | Cómo escribir el **contenido** de una propuesta: los 9 pasos de la cita al documento, el tono, y el checklist final. `CLAUDE.md` dice dónde va cada cosa; esto dice qué escribir adentro |
| [iconografia.md](iconografia.md) | Origami será el sistema oficial de íconos también en propuestas. Estado: **decidido, no implementado**. Incluye el preset oficial `flowbitIconPreset` |
| [storage.md](storage.md) | Supabase Storage es el default para archivos de los CRMs. Por qué se descartaron S3 y R2, y cómo cotizarlo al cliente |
| [animaciones-externas.md](animaciones-externas.md) | Al portar animaciones de Codrops y similares: solo el comportamiento, nunca la tipografía ni los colores del demo |

## Referencias

- [`reference/wqf-capture/`](reference/wqf-capture/) — captura del sitio
  [worldquantfoundry.com](https://worldquantfoundry.com), que es la referencia visual y de
  animaciones del homepage de Flowbit. `index.html` tiene la estructura completa con clases
  de Tailwind; `main.min.css` los estilos. Se consulta para traducir estructura y timings a
  CSS plano — **no para copiar contenido ni tipografía** (ver `animaciones-externas.md`).
