// La transición del carrusel a la ficha, en WebGL: la tarjeta es una malla que vuela hacia la cámara y se dobla con
// la velocidad (separación de color, desenfoque de movimiento, escáner, retícula y grano), con un HUD técnico encima.
// Va en una capa sobre toda la página: al terminar, `alLlegar` cambia de ruta y la capa se retira.

const VS = `
  attribute vec2 aUv;
  uniform float uP; uniform vec4 uDe; uniform vec2 uRes; uniform float uGiro;
  varying vec2 vUv; varying float vVel;
  void main() {
    // cada vértice llega a su tiempo: el centro primero, las orillas después (la malla se estira como tela)
    float d = distance(aUv, vec2(0.5));
    float p = clamp(uP * 1.3 - d * 0.42, 0.0, 1.0);
    p = p < 0.5 ? 4.0 * p * p * p : 1.0 - pow(-2.0 * p + 2.0, 3.0) / 2.0;
    vec2 desde = mix(uDe.xy, uDe.zw, aUv);
    vec2 pos = mix(desde, aUv * uRes, p);
    float vel = sin(p * 3.14159);
    float z = sin(aUv.x * 3.14159) * sin(aUv.y * 3.14159) * vel * 170.0 + (aUv.y - 0.5) * vel * 120.0;
    vec3 w = vec3(pos - uRes * 0.5, z);
    float a = uGiro * vel, c = cos(a), s = sin(a);
    w = vec3(w.x * c + w.z * s, w.y, -w.x * s + w.z * c);
    float f = 1400.0, k = f / (f - w.z);
    gl_Position = vec4(w.x * k / (uRes.x * 0.5), -w.y * k / (uRes.y * 0.5), 0.0, 1.0);
    vUv = aUv; vVel = vel;
  }`

const FS = `
  precision highp float;
  uniform sampler2D uTex; uniform sampler2D uCara; uniform float uP; uniform float uT; uniform vec2 uTam; uniform float uRadio;
  varying vec2 vUv; varying float vVel;
  float azar(vec2 c) { return fract(sin(dot(c, vec2(12.9898, 78.233))) * 43758.5453); }
  void main() {
    // esquinas redondeadas que se vuelven rectas al llegar
    vec2 px = vUv * uTam, q = abs(px - uTam * 0.5) - (uTam * 0.5 - uRadio);
    if (length(max(q, 0.0)) > uRadio) discard;
    // la imagen se asienta: entra con zoom y termina en su encuadre
    vec2 uv = 0.5 + (vUv - 0.5) * mix(0.55, 1.0, smoothstep(0.0, 1.0, uP));
    // ondulación, separación de color y desenfoque de movimiento hacia afuera, todo según la velocidad
    float onda = sin(uv.y * 38.0 + uT * 18.0) * 0.005 * vVel;
    vec2 rgb = vec2(0.012, 0.003) * vVel, sale = (vUv - 0.5) * 0.045 * vVel;
    vec3 col = vec3(0.0), caraCol = vec3(0.0);
    for (int i = 0; i < 7; i++) {
      vec2 o = sale * (float(i) / 6.0) + vec2(onda, 0.0);
      col += vec3(texture2D(uTex, uv + o + rgb).r, texture2D(uTex, uv + o).g, texture2D(uTex, uv + o - rgb).b);
      caraCol += texture2D(uCara, vUv + o * 0.6).rgb;
    }
    col /= 7.0; caraCol /= 7.0;
    // al inicio es la tarjeta tal cual; se funde en la portada mientras vuela
    col = mix(caraCol, col, smoothstep(0.1, 0.55, uP));
    // volumen: la malla doblada se ilumina al centro y se apaga en las orillas
    float bulto = sin(vUv.x * 3.14159) * sin(vUv.y * 3.14159);
    col *= mix(1.0, 0.62 + 0.5 * bulto, vVel);
    // un barrido de brillo cruza en diagonal, como luz sobre vidrio
    float banda = smoothstep(0.16, 0.0, abs((vUv.x + vUv.y) * 0.5 - (uP * 1.5 - 0.25)));
    col += vec3(0.55, 0.78, 1.0) * banda * 0.28 * vVel;
    // escáner: una línea de luz recorre la malla mientras vuela
    float y = fract(uP * 1.6);
    col += vec3(0.45, 0.72, 1.0) * smoothstep(0.012, 0.0, abs(vUv.y - y)) * vVel * 1.4;
    // retícula fina que sólo se ve en el vuelo
    vec2 cel = abs(fract(vUv * vec2(48.0, 30.0)) - 0.5);
    col += vec3(0.3, 0.55, 1.0) * step(0.47, max(cel.x, cel.y)) * vVel * 0.18;
    col += (azar(vUv * 900.0 + uT) - 0.5) * 0.06;
    gl_FragColor = vec4(col, 1.0);
  }`

