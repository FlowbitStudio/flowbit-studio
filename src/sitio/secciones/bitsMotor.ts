// Motor de Bits: 1200 puntos que pasan del ruido al orden en seis formaciones.
// Trabaja en el marco del diseño (1440 × 900 escritorio, 390 × 844 teléfono); la sección lo escala a la pantalla.

type Punto = Record<string, number | boolean | undefined> & { x: number; y: number; z: number; a: number }
type Pos = { x: number; y: number; z: number; vx: number; vy: number; vz: number; a: number; k: number; fase: number; lx?: number; ly?: number }
export type Camara = { sx: number; sy: number; d: number; yaw: number; pitch: number; roll: number }

export const CAM_ESCRITORIO: Camara[] = [
  { sx: 800, sy: 460, d: 1000, yaw: 0, pitch: 0, roll: 0 },            // ruido: la cámara está dentro de la nube
  { sx: 1050, sy: 450, d: 1040, yaw: 0, pitch: 0, roll: 0 },           // retícula: de frente, de arriba a abajo en la mitad derecha
  { sx: 864, sy: 532, d: 1264, yaw: 0.55, pitch: 0.25, roll: -0.12 },  // ∞: la cinta pasa rozando la cámara
  { sx: 450, sy: 470, d: 1500, yaw: 0, pitch: 0, roll: 0 },            // módulos: de frente en la mitad izquierda
  { sx: 764, sy: 560, d: 1540, yaw: -0.25, pitch: -0.15, roll: 0.02 }, // gráfica: un poco desde abajo, como edificios
  { sx: 720, sy: 450, d: 1192, yaw: 0, pitch: 0, roll: 0 },            // esfera: de frente, centrada
]
export const CAM_TELEFONO: Camara[] = [
  { sx: 250, sy: 422, d: 1300, yaw: 0, pitch: 0, roll: 0 },
  { sx: 195, sy: 565, d: 2087, yaw: 0, pitch: 0, roll: 0 },
  { sx: 172, sy: 565, d: 2249, yaw: 0.55, pitch: 0.25, roll: -0.12 },
  { sx: 201, sy: 569, d: 3235, yaw: 0, pitch: 0, roll: 0 },
  { sx: 211, sy: 573, d: 3047, yaw: -0.25, pitch: -0.15, roll: 0.02 },
  { sx: 195, sy: 570, d: 2648, yaw: 0, pitch: 0, roll: 0 },
]

const N = 1200, CX = 990, CY = 450, FOCO = 1500

function formaciones(): Punto[][] {
  const X0 = 600, X1 = 1380, Y0 = 130, Y1 = 770, W = X1 - X0, H = Y1 - Y0
  let s = 7
  const rnd = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646 }
  const f: Punto[][] = []
  // 0 · ruido: una nube que flota por toda la ventana
  f.push(Array.from({ length: N }, () => ({ x: 420 + rnd() * 1020, y: 40 + rnd() * 820, z: (rnd() - 0.5) * 700, a: 0 })))
  // 1 · rejilla: 30 columnas × 40 filas, vertical
  const paso = H / 39
  f.push(Array.from({ length: N }, (_, i) => ({ x: 990 + ((i % 30) - 14.5) * paso, y: Y0 + Math.floor(i / 30) * paso, z: 0, a: 0, c: i % 30, r: Math.floor(i / 30) })))
  // 2 · flujo: una cinta en ∞ de 12 hebras con media torsión; los puntos viajan por ella sin fin
  f.push(Array.from({ length: N }, (_, i) => { const l = Math.floor(i / 100), k = i % 100; return { x: 0, y: 0, z: 0, a: 0, onda: l, k, u0: k / 100 * Math.PI * 2, w: (l - 5.5) / 5.5, cinta: true } }))
  // 3 · módulos: 12 bloques de 10 × 10
  f.push(Array.from({ length: N }, (_, i) => {
    const m = Math.floor(i / 100), k = i % 100
    const cx = X0 + (m % 4) * 200, cy = Y0 + 20 + Math.floor(m / 4) * 205
    return { x: cx + (k % 10) * 17, y: cy + Math.floor(k / 10) * 17, z: 0, a: 0, m, modulo: true }
  }))
  // 4 · gráfica: 12 barras con volumen
  const alto = [0.32, 0.4, 0.36, 0.5, 0.46, 0.58, 0.55, 0.68, 0.64, 0.78, 0.86, 0.96]
  f.push(Array.from({ length: N }, (_, i) => {
    const b = Math.floor(i / 100), k = i % 100, col = k % 5, fila = Math.floor(k / 5)
    const h = alto[b] * H, p = h / 19
    return { x: X0 + b * 66 + (col % 3) * 10, y: Y1 - fila * p, z: (col < 3 ? 0 : 1) * 18 - 9 + (col - 2) * 4, a: 0, b, fila }
  }))
  // 5 · un solo sistema: una esfera de Fibonacci que gira sobre su eje
  f.push(Array.from({ length: N }, (_, i) => {
    const ly = 1 - 2 * (i + 0.5) / N, rr = Math.sqrt(1 - ly * ly), th = i * 2.399963
    return { x: 0, y: 0, z: 0, a: 0, ux: rr * Math.cos(th), uy: ly, uz: rr * Math.sin(th), ly, esfera: true }
  }))
  return f
}

