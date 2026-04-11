import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import './DragCursor.css'

export default function DragCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    if (!cursor) return

    // Check for touch device — no custom cursor needed
    if ('ontouchstart' in window) return

    // GSAP quickTo for smooth following — WQF: duration 0.3, ease power2.out
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.3, ease: 'power2.out' })
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.3, ease: 'power2.out' })

    const handleMouseMove = (e: MouseEvent) => {
      xTo(e.clientX)
      yTo(e.clientY)
    }

    const handleMouseEnter = () => {
      // WQF: opacity 1, scale 1 — duration 0.2, ease power4.inOut
      gsap.to(cursor, { opacity: 1, scale: 1, duration: 0.2, ease: 'power4.inOut' })
    }

    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, scale: 0.5, duration: 0.2, ease: 'power4.inOut' })
    }

    // Attach to all swiper containers
    const swipers = document.querySelectorAll('.pf__swiper')
    swipers.forEach(swiper => {
      swiper.addEventListener('mouseenter', handleMouseEnter)
      swiper.addEventListener('mouseleave', handleMouseLeave)
    })

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      swipers.forEach(swiper => {
        swiper.removeEventListener('mouseenter', handleMouseEnter)
        swiper.removeEventListener('mouseleave', handleMouseLeave)
      })
    }
  }, [])

  return (
    <div ref={cursorRef} className="drag-cursor">
      <div className="drag-cursor__text-container">
        <span className="drag-cursor__text">Drag</span>
      </div>
    </div>
  )
}
