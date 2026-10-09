#!/bin/bash
# Publish (or update in place) the Carmel page in davehague/shared-pages, bypassing the skill's suffix bug.
set -euo pipefail
SRC="$(dirname "$0")/index.html"
REPO=~/source/shared-pages
SLUG="${1:-carmel-slots-$(openssl rand -hex 3)}"
mkdir -p "$REPO/$SLUG"
cp "$SRC" "$REPO/$SLUG/index.html"
cd "$REPO"
git add "$SLUG/index.html"
git -c user.name="David Hague" -c user.email="david.hague@gmail.com" commit -q -m "Add/update $SLUG (Carmel slot planner)" || true
git push -q origin main
SHA=$(git rev-parse HEAD)
gh api -X POST repos/davehague/shared-pages/pages/builds >/dev/null 2>&1 || true
URL="https://davehague.github.io/shared-pages/$SLUG/"
for i in $(seq 1 40); do
  sleep 8
  if curl -fsSL "$URL" 2>/dev/null | grep -c "carmel-slots-v1" >/dev/null; then
    B=$(gh api repos/davehague/shared-pages/pages/builds/latest --jq .commit 2>/dev/null || echo ?)
    if [ "$B" = "$SHA" ] || [ "$i" -gt 6 ]; then echo "PUBLISHED $URL (build $B)"; exit 0; fi
  fi
done
echo "TIMEOUT waiting for $URL (pushed $SHA)"; exit 1
