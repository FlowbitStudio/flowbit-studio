import { useEffect, useRef, useState } from 'react'
import type { ContactoContenido } from '../contenido/tipos'
import { registrarLead } from '../contenido/fuente'
import './Contacto.css'

type Pantalla = 1 | 2 | 3 | 4 | 5 | 'enviando' | 'listo' | 'error'
const LETRAS = 'ABCDEFGHIJ'

const Renglones = ({ lineas, retraso = 0.1 }: { lineas: string[]; retraso?: number }) => (
  <>{lineas.map((l, i) => <span className="renglon" key={l}><span style={{ animationDelay: `${retraso + i * 0.08}s` }}>{l}</span></span>)}</>
)

// Formulario de pantalla completa en cinco pasos, con el resumen que se llena en vivo.
// Lo que se envía cae en la tabla `leads` de la base (ver docs/website-datos.md §3).
export default function Contacto({ c, abierto, alCerrar, interesInicial }: { c: ContactoContenido; abierto: boolean; alCerrar: () => void; interesInicial?: string }) {
  const [p, setP] = useState<Pantalla>(1)
  const [interes, setInteres] = useState(interesInicial ?? c.intereses[0] ?? '')
  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [empresa, setEmpresa] = useState('')
  const [giro, setGiro] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [acepto, setAcepto] = useState(false)
  const [aviso, setAviso] = useState('')
  const trampa = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (!abierto) return
    const previo = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const tecla = (e: KeyboardEvent) => { if (e.key === 'Escape') alCerrar() }
    window.addEventListener('keydown', tecla)
    return () => { document.body.style.overflow = previo; window.removeEventListener('keydown', tecla) }
  }, [abierto, alCerrar])

  if (!abierto) return null

  const num = typeof p === 'number' ? p : 6
  const lleno = (k: number) => (num > k ? 1 : num === k ? 0.5 : 0)
  const contador = typeof p === 'number' ? `0${p} / 05` : p === 'listo' ? 'Enviado' : '05 / 05'

  const enviar = async () => {
    // Campo trampa: si un robot lo llenó, se finge éxito y no se guarda nada
    if (trampa.current?.value) { setP('listo'); return }
    setP('enviando')
    try {
      await registrarLead({ nombre: [nombre, apellido].filter(Boolean).join(' '), correo: email, telefono: whatsapp, negocio: empresa, giro, interes, mensaje })
      setP('listo')
    } catch { setP('error') }
  }

  const siguiente = () => {
    setAviso('')
    if (p === 2 && !nombre.trim()) { setAviso('Dinos tu nombre para continuar.'); return }
    if (p === 3 && !email.trim() && !whatsapp.trim()) { setAviso('Déjanos un correo o un WhatsApp.'); return }
    if (p === 3 && email.trim() && !/^\S+@\S+\.\S+$/.test(email.trim())) { setAviso('Ese correo no parece completo.'); return }
    if (p === 5) { if (!acepto) { setAviso('Necesitamos tu aceptación para poder responderte.'); return } enviar(); return }
    if (typeof p === 'number') setP((p + 1) as Pantalla)
  }
  const r = (v: string, vacio: string) => ({ valor: v || vacio, clase: v ? '' : 'vacio' })
  const resumen = [
    ['Me interesa', r(interes, '—')],
    ['Nombre', r([nombre, apellido].filter(Boolean).join(' '), 'Por llenar')],
    ['Contacto', r([email, whatsapp].filter(Boolean).join(' · '), 'Por llenar')],
    ['Empresa', r(empresa, 'Por llenar')],
    ['Giro', r(giro, 'Por llenar')],
  ] as const

  return (
    <div className="s-contacto toma" role="dialog" aria-modal="true" aria-label="Habla con nosotros">
      <div className="fondo" aria-hidden="true" />
      <div className="resplandor" aria-hidden="true" style={{ left: `${-300 + Math.min(num, 6) * 160}px` }} />
      <header className="barra">
        <span className="mono t-sup">Flowbit · Habla con nosotros</span>
        <div className="tramos" aria-hidden="true">
          {[1, 2, 3, 4, 5].map((k) => <span className="tramo-p" key={k}><i style={{ transform: `scaleX(${k === 5 && num >= 6 ? 1 : lleno(k)})` }} /></span>)}
        </div>
        <span className="mono t-sup">{contador}</span>
        <button type="button" className="cerrar" aria-label="Cerrar" onClick={alCerrar}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
        </button>
      </header>

      <div className="rejilla">
        <main className="principal">
          <input ref={trampa} className="trampa" type="text" name="sitio_web" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          {p === 1 && (
            <div className="paso" key="1" style={{ gap: 36 }}>
              <span className="mono entra num">01 — Empecemos</span>
              <h2 className="display"><Renglones lineas={['¿Qué te gustaría', 'resolver con nosotros?']} /></h2>
              <div className="entra opciones" style={{ animationDelay: '.3s' }}>
                {c.intereses.map((t, i) => (
                  <button type="button" key={t} className={`opcion${interes === t ? ' elegida' : ''}`} aria-pressed={interes === t} onClick={() => setInteres(t)}><span>{t}</span><span className="tecla">{LETRAS[i]}</span></button>
                ))}
              </div>
            </div>
          )}
          {p === 2 && (
            <div className="paso" key="2">
              <span className="mono entra num">02 — Mucho gusto</span>
              <h2 className="display"><Renglones lineas={['¿Cómo te llamas?']} /></h2>
              <div className="entra dos" style={{ animationDelay: '.25s' }}>
                <Campo id="f-nombre" etiqueta="Nombre" valor={nombre} cambia={setNombre} pista="Tu nombre" auto="given-name" foco />
                <Campo id="f-apellido" etiqueta="Apellido" valor={apellido} cambia={setApellido} pista="Tu apellido" auto="family-name" />
              </div>
            </div>
          )}
          {p === 3 && (
            <div className="paso" key="3">
              <span className="mono entra num">03 — Contacto</span>
              <h2 className="display"><Renglones lineas={['¿Dónde te', 'respondemos?']} /></h2>
              <div className="entra dos" style={{ animationDelay: '.25s' }}>
                <Campo id="f-email" etiqueta="Email" tipo="email" valor={email} cambia={setEmail} pista="tu@empresa.com" auto="email" foco />
                <Campo id="f-wa" etiqueta="WhatsApp" tipo="tel" valor={whatsapp} cambia={setWhatsapp} pista="477 000 0000" auto="tel" />
              </div>
              <p className="mono entra nota" style={{ animationDelay: '.35s' }}>{c.promesa}</p>
            </div>
          )}
          {p === 4 && (
            <div className="paso" key="4" style={{ gap: 32 }}>
              <span className="mono entra num">04 — Tu negocio</span>
              <h2 className="display"><Renglones lineas={['Cuéntanos de', 'tu empresa.']} /></h2>
              <div className="entra" style={{ animationDelay: '.25s' }}><Campo id="f-empresa" etiqueta="Nombre de la empresa" valor={empresa} cambia={setEmpresa} pista="Tu empresa" auto="organization" foco /></div>
              <div className="entra giros-c" style={{ animationDelay: '.35s' }}>
                <span className="mono t-sup">Giro o industria</span>
                <div className="fichas">
                  {c.giros.map((t) => <button type="button" key={t} className={`opcion chica${giro === t ? ' elegida' : ''}`} aria-pressed={giro === t} onClick={() => setGiro(t)}>{t}</button>)}
                </div>
              </div>
            </div>
          )}
          {p === 5 && (
            <div className="paso" key="5" style={{ gap: 32 }}>
              <span className="mono entra num">05 — Lo último</span>
              <h2 className="display"><Renglones lineas={['¿Qué problema', 'quieres resolver?']} /></h2>
              <div className="campo entra" style={{ animationDelay: '.25s' }}>
                <label htmlFor="f-msg">Cuéntanos más (opcional)</label>
                <textarea id="f-msg" className="linea area" rows={2} placeholder="Lo que hoy te quita tiempo o dinero…" value={mensaje} onChange={(e) => setMensaje(e.target.value)} />
                <div className="subraya" />
              </div>
              <label className="mono entra acepto" htmlFor="f-ok" style={{ animationDelay: '.35s' }}>
                <input id="f-ok" type="checkbox" checked={acepto} onChange={(e) => setAcepto(e.target.checked)} />{c.aviso}
              </label>
            </div>
          )}
          {p === 'enviando' && (
            <div className="estado">
              <div className="orbita" aria-hidden="true"><span /><span /></div>
              <p className="display" role="status" style={{ fontSize: 40 }}>Enviando…</p>
            </div>
          )}
          {p === 'listo' && (
            <div className="estado" style={{ gap: 32 }}>
              <div className="sello">
                <span className="onda" aria-hidden="true" />
                <svg className="palomita" width="96" height="96" viewBox="0 0 96 96" fill="none" aria-hidden="true"><circle cx="48" cy="48" r="47" fill="#1786FF" /><path d="M30 49l12 12 24-26" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" /></svg>
              </div>
              <h2 className="display grande" role="status"><Renglones lineas={['Listo, ya lo tenemos.']} retraso={0.3} /></h2>
              <p className="mono entra nota" style={{ animationDelay: '.5s' }}>{c.promesa}</p>
            </div>
          )}
          {p === 'error' && (
            <div className="estado">
              <svg className="entra" width="72" height="72" viewBox="0 0 72 72" fill="none" aria-hidden="true"><circle cx="36" cy="36" r="35" stroke="#FF4444" strokeWidth="1.5" /><path d="M36 22v18M36 48v2" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" /></svg>
              <h2 className="display" role="alert">Algo salió mal.</h2>
              <p className="mono nota">Intenta de nuevo o escríbenos por <a href={c.whatsapp}>WhatsApp</a>.</p>
              <button type="button" className="continuar" onClick={enviar}>Intentar de nuevo <span className="f">→</span></button>
            </div>
          )}

          {typeof p === 'number' && (
            <div className="navega">
              {p > 1 && <button type="button" className="atras" onClick={() => { setAviso(''); setP((p - 1) as Pantalla) }}>← Atrás</button>}
              <button type="button" className="continuar" onClick={siguiente}>{p === 5 ? 'Enviar' : 'Continuar'} <span className="f">→</span></button>
              {aviso && <span className="mono aviso" role="alert">{aviso}</span>}
            </div>
          )}
        </main>

        <aside className="lateral" aria-label="Tu solicitud">
          <span className="mono t-sup">Tu solicitud</span>
          {resumen.map(([t, v]) => <div className="dato" key={t}><b>{t}</b><span className={v.clase}>{v.valor}</span></div>)}
        </aside>
      </div>
    </div>
  )
}

function Campo({ id, etiqueta, valor, cambia, pista, tipo = 'text', auto, foco }: { id: string; etiqueta: string; valor: string; cambia: (v: string) => void; pista: string; tipo?: string; auto?: string; foco?: boolean }) {
  return (
    <div className="campo">
      <label htmlFor={id}>{etiqueta}</label>
      <input id={id} className="linea" type={tipo} placeholder={pista} value={valor} autoComplete={auto} autoFocus={foco} onChange={(e) => cambia(e.target.value)} />
      <div className="subraya" />
    </div>
  )
}
