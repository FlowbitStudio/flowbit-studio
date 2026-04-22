import { forwardRef, useState } from 'react'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { FeedbackSection } from '../data/proposal'
import './Feedback.css'

const Feedback = forwardRef<HTMLElement, FeedbackSection>((props, ref) => {
  const {
    tag,
    title,
    description,
    videoLabel,
    emailTo,
    emailSubject,
    placeholder,
    buttonText,
  } = props

  const [comments, setComments] = useState('')
  const [sent, setSent] = useState(false)

  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)
  const boxRef = useFadeIn<HTMLDivElement>(450)

  const handleSend = () => {
    if (!comments.trim()) return

    const body = `Comentarios del cliente sobre ${videoLabel}:\n\n${comments}\n\n— Enviado desde la propuesta de guiones AsistIA`
    const mailto = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSent(true)
  }

  return (
    <section className="feedback" ref={ref}>
      <div className="feedback-divider" />

      <div className="feedback-inner">
        <div className="feedback-head">
          <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
          <h2 className="feedback-title fade-in" ref={titleRef}>{renderLines(title)}</h2>
          <p className="feedback-desc fade-in" ref={descRef}>{description}</p>
        </div>

        <div className="feedback-box fade-in" ref={boxRef}>
          <div className="feedback-box-head">
            <span className="feedback-box-label">comentarios · {videoLabel}</span>
          </div>

          <textarea
            className="feedback-textarea"
            placeholder={placeholder}
            value={comments}
            onChange={(e) => {
              setComments(e.target.value)
              if (sent) setSent(false)
            }}
            rows={8}
          />

          <div className="feedback-actions">
            <span className="feedback-hint">
              {sent ? 'abrimos tu cliente de correo — confirma el envío desde ahí' : 'los comentarios se envían por correo al equipo de flowbit'}
            </span>
            <button
              type="button"
              className="feedback-button"
              onClick={handleSend}
              disabled={!comments.trim()}
            >
              {sent ? 'reenviar' : buttonText}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
})

Feedback.displayName = 'Feedback'
export default Feedback
