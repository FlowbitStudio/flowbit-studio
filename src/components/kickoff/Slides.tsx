import type { CSSProperties, ReactNode } from 'react'
import type {
  AgendaSlide,
  BlockSlide,
  ChecklistSlide,
  CoverSlide,
  FactsSlide,
  KickoffSlide,
  MilestonesSlide,
  NextSlide,
  Owner,
  PillarsSlide,
  RisksSlide,
  SequenceSlide,
  StatementSlide,
  TimelineSlide,
} from '../../data/kickoff-types'

// ── Utilidades ──────────────────────────────────────────────

/** Respeta los saltos de línea (\n) de los títulos. */
function lines(text: string) {
  return text.split('\n').map((line, i, all) => (
    <span key={i}>
      {line}
      {i < all.length - 1 && <br />}
    </span>
  ))
}

/** Índice para escalonar la animación de entrada de cada elemento. */
const rise = (i: number) => ({ '--d': i } as CSSProperties)

const pad = (n: number) => String(n).padStart(2, '0')

const MONTHS = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic']

function toDay(iso: string) {
  const [y, m, d] = iso.split('-').map(Number)
  return Date.UTC(y, m - 1, d) / 86_400_000
}

function OwnerTag({ owner }: { owner: Owner }) {
  return <span className={`k-owner k-owner--${owner.toLowerCase()}`}>{owner}</span>
}

// ── Slides ──────────────────────────────────────────────────

