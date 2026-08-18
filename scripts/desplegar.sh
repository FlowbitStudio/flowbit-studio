#!/usr/bin/env bash
# Despliegue a EasyPanel por su API. ESTE ES EL ÚNICO MÉTODO.
#
#   scripts/desplegar.sh                  # despliega website-flowbit
#   scripts/desplegar.sh website-flowbit  # explícito
#
# ⚠️ PUSHEAR A `main` NO DESPLIEGA NADA. El servicio tiene `autoDeploy: false`
# en EasyPanel: su fuente es GitHub (`FlowbitStudio/flowbit-studio`, rama `main`),
# pero el rebuild solo arranca cuando alguien llama a la API. En el pipeline
# automatizado esa llamada la hace el wrapper (`EASYPANEL_DEPLOY_HOOK_URL`);
# cuando trabajas en local, la haces tú con este script.
#
# Orden correcto: npm run build → git commit → git push origin main → este script.
# Desplegar sin pushear deja producción adelante del repo.
#
# El token se lee de ~/.ssh/.ep_api_token (mismo que usa Cigar Society).
# Se genera en EasyPanel → Ajustes → API Tokens.
set -euo pipefail

PANEL="https://5xgoxf.easypanel.host"
PROYECTO="flowbit"
TOKEN_FILE="$HOME/.ssh/.ep_api_token"

if [ ! -f "$TOKEN_FILE" ]; then
  cat >&2 <<'AYUDA'
  Falta el token de la API de EasyPanel.

  1. Abre EasyPanel → Ajustes → API Tokens → Generate
  2. Guárdalo:  echo 'TU_TOKEN' > ~/.ssh/.ep_api_token && chmod 600 ~/.ssh/.ep_api_token
  3. Vuelve a correr este script
AYUDA
  exit 1
fi

TOKEN="$(tr -d '\n' < "$TOKEN_FILE")"
SERVICIOS=("$@")
[ ${#SERVICIOS[@]} -gt 0 ] || SERVICIOS=("website-flowbit")

for SERVICIO in "${SERVICIOS[@]}"; do
  echo "==> desplegando $PROYECTO / $SERVICIO"
  RES=$(curl -s -w '\n%{http_code}' -X POST \
    "$PANEL/api/trpc/services.app.deployService" \
    -H "Authorization: Bearer $TOKEN" \
    -H "Content-Type: application/json" \
    -d "{\"json\":{\"projectName\":\"$PROYECTO\",\"serviceName\":\"$SERVICIO\"}}")

  CODIGO=$(tail -1 <<<"$RES")
  CUERPO=$(sed '$d' <<<"$RES")

  if [ "$CODIGO" = "200" ]; then
    echo "    ✓ aceptado — el build tarda ~2-4 min"
  else
    echo "    ✗ HTTP $CODIGO"
    echo "$CUERPO" | head -c 400
    echo
    exit 1
  fi
done

cat <<'FIN'

Verifica que el bundle en producción ya trae tus cambios (no basta el HTTP 200,
nginx sirve index.html en cualquier ruta y da 200 aunque el JS sea el viejo):

  js=$(curl -s https://flowbit.studio/ | grep -o 'assets/index-[A-Za-z0-9_-]*\.js' | head -1)
  curl -s "https://flowbit.studio/$js" | grep -c "<slug-de-tu-propuesta>"

FIN