const pulso = (d: number, ancho: number) => Math.max(0, 1 - Math.abs(d) / ancho)
const modEncendido = (m: number, t: number) => { const v = Math.sin(t * 0.7 + m * 2.17) + Math.sin(t * 0.43 + m * 1.31) * 0.6; return Math.max(0, Math.min(1, (v - 0.25) * 2.2)) }
const n_ = (q: Punto, k: string) => q[k] as number

// Luz viva: cuánto se enciende cada punto ahora, según la etapa
function luz(n: number, q: Punto, t: number, i: number) {
  if (n === 0) return Math.sin(t * 2.3 + i * 12.9898) > 0.985 ? 1 : 0
  if (n === 1) return (n_(q, 'c') + n_(q, 'r')) % 2 ? 1 : 0
  if (n === 2) { const w = (n_(q, 'k') - t * 30 - n_(q, 'onda') * 9) % 50, d = w < 0 ? w + 50 : w; return Math.max(pulso(d, 9), pulso(50 - d, 9)) }
  if (n === 3) return modEncendido(n_(q, 'm'), t)
  if (n === 4) { const ciclo = (t * 0.32 + n_(q, 'b') * 0.11) % 1.5, nivel = Math.min(1, ciclo / 1.1) * 19.5; return ciclo < 1.35 && n_(q, 'fila') <= nivel ? 1 : 0 }
  if (n === 5) { const w = ((n_(q, 'ly') + 1) * 30 - t * 9) % 60, d = w < 0 ? w + 60 : w; return Math.max(0.42 + 0.12 * Math.sin(t * 0.9 + n_(q, 'ly') * 3), pulso(Math.min(d, 60 - d), 8), Math.sin(t * 1.7 + i * 7.31) > 0.975 ? 1 : 0) }
  return 0
}