function Cover({ eyebrow, title, subtitle, facts }: CoverSlide) {
  return (
    <div className="k-cover">
      <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
      <h1 className="k-cover__title k-rise" style={rise(1)}>{lines(title)}</h1>
      <div className="k-cover__bottom">
        <p className="k-cover__subtitle k-rise" style={rise(2)}>{subtitle}</p>
        <dl className="k-cover__facts">
          {facts.map((f, i) => (
            <div key={f.label} className="k-cover__fact k-rise" style={rise(3 + i)}>
              <dt className="k-label">{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

function Agenda({ title, items }: AgendaSlide) {
  return (
    <div className="k-split">
      <h2 className="k-title k-rise" style={rise(0)}>{lines(title)}</h2>
      <ol className="k-agenda">
        {items.map((item, i) => (
          <li key={item.title} className="k-agenda__item k-rise" style={rise(1 + i)}>
            <span className="k-index">{pad(i + 1)}</span>
            <span className="k-agenda__title">{item.title}</span>
            <span className="k-agenda__desc">{item.desc}</span>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Statement({ eyebrow, text, footnote }: StatementSlide) {
  return (
    <div className="k-statement">
      <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
      <p className="k-statement__text k-rise" style={rise(1)}>{text}</p>
      {footnote && <p className="k-label k-rise" style={rise(2)}>{footnote}</p>}
    </div>
  )
}

function Pillars({ eyebrow, title, pillars, note }: PillarsSlide) {
  return (
    <div className="k-stack">
      <header className="k-head">
        <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
        <h2 className="k-title k-rise" style={rise(1)}>{lines(title)}</h2>
      </header>
      <div className="k-pillars">
        {pillars.map((p, i) => (
          <section key={p.title} className="k-pillar k-rise" style={rise(2 + i)}>
            <span className="k-index">{pad(i + 1)}</span>
            <h3 className="k-pillar__title">{p.title}</h3>
            <ul className="k-dash-list">
              {p.points.map((pt) => <li key={pt}>{pt}</li>)}
            </ul>
          </section>
        ))}
      </div>
      {note && <p className="k-note k-rise" style={rise(6)}>{note}</p>}
    </div>
  )
}

function Sequence({ eyebrow, title, steps }: SequenceSlide) {
  return (
    <div className="k-stack">
      <header className="k-head">
        <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
        <h2 className="k-title k-title--wide k-rise" style={rise(1)}>{lines(title)}</h2>
      </header>
      <ol className="k-sequence">
        {steps.map((s, i) => (
          <li key={s.title} className="k-sequence__step k-rise" style={rise(2 + i)}>
            <div className="k-sequence__rail">
              <span className="k-sequence__dot" />
              {i < steps.length - 1 && <span className="k-sequence__arrow" aria-hidden="true">→</span>}
            </div>
            <span className="k-index">Paso {pad(i + 1)}</span>
            <h3 className="k-sequence__title">{s.title}</h3>
            <p className="k-body">{s.why}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Timeline({ eyebrow, title, start, end, bars, milestones }: TimelineSlide) {
  const origin = toDay(start)
  const total = toDay(end) - origin + 1
  const pct = (days: number) => `${(days / total) * 100}%`

  const weeks: { offset: number; label: string }[] = []
  // Una semana que no alcanza a tener 3 días dentro del rango no lleva etiqueta
  for (let d = 0; d < total - 3; d += 7) {
    const date = new Date((origin + d) * 86_400_000)
    weeks.push({ offset: d, label: `${pad(date.getUTCDate())} ${MONTHS[date.getUTCMonth()]}` })
  }

  return (
    <div className="k-stack">
      <header className="k-head">
        <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
        <h2 className="k-title k-rise" style={rise(1)}>{lines(title)}</h2>
      </header>
      <div className="k-gantt-scroll k-rise" style={rise(2)}>
        <div className="k-gantt">
          <div className="k-gantt__row k-gantt__row--axis">
            <span className="k-label">Semana</span>
            <div className="k-gantt__track">
              {weeks.map((w, i) => (
                <span key={w.offset} className="k-gantt__week" style={{ left: pct(w.offset) }}>
                  <b>S{i + 1}</b> {w.label}
                </span>
              ))}
            </div>
          </div>

          {bars.map((bar) => {
            const from = toDay(bar.from) - origin
            const to = toDay(bar.to) - origin + 1
            return (
              <div key={bar.label} className="k-gantt__row">
                <span className="k-gantt__label">{bar.label}</span>
                <div className="k-gantt__track">
                  {weeks.map((w) => (
                    <span key={w.offset} className="k-gantt__grid" style={{ left: pct(w.offset) }} />
                  ))}
                  <span
                    className={`k-gantt__bar${bar.accent ? ' k-gantt__bar--accent' : ''}`}
                    style={{ left: pct(from), width: pct(to - from) }}
                  />
                </div>
              </div>
            )
          })}

          <div className="k-gantt__row k-gantt__row--milestones">
            <span className="k-label">Hitos</span>
            <div className="k-gantt__track">
              {milestones.map((m) => {
                const at = toDay(m.date) - origin + 0.5
                return (
                  <span key={m.date} className="k-gantt__milestone" style={{ left: pct(at) }}>
                    <i aria-hidden="true" />
                    <span>{m.label}</span>
                  </span>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Block({ number, title, dates, summary, tasks, deliverable }: BlockSlide) {
  return (
    <div className="k-block">
      <div className="k-block__intro">
        <span className="k-block__number k-rise" style={rise(0)}>{number}</span>
        <p className="k-date-chip k-rise" style={rise(1)}>{dates}</p>
        <h2 className="k-title k-rise" style={rise(2)}>{lines(title)}</h2>
        <p className="k-body k-body--lead k-rise" style={rise(3)}>{summary}</p>
        {deliverable && (
          <div className="k-deliverable k-rise" style={rise(4)}>
            <span className="k-label">Entregable</span>
            <span className="k-deliverable__label">{deliverable.label}</span>
            <span className="k-deliverable__date">{deliverable.date}</span>
          </div>
        )}
      </div>
      <ul className="k-tasks">
        <li className="k-tasks__head k-label">
          <span>Tarea</span>
          <span>Cuándo</span>
          <span>Quién</span>
        </li>
        {tasks.map((t, i) => (
          <li key={t.text} className="k-tasks__row k-rise" style={rise(2 + i)}>
            <span className="k-tasks__text">{t.text}</span>
            <span className="k-tasks__when">{t.when}</span>
            <span><OwnerTag owner={t.owner ?? 'Flowbit'} /></span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Milestones({ eyebrow, title, note, items }: MilestonesSlide) {
  return (
    <div className="k-stack">
      <header className="k-head k-head--row">
        <div>
          <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
          <h2 className="k-title k-rise" style={rise(1)}>{lines(title)}</h2>
        </div>
        <p className="k-body k-head__aside k-rise" style={rise(2)}>{note}</p>
      </header>
      <ol className="k-milestones" style={{ '--n': items.length } as CSSProperties}>
        {items.map((m, i) => (
          <li
            key={m.date}
            className={`k-milestone k-rise${i === items.length - 1 ? ' k-milestone--final' : ''}`}
            style={rise(3 + i)}
          >
            <span className="k-milestone__dot" aria-hidden="true" />
            <span className="k-milestone__date">{m.date}</span>
            <h3 className="k-milestone__title">{m.title}</h3>
            <p className="k-body">{m.desc}</p>
          </li>
        ))}
      </ol>
    </div>
  )
}

function Checklist({ eyebrow, title, note, rows }: ChecklistSlide) {
  return (
    <div className="k-split k-split--narrow">
      <header className="k-head">
        <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
        <h2 className="k-title k-rise" style={rise(1)}>{lines(title)}</h2>
        <p className="k-body k-rise" style={rise(2)}>{note}</p>
      </header>
      <ul className="k-checklist">
        <li className="k-checklist__head k-label">
          <span />
          <span>Insumo</span>
          <span>Desbloquea</span>
          <span>Fecha límite</span>
        </li>
        {rows.map((r, i) => (
          <li key={r.item} className="k-checklist__row k-rise" style={rise(2 + i * 0.5)}>
            <span className="k-checkbox" aria-hidden="true" />
            <span className="k-checklist__item">{r.item}</span>
            <span className="k-checklist__unlocks">{r.unlocks}</span>
            <span className="k-checklist__due">{r.due}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Risks({ eyebrow, title, note, risks }: RisksSlide) {
  return (
    <div className="k-stack">
      <header className="k-head k-head--row">
        <div>
          <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
          <h2 className="k-title k-rise" style={rise(1)}>{lines(title)}</h2>
        </div>
        <p className="k-body k-head__aside k-rise" style={rise(2)}>{note}</p>
      </header>
      <ul className="k-risks">
        <li className="k-risks__head k-label">
          <span>Impacto</span>
          <span>Riesgo</span>
          <span>Qué pasa</span>
          <span>Qué hacemos</span>
        </li>
        {risks.map((r, i) => (
          <li key={r.risk} className="k-risks__row k-rise" style={rise(3 + i)}>
            <span><span className={`k-impact k-impact--${r.impact.toLowerCase()}`}>{r.impact}</span></span>
            <span className="k-risks__risk">{r.risk}</span>
            <span className="k-risks__effect">{r.effect}</span>
            <span className="k-risks__plan">{r.plan}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Facts({ eyebrow, title, facts }: FactsSlide) {
  return (
    <div className="k-stack">
      <header className="k-head">
        <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
        <h2 className="k-title k-rise" style={rise(1)}>{lines(title)}</h2>
      </header>
      <div className="k-facts">
        {facts.map((f, i) => (
          <div key={f.label} className="k-fact k-rise" style={rise(2 + i)}>
            <span className="k-fact__value">{f.value}</span>
            <span className="k-label">{f.label}</span>
            <p className="k-body">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

function Next({ eyebrow, title, actions, contact }: NextSlide) {
  return (
    <div className="k-next">
      <div className="k-next__intro">
        <p className="k-eyebrow k-rise" style={rise(0)}>{eyebrow}</p>
        <h2 className="k-next__title k-rise" style={rise(1)}>{lines(title)}</h2>
        <a className="k-button k-rise" style={rise(2)} href={contact.href} target="_blank" rel="noreferrer">
          {contact.label} <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ul className="k-actions">
        {actions.map((a, i) => (
          <li key={a.what} className="k-actions__row k-rise" style={rise(2 + i)}>
            <span className="k-actions__when">{a.when}</span>
            <span className="k-actions__what">{a.what}</span>
            <OwnerTag owner={a.owner} />
          </li>
        ))}
      </ul>
    </div>
  )
}

// ── Router de slides ────────────────────────────────────────

export function SlideBody({ slide }: { slide: KickoffSlide }): ReactNode {
  switch (slide.kind) {
    case 'cover': return <Cover {...slide} />
    case 'agenda': return <Agenda {...slide} />
    case 'statement': return <Statement {...slide} />
    case 'pillars': return <Pillars {...slide} />
    case 'sequence': return <Sequence {...slide} />
    case 'timeline': return <Timeline {...slide} />
    case 'block': return <Block {...slide} />
    case 'milestones': return <Milestones {...slide} />
    case 'checklist': return <Checklist {...slide} />
    case 'risks': return <Risks {...slide} />
    case 'facts': return <Facts {...slide} />
    case 'next': return <Next {...slide} />
  }
}
