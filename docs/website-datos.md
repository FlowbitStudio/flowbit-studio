# Datos del sitio flowbit.studio — mapa para el módulo «Website» de la consola

*(31 oct 2026, André: «toda la página va a ser administrable… en la base ya tenemos los datos de los precios de los
módulos y demás, ahí también se debe alimentar de la base que ya hay». «Todos los que llenen el form caen a leads».
«Al agendar demo podría automáticamente generarse su demo el cliente sin que yo se la tenga que habilitar».)*

El sitio nuevo vive en `src/sitio/` y se sirve en `/` (el «en construcción» pasó a `/proximamente`). Toda su copia
sale de **un solo objeto** `SitioContenido` (`src/sitio/contenido/tipos.ts`); los valores aprobados en el lienzo están
en `predeterminado.ts`. Hay **tres orígenes**:

| Origen | Qué | Quién lo edita |
|---|---|---|
| **Módulo Website** (nuevo, en la consola) | Textos, imágenes, casos del portafolio, logos del listón, equipo, FAQ, footer, opciones del formulario | André desde la consola |
| **La base que ya existe** | Módulos de Flowbit Base, sus precios, los giros y qué módulos enciende cada uno, el precio del diagnóstico | Ya se edita en la consola (Servicios, Armar paquete) |
| **Diseño** (código) | Las formas de partículas, la cámara, las transiciones, los colores de marca | Nadie desde la consola: es diseño |

Las funciones reales las construyó C22 en flowbit-base: todas piden el encabezado `x-empresa: flowbit`; hay además `sitio_vista_previa({p_token})` (el sitio la usa con `?vista_previa=<token>`), y el formulario manda `{p:{nombre,correo,telefono,negocio,giro,interes,mensaje,trampa}}`. El SQL de abajo fue la propuesta inicial; manda el de la migración.

Mientras la consola no publique nada, el sitio usa lo predeterminado. Cuando exista, basta con definir
`VITE_SITIO_SUPABASE_URL` y `VITE_SITIO_SUPABASE_ANON` en el build: el sitio pide tres funciones públicas (abajo) y
**mezcla** lo publicado sobre lo predeterminado, así una sección vacía en la consola nunca rompe la página.

---

## 1. Lo que edita el módulo Website (sección por sección)

Convención: `texto` = una línea · `párrafo` = texto largo · `\n` en un título = salto de renglón que decide André ·
`imagen` = archivo en Supabase Storage, bucket `sitio` (ver `docs/storage.md`), con `alt` obligatorio · `acción` =
`{ texto, href }` (ancla como `#contacto` o URL).

| Sección (orden en la página) | Campos | Listas |
|---|---|---|
| **Navegación** (header) | `demo` acción | `enlaces[]` { texto, href } |
| **01 Hero** | `titulo` (cada palabra entra por separado), `descripcion` párrafo, `boton` acción | — |
| **02 Ethos** | `etiqueta`, `titulo`, `descripcion`, `boton` | `tarjetas[4]` { titulo, descripcion, icono imagen, tono `oscura`/`clara` } |
| **03 Bits** (desliza) | — | `etapas[6]` { etiqueta, titulo, descripcion }. Son seis fijas: la forma de cada una es diseño |
| **04 Soluciones** | `etiqueta`, `titulo`, `descripcion` | `filas[]` { numero, nombre, servicios[], color, tinta, href } |
| **05 Flowbit Base** | `etiqueta`, `titulo`, `descripcion`, `boton` | **módulos y giros vienen de la base** (§2) |
| **06 Sectores** | `etiqueta`, `titulo`, `descripcion` | `sectores[]` { nombre, descripcion } |
| **07 Portfolio** + **ficha `/proyectos/:slug`** | `etiqueta`, `titulo`, `boton` | `casos[]` — ver tabla «Caso» abajo |
| **08 Por qué Flowbit** (desliza) | `etiqueta`, `titulo`, `pista` | `razones[4]` { palabra (la del respiro), titulo, descripcion } |
| **09 Transición de bits** | — (diseño) | — |
| **10 Equipo** | `titulo`, `descripcion`, `boton`, `frases[2]` | `miembros[]` { nombre, puesto, bio, foto imagen, enlace acción } |
| **11 Clientes** (desliza) | `etiqueta`, `titulo`, `descripcion`, `boton` | `ventajas[3]` { titulo, descripcion, color, icono imagen } |
| **12 Listón de clientes** | `etiqueta`, `pista` | `clientes[]` { nombre, giro, **logo imagen**, href } |
| **13 Proceso** (desliza) | `etiqueta`, `titulo`, `subtitulo`, `pista` | `etapas[4]` { nombre, corto (para el riel), descripcion, color } |
| **14 Diagnóstico** | `etiqueta`, `titulo`, `descripcion`, `notaPrecio`, `boton`, `whatsapp` acción | el **precio** viene de la base (§2) |
| **15 Preguntas frecuentes** | `etiqueta`, `titulo`, `descripcion`, `boton` | `preguntas[]` { pregunta, respuesta } |
| **16 Footer** | `correo`, `ciudad`, `titulo`, `descripcion`, `boton`, `derechos` | `enlaces[]`, `legales[]` { texto, href } |
| **Formulario de contacto** | `promesa`, `aviso`, `whatsapp` | `intereses[]`, `giros[]` (opciones del paso 1 y 4) |