// Las formaciones vivas calculan su lugar en cada cuadro: la cinta ∞, la esfera y los módulos que se adelantan
function punto(q: Punto, t: number) {
  if (q.cinta) {
    const u = n_(q, 'u0') + t * 0.14, s = Math.sin(u), c = Math.cos(u), den = 1 + s * s, R = 360
    const x = R * c / den, y = R * s * c / den
    const u2 = u + 0.01, s2 = Math.sin(u2), c2 = Math.cos(u2), den2 = 1 + s2 * s2
    const dx = R * c2 / den2 - x, dy = R * s2 * c2 / den2 - y, L = Math.hypot(dx, dy) || 1
    const nx = -dy / L, ny = dx / L, giro = u / 2, ancho = 46 * n_(q, 'w')
    return { x: CX + x + nx * Math.cos(giro) * ancho, y: CY + y * 1.25 + ny * Math.cos(giro) * ancho, z: Math.sin(giro) * ancho + Math.sin(u * 2) * 40 }
  }
  if (q.esfera) {
    const R = 300, ang = t * 0.16, ca = Math.cos(ang), sa = Math.sin(ang), inc = 0.38, ci = Math.cos(inc), si = Math.sin(inc)
    const x1 = n_(q, 'ux') * ca + n_(q, 'uz') * sa, z1 = -n_(q, 'ux') * sa + n_(q, 'uz') * ca
    const y2 = n_(q, 'uy') * ci - z1 * si, z2 = n_(q, 'uy') * si + z1 * ci
    return { x: CX + x1 * R, y: CY + y2 * R, z: z2 * R }
  }
  if (q.modulo) return { x: q.x, y: q.y, z: 40 - modEncendido(n_(q, 'm'), t) * 120 }
  return q
}

export type Entrada = { avance: () => number; raton: () => { x: number; y: number }; camaras: () => Camara[]; ancho: () => number; alto: () => number }

