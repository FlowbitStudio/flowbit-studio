export interface ProposalEmailInput {
  contacto: string
  version: string
  slug: string
  fecha: string
  subjectLine: string
}

export interface ProposalEmail {
  subject: string
  body: string
  htmlBody: string
}

const SITE_URL = 'https://flowbit.studio'
const LOGO_URL = `${SITE_URL}/logo-flowbit.png`

const FONT_MONO = "'Courier New','Space Mono',monospace"
const FONT_DISPLAY = "'Helvetica Neue',Helvetica,Arial,sans-serif"
const FONT_BODY = 'Arial,Helvetica,sans-serif'

const COLOR_BLUE = '#1786ff'
const COLOR_BODY = '#687787'
const COLOR_MUTED = '#999999'
const COLOR_DIVIDER = '#e8e8e8'
const COLOR_BLACK = '#000000'
const COLOR_WHITE = '#ffffff'
const COLOR_BG = '#f5f5f5'

export function buildProposalEmail(input: ProposalEmailInput): ProposalEmail {
  const { contacto, version, slug, fecha, subjectLine } = input
  const url = `${SITE_URL}/propuestas/${slug}`
  const subject = `Propuesta comercial · ${subjectLine} (${version})`

  const body = `Hola ${contacto},

Te compartimos la propuesta comercial basada en nuestra última conversación. Cada módulo, entregable e inversión están pensados para tu proyecto.

Explórala con calma y avísame si tienes dudas.

Ver propuesta completa → ${url}

QUÉ INCLUYE
01 · Alcance detallado y entregables — cada módulo con funcionalidades y criterios de aceptación.
02 · Inversión transparente y condiciones de pago — precios claros, desglose por fase, sin letra chica.
03 · Servicios adicionales que maximizan el impacto — soporte continuo, automatizaciones, hosting y más.

"No solo desarrollamos. Diseñamos sistemas que conectan a las marcas con las personas que importan."

SIGUIENTE PASO
Hagamos crecer tu negocio juntos y descubre que la era digital está al alcance de todos.

Esta propuesta tiene una vigencia de 30 días a partir de la fecha de envío.

—
André Cortés
Fundador · Flowbit Studio
`

  const htmlBody = `<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${subject}</title>
</head>
<body style="margin:0; padding:0; background:${COLOR_BG}; -webkit-font-smoothing:antialiased;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${COLOR_BG};">
  <tr>
    <td align="center" style="padding:24px 0;">
      <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="background:${COLOR_WHITE}; max-width:600px; width:100%;">
        <tr>
          <td style="padding:40px 48px 0 48px;">
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td align="left" valign="middle" style="width:50%;">
                  <img src="${LOGO_URL}" alt="Flowbit" width="103" style="display:block; height:auto; border:0; outline:none; text-decoration:none;">
                </td>
                <td align="right" valign="middle" style="width:50%; font-family:${FONT_MONO}; font-weight:bold; font-size:11px; color:${COLOR_MUTED}; letter-spacing:0.66px; text-transform:uppercase;">
                  ${fecha}
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 48px 0 48px;">
            <div style="height:1px; background:${COLOR_DIVIDER}; line-height:1px; font-size:1px;">&nbsp;</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 48px 0 48px;">
            <p style="margin:0; font-family:${FONT_MONO}; font-size:11px; color:${COLOR_BLUE}; letter-spacing:0.88px; text-transform:uppercase;">
              Propuesta comercial · ${version}
            </p>
            <h1 style="margin:23px 0 0 0; font-family:${FONT_DISPLAY}; font-weight:400; font-size:44px; line-height:46.2px; color:${COLOR_BLACK};">
              Hola ${contacto}
            </h1>
            <p style="margin:29px 0 0 0; font-family:${FONT_MONO}; font-size:13px; line-height:22.1px; color:${COLOR_BODY}; text-transform:uppercase;">
              Te compartimos la propuesta comercial basada en nuestra última conversación. Cada módulo, entregable e inversión están pensados para tu proyecto.
            </p>
            <p style="margin:22px 0 0 0; font-family:${FONT_MONO}; font-size:13px; line-height:22.1px; color:${COLOR_BODY}; text-transform:uppercase;">
              Explórala con calma y avísame si tienes dudas.
            </p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 48px 40px 48px;">
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="background:${COLOR_BLUE};" align="center">
                  <a href="${url}" target="_blank" style="display:inline-block; padding:16px 48px; font-family:${FONT_MONO}; font-weight:bold; font-size:12px; letter-spacing:0.72px; text-transform:uppercase; color:${COLOR_WHITE}; text-decoration:none;">
                    Ver propuesta completa →
                  </a>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="padding:0 48px;">
            <div style="height:1px; background:${COLOR_DIVIDER}; line-height:1px; font-size:1px;">&nbsp;</div>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 48px 40px 48px;">
            <p style="margin:0 0 32px 0; font-family:${FONT_MONO}; font-weight:bold; font-size:10px; color:${COLOR_BODY}; letter-spacing:0.8px; text-transform:uppercase;">
              Qué incluye
            </p>
            <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td valign="top" style="width:28px; font-family:${FONT_MONO}; font-weight:bold; font-size:16px; color:${COLOR_BLUE}; padding-bottom:20px;">01</td>
                <td valign="top" style="padding-bottom:20px;">
                  <p style="margin:0; font-family:${FONT_BODY}; font-size:14px; color:${COLOR_BLACK}; line-height:1.2;">Alcance detallado y entregables</p>
                  <p style="margin:4px 0 0 0; font-family:${FONT_MONO}; font-size:11px; color:${COLOR_MUTED}; line-height:16.5px; text-transform:uppercase;">Cada módulo con funcionalidades y criterios de aceptación.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" style="width:28px; font-family:${FONT_MONO}; font-weight:bold; font-size:16px; color:${COLOR_BLUE}; padding-bottom:20px;">02</td>
                <td valign="top" style="padding-bottom:20px;">
                  <p style="margin:0; font-family:${FONT_BODY}; font-size:14px; color:${COLOR_BLACK}; line-height:1.2;">Inversión transparente y condiciones de pago</p>
                  <p style="margin:4px 0 0 0; font-family:${FONT_MONO}; font-size:11px; color:${COLOR_MUTED}; line-height:16.5px; text-transform:uppercase;">Precios claros, desglose por fase, sin letra chica.</p>
                </td>
              </tr>
              <tr>
                <td valign="top" style="width:28px; font-family:${FONT_MONO}; font-weight:bold; font-size:16px; color:${COLOR_BLUE};">03</td>
                <td valign="top">
                  <p style="margin:0; font-family:${FONT_BODY}; font-size:14px; color:${COLOR_BLACK}; line-height:1.2;">Servicios adicionales que maximizan el impacto</p>
                  <p style="margin:4px 0 0 0; font-family:${FONT_MONO}; font-size:11px; color:${COLOR_MUTED}; line-height:16.5px; text-transform:uppercase;">Soporte continuo, automatizaciones, hosting y más.</p>
                </td>
              </tr>
            </table>
          </td>
        </tr>
        <tr>
          <td style="background:${COLOR_BLUE}; padding:32px 48px;">
            <p style="margin:0; font-family:${FONT_MONO}; font-size:18px; line-height:27px; color:${COLOR_WHITE};">"No solo desarrollamos. Diseñamos sistemas que conectan a las marcas con las personas que importan."</p>
          </td>
        </tr>
        <tr>
          <td style="padding:32px 48px 0 48px;">
            <p style="margin:0; font-family:${FONT_MONO}; font-size:10px; color:${COLOR_BLUE}; letter-spacing:0.8px; text-transform:uppercase;">Siguiente paso</p>
            <p style="margin:20px 0 0 0; font-family:${FONT_MONO}; font-size:12px; line-height:20.4px; color:${COLOR_BODY}; text-transform:uppercase;">Hagamos crecer tu negocio juntos y descubre que la era digital está al alcance de todos.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 48px 0 48px;">
            <div style="height:1px; background:${COLOR_DIVIDER}; line-height:1px; font-size:1px;">&nbsp;</div>
          </td>
        </tr>
        <tr>
          <td style="padding:25px 48px 0 48px;">
            <p style="margin:0; font-family:${FONT_MONO}; font-size:10px; line-height:16px; color:${COLOR_MUTED}; text-transform:uppercase;">Esta propuesta tiene una vigencia de 30 días a partir de la fecha de envío.</p>
          </td>
        </tr>
        <tr>
          <td style="padding:42px 48px 0 48px;">
            <p style="margin:0; font-family:${FONT_BODY}; font-weight:bold; font-size:13px; color:${COLOR_BLACK};">André Cortés</p>
            <p style="margin:6px 0 0 0; font-family:${FONT_MONO}; font-size:10px; color:${COLOR_MUTED}; text-transform:uppercase;">Fundador</p>
          </td>
        </tr>
        <tr>
          <td style="padding:40px 48px 40px 48px;">
            <div style="height:1px; background:${COLOR_DIVIDER}; line-height:1px; font-size:1px;">&nbsp;</div>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>
</body>
</html>`

  return { subject, body, htmlBody }
}
