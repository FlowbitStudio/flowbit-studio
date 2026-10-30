import type { CSSProperties, MouseEventHandler } from 'react'

// El botón del sitio: punto que se enfoca, texto que se desliza y cuatro esquinas que se abren.
// Va como <a> si trae href; si no, como <button>.
type Props = {
  texto: string
  href?: string
  onClick?: MouseEventHandler
  className?: string
  style?: CSSProperties
}

const Esquina = ({ n }: { n: number }) => (
  <svg className={`esquina e${n}`} viewBox="0 0 10 10" fill="none" aria-hidden="true">
    <path d="M0.5 0.2L0.5 9.2M0.2 0.5L9.2 0.5" stroke="currentColor" />
  </svg>
)

export default function Enlace({ texto, href, onClick, className = '', style }: Props) {
  const cuerpo = (
    <>
      <span className="punto" />
      <span className="rotulo"><span>{texto}</span><span aria-hidden="true">{texto}</span></span>
      <Esquina n={1} /><Esquina n={2} /><Esquina n={3} /><Esquina n={4} />
    </>
  )
  if (href) return <a href={href} onClick={onClick} className={`enlace ${className}`} style={style}>{cuerpo}</a>
  return <button type="button" onClick={onClick} className={`enlace ${className}`} style={style}>{cuerpo}</button>
}