/** La portada dibujada sin textos: la imagen del caso si existe; si no, el marcador de rayas. */
export function pintarPortada(ancho: number, alto: number, img?: HTMLImageElement | null) {
  const o = document.createElement('canvas'); o.width = ancho; o.height = alto
  const g = o.getContext('2d')!
  if (img) {
    const k = Math.max(ancho / img.naturalWidth, alto / img.naturalHeight), w = img.naturalWidth * k, h = img.naturalHeight * k
    g.drawImage(img, (ancho - w) / 2, (alto - h) / 2, w, h)
  } else {
    g.fillStyle = '#153a50'; g.fillRect(0, 0, ancho, alto)
    g.save(); g.translate(ancho / 2, alto / 2); g.rotate(-Math.PI / 4); g.fillStyle = '#1a4058'
    const L = ancho + alto
    for (let x = -L; x < L; x += 39.6) g.fillRect(x, -L, 19.8, 2 * L)
    g.restore()
  }
  const v = g.createLinearGradient(0, 0, 0, alto)
  v.addColorStop(0, 'rgba(17,17,17,0.55)'); v.addColorStop(0.3, 'rgba(17,17,17,0)'); v.addColorStop(0.55, 'rgba(17,17,17,0)'); v.addColorStop(1, 'rgba(17,17,17,0.9)')
  g.fillStyle = v; g.fillRect(0, 0, ancho, alto)
  return o
}

function pintarCara(w: number, h: number, nombre: string) {
  const o = document.createElement('canvas'); o.width = Math.round(w * 2); o.height = Math.round(h * 2)
  const g = o.getContext('2d')!; g.scale(2, 2)
  g.fillStyle = '#1786FF'; g.fillRect(0, 0, w, h)
  g.fillStyle = '#ffffff'; g.textAlign = 'center'; g.textBaseline = 'middle'
  const cy = h / 2
  g.font = '500 22px "Mark Pro", "Helvetica Neue", Arial, sans-serif'; g.fillText(nombre, w / 2, cy - 72)
  g.strokeStyle = 'rgba(255,255,255,0.55)'; g.setLineDash([3, 3]); g.lineWidth = 1
  g.strokeRect(w / 2 - 40, cy - 40, 80, 80); g.setLineDash([])
  g.font = '11px "GT America Mono", Menlo, monospace'; g.fillText('VER CASO →', w / 2, cy + 74)
  return o
}

function textura(gl: WebGLRenderingContext, unidad: number, fuente: TexImageSource) {
  gl.activeTexture(gl.TEXTURE0 + unidad)
  gl.bindTexture(gl.TEXTURE_2D, gl.createTexture())
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, fuente)
}

export type Viaje = {
  rect: { x: number; y: number; w: number; h: number }
  nombre: string
  numero: string
  slug: string
  portadaUrl?: string
  alLlegar: () => void
}

