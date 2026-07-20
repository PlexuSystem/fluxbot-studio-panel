#!/usr/bin/env bash
# Build locally, sync the standalone panel to Contabo and restart the service.
set -euo pipefail

HOST="${CONTABO_HOST:-diego-contabo}"
REMOTE_DIR="${REMOTE_DIR:-/home/diego/fluxbot-studio-ia-panel}"
SERVICE_NAME="${SERVICE_NAME:-fluxbot-studio-ia-panel}"

npm run build
ssh "$HOST" "mkdir -p '$REMOTE_DIR'"
rsync -az --delete .next/standalone/fluxbot-studio-ia-panel/ "$HOST:$REMOTE_DIR/"
rsync -az --delete .next/static/ "$HOST:$REMOTE_DIR/.next/static/"
rsync -az --delete public/ "$HOST:$REMOTE_DIR/public/"
ssh "$HOST" "sudo systemctl restart '$SERVICE_NAME' && sudo systemctl status '$SERVICE_NAME' --no-pager"
