import { useState, type FormEvent } from 'react'
import { siteContent } from '../../data/homeContent'
import './ContactModal.css'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const { contactForm } = siteContent
  const { fields } = contactForm
  const [role, setRole] = useState('')
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [company, setCompany] = useState('')
  const [industry, setIndustry] = useState('')
  const [message, setMessage] = useState('')
  const [consent, setConsent] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log({ role, name, lastName, email, whatsapp, company, industry, message, consent })
  }

  return (
    <div
      className={`contact-modal ${isOpen ? 'contact-modal--open' : ''}`}
    >
      <div className="contact-modal__backdrop" onClick={onClose} />

      <div className="contact-modal__panel">
        <button
          type="button"
          className="contact-modal__close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <h2 className="contact-modal__title">{contactForm.title}</h2>

        <form className="contact-modal__form" onSubmit={handleSubmit}>
          <div className="contact-modal__field">
            <label className="contact-modal__label">{fields.role.label}</label>
            <div className="contact-modal__roles">
              {fields.role.options.map((r) => (
                <button
                  key={r}
                  type="button"
                  className={`contact-modal__role ${role === r ? 'contact-modal__role--selected' : ''}`}
                  onClick={() => setRole(r)}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-name">
              {fields.name.label}
            </label>
            <input
              id="contact-name"
              type="text"
              className="contact-modal__input"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required={fields.name.required}
            />
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-lastName">
              {fields.lastName.label}
            </label>
            <input
              id="contact-lastName"
              type="text"
              className="contact-modal__input"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required={fields.lastName.required}
            />
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-email">
              {fields.email.label}
            </label>
            <input
              id="contact-email"
              type="email"
              className="contact-modal__input"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required={fields.email.required}
            />
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-whatsapp">
              {fields.whatsapp.label}
            </label>
            <input
              id="contact-whatsapp"
              type="tel"
              className="contact-modal__input"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
              required={fields.whatsapp.required}
            />
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-company">
              {fields.company.label}
            </label>
            <input
              id="contact-company"
              type="text"
              className="contact-modal__input"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              required={fields.company.required}
            />
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-industry">
              {fields.industry.label}
            </label>
            <select
              id="contact-industry"
              className="contact-modal__select"
              value={industry}
              onChange={(e) => setIndustry(e.target.value)}
            >
              <option value="" disabled>
                Selecciona una opcion
              </option>
              {fields.industry.options.map((ind) => (
                <option key={ind} value={ind}>
                  {ind}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-modal__field">
            <label className="contact-modal__label" htmlFor="contact-message">
              {fields.message.label}
            </label>
            <textarea
              id="contact-message"
              className="contact-modal__textarea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder={fields.message.placeholder}
            />
          </div>

          <div className="contact-modal__consent">
            <input
              id="contact-consent"
              type="checkbox"
              className="contact-modal__checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
            />
            <label
              className="contact-modal__consent-label"
              htmlFor="contact-consent"
            >
              {fields.consent.label}
            </label>
          </div>

          <button type="submit" className="contact-modal__submit">
            {contactForm.submitButton}
          </button>
        </form>
      </div>
    </div>
  )
}
