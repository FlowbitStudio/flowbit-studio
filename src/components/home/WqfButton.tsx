/* Reusable WQF-style button with dot-blur + text-slide + corner accents */

interface WqfButtonProps {
  text: string
  dark?: boolean
  hideCorners?: boolean
  onClick?: () => void
  href?: string
  target?: string
}

const CornerSvg = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor" />
  </svg>
)

export default function WqfButton({ text, dark, hideCorners, onClick, href, target }: WqfButtonProps) {
  const className = `wqf-button${dark ? ' wqf-button--dark' : ''}`

  const content = (
    <>
      <div className="wqf-button__inner">
        <div className={`wqf-button__dot${dark ? ' wqf-button__dot--dark' : ''}`} />
        <div className={`wqf-button__text-wrap${dark ? ' wqf-button__text-wrap--dark' : ''}`}>
          <span className="wqf-button__text">{text}</span>
          <span className="wqf-button__text-dup" aria-hidden="true">{text}</span>
        </div>
      </div>
      {!hideCorners && (
        <div className="wqf-button__corners">
          <span className="wqf-button__corner wqf-button__corner--tl"><CornerSvg /></span>
          <span className="wqf-button__corner wqf-button__corner--tr"><CornerSvg /></span>
          <span className="wqf-button__corner wqf-button__corner--bl"><CornerSvg /></span>
          <span className="wqf-button__corner wqf-button__corner--br"><CornerSvg /></span>
        </div>
      )}
    </>
  )

  if (href) {
    return (
      <a className={className} href={href} target={target} rel={target === '_blank' ? 'noopener noreferrer' : undefined}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={className} onClick={onClick}>
      {content}
    </button>
  )
}
