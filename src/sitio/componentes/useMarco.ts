import { useEffect, useState } from 'react'

// Las escenas de partículas se diseñaron en un marco fijo (1440 × 900 escritorio, 390 × 844 teléfono).
// Este hook elige el marco según el ancho y calcula la escala para que el marco quepa completo en la pantalla.
export type Marco = { telefono: boolean; ancho: number; alto: number; escala: number }

const calcula = (): Marco => {
  const telefono = window.innerWidth < 760
  const ancho = telefono ? 390 : 1440, alto = telefono ? 844 : 900
  return { telefono, ancho, alto, escala: Math.min(window.innerWidth / ancho, window.innerHeight / alto) }
}

export default function useMarco(): Marco {
  const [m, setM] = useState<Marco>(calcula)
  useEffect(() => {
    const r = () => setM(calcula())
    window.addEventListener('resize', r)
    return () => window.removeEventListener('resize', r)
  }, [])
  return m
}
