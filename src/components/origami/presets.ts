import type { OrigamiMaterialConfig } from './material'
import type { EnvPreset } from './OrigamiIcon'

// Flowbit default look — aplicar a todos los íconos Origami del sitio
// salvo que un caso puntual requiera variación.
export const flowbitIconPreset: {
  size: number
  envPreset: EnvPreset
  material: Partial<OrigamiMaterialConfig>
} = {
  size: 267,
  envPreset: 'studio',
  material: {
    mode: 'standard',
    color: '#2e2e2e',
    metalness: 0.88,
    roughness: 0.47,
    envIntensity: 0,
    emissive: '#000000',
    emissiveIntensity: 0.95,
  },
}
