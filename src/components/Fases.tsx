import { forwardRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { StickyListSection, ContentBlock, ContentEntregable } from '../data/proposal'
import './Fases.css'

const StickyList = forwardRef<HTMLElement, StickyListSection>((props, ref) => {
  const { tag, title, blocks } = props
  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)

  return (
    <section className="fases" ref={ref}>
      <div className="fases-divider" />

      <div className="fases-layout">
        <div className="fases-left">
          <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
          <h2 className="fases-title fade-in" ref={titleRef}>{renderLines(title)}</h2>
        </div>

        <div className="fases-right">
          {blocks.map((block, i) => (
            <BlockItem key={block.number} block={block} isLast={i === blocks.length - 1} />
          ))}
        </div>
      </div>
    </section>
  )
})

function BlockItem({ block, isLast }: { block: ContentBlock; isLast: boolean }) {
  const headRef = useFadeIn(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)

  return (
    <div className="phase-block">
      <div className="phase-head fade-in" ref={headRef}>
        <div className="phase-label">
          <p className={`phase-number ${block.isBlue ? '' : 'phase-number--gray'}`}>
            {block.number}
          </p>
          <p className="phase-type">{block.type}</p>
        </div>
        <span className={`phase-badge phase-badge--${block.badgeVariant}`}>
          {block.badge}
        </span>
      </div>

      <h3 className="phase-title fade-in" ref={titleRef}>{block.title}</h3>
      <p className="phase-desc fade-in" ref={descRef}>{block.desc}</p>

      {block.entregables?.map(item => (
        <PhaseEntregable key={item.title} entregable={item} />
      ))}

      {block.listItems && <PhaseStandaloneList items={block.listItems} />}

      {!isLast && <div className="phase-separator" />}
    </div>
  )
}

// Cada bullet entra con fade-in independiente para que la lista
// tenga el mismo lenguaje de animación que los títulos.
function PhaseBullet({ text, delay }: { text: string; delay: number }) {
  const ref = useFadeIn<HTMLLIElement>(delay)
  return (
    <li className="fade-in" ref={ref}>
      {text}
    </li>
  )
}

// Entregable = título del subbloque + lista de items.
// El título fade in primero (0ms) y los items siguen escalonados (60ms entre cada uno).
function PhaseEntregable({ entregable }: { entregable: ContentEntregable }) {
  const titleRef = useFadeIn<HTMLParagraphElement>(0)
  return (
    <div className="phase-item">
      <div className="phase-item-dot" />
      <p className="phase-item-title fade-in" ref={titleRef}>{entregable.title}</p>
      <ol className="phase-item-list">
        {entregable.items.map((li, j) => (
          <PhaseBullet key={j} text={li} delay={120 + j * 60} />
        ))}
      </ol>
    </div>
  )
}

// Lista standalone (cuando no hay entregables agrupados, solo bullets sueltos).
// Cada bullet entra con su propio delay escalonado.
function PhaseStandaloneList({ items }: { items: string[] }) {
  return (
    <ol className="phase-item-list phase-list-standalone">
      {items.map((li, j) => (
        <PhaseBullet key={j} text={li} delay={j * 60} />
      ))}
    </ol>
  )
}

StickyList.displayName = 'StickyList'
export default StickyList
