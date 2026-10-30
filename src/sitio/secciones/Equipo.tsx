import { useRef, useState } from 'react'
import type { EquipoContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import './Equipo.css'

// Una franja por persona que se abre al tocarla; sólo una abierta a la vez, con velo detrás.
export default function Equipo({ c }: { c: EquipoContenido }) {
  const ref = useEntrada<HTMLElement>(0.1)
  const [abierto, setAbierto] = useState(-1)
  const espera = useRef<ReturnType<typeof setTimeout>>(undefined)
  const tocar = (i: number) => {
    clearTimeout(espera.current)
    if (abierto === i) { setAbierto(-1); return }
    if (abierto !== -1) { setAbierto(-1); espera.current = setTimeout(() => setAbierto(i), 450); return }
    setAbierto(i)
  }
  const total = String(c.miembros.length).padStart(2, '0')
  return (
    <div className="s-equipo">
      <section className="lamina" ref={ref} id="equipo">
        <button type="button" className={`velo${abierto === -1 ? '' : ' velo-on'}`} aria-label="Cerrar" onClick={() => setAbierto(-1)} />
        <div className="mono suave cinta-sup" style={{ animationDelay: '.6s' }}>
          <span aria-hidden="true">{c.titulo}</span><h2>{c.titulo}</h2><span aria-hidden="true">{c.titulo}</span>
        </div>
        <div className="centro">
          <div className="intro">
            <p className="mono suave" style={{ animationDelay: '.8s' }}>{c.descripcion}</p>
            <Enlace texto={c.boton.texto} onClick={() => tocar(0)} className="suave" style={{ animationDelay: '.95s' }} />
          </div>
          <div className="pila">
            <p className="frase"><span className="renglon"><span style={{ animationDelay: '1s' }}>{c.frases[0]}</span></span></p>
            <div className="franjas suave" style={{ animationDelay: '1.15s', gridTemplateColumns: `repeat(${c.miembros.length}, minmax(0, 1fr))` }}>
              {c.miembros.map((m, i) => (
                <div className={`miembro${abierto === i ? ' abierta' : ''}`} key={m.nombre}>
                  <button type="button" className="franja" aria-expanded={abierto === i} aria-label={m.nombre} onClick={() => tocar(i)}>
                    {m.foto
                      ? <span className="foto" style={{ backgroundImage: `url("${m.foto.url}")` }} />
                      : <><span className="foto pendiente" /><span className="mono falta">[Foto de {m.nombre.split(' ')[0]} — pendiente]</span></>}
                    <span className="puesto mono"><span className="pt" />{m.puesto}</span>
                  </button>
                  <div className="ficha">
                    <div className="fila-a">
                      <p className="mono num">{String(i + 1).padStart(2, '0')} / {total}</p>
                      <div className="quien"><p>{m.nombre}</p><span className="mono chip">{m.puesto}</span></div>
                    </div>
                    <div className="fila-b">
                      <div className="ir">{m.enlace && <a href={m.enlace.href} className="enlace" target="_blank" rel="noreferrer"><span className="punto" /><span className="rotulo"><span>{m.enlace.texto}</span><span aria-hidden="true">{m.enlace.texto}</span></span></a>}</div>
                      <p className="bio">{m.bio}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <p className="frase"><span className="renglon"><span style={{ animationDelay: '1.25s' }}>{c.frases[1]}</span></span></p>
          </div>
        </div>
      </section>
    </div>
  )
}
