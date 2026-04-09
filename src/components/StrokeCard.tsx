import { useEffect, useRef, useState, type ReactNode, type CSSProperties } from 'react'
import './StrokeCard.css'

interface StrokeCardProps {
  children: ReactNode
  className?: string
  delay?: number
  style?: CSSProperties
}

export default function StrokeCard({ children, className = '', delay = 0, style }: StrokeCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.05, rootMargin: '0px 0px -60px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`stroke-card ${visible ? 'stroke-card--visible' : ''} ${className}`}
      style={{ '--stroke-delay': `${delay}ms`, ...style } as React.CSSProperties}
    >
      {children}
    </div>
  )
}