### Caso del portafolio (el bloque para subir proyectos)

| Campo | Tipo | Dónde se ve |
|---|---|---|
| `slug` | texto único, kebab-case | URL `/proyectos/:slug` |
| `nombre`, `cliente`, `giro` | texto | tarjeta del carrusel y portada de la ficha |
| `resumen` | párrafo corto | tarjeta activa y la línea bajo el título en la ficha |
| `logo` | imagen (SVG o PNG con fondo transparente) | tarjeta del carrusel |
| `portada` | imagen 16:10, mínimo 2400 px de ancho | portada de la ficha y textura de la transición WebGL |
| `servicios[]`, `stack[]`, `tiempo` | texto | franja de datos de la ficha |
| `reto` | párrafo | ficha, «El reto» |
| `piezas[]` | texto | ficha, «Lo que construimos» |
| `resultados[]` | { cifra, texto } | ficha (3 recomendados) |
| `galeria[]` | imagen | ficha (capturas reales) |
| `publicado`, `orden` | sí/no, número | si aparece y en qué lugar del carrusel |

### Tabla propuesta (proyecto de la base, esquema `public`)

```sql
-- Un solo documento publicado y un borrador: la consola edita el borrador y «Publicar» lo copia.
create table public.sitio_contenido (
  id text primary key check (id in ('borrador', 'publicado')),
  contenido jsonb not null default '{}'::jsonb,   -- forma: SitioContenido (src/sitio/contenido/tipos.ts)
  actualizado_en timestamptz not null default now(),
  actualizado_por uuid references public.users (id)
);
-- Los casos aparte, para poder ordenarlos, ocultarlos y enlazarlos a un cliente o a un lead ganado.
create table public.sitio_casos (
  slug text primary key check (slug ~ '^[a-z0-9-]+$'),
  datos jsonb not null,                             -- forma: Caso (sin slug)
  empresa uuid references public.empresas (id) on delete set null,
  publicado boolean not null default false,
  orden int not null default 0
);
-- Imágenes: bucket `sitio` público de lectura; escritura sólo plataforma (es_plataforma()).
```

Escritura: sólo usuarios de plataforma (`es_plataforma()`), igual que el resto de la consola. Lectura pública: **sólo**
a través de `sitio_contenido()` (abajo), nunca la tabla directa.

---

## 2. Lo que el sitio lee de la base que ya existe

| Dato en el sitio | Tabla(s) en la base | Notas |
|---|---|---|
| Nombres de los módulos en la sección Flowbit Base | `modulos` (clave, nombre, descripcion, orden, padre, categoria) | Sólo los de primer nivel (`padre is null`) |
| Precio de cada módulo | `servicios` (tipo `modulo`, `precio`, `ciclo`) | `precio null` = por definir: el sitio no lo muestra |
| Giros del selector y los módulos que enciende cada uno | `plantillas_giro` (clave, nombre, orden) + `giro_modulos` | Hoy el lienzo muestra 8 giros; la base tiene los suyos y manda la base |
| Precio del diagnóstico (Soluciones, Proceso, Diagnóstico, FAQ) | `servicios` con clave `diagnostico` | **No existe todavía**: hay que darlo de alta, a $5,000 MXN |
| Formulario de contacto | → `leads` (nombre, negocio, correo, telefono, giro, origen=`sitio`, notas) | El interés y el mensaje van a `notas` |

`giro_modulos` y `modulos` hoy sólo se leen con sesión de plataforma (RLS). El sitio es público, así que necesita
funciones `security definer` que expongan **sólo** lo publicable:

