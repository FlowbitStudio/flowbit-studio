import { useEffect, useState } from 'react'
import { catalogoPredeterminado, contenidoPredeterminado } from './predeterminado'
import type { CatalogoBase, SitioContenido } from './tipos'

// De dónde lee el sitio. Hoy: el contenido por defecto (predeterminado.ts).
// Cuando la consola publique el módulo «Website», basta con definir en el build:
//   VITE_SITIO_SUPABASE_URL   la URL del proyecto de la base de Flowbit
//   VITE_SITIO_SUPABASE_ANON  su llave pública (anon)
// y el sitio pedirá, sin sesión, las tres funciones públicas de docs/website-datos.md:
//   sitio_contenido()      → el JSON publicado del módulo Website (mismo forma que SitioContenido)
//   sitio_catalogo()       → módulos con precio, giros y el precio del diagnóstico
//   sitio_registrar_lead() → el formulario de contacto cae en `leads`
const URL = import.meta.env.VITE_SITIO_SUPABASE_URL as string | undefined
const ANON = import.meta.env.VITE_SITIO_SUPABASE_ANON as string | undefined
export const conectado = Boolean(URL && ANON)

async function rpc<T>(nombre: string, cuerpo: object = {}): Promise<T> {
  const r = await fetch(`${URL}/rest/v1/rpc/${nombre}`, {
    method: 'POST',
    headers: { apikey: ANON!, Authorization: `Bearer ${ANON}`, 'Content-Type': 'application/json' },
    body: JSON.stringify(cuerpo),
  })
  if (!r.ok) throw new Error(`${nombre}: ${r.status}`)
  return r.json() as Promise<T>
}

// Lo publicado se mezcla sobre lo predeterminado: si la consola aún no llena una sección, se ve la del diseño.
function mezcla<T>(base: T, encima: unknown): T {
  if (!encima || typeof encima !== 'object' || Array.isArray(base)) return (encima ?? base) as T
  const r = { ...(base as object) } as Record<string, unknown>
  for (const [k, v] of Object.entries(encima as object)) r[k] = k in r ? mezcla(r[k], v) : v
  return r as T
}

export function useContenido(): SitioContenido {
  const [c, setC] = useState<SitioContenido>(contenidoPredeterminado)
  useEffect(() => {
    if (!conectado) return
    rpc<Partial<SitioContenido>>('sitio_contenido').then((p) => setC(mezcla(contenidoPredeterminado, p))).catch(() => {})
  }, [])
  return c
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
}

/** Manda el formulario a `leads` (origen «sitio»). Si el interés es la demo, la base puede armarla sola. */
export async function registrarLead(lead: LeadSitio): Promise<void> {
  if (!conectado) throw new Error('El sitio aún no está conectado a la base (faltan VITE_SITIO_SUPABASE_URL y VITE_SITIO_SUPABASE_ANON).')
  await rpc('sitio_registrar_lead', { p: { ...lead, origen: 'sitio' } })
}
