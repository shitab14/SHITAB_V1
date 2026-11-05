#!/usr/bin/env bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." >/dev/null 2>&1 && pwd )"
cd "$PROJECT_ROOT"

echo "=== Building Project for Vercel Production Deployment ==="
if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Running npm install..."
    npm install
fi

echo "Running TypeScript check and Vite build..."
npm run build

echo "=== Build Complete! Output generated in dist/ ==="
