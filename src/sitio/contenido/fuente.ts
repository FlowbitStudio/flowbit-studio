import { useEffect, useState } from 'react'
import { catalogoPredeterminado, contenidoPredeterminado } from './predeterminado'
import type { CatalogoBase, SitioContenido } from './tipos'

// De dónde lee el sitio. Hoy: el contenido por defecto (predeterminado.ts).
// Cuando la consola publique el módulo «Website», basta con definir en el build:
//   VITE_SITIO_SUPABASE_URL   la URL del proyecto de la base de Flowbit
//   VITE_SITIO_SUPABASE_ANON  su llave pública (anon)
// y el sitio pedirá, sin sesión, las funciones públicas de docs/website-datos.md:
//   sitio_contenido()      → el JSON publicado del módulo Website ({} si no hay nada publicado)
//   sitio_vista_previa()   → el borrador, si la URL trae ?vista_previa=<token>
//   sitio_catalogo()       → módulos con precio, giros y el precio del diagnóstico
//   sitio_registrar_lead() → el formulario de contacto cae en `leads`
const URL = import.meta.env.VITE_SITIO_SUPABASE_URL as string | undefined
const ANON = import.meta.env.VITE_SITIO_SUPABASE_ANON as string | undefined
export const conectado = Boolean(URL && ANON)

async function rpc<T>(nombre: string, cuerpo: object = {}): Promise<T> {
  const r = await fetch(`${URL}/rest/v1/rpc/${nombre}`, {
    method: 'POST',
    // sin x-empresa, sitio_contenido() contesta {} con 200 y el sitio se queda en lo predeterminado sin error
    headers: { apikey: ANON!, Authorization: `Bearer ${ANON}`, 'Content-Type': 'application/json', 'x-empresa': 'flowbit' },
    body: JSON.stringify(cuerpo),
  })
  if (!r.ok) {
    const e = await r.json().catch(() => null) as { hint?: string } | null
    throw new Error(e?.hint ?? `${nombre}: ${r.status}`)
  }
  return r.json() as Promise<T>
}

// Lo publicado se mezcla sobre lo predeterminado: si la consola aún no llena una sección, se ve la del diseño.
function mezcla<T>(base: T, encima: unknown): T {
  if (!encima || typeof encima !== 'object' || Array.isArray(base)) return (encima ?? base) as T
  const r = { ...(base as object) } as Record<string, unknown>
  for (const [k, v] of Object.entries(encima as object)) r[k] = k in r ? mezcla(r[k], v) : v
  return r as T
}

// El token se lee una vez al cargar: así la vista previa sigue viva al navegar a una ficha
const TOKEN = new URLSearchParams(window.location.search).get('vista_previa')

/** El contenido y si ya se terminó de pedir (la ficha lo necesita para no dar por inexistente un caso). */
export function useContenidoEstado(): { c: SitioContenido; listo: boolean } {
  const [e, setE] = useState({ c: contenidoPredeterminado, listo: !conectado })
  useEffect(() => {
    if (!conectado) return
    const pide = TOKEN
      ? rpc<Partial<SitioContenido> | null>('sitio_vista_previa', { p_token: TOKEN })
      : rpc<Partial<SitioContenido>>('sitio_contenido')
    pide
      .then((p) => setE({ c: mezcla(contenidoPredeterminado, p), listo: true }))
      .catch(() => setE((v) => ({ ...v, listo: true })))
  }, [])
  return e
}

export function useContenido(): SitioContenido {
  return useContenidoEstado().c
}

export function useCatalogo(): CatalogoBase {
  const [c, setC] = useState<CatalogoBase>(catalogoPredeterminado)
  useEffect(() => {
    if (!conectado) return
    rpc<CatalogoBase>('sitio_catalogo').then((x) => { if (x?.modulos?.length) setC(x) }).catch(() => {})
  }, [])
  return c
}

export type LeadSitio = {
  nombre: string
  correo: string
  telefono: string
  negocio: string
  giro: string
  interes: string
  mensaje: string
  /** Campo oculto: si llega lleno, la base contesta como si nada y no guarda. */
  trampa: string
}

/** Manda el formulario a `leads`. Los errores traen la clave de la base: datos, cuota o no_empresa. */
export async function registrarLead(lead: LeadSitio): Promise<void> {
  if (!conectado) throw new Error('El sitio aún no está conectado a la base (faltan VITE_SITIO_SUPABASE_URL y VITE_SITIO_SUPABASE_ANON).')
  await rpc('sitio_registrar_lead', { p: lead })
}
