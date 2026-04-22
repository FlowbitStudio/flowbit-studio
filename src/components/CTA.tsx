import { forwardRef, useState } from 'react'
import { useParams } from 'react-router-dom'
import useFadeIn from '../hooks/useFadeIn'
import renderLines from '../utils/renderLines'
import type { CTASection } from '../data/proposal'
import './CTA.css'

// ────────────────────────────────────────────────────────────────────────
// Endpoint del webhook de aceptación. Vive en n8n.flowbit.studio y
// procesa la transición Jira + Supabase update + notificación a Andre.
// CORS configurado en n8n para aceptar requests desde flowbit.studio.
// ────────────────────────────────────────────────────────────────────────
const ACCEPT_ENDPOINT = 'https://n8n.flowbit.studio/webhook/aceptar-propuesta'

type CtaState =
  | { kind: 'idle' }
  | { kind: 'loading' }
  | { kind: 'success' }
  | { kind: 'error_404' }
  | { kind: 'error_409_not_sent' }
  | { kind: 'error_409_already_accepted' }
  | { kind: 'error_generic' }

const CTA = forwardRef<HTMLElement, CTASection>((props, ref) => {
  const { tag, title, description, buttonText, buttonHref, footerLeft, footerRight } = props
  const { id: slug } = useParams<{ id: string }>()
  const [state, setState] = useState<CtaState>({ kind: 'idle' })

  // Propuestas sin aceptación digital (documentos de revisión, guiones, etc.)
  // declaran un buttonHref con protocolo mailto:/http(s):/tel: y se renderean
  // como link directo en vez de disparar el webhook de aceptación.
  const isDirectLink = /^(mailto:|https?:|tel:)/i.test(buttonHref)

  const tagRef = useFadeIn<HTMLSpanElement>(0)
  const titleRef = useFadeIn<HTMLHeadingElement>(150)
  const descRef = useFadeIn<HTMLParagraphElement>(300)
  const btnRef = useFadeIn(450)

  const handleAccept = async () => {
    if (!slug) return
    // No reintentar si ya está en un estado terminal
    if (state.kind === 'loading' || state.kind === 'success') return
    if (state.kind === 'error_404' || state.kind === 'error_409_already_accepted') return

    setState({ kind: 'loading' })

    try {
      const res = await fetch(ACCEPT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ slug }),
      })

      if (res.status === 200) {
        setState({ kind: 'success' })
        return
      }

      if (res.status === 404) {
        setState({ kind: 'error_404' })
        return
      }

      if (res.status === 409) {
        // El backend devuelve currentState en el body para diferenciar los 2 sub-casos
        const data = await res.json().catch(() => ({} as { currentState?: string }))
        if (data.currentState === 'Aceptada') {
          setState({ kind: 'error_409_already_accepted' })
        } else {
          setState({ kind: 'error_409_not_sent' })
        }
        return
      }

      // 5xx u otros — permitimos retry
      setState({ kind: 'error_generic' })
    } catch {
      // Network error — permitimos retry
      setState({ kind: 'error_generic' })
    }
  }

  const buttonLabel = (() => {
    switch (state.kind) {
      case 'idle':
        return buttonText
      case 'loading':
        return 'Procesando...'
      case 'success':
        return '¡Aceptada! Gracias 🎉'
      case 'error_404':
        return 'Esta propuesta no soporta aceptación digital'
      case 'error_409_not_sent':
        return 'Esta propuesta aún no está lista'
      case 'error_409_already_accepted':
        return 'Esta propuesta ya fue aceptada'
      case 'error_generic':
        return 'Algo falló — intenta de nuevo'
    }
  })()

  // Estados terminales (no se puede reintentar)
  const isTerminal =
    state.kind === 'success' ||
    state.kind === 'error_404' ||
    state.kind === 'error_409_already_accepted'

  const isDisabled = state.kind === 'loading' || isTerminal

  return (
    <section className="cta" ref={ref}>
      <div className="cta-inner">
        <span className="section-tag fade-in" ref={tagRef}>{tag}</span>
        <h2 className="cta-title fade-in" ref={titleRef}>{renderLines(title)}</h2>
        <p className="cta-desc fade-in" ref={descRef}>{description}</p>
        <div className="cta-action fade-in" ref={btnRef}>
          {isDirectLink ? (
            <a
              href={buttonHref}
              className="cta-button cta-button--idle"
            >
              {buttonText}
            </a>
          ) : (
            <button
              type="button"
              onClick={handleAccept}
              disabled={isDisabled}
              className={`cta-button cta-button--${state.kind}`}
              aria-busy={state.kind === 'loading'}
            >
              {buttonLabel}
            </button>
          )}
        </div>
      </div>

      <footer className="cta-footer">
        <span className="cta-footer-text">{footerLeft}</span>
        <span className="cta-footer-text">{footerRight}</span>
      </footer>
    </section>
  )
})

CTA.displayName = 'CTA'
export default CTA
