import { useState } from 'react'
import './BriefForm.css'

const CONTACT_EMAIL = 'hola@flowbit.studio'
const BRIEF_WEBHOOK = 'https://n8n.flowbit.studio/webhook/brief-form'

type FormState = 'idle' | 'sending' | 'success' | 'error'

interface BriefData {
  businessName: string
  contactName: string
  contactPhone: string
  contactEmail: string
  industry: string
  problemDescription: string
  currentTools: string
  hasWebsite: string
  hasBranding: string
  teamSize: string
  budget: string
  launchDate: string
  comments: string
}

const initial: BriefData = {
  businessName: '',
  contactName: '',
  contactPhone: '',
  contactEmail: '',
  industry: '',
  problemDescription: '',
  currentTools: '',
  hasWebsite: '',
  hasBranding: '',
  teamSize: '',
  budget: '',
  launchDate: '',
  comments: '',
}

function SelectField({
  label,
  hint,
  value,
  onChange,
  options,
  placeholder,
  required,
}: {
  label: string
  hint?: string
  value: string
  onChange: (v: string) => void
  options: string[]
  placeholder: string
  required?: boolean
}) {
  return (
    <div>
      <label className="brief-label">
        {label}
        {required && ' *'}
      </label>
      <div className="brief-select-wrap">
        <select
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="brief-select"
        >
          <option value="">{placeholder}</option>
          {options.map((o) => (
            <option key={o} value={o}>
              {o}
            </option>
          ))}
        </select>
        <span className="brief-select-arrow">▾</span>
      </div>
      {hint && <p className="brief-hint">{hint}</p>}
    </div>
  )
}

