import { useRef, useEffect, useCallback } from 'react'
import './ScrollRevealText.css'

interface ScrollRevealTextProps {
  text: string
  className?: string
}

// Ease-in-out cubic para suavizar la transición de cada palabra
function easeInOut(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2
}

export default function ScrollRevealText({ text, className = '' }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const wordsRef = useRef<HTMLSpanElement[]>([])
  const words = text.split(' ')

  const onScroll = useCallback(() => {
    const el = containerRef.current
    if (!el) return

    const rect = el.getBoundingClientRect()
    const vh = window.innerHeight

    // progress 0 = top del bloque al 70% del viewport (30% desde arriba)
    // progress 1 = top del bloque en el top del viewport
    const triggerPoint = vh * 0.7
    const progress = Math.max(0, Math.min(1, 1 - rect.top / triggerPoint))

    const total = words.length
    for (let i = 0; i < total; i++) {
      const span = wordsRef.current[i]
      if (!span) continue

      // Cada palabra tiene su ventana dentro del progreso global
      const wordStart = i / total
      const wordEnd = (i + 1) / total
      // Cuánto del recorrido total le toca a cada palabra (con overlap)
      const spread = 0.4
      const start = wordStart * (1 - spread)
      const end = start + spread + (wordEnd - wordStart)

      const raw = (progress - start) / (end - start)
      const clamped = Math.max(0, Math.min(1, raw))
      span.style.opacity = String(easeInOut(clamped))
    }
  }, [words.length])

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [onScroll])

  return (
    <div ref={containerRef} className={`scroll-reveal ${className}`}>
      <p className="scroll-reveal-text">
        {words.map((word, i) => (
          <span
            key={i}
            ref={el => { if (el) wordsRef.current[i] = el }}
            className="scroll-reveal-word"
            style={{ opacity: 0 }}
          >
            {word}{' '}
          </span>
        ))}
      </p>
    </div>
  )
}