```sql
-- Lo que el sitio puede leer sin sesión.
create or replace function public.sitio_contenido() returns jsonb
language sql stable security definer set search_path to 'public' as $$
  select coalesce((select contenido from sitio_contenido where id = 'publicado'), '{}'::jsonb)
         || jsonb_build_object('portfolio', jsonb_build_object('casos', coalesce((
              select jsonb_agg(c.datos || jsonb_build_object('slug', c.slug, 'orden', c.orden) order by c.orden)
                from sitio_casos c where c.publicado), '[]'::jsonb)));
$$;

create or replace function public.sitio_catalogo() returns jsonb
language sql stable security definer set search_path to 'public' as $$
  select jsonb_build_object(
    'modulos', (select coalesce(jsonb_agg(jsonb_build_object('clave', m.clave, 'nombre', m.nombre, 'descripcion', m.descripcion,
                 'orden', m.orden, 'precio', s.precio, 'ciclo', coalesce(s.ciclo, 'mensual')) order by m.orden), '[]')
                  from modulos m left join servicios s on s.modulo = m.clave and s.tipo = 'modulo' and s.activo
                 where m.padre is null),
    'giros', (select coalesce(jsonb_agg(jsonb_build_object('clave', g.clave, 'nombre', g.nombre,
               'modulos', (select coalesce(jsonb_agg(gm.modulo), '[]') from giro_modulos gm where gm.giro = g.clave)) order by g.orden), '[]')
                from plantillas_giro g),
    'precioDiagnostico', (select precio from servicios where clave = 'diagnostico' and activo));
$$;

grant execute on function public.sitio_contenido(), public.sitio_catalogo() to anon;
```

---

## 3. El formulario de contacto → `leads` (y la demo automática)

El formulario tiene 5 pasos: interés → nombre → contacto → empresa y giro → mensaje. El sitio llama
`sitio_registrar_lead(p jsonb)` con `{ nombre, correo, telefono, negocio, giro, interes, mensaje, origen: 'sitio' }`.

```sql
create or replace function public.sitio_registrar_lead(p jsonb) returns uuid
language plpgsql security definer set search_path to 'public' as $$
declare v_id uuid;
begin
  if coalesce(trim(p->>'nombre'), '') = '' or (coalesce(p->>'correo', '') = '' and coalesce(p->>'telefono', '') = '') then
    raise exception 'Faltan nombre y una forma de contacto';
  end if;
  insert into leads (nombre, negocio, correo, telefono, giro, origen, notas)
  values (left(p->>'nombre', 200), left(p->>'negocio', 200), left(p->>'correo', 200), left(p->>'telefono', 40),
          left(p->>'giro', 120), 'sitio',
          concat_ws(E'\n', 'Interés: ' || (p->>'interes'), nullif(left(p->>'mensaje', 4000), '')))
  returning id into v_id;
  -- Demo automática (pedido de André): si pidió la demo de Flowbit Base, se arma sola.
  -- if p->>'interes' = 'Demo de Flowbit Base' then perform crear_demo_desde_lead(v_id); end if;
  return v_id;
end $$;
grant execute on function public.sitio_registrar_lead(jsonb) to anon;
```

**Demo automática (va después, en carril aparte, con correo confirmado y antiabuso; la llamada queda comentada)** — la base ya tiene las piezas (`empresas.es_demo`, `demo_vence_en`, `demo_lead`, las demos sembradas
por giro y `base_demos_usuarios`). Falta una función `crear_demo_desde_lead(lead uuid)` que: arme la empresa demo con
el paquete de `giro_modulos` del giro del lead (mapeando el texto del formulario a `plantillas_giro.clave`), le ponga
`demo_vence_en`, la ligue al lead (`demo_lead`), pase el lead a etapa `demo` y le mande el acceso por correo. Protección
contra abuso: un correo = una demo viva; límite por hora; y que el correo se confirme antes de entregar el acceso.

Antiabuso del formulario en general: límite por IP en la función de borde o en Cloudflare, y un campo trampa oculto
que el sitio ya manda vacío.

---

## 4. Lo que falta para conectarlo (trabajo de la consola y la base, no de este repo)

1. Migración en flowbit-base: `sitio_contenido`, `sitio_casos`, bucket `sitio` y las tres funciones de arriba.
2. Dar de alta el servicio `diagnostico` con su precio.
3. El tab «Website» en la consola: un formulario por sección (tabla §1), subida de imágenes al bucket, el bloque de
   casos del portafolio con orden por arrastre, «Vista previa» (abre el sitio leyendo el borrador) y «Publicar».
4. `crear_demo_desde_lead` y su correo.
5. En este repo: definir `VITE_SITIO_SUPABASE_URL` y `VITE_SITIO_SUPABASE_ANON` en el build de EasyPanel.
