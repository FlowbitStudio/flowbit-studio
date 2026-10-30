import { useEffect, useState } from 'react'
import type { Navegacion } from '../contenido/tipos'
import './Encabezado.css'

const Logo = () => (
  <svg viewBox="0 0 802.36 178.17" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M118.18,106.85H33.61v68.3H0V6.51h123.84v30.96H33.61v38.43h84.57v30.96Z" fill="#1786FF" />
    <path d="M168.59,175.16h-31.44V1.69h31.44v173.47Z" fill="#1786FF" />
    <path d="M310.21,116.73c0,35.18-26.86,61.44-63.25,61.44s-63-26.26-63-61.44,26.74-61.44,63-61.44,63.25,26.26,63.25,61.44ZM216,116.730c0,18.910,13.25,32.16,30.96,32.16s31.08-13.25,31.08-32.16-13.37-32.16-31.08-32.16-30.96,13.25-30.96,32.16Z" fill="#1786FF" />
    <path d="M452.27,140.34l25.06-81.92h32.89l-39.51,116.73h-35.9l-25.9-78.91-25.66,78.91h-35.66l-39.51-116.73h33.49l24.94,81.56,26.140-81.56h33.13l26.5,81.92Z" fill="#1786FF" />
    <path d="M641.53,116.73c0,35.06-24.33,61.44-56.5,61.44-16.14,0-27.35-6.51-34.94-15.9v12.89h-30.72V1.69h31.32v68.91c7.59-9.16,18.55-15.3,34.21-15.3,32.28,0,56.62,26.38,56.62,61.44ZM549.13,116.73c0,18.43,12.17,32.16,30,32.16s30.12-14.34,30.12-32.16-11.56-32.16-30.12-32.16-30,13.73-30,32.16Z" fill="#f4f4f4" />
    <path d="M692.35,20.24c0,11.32-8.79,20-20.12,20s-20-8.67-20-20,8.67-20.24,20-20.240,20.12,8.91,20.12,20.24ZM688.13,175.16h-31.44V58.43h31.44v116.73Z" fill="#f4f4f4" />
    <path d="M793.69,86.38h-42.28v42.64c0,14.58,7.71,19.88,17.47,19.88,7.47,0,15.54-3.73,21.92-7.59l11.56,24.58c-10.24,6.99-22.05,12.29-38.67,12.29-28.91,0-43.73-16.38-43.73-46.62v-45.17h-22.53v-27.95h22.53V23.73h31.44v34.69h42.28v27.95Z" fill="#f4f4f4" />
  </svg>
)

const Pastilla = ({ texto, href, onClick, clase = '' }: { texto: string; href: string; onClick: (e: React.MouseEvent) => void; clase?: string }) => (
  <a href={href} className={`s-demo mono ${clase}`} onClick={onClick}>
    <span className="vivo" aria-hidden="true" />
    <span className="rotulo"><span>{texto}</span><span aria-hidden="true">{texto}</span></span>
  </a>
)

// Header fijo: transparente sobre el hero y con velo oscuro al bajar. En teléfono el menú se pliega en una hoja.
export default function Encabezado({ nav, onDemo }: { nav: Navegacion; onDemo: () => void }) {
  const [bajo, setBajo] = useState(false)
  const [abierto, setAbierto] = useState(false)
  useEffect(() => {
    const lee = () => setBajo(window.scrollY > 40)
    lee()
    window.addEventListener('scroll', lee, { passive: true })
    return () => window.removeEventListener('scroll', lee)
  }, [])
  const demo = (e: React.MouseEvent) => { e.preventDefault(); setAbierto(false); onDemo() }
  const destino = nav.demo.href ?? '#contacto'
  return (
    <header className={`s-encabezado${bajo ? ' bajo' : ''}`}>
      <a href="#" aria-label="Flowbit" className="logo cae" style={{ animationDelay: '.1s' }}><Logo /></a>
      <nav aria-label="Principal" className="escritorio">
        <ul className="mono">
          {nav.enlaces.map((l, i) => (
            <li key={l.href + l.texto} className="cae" style={{ animationDelay: `${0.2 + i * 0.06}s` }}>
              <a href={l.href} className="enlace"><span className="punto" /><span className="rotulo"><span>{l.texto}</span><span aria-hidden="true">{l.texto}</span></span></a>
            </li>
          ))}
          <li className="cae" style={{ animationDelay: '.56s', marginLeft: 16 }}><Pastilla texto={nav.demo.texto} href={destino} onClick={demo} /></li>
        </ul>
      </nav>
      <div className="telefono cae" style={{ animationDelay: '.3s' }}>
        <Pastilla texto="Demo" href={destino} onClick={demo} clase="chica" />
        <button className={`hamburguesa${abierto ? ' abierta' : ''}`} onClick={() => setAbierto(!abierto)} aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'} aria-expanded={abierto}><i /><i /></button>
      </div>
      {abierto && (
        <nav className="hoja" aria-label="Principal">
          <ul>
            {nav.enlaces.map((l, i) => (
              <li key={l.href + l.texto} style={{ animationDelay: `${0.2 + i * 0.06}s` }}><a href={l.href} onClick={() => setAbierto(false)}>{l.texto}</a></li>
            ))}
          </ul>
          <Pastilla texto={nav.demo.texto} href={destino} onClick={demo} clase="grande" />
        </nav>
      )}
    </header>
  )
}
