// Motor de «Por qué Flowbit»: 1000 puntos en nueve pantallas. Un respiro diminuto y luego una forma enorme, alternados.
import type { Camara, Entrada } from './bitsMotor'

const N = 1000, CX = 990, CY = 450, FOCO = 1500

const PAUSA: Camara = { sx: 720, sy: 400, d: 1500, yaw: 0, pitch: 0, roll: 0 }
export const CAM_ESCRITORIO: Camara[] = [
  { sx: 720, sy: 701, d: 938, yaw: 0, pitch: 0, roll: 0 },      // portada: un hilo de lado a lado bajo el título
  PAUSA,                                                         // respiro: la semilla
  { sx: 960, sy: 450, d: 620, yaw: 0, pitch: 0.12, roll: 0 },   // cilindro: enorme, se sale arriba y abajo
  PAUSA,                                                         // respiro: el aro
  { sx: 720, sy: 450, d: 900, yaw: 0, pitch: 1.15, roll: 0 },   // toro: llena la pantalla, el texto vive en su centro
  PAUSA,                                                         // respiro: la raya
  { sx: 1010, sy: 405, d: 1277, yaw: 0, pitch: 0.2, roll: 0 },  // hélice: mediana, a la derecha
  PAUSA,                                                         // respiro: la moneda
  { sx: 820, sy: 450, d: 700, yaw: 0, pitch: 0.35, roll: 0 },   // discos: la pila enorme detrás del texto
]
const PAUSA_T: Camara = { sx: 195, sy: 380, d: 1500, yaw: 0, pitch: 0, roll: 0 }
export const CAM_TELEFONO: Camara[] = [
  { sx: 195, sy: 640, d: 2800, yaw: 0, pitch: 0, roll: 0 },
  PAUSA_T,
  { sx: 230, sy: 590, d: 1200, yaw: 0, pitch: 0.12, roll: 0 },
  PAUSA_T,
  { sx: 195, sy: 590, d: 1700, yaw: 0, pitch: 1.15, roll: 0 },
  PAUSA_T,
  { sx: 195, sy: 590, d: 2100, yaw: 0, pitch: 0.2, roll: 0 },
  PAUSA_T,
  { sx: 195, sy: 590, d: 1600, yaw: 0, pitch: 0.35, roll: 0 },
]

type F = { x?: number; y?: number; z?: number; hilo?: boolean; k?: number; semilla?: boolean; j?: number; cilindro?: boolean; anillo?: number; ang0?: number; aro?: boolean; toro?: boolean; u?: number; v?: number; raya?: boolean; helice?: boolean; s?: number; w?: number; moneda?: boolean; disco?: boolean; d?: number }

function formaciones(): F[][] {
  const f: F[][] = []
  const de = (fn: (i: number) => F) => Array.from({ length: N }, (_, i) => fn(i))
  // 0 · respiro: un solo hilo horizontal
  f.push(de((i) => ({ x: CX - 350 + (i / (N - 1)) * 700, y: CY, z: 0, k: i, hilo: true })))
  // respiro 1 · una semilla
  f.push(de((i) => { const j = i % 90, ly = 1 - 2 * (j + 0.5) / 90, rr = Math.sqrt(1 - ly * ly), th = j * 2.399963; return { x: CX + rr * Math.cos(th) * 16, y: CY + ly * 16, z: rr * Math.sin(th) * 16, semilla: true, j } }))
  // 1 · cilindro que se escanea: diagnóstico es revisar cada capa antes de proponer
  f.push(de((i) => { const anillo = Math.floor(i / 40), k = i % 40; return { cilindro: true, anillo, ang0: k / 40 * Math.PI * 2 + anillo * 0.08 } }))
  // respiro 2 · un aro pequeño
  f.push(de((i) => { const j = i % 120, a = j / 120 * Math.PI * 2; return { x: CX + Math.cos(a) * 46, y: CY + Math.sin(a) * 46, z: 0, aro: true, j } }))
  // 2 · toro: un circuito cerrado por donde corre la inteligencia
  f.push(de((i) => ({ toro: true, u: i % 50, v: Math.floor(i / 50) })))
  // respiro 3 · una raya vertical
  f.push(de((i) => { const j = i % 60; return { x: CX, y: CY - 55 + j * (110 / 59), z: 0, raya: true, j } }))
  // 3 · hélice ascendente: el azul la sube semana a semana
  f.push(de((i) => ({ helice: true, s: Math.floor(i / 5) / 199, w: (i % 5) - 2 })))
  // respiro 4 · una moneda que gira
  f.push(de((i) => ({ moneda: true, j: i % 110 })))
  // 4 · discos apilados: cinco módulos que giran cada uno a su ritmo
  f.push(de((i) => ({ disco: true, d: Math.floor(i / 200), k: i % 200 })))
  return f
}

