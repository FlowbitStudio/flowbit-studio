import { forwardRef } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { StickyListSection, ContentBlock } from '../data/proposal'
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
        <div key={item.title} className="phase-item">
          <div className="phase-item-dot" />
          <p className="phase-item-title">{item.title}</p>
          <ol className="phase-item-list">
            {item.items.map((li, j) => <li key={j}>{li}</li>)}
          </ol>
        </div>
      ))}

      {block.listItems && (
        <ol className="phase-item-list phase-list-standalone">
          {block.listItems.map((li, j) => <li key={j}>{li}</li>)}
        </ol>
      )}

      {!isLast && <div className="phase-separator" />}
    </div>
  )
}

StickyList.displayName = 'StickyList'
export default StickyList
