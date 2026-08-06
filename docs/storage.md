# Storage — Supabase Storage es el default

*Decisión de arquitectura, 21 de abril de 2026.*

Para los CRMs a la medida que construye Flowbit (Paulo Trejo Arquitectura, Liz Anaya
Podología, futuros clientes), los archivos no estructurados — fotos de obra, diagnósticos
escaneados, reportes firmados, PDFs, imágenes de producto, consentimientos — viven en
**Supabase Storage**. No en el volumen del VPS, no en S3.

En la DB se guarda solo el `path` del bucket. El front los consume vía URLs firmadas + RLS.

## Por qué

Separar storage de compute evita que un cliente llene el disco del VPS y afecte el IO de
los demás CRMs. Se eligió Supabase Storage sobre S3 por tres razones:

1. **Egreso cero** dentro del proyecto Supabase, vs $0.09/GB en S3.
2. **Reutiliza las RLS policies** que ya se usan para las tablas — una sola capa de auth,
   cero código extra en backend.
3. **No mete un vendor adicional** (AWS) a un stack que ya opera sobre Supabase.

Sobre Cloudflare R2: sería más barato a gran escala (egreso cero + $0.015/GB) pero duplica
la capa de auth (signed URLs desde backend propio) y es overkill para la escala actual. Se
reevalúa migrar un CRM específico a R2 (API-compatible con S3, port trivial) **solo** si el
egreso pesa notoriamente en su factura de Supabase.

## Cómo aplicarlo

**Al diseñar un CRM nuevo:** crear el bucket en Supabase. Preferir **un bucket único con
path-prefix por `tenant_id`/`cliente_id`** sobre bucket-por-cliente. Habilitar RLS policies
que espejen las de las tablas relacionadas (ej. un paciente solo lee sus propios expedientes).

**Al redactar propuestas:** si el alcance menciona archivos (expedientes, fotos, reportes
firmados, PDFs), trata Supabase Storage como implícito en el stack técnico. **No prometas
"servidor propio", "disco dedicado" ni "VPS" como storage** — el VPS es solo compute.

**Al estimar costos al cliente:** el tier Pro de Supabase ($25 USD/mes) incluye 100GB de
storage + 250GB de egreso. Para volúmenes mayores, avisar al cliente y sumar el sobrecosto
de Supabase como add-on recurrente.

**Excepción:** si un cliente pide explícitamente AWS/S3 (por decisión previa suya,
compliance regulado o infraestructura heredada), el override está bien — pero valida el
porqué antes de ceder. El default queda Supabase.
