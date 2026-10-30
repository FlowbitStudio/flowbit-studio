import { useEffect, useRef } from 'react'

// Congela las animaciones de entrada de una sección (data-espera) hasta que aparece en pantalla.
export default function useEntrada<T extends HTMLElement>(umbral = 0.15) {
  const ref = useRef<T>(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    el.setAttribute('data-espera', '')
    const io = new IntersectionObserver((entradas) => {
      if (entradas.some((e) => e.isIntersecting)) { el.removeAttribute('data-espera'); io.disconnect() }
    }, { threshold: umbral })
    io.observe(el)
    return () => io.disconnect()
  }, [umbral])
  return ref
}
