// Contenido del sitio flowbit.studio.
// Todo lo que vive aquí es ADMINISTRABLE desde la consola de Flowbit (módulo «Website»).
// Lo que NO vive aquí porque ya existe en la base (módulos, precios, giros, leads) se lee de allá:
// ver docs/website-datos.md. Cada tipo dice de dónde sale cada campo.

/** Un botón o enlace del sitio. `href` puede ser una ancla (#contacto) o una URL. */
export type Accion = { texto: string; href?: string }

/** Imagen subida desde la consola (Supabase Storage, bucket `sitio`). `alt` es obligatorio. */
export type Imagen = { url: string; alt: string }

export type Navegacion = {
  enlaces: { texto: string; href: string }[]
  /** La pastilla azul del header: abre el formulario de contacto. */
  demo: Accion
}

export type HeroContenido = {
  titulo: string
  descripcion: string
  boton: Accion
}

export type EthosTarjeta = { titulo: string; descripcion: string; icono: Imagen; tono: 'oscura' | 'clara' }
export type EthosContenido = {
  etiqueta: string
  titulo: string
  descripcion: string
  boton: Accion
  tarjetas: EthosTarjeta[]
}

/** Una etapa del recorrido de partículas. La FORMA de cada etapa es diseño (no se edita); el texto sí. */
export type EtapaTexto = { etiqueta: string; titulo: string; descripcion: string }
export type BitsContenido = { etapas: EtapaTexto[] } // 6, en orden: ruido, retícula, ∞, módulos, gráfica, esfera

export type SolucionFila = { numero: string; nombre: string; servicios: string[]; color: string; tinta: string; href?: string }
export type SolucionesContenido = { etiqueta: string; titulo: string; descripcion: string; filas: SolucionFila[] }

/** Flowbit Base. Los módulos y los giros salen de la base (`modulos`, `plantillas_giro`, `giro_modulos`). */
export type BaseContenido = { etiqueta: string; titulo: string; descripcion: string; boton: Accion }

export type SectorTarjeta = { nombre: string; descripcion: string }
export type SectoresContenido = { etiqueta: string; titulo: string; descripcion: string; sectores: SectorTarjeta[] }

/** Un caso del portafolio. También alimenta su ficha en /proyectos/:slug. */
export type Caso = {
  slug: string
  nombre: string
  cliente: string
  giro: string
  resumen: string
  logo?: Imagen
  portada?: Imagen
  servicios: string[]
  stack: string[]
  tiempo: string
  reto: string
  /** «Lo que construimos»: los módulos o piezas entregadas. */
  piezas: string[]
  resultados: { cifra: string; texto: string }[]
  galeria: Imagen[]
  publicado: boolean
  orden: number
}
export type PortfolioContenido = { etiqueta: string; titulo: string; boton: Accion; casos: Caso[] }

export type PorqueRazon = { titulo: string; descripcion: string; palabra: string } // `palabra`: la del respiro antes de la razón
export type PorqueContenido = { etiqueta: string; titulo: string; pista: string; razones: PorqueRazon[] }

export type Miembro = { nombre: string; puesto: string; bio: string; foto?: Imagen; enlace?: Accion }
export type EquipoContenido = { titulo: string; descripcion: string; boton: Accion; frases: [string, string]; miembros: Miembro[] }

export type ClientesContenido = {
  etiqueta: string
  titulo: string
  descripcion: string
  boton: Accion
  ventajas: { titulo: string; descripcion: string; color: string; icono: Imagen }[]
}

/** Listón: los clientes que ya operan con Flowbit. El logo se sube desde la consola. */
export type ClienteListon = { nombre: string; giro: string; logo?: Imagen; href?: string }
export type ListonContenido = { etiqueta: string; pista: string; clientes: ClienteListon[] }

export type ProcesoEtapa = { nombre: string; corto?: string; descripcion: string; color: string }
export type ProcesoContenido = { etiqueta: string; titulo: string; subtitulo: string; pista: string; etapas: ProcesoEtapa[] }

/** El precio del diagnóstico sale de la base (`servicios`, clave `diagnostico`); aquí sólo el texto. */
export type DiagnosticoContenido = { etiqueta: string; titulo: string; descripcion: string; notaPrecio: string; boton: Accion; whatsapp: Accion }

export type Pregunta = { pregunta: string; respuesta: string }
export type FaqContenido = { etiqueta: string; titulo: string; descripcion: string; boton: Accion; preguntas: Pregunta[] }

export type FooterContenido = {
  correo: string
  ciudad: string
  titulo: string
  descripcion: string
  boton: Accion
  enlaces: { texto: string; href: string }[]
  legales: { texto: string; href: string }[]
  derechos: string
}

/** El formulario de contacto. Lo que se envía cae en la tabla `leads` de la base. */
export type ContactoContenido = {
  intereses: string[]
  giros: string[]
  promesa: string
  aviso: string
  whatsapp: string
}

export type SitioContenido = {
  navegacion: Navegacion
  hero: HeroContenido
  ethos: EthosContenido
  bits: BitsContenido
  soluciones: SolucionesContenido
  base: BaseContenido
  sectores: SectoresContenido
  portfolio: PortfolioContenido
  porque: PorqueContenido
  equipo: EquipoContenido
  clientes: ClientesContenido
  liston: ListonContenido
  proceso: ProcesoContenido
  diagnostico: DiagnosticoContenido
  faq: FaqContenido
  footer: FooterContenido
  contacto: ContactoContenido
}

// ── Lo que viene de la base de Flowbit (no se edita en el módulo Website) ──
export type ModuloBase = { clave: string; nombre: string; descripcion: string; orden: number; precio: number | null; ciclo: 'mensual' | 'anual' | 'unico' }
export type GiroBase = { clave: string; nombre: string; modulos: string[] }
export type CatalogoBase = { modulos: ModuloBase[]; giros: GiroBase[]; precioDiagnostico: number | null }