export default function BriefForm() {
  const [data, setData] = useState<BriefData>(initial)
  const [formState, setFormState] = useState<FormState>('idle')

  const set =
    (key: keyof BriefData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setData((d) => ({ ...d, [key]: e.target.value }))

  const setSelect = (key: keyof BriefData) => (v: string) =>
    setData((d) => ({ ...d, [key]: v }))

  async function handleSubmit() {
    if (formState === 'sending' || formState === 'success') return
    setFormState('sending')

    try {
      const res = await fetch(BRIEF_WEBHOOK, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          empresa: data.businessName,
          contacto: data.contactName,
          email: data.contactEmail,
          telefono: data.contactPhone,
          industria: data.industry,
          problema: data.problemDescription,
          herramientas: data.currentTools,
          website: data.hasWebsite,
          branding: data.hasBranding,
          equipo: data.teamSize,
          presupuesto: data.budget,
          fechaDeseada: data.launchDate,
          comentarios: data.comments,
        }),
      })

      if (res.ok) {
        setFormState('success')
      } else {
        setFormState('error')
      }
    } catch {
      setFormState('error')
    }
  }

  const isValid =
    data.businessName.trim() &&
    data.contactName.trim() &&
    data.contactPhone.trim() &&
    data.problemDescription.trim()

  return (
    <div className="brief-page">
      {/* ── Header ── */}
      <header className="brief-header">
        <div className="brief-header-inner">
          <a href="/">
            <img
              src="/logo-flowbit.png"
              alt="Flowbit"
              className="brief-header-logo"
            />
          </a>
          <p className="brief-header-tag">Brief de requerimientos</p>
          <h1 className="brief-header-title">
            Cuéntanos sobre
            <br />
            tu negocio
          </h1>
          <p className="brief-header-desc">
            Completa este formulario para que podamos entender tus necesidades y
            preparar una propuesta precisa.
          </p>
        </div>
      </header>

      {/* ── Form ── */}
      <main className="brief-body">
        <div className="brief-card">
          {/* Contact */}
          <p className="brief-section-label brief-full">Datos de contacto</p>
          <div className="brief-grid">
            <div>
              <label className="brief-label">Empresa / Negocio *</label>
              <input
                type="text"
                value={data.businessName}
                onChange={set('businessName')}
                placeholder="Nombre de tu empresa o negocio"
                className="brief-input"
              />
            </div>
            <div>
              <label className="brief-label">Nombre de contacto *</label>
              <input
                type="text"
                value={data.contactName}
                onChange={set('contactName')}
                placeholder="Nombre completo"
                className="brief-input"
              />
            </div>
            <div>
              <label className="brief-label">Correo electrónico</label>
              <input
                type="email"
                value={data.contactEmail}
                onChange={set('contactEmail')}
                placeholder="correo@ejemplo.com"
                className="brief-input"
              />
            </div>
            <div>
              <label className="brief-label">Teléfono / WhatsApp *</label>
              <input
                type="tel"
                value={data.contactPhone}
                onChange={set('contactPhone')}
                placeholder="+52 477 123 4567"
                className="brief-input"
              />
            </div>
          </div>

          {/* Business */}
          <p className="brief-section-label brief-full">Sobre tu negocio</p>
          <div className="brief-grid">
            <SelectField
              label="Industria / giro"
              value={data.industry}
              onChange={setSelect('industry')}
              options={[
                'Restaurante / Bar / Cafetería',
                'Retail / Comercio',
                'Servicios profesionales',
                'Salud / Bienestar',
                'Inmobiliaria',
                'Educación',
                'Tecnología',
                'Otro',
              ]}
              placeholder="Selecciona"
            />
            <SelectField
              label="Tamaño del equipo"
              value={data.teamSize}
              onChange={setSelect('teamSize')}
              options={[
                '1 – 5 personas',
                '6 – 15 personas',
                '16 – 50 personas',
                'Más de 50 personas',
              ]}
              placeholder="Selecciona"
            />
            <SelectField
              label="¿Tienen website actualmente?"
              value={data.hasWebsite}
              onChange={setSelect('hasWebsite')}
              options={[
                'No, necesitamos uno',
                'Sí, pero queremos rehacerlo',
                'Sí, y funciona bien',
                'No es prioridad',
              ]}
              placeholder="Selecciona"
            />
            <SelectField
              label="¿Tienen identidad visual?"
              value={data.hasBranding}
              onChange={setSelect('hasBranding')}
              options={[
                'Sí, completa (logo, colores, tipografía)',
                'Parcial (solo logo)',
                'No, necesitamos diseño',
              ]}
              placeholder="Selecciona"
            />
            <div className="brief-full">
              <label className="brief-label">
                Herramientas o sistemas que usan hoy
              </label>
              <input
                type="text"
                value={data.currentTools}
                onChange={set('currentTools')}
                placeholder="Ej. Excel, Google Sheets, algún CRM, sistema POS, ERP, ninguno…"
                className="brief-input"
              />
              <p className="brief-hint">
                Software, plataformas o procesos manuales que manejan
                actualmente.
              </p>
            </div>
          </div>

          {/* Project */}
          <p className="brief-section-label brief-full">El proyecto</p>
          <div className="brief-grid">
            <div className="brief-full">
              <label className="brief-label">
                ¿Qué problema quieren resolver o qué necesitan? *
              </label>
              <textarea
                value={data.problemDescription}
                onChange={set('problemDescription')}
                rows={4}
                placeholder="Descríbenos tu situación actual, qué les está costando tiempo o dinero, y qué resultado esperan lograr."
                className="brief-textarea"
              />
            </div>
          </div>

          {/* Planning */}
          <p className="brief-section-label brief-full">Planeación</p>
          <div className="brief-grid">
            <div>
              <label className="brief-label">
                Fecha deseada de lanzamiento
              </label>
              <input
                type="text"
                value={data.launchDate}
                onChange={set('launchDate')}
                placeholder="Ej. Agosto 2026, lo antes posible…"
                className="brief-input"
              />
            </div>
            <SelectField
              label="Presupuesto aproximado"
              value={data.budget}
              onChange={setSelect('budget')}
              options={[
                'Menos de $30,000 MXN',
                '$30,000 – $60,000 MXN',
                '$60,000 – $100,000 MXN',
                'Más de $100,000 MXN',
                'Necesito orientación',
              ]}
              placeholder="Selecciona"
            />
            <div className="brief-full">
              <label className="brief-label">Comentarios adicionales</label>
              <textarea
                value={data.comments}
                onChange={set('comments')}
                rows={3}
                placeholder="¿Algo más que debamos saber?"
                className="brief-textarea"
              />
            </div>
          </div>

          {/* Submit */}
          <div className="brief-submit-row">
            {formState === 'success' ? (
              <p className="brief-submit-success">
                ✓ Brief recibido. Nos pondremos en contacto contigo pronto.
              </p>
            ) : (
              <>
                <p className="brief-submit-note">
                  Tu información se envía directo a nuestro equipo. Te contactaremos
                  en menos de 24 horas.
                </p>
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={!isValid || formState === 'sending'}
                  className={`brief-submit-btn ${!isValid || formState === 'sending' ? 'brief-submit-btn--disabled' : ''}`}
                >
                  {formState === 'sending' ? 'Enviando...' : formState === 'error' ? 'Error — intenta de nuevo' : 'Enviar brief →'}
                </button>
              </>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="brief-footer">
          <img
            src="/logo-flowbit.png"
            alt="Flowbit"
            className="brief-footer-logo"
          />
          <p className="brief-footer-email">{CONTACT_EMAIL}</p>
          <p className="brief-footer-copy">
            © {new Date().getFullYear()} Flowbit. Todos los derechos reservados.
          </p>
        </div>
      </main>
    </div>
  )
}