export async function viajarACaso(v: Viaje) {
  const reducido = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  const W = window.innerWidth, H = window.innerHeight, { rect } = v

  let img: HTMLImageElement | null = null
  if (v.portadaUrl) {
    img = new Image(); img.src = v.portadaUrl
    await img.decode().catch(() => { img = null })
  }

  const capa = document.createElement('div')
  capa.style.cssText = 'position:fixed;inset:0;z-index:100;background:rgba(17,17,17,0);transition:background-color .45s cubic-bezier(.65,0,.35,1)'
  const cv = document.createElement('canvas')
  const dpr = Math.min(2, window.devicePixelRatio || 1)
  cv.width = W * dpr; cv.height = H * dpr
  cv.style.cssText = 'position:absolute;inset:0;width:100%;height:100%;display:block'
  capa.appendChild(cv)
  document.body.appendChild(capa)

  const gl = cv.getContext('webgl', { antialias: true, premultipliedAlpha: false })
  const compila = (t: number, src: string) => { const s = gl!.createShader(t)!; gl!.shaderSource(s, src); gl!.compileShader(s); return s }
  const prog = gl?.createProgram()
  if (gl && prog) {
    gl.attachShader(prog, compila(gl.VERTEX_SHADER, VS)); gl.attachShader(prog, compila(gl.FRAGMENT_SHADER, FS)); gl.linkProgram(prog)
  }
  // Sin WebGL (o con movimiento reducido) se va directo a la ficha
  if (reducido || !gl || !prog || !gl.getProgramParameter(prog, gl.LINK_STATUS)) { capa.remove(); v.alLlegar(); return }
  gl.useProgram(prog)

  const C = 48, F = 30, uvs: number[] = [], idx: number[] = []
  for (let j = 0; j <= F; j++) for (let i = 0; i <= C; i++) uvs.push(i / C, j / F)
  for (let j = 0; j < F; j++) for (let i = 0; i < C; i++) { const a = j * (C + 1) + i, b = a + 1, c = a + C + 1, d = c + 1; idx.push(a, b, c, b, d, c) }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(uvs), gl.STATIC_DRAW)
  const loc = gl.getAttribLocation(prog, 'aUv'); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer()); gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array(idx), gl.STATIC_DRAW)
  textura(gl, 0, pintarPortada(Math.min(1920, W), Math.min(1200, H), img))
  textura(gl, 1, pintarCara(rect.w, rect.h, v.nombre))
  const u = (n: string) => gl.getUniformLocation(prog, n)
  gl.uniform1i(u('uTex'), 0); gl.uniform1i(u('uCara'), 1)
  gl.viewport(0, 0, cv.width, cv.height)
  gl.uniform2f(u('uRes'), W, H)
  gl.uniform4f(u('uDe'), rect.x, rect.y, rect.x + rect.w, rect.y + rect.h)
  gl.uniform1f(u('uGiro'), 0.32)
  gl.clearColor(0, 0, 0, 0)

  // HUD: dos ejes, cuatro esquinas y lecturas que acompañan el vuelo
  const hud = document.createElement('div')
  hud.style.cssText = "position:absolute;inset:0;pointer-events:none;color:#7fbcff;font:10px 'GT America Mono',Menlo,monospace;letter-spacing:.08em;text-transform:uppercase;white-space:nowrap"
  const nuevo = (css: string) => { const e = document.createElement('div'); e.style.cssText = 'position:absolute;' + css; hud.appendChild(e); return e }
  const ejeH = nuevo('left:0;right:0;height:1px;background:rgba(127,188,255,.55)'), ejeV = nuevo('top:0;bottom:0;width:1px;background:rgba(127,188,255,.55)')
  const bordes = ['border-width:1px 0 0 1px', 'border-width:1px 1px 0 0', 'border-width:0 0 1px 1px', 'border-width:0 1px 1px 0']
  const esq = bordes.map((b) => nuevo(`width:16px;height:16px;border-color:#7fbcff;border-style:solid;${b}`))
  const ruta = nuevo(''), carga = nuevo(''), coord = nuevo('')
  ruta.textContent = `CASO ${v.numero} → /proyectos/${v.slug}`
  capa.appendChild(hud)

  requestAnimationFrame(() => { capa.style.backgroundColor = '#111111' })

  const DUR = 1800, t0 = performance.now()
  const suave = (x: number) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2)
  const cuadro = (ahora: number) => {
    const T = Math.min(1, (ahora - t0) / DUR), e = suave(T)
    gl.clear(gl.COLOR_BUFFER_BIT)
    gl.uniform1f(u('uP'), T); gl.uniform1f(u('uT'), ahora / 1000)
    gl.uniform2f(u('uTam'), rect.w + (W - rect.w) * e, rect.h + (H - rect.h) * e)
    gl.uniform1f(u('uRadio'), 20 * (1 - e))
    gl.drawElements(gl.TRIANGLES, idx.length, gl.UNSIGNED_SHORT, 0)
    const mez = (a: number, b: number) => a + (b - a) * e
    const x0 = mez(rect.x, 24), y0 = mez(rect.y, 24), x1 = mez(rect.x + rect.w, W - 24), y1 = mez(rect.y + rect.h, H - 24), cx = (x0 + x1) / 2, cy = (y0 + y1) / 2
    hud.style.opacity = String(Math.min(1, T * 6) * (1 - Math.pow(Math.max(0, T - 0.82) / 0.18, 2)))
    ejeH.style.top = cy + 'px'; ejeH.style.transform = `scaleX(${Math.min(1, T * 3)})`
    ejeV.style.left = cx + 'px'; ejeV.style.transform = `scaleY(${Math.min(1, T * 3)})`
    const pos = [[x0, y0], [x1 - 16, y0], [x0, y1 - 16], [x1 - 16, y1 - 16]]
    esq.forEach((el, i) => { el.style.left = pos[i][0] + 'px'; el.style.top = pos[i][1] + 'px' })
    ruta.style.left = x0 + 24 + 'px'; ruta.style.top = y0 + 4 + 'px'
    carga.textContent = `CARGA ${String(Math.round(Math.min(1, T * 1.08) * 100)).padStart(3, '0')}%`
    carga.style.left = x1 - 110 + 'px'; carga.style.top = y1 - 20 + 'px'
    coord.textContent = `X ${Math.round(cx)} · Y ${Math.round(cy)} · Z ${Math.round((1 - e) * 1400)}`
    coord.style.left = cx + 12 + 'px'; coord.style.top = cy + 8 + 'px'
    if (T < 1) { requestAnimationFrame(cuadro); return }
    // ya es la portada: cambia la ruta debajo y la capa se retira un instante después
    v.alLlegar()
    requestAnimationFrame(() => requestAnimationFrame(() => {
      capa.style.transition = 'opacity .25s ease'; capa.style.opacity = '0'
      setTimeout(() => capa.remove(), 280)
    }))
  }
  requestAnimationFrame(cuadro)
}