const pulso = (d: number, w: number) => Math.max(0, 1 - Math.abs(d) / w)
const lugar = (q: F, t: number) => {
  if (q.hilo) return { x: q.x!, y: CY + Math.sin(t * 0.8 + q.k! * 0.012) * 4, z: 0 }
  if (q.cilindro) { const a = q.ang0! + t * 0.25; return { x: CX + Math.cos(a) * 170, y: CY - 260 + q.anillo! * (520 / 24), z: Math.sin(a) * 170 } }
  if (q.toro) { const u = q.u! / 50 * Math.PI * 2 + t * 0.15, v = q.v! / 20 * Math.PI * 2, R = 230 + 85 * Math.cos(v); return { x: CX + Math.cos(u) * R, y: CY + 85 * Math.sin(v), z: Math.sin(u) * R } }
  if (q.helice) { const a = q.s! * Math.PI * 8 + t * 0.3, r = 210 + q.w! * 14; return { x: CX + Math.cos(a) * r, y: CY + 280 - q.s! * 560, z: Math.sin(a) * r } }
  if (q.moneda) { const r = Math.sqrt((q.j! + 0.5) / 110) * 44, a = q.j! * 2.399963 + t * 0.6; return { x: CX + Math.cos(a) * r, y: CY + Math.sin(a) * r * 0.35, z: Math.sin(a) * r } }
  if (q.disco) {
    const R = [130, 210, 160, 240, 185][q.d!], vel = [0.3, -0.2, 0.4, -0.15, 0.25][q.d!]
    const r = Math.sqrt((q.k! + 0.5) / 200) * R, a = q.k! * 2.399963 + t * vel
    return { x: CX + Math.cos(a) * r, y: CY - 240 + q.d! * 120, z: Math.sin(a) * r }
  }
  return { x: q.x!, y: q.y!, z: q.z! }
}
const luz = (q: F, t: number) => {
  if (q.hilo) { const w = (q.k! - t * 140) % 1000, d = w < 0 ? w + 1000 : w; return pulso(Math.min(d, 1000 - d), 40) }
  if (q.semilla) return 0.55 + 0.45 * Math.sin(t * 2.2)
  if (q.aro) { const w = (q.j! - t * 40) % 120, d = w < 0 ? w + 120 : w; return pulso(Math.min(d, 120 - d), 18) }
  if (q.raya) { const w = (q.j! - t * 30) % 60, d = w < 0 ? w + 60 : w; return pulso(Math.min(d, 60 - d), 8) }
  if (q.moneda) return 0.7
  if (q.cilindro) { const nivel = ((t * 0.3) % 1.3) * 25; if (Math.abs(q.anillo! - nivel) < 1.1) return 1; return q.anillo! < nivel ? 0.35 : 0 }
  if (q.toro) { let m = 0; for (let c = 0; c < 3; c++) { const w = (q.u! - t * 9 + c * 16.7) % 50, d = w < 0 ? w + 50 : w; m = Math.max(m, pulso(Math.min(d, 50 - d), 3.5)) } return m }
  if (q.helice) { const frente = (t * 0.22) % 1.25; if (q.s! > frente) return 0; return frente - q.s! < 0.04 ? 1 : 0.75 }
  if (q.disco) { const c = Math.floor((t * 0.8) % 7); return 4 - q.d! < c ? 1 : 0 }
  return 0
}

