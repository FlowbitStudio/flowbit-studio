import type { EthosContenido } from '../contenido/tipos'
import Enlace from '../componentes/Enlace'
import useEntrada from '../componentes/useEntrada'
import './Ethos.css'

// Ethos: lámina clara que barre desde la izquierda; acordeón de cuatro tarjetas (pila en teléfono).
export default function Ethos({ c }: { c: EthosContenido }) {
  const ref = useEntrada<HTMLElement>()
  const renglones = partir(c.titulo, 3)
  return (
    <section className="s-ethos" id="nosotros" ref={ref}>
      <div className="lamina">
        <div className="cabeza">
          <div className="col">
            <h2 className="mono suave" style={{ animationDelay: '.6s' }}>{c.etiqueta}</h2>
            <p className="titulo">
              {renglones.map((r, i) => <span className="renglon" key={i}><span style={{ animationDelay: `${0.7 + i * 0.1}s` }}>{r}</span></span>)}
            </p>
          </div>
          <div className="col">
            <div className="raya" style={{ animationDelay: '.9s' }} />
            <p className="desc-larga suave" style={{ animationDelay: '1s' }}>{c.descripcion}</p>
            <Enlace texto={c.boton.texto} href={c.boton.href} className="suave" style={{ animationDelay: '1.15s' }} />
          </div>
        </div>
        <ul className="tarjetas">
          {c.tarjetas.map((t, i) => (
            <li className="tarjeta" key={i} style={{ animationDelay: `${1.1 + i * 0.12}s` }}>
              <div className={`cuerpo ${t.tono}`}>
                <div className="contenido">
                  <h3>{t.titulo}</h3>
                  <img className="icono" src={t.icono.url} alt={t.icono.alt} style={{ animationDelay: `${-i * 2}s` }} loading="lazy" />
                  <div className="pie mono">
                    <p>{String(i + 1).padStart(2, '0')} / {String(c.tarjetas.length).padStart(2, '0')}</p>
                    <p className="desc">{t.descripcion}</p>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// Reparte un título en n renglones de largo parecido (la entrada va renglón por renglón).
function partir(texto: string, n: number): string[] {
  if (texto.includes('\n')) return texto.split('\n')
  const palabras = texto.split(' '), meta = texto.length / n, r: string[] = []
  let actual = ''
  for (const p of palabras) {
    if (actual && (actual + ' ' + p).length > meta * 1.1 && r.length < n - 1) { r.push(actual); actual = p } else actual = actual ? actual + ' ' + p : p
  }
  r.push(actual)
  return r
}
