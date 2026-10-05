import { useCallback, useEffect, useRef, useState } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import { kickoffs } from '../data/kickoffs'
import { SlideBody } from '../components/kickoff/Slides'
import '../components/kickoff/Kickoff.css'

const pad = (n: number) => String(n).padStart(2, '0')

const NEXT_KEYS = ['ArrowDown', 'ArrowRight', 'PageDown', ' ']
const PREV_KEYS = ['ArrowUp', 'ArrowLeft', 'PageUp']

export default function Kickoff() {
  const { id } = useParams<{ id: string }>()
  const deck = id ? kickoffs[id] : undefined

  const scrollerRef = useRef<HTMLElement>(null)
  const slideRefs = useRef<(HTMLElement | null)[]>([])
  const [current, setCurrent] = useState(0)
  const [seen, setSeen] = useState<Set<number>>(() => new Set([0]))

  const goTo = useCallback((index: number) => {
    const count = deck?.slides.length ?? 0
    const target = Math.max(0, Math.min(count - 1, index))
    slideRefs.current[target]?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [deck])

  // Slide actual = el que ocupa la mayor parte del viewport.
  useEffect(() => {
    const root = scrollerRef.current
    if (!root) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const index = Number((entry.target as HTMLElement).dataset.index)
          setCurrent(index)
          setSeen((prev) => (prev.has(index) ? prev : new Set(prev).add(index)))
        })
      },
      { root, threshold: 0.55 },
    )
    slideRefs.current.forEach((el) => el && observer.observe(el))
    return () => observer.disconnect()
  }, [deck])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.metaKey || e.ctrlKey || e.altKey) return
      if (NEXT_KEYS.includes(e.key)) { e.preventDefault(); goTo(current + 1) }
      else if (PREV_KEYS.includes(e.key)) { e.preventDefault(); goTo(current - 1) }
      else if (e.key === 'Home') { e.preventDefault(); goTo(0) }
      else if (e.key === 'End') { e.preventDefault(); goTo(Infinity) }
      else if (e.key === 'f' || e.key === 'F') {
        if (document.fullscreenElement) document.exitFullscreen()
        else document.documentElement.requestFullscreen?.()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [current, goTo])

  if (!deck) return <Navigate to="/" replace />

  const total = deck.slides.length
  const tone = deck.slides[current]?.tone ?? 'light'

  return (
    <div className="kickoff" data-tone={tone}>
      <main ref={scrollerRef} className="k-deck">
        {deck.slides.map((slide, i) => (
          <section
            key={i}
            ref={(el) => { slideRefs.current[i] = el }}
            data-index={i}
            className={`k-slide k-slide--${slide.kind} k-tone--${slide.tone ?? 'light'}${seen.has(i) ? ' is-seen' : ''}`}
            aria-label={`Slide ${i + 1} de ${total}: ${slide.chapter}`}
          >
            <div className="k-topbar">
              <span className="k-topbar__brand">
                <img
                  src={(slide.tone ?? 'light') === 'light' ? '/logo-flowbit.svg' : '/logo-flowbit-dark.svg'}
                  alt="Flowbit"
                />
                <span>× {deck.client}</span>
              </span>
              <span className="k-topbar__chapter">{slide.chapter}</span>
              <span className="k-topbar__date">Kickoff · {deck.date}</span>
            </div>
            <div className="k-slide__body">
              <SlideBody slide={slide} />
            </div>
          </section>
        ))}
      </main>

      <nav className="k-hud" aria-label="Navegación del deck">
        <span className="k-hud__count">
          {pad(current + 1)} <span>/ {pad(total)}</span>
        </span>
        <div className="k-hud__progress">
          {deck.slides.map((slide, i) => (
            <button
              key={i}
              type="button"
              className={`k-hud__seg${i <= current ? ' is-done' : ''}${i === current ? ' is-current' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Ir al slide ${i + 1}: ${slide.chapter}`}
              title={slide.chapter}
            />
          ))}
        </div>
        <div className="k-hud__controls">
          <button type="button" onClick={() => goTo(current - 1)} disabled={current === 0} aria-label="Slide anterior">←</button>
          <button type="button" onClick={() => goTo(current + 1)} disabled={current === total - 1} aria-label="Slide siguiente">→</button>
          <span className="k-hud__hint">F · pantalla completa</span>
        </div>
      </nav>
    </div>
  )
}