export function arrancarBits(cv: HTMLCanvasElement, e: Entrada) {
  const f = formaciones()
  const pos: Pos[] = f[0].map((p, i) => ({ x: p.x, y: p.y, z: p.z, vx: 0, vy: 0, vz: 0, a: 0, k: 0.006 + ((i * 0.6180339) % 1) * 0.012, fase: (i * 2.399) % 6.283 }))
  const giro = { y: 0, x: 0 }
  let pSuave = 0, raf = 0
  const mezcla = (A: Camara, B: Camara, fr: number, k: keyof Camara) => A[k] + (B[k] - A[k]) * fr
  const dibuja = (t: number) => {
    raf = requestAnimationFrame(dibuja)
    const g = cv.getContext('2d'); if (!g) return
    const W = e.ancho(), Hh = e.alto(), cam = e.camaras(), { x: mx, y: my } = e.raton()
    g.setTransform(2, 0, 0, 2, 0, 0)
    const tiempo = t / 1000
    // el progreso se suaviza: la formación cambia con una curva larga, no de golpe
    pSuave += (Math.max(0, Math.min(5, e.avance())) - pSuave) * 0.035
    const p = pSuave, et = Math.min(4, Math.floor(p)), lin = p - et
    const fr = lin < 0.5 ? 4 * lin * lin * lin : 1 - Math.pow(-2 * lin + 2, 3) / 2
    const A = f[et], B = f[Math.min(5, et + 1)]
    const hay = mx > -1000
    // giro apenas perceptible: la escena respira y se inclina hacia el cursor
    giro.y += ((Math.sin(tiempo * 0.21) * 0.07 + (hay ? (mx - W / 2) / W * 0.09 : 0)) - giro.y) * 0.03
    giro.x += ((Math.sin(tiempo * 0.16 + 1) * 0.035 + (hay ? (my - Hh / 2) / Hh * -0.05 : 0)) - giro.x) * 0.03
    // la cámara viaja: entre etapas se aleja, gira y alabea, y vuelve a acercarse
    const CA = cam[et], CB = cam[Math.min(5, et + 1)], viaje = Math.sin(Math.PI * fr), lado = et % 2 ? -1 : 1
    const SX = mezcla(CA, CB, fr, 'sx'), SY = mezcla(CA, CB, fr, 'sy'), dBase = mezcla(CA, CB, fr, 'd')
    const D = dBase + viaje * dBase * 0.75 + Math.sin(tiempo * 0.23) * 60
    const yaw = mezcla(CA, CB, fr, 'yaw') + viaje * 0.45 * lado + giro.y
    const pitch = mezcla(CA, CB, fr, 'pitch') + viaje * 0.2 + giro.x
    const roll = mezcla(CA, CB, fr, 'roll') + viaje * 0.28 * lado
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cx = Math.cos(pitch), sx = Math.sin(pitch), cr = Math.cos(roll), sr = Math.sin(roll)
    // estela: mientras la cámara viaja, el cuadro anterior no se borra del todo
    g.fillStyle = 'rgba(17,17,17,' + (1 - viaje * 0.62) + ')'
    g.fillRect(0, 0, W, Hh)
    const dibujo: { px: number; py: number; lx: number; ly: number; esc: number; a: number; vel: number; z: number }[] = []
    for (let i = 0; i < N; i++) {
      const a = A[i], b = B[i], q = pos[i]
      const pa = punto(a, tiempo), pb = punto(b, tiempo)
      const r = Math.sin(tiempo * 1.1 + q.fase) * 2.2
      const tx = pa.x + (pb.x - pa.x) * fr, ty = pa.y + (pb.y - pa.y) * fr + r, tz = pa.z + (pb.z - pa.z) * fr + Math.cos(tiempo * 0.8 + q.fase) * 6
      q.vx += (tx - q.x) * q.k; q.vy += (ty - q.y) * q.k; q.vz += (tz - q.z) * q.k
      q.vx *= 0.9; q.vy *= 0.9; q.vz *= 0.9
      q.x += q.vx; q.y += q.vy; q.z += q.vz
      const x0 = q.x - CX, y0 = q.y - CY
      const x1 = x0 * cy + q.z * sy, z1 = -x0 * sy + q.z * cy
      const y2 = y0 * cx - z1 * sx, z2 = y0 * sx + z1 * cx
      const x3 = x1 * cr - y2 * sr, y3 = x1 * sr + y2 * cr
      const zc = D + z2
      if (zc < 60) { q.lx = undefined; continue }
      const esc = FOCO / zc
      const px = SX + x3 * esc, py = SY + y3 * esc
      // el cursor sólo aparta con suavidad
      const dx = px - mx, dy = py - my, d2 = dx * dx + dy * dy
      if (d2 < 40000) { const d = Math.sqrt(d2) || 1, fz = Math.pow((200 - d) / 200, 2); q.vx += dx / d * fz * 0.8; q.vy += dy / d * fz * 0.8; q.vz -= fz * 0.9 }
      const la = Math.max(a.a * 0.6, luz(et, a, tiempo, i)), lb = Math.max(b.a * 0.6, luz(Math.min(5, et + 1), b, tiempo, i))
      q.a += (la + (lb - la) * fr - q.a) * 0.22
      const lx = q.lx === undefined ? px : q.lx, ly = q.ly === undefined ? py : q.ly
      q.lx = px; q.ly = py
      dibujo.push({ px, py, lx, ly, esc, a: q.a, vel: Math.min(1, (Math.abs(q.vx) + Math.abs(q.vy)) * 0.5), z: zc })
    }
    dibujo.sort((m, n) => n.z - m.z)
    for (const d of dibujo) {
      const prof = Math.max(0.25, Math.min(2.4, d.esc)), s = (3 + d.a * 1.6) * prof
      const m = Math.min(1, d.a), rr = Math.round(218 - 195 * m), gg = Math.round(218 - 84 * m), bb = Math.round(218 + 37 * m)
      const color = 'rgba(' + rr + ',' + gg + ',' + bb + ',' + Math.min(1, (0.42 + d.vel * 0.45 + m * 0.55) * prof) + ')'
      // desenfoque de movimiento: el punto que viaja se dibuja como trazo
      const ux = d.px - d.lx, uy = d.py - d.ly
      if (viaje > 0.04 || ux * ux + uy * uy > 64) {
        g.strokeStyle = color; g.lineWidth = s * 0.85; g.lineCap = 'round'
        g.beginPath(); g.moveTo(d.px - ux * 2.2, d.py - uy * 2.2); g.lineTo(d.px, d.py); g.stroke()
      } else { g.fillStyle = color; g.fillRect(d.px - s / 2, d.py - s / 2, s, s) }
    }
  }
  raf = requestAnimationFrame(dibuja)
  return () => cancelAnimationFrame(raf)
}
