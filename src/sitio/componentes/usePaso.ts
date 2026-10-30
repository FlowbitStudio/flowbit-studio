import { useEffect, useRef, useState } from 'react'

// Secciones que se recorren con el scroll de la página (Bits, Por qué, Clientes, Proceso):
// la sección mide `pasos` pantallas y su contenido queda fijo (sticky). Devuelve el avance
// continuo (0 … pasos-1) en una ref, para el lienzo, y el paso redondeado en estado, para el texto.
export default function usePaso(pasos: number) {
  const ref = useRef<HTMLElement>(null)
  const avance = useRef(0)
  const [paso, setPaso] = useState(0)
  useEffect(() => {
    let raf = 0
    const lee = () => {
      raf = 0
      const el = ref.current
      if (!el) return
      const r = el.getBoundingClientRect(), alto = window.innerHeight
      const p = Math.max(0, Math.min(pasos - 1, -r.top / alto))
      avance.current = p
      const n = Math.round(p)
      setPaso((v) => (v === n ? v : n))
    }
    const pide = () => { if (!raf) raf = requestAnimationFrame(lee) }
    lee()
    window.addEventListener('scroll', pide, { passive: true })
    window.addEventListener('resize', pide)
    return () => { window.removeEventListener('scroll', pide); window.removeEventListener('resize', pide); cancelAnimationFrame(raf) }
  }, [pasos])
  return { ref, avance, paso }
}