export function arrancarPorque(cv: HTMLCanvasElement, e: Entrada) {
  const f = formaciones()
  const pos = f[0].map((p, i) => ({ x: p.x!, y: p.y!, z: p.z!, vx: 0, vy: 0, vz: 0, a: 0, k: 0.006 + ((i * 0.6180339) % 1) * 0.012, fase: (i * 2.399) % 6.283, lx: undefined as number | undefined, ly: undefined as number | undefined }))
  const giro = { y: 0, x: 0 }
  let pSuave = 0, raf = 0
  const mezcla = (A: Camara, B: Camara, fr: number, k: keyof Camara) => A[k] + (B[k] - A[k]) * fr
  const dibuja = (t: number) => {
    raf = requestAnimationFrame(dibuja)
    const g = cv.getContext('2d'); if (!g) return
    const W = e.ancho(), H = e.alto(), cam = e.camaras(), { x: mx, y: my } = e.raton()
    g.setTransform(2, 0, 0, 2, 0, 0)
    const tiempo = t / 1000
    pSuave += (Math.max(0, Math.min(8, e.avance())) - pSuave) * 0.035
    const p = pSuave, et = Math.min(7, Math.floor(p)), lin = p - et
    const fr = lin < 0.5 ? 4 * lin * lin * lin : 1 - Math.pow(-2 * lin + 2, 3) / 2
    const A = f[et], B = f[Math.min(8, et + 1)]
    const hay = mx > -1000
    giro.y += ((Math.sin(tiempo * 0.21) * 0.07 + (hay ? (mx - W / 2) / W * 0.09 : 0)) - giro.y) * 0.03
    giro.x += ((Math.sin(tiempo * 0.16 + 1) * 0.035 + (hay ? (my - H / 2) / H * -0.05 : 0)) - giro.x) * 0.03
    // la cámara viaja: entre etapas se aleja, gira y alabea; en reposo entra y sale despacio
    const CA = cam[et], CB = cam[Math.min(8, et + 1)], viaje = Math.sin(Math.PI * fr), lado = et % 2 ? -1 : 1
    const SX = mezcla(CA, CB, fr, 'sx'), SY = mezcla(CA, CB, fr, 'sy'), dBase = mezcla(CA, CB, fr, 'd')
    const D = dBase + viaje * Math.max(900, dBase * 0.6) + Math.sin(tiempo * 0.23) * 60
    const yaw = mezcla(CA, CB, fr, 'yaw') + viaje * 0.45 * lado + giro.y
    const pitch = mezcla(CA, CB, fr, 'pitch') + viaje * 0.2 + giro.x
    const roll = mezcla(CA, CB, fr, 'roll') + viaje * 0.28 * lado
    const cy = Math.cos(yaw), sy = Math.sin(yaw), cx = Math.cos(pitch), sx = Math.sin(pitch), cr = Math.cos(roll), sr = Math.sin(roll)
    // estela: mientras la cámara viaja, el cuadro anterior no se borra del todo
    g.fillStyle = 'rgba(17,17,17,' + (1 - viaje * 0.62) + ')'
    g.fillRect(0, 0, W, H)
    const lista: { px: number; py: number; lx: number; ly: number; esc: number; a: number; z: number }[] = []
    for (let i = 0; i < N; i++) {
      const a = A[i], b = B[i], q = pos[i]
      const pa = lugar(a, tiempo), pb = lugar(b, tiempo)
      const r = Math.sin(tiempo * 1.1 + q.fase) * 2
      const tx = pa.x + (pb.x - pa.x) * fr, ty = pa.y + (pb.y - pa.y) * fr + r, tz = pa.z + (pb.z - pa.z) * fr
      q.vx += (tx - q.x) * q.k; q.vy += (ty - q.y) * q.k; q.vz += (tz - q.z) * q.k
      q.vx *= 0.9; q.vy *= 0.9; q.vz *= 0.9
      q.x += q.vx; q.y += q.vy; q.z += q.vz
      const x0 = q.x - CX, y0 = q.y - CY, x1 = x0 * cy + q.z * sy, z1 = -x0 * sy + q.z * cy, y2 = y0 * cx - z1 * sx, z2 = y0 * sx + z1 * cx
      const x3 = x1 * cr - y2 * sr, y3 = x1 * sr + y2 * cr, zc = D + z2
      if (zc < 60) { q.lx = undefined; continue }
      const esc = FOCO / zc, px = SX + x3 * esc, py = SY + y3 * esc
      const dx = px - mx, dy = py - my, d2 = dx * dx + dy * dy
      if (d2 < 40000) { const d = Math.sqrt(d2) || 1, fz = Math.pow((200 - d) / 200, 2); q.vx += dx / d * fz * 0.8; q.vy += dy / d * fz * 0.8; q.vz -= fz * 0.9 }
      const la = luz(a, tiempo), lb = luz(b, tiempo)
      q.a += (la + (lb - la) * fr - q.a) * 0.22
      const lx = q.lx === undefined ? px : q.lx, ly = q.ly === undefined ? py : q.ly
      q.lx = px; q.ly = py
      lista.push({ px, py, lx, ly, esc, a: q.a, z: zc })
    }
    lista.sort((m, n) => n.z - m.z)
    for (const d of lista) {
      const prof = Math.max(0.3, Math.min(2.4, d.esc)), m = Math.min(1, d.a), s = (3 + m * 1.4) * prof
      const color = 'rgba(' + Math.round(218 - 195 * m) + ',' + Math.round(218 - 84 * m) + ',' + Math.round(218 + 37 * m) + ',' + Math.min(1, (0.42 + m * 0.55) * prof) + ')'
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
