import camionesAConciertos from './kickoffs/camiones-a-conciertos'
import type { KickoffData } from './kickoff-types'

// Registra aquí cada deck de kickoff con su slug (usado en la URL /kickoff/:id)
export const kickoffs: Record<string, KickoffData> = {
  'camiones-a-conciertos': camionesAConciertos,
}
