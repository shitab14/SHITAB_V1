#!/usr/bin/env bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." >/dev/null 2>&1 && pwd )"
cd "$PROJECT_ROOT"

echo "=== Starting Development Server ==="
if [ ! -d "node_modules" ]; then
    echo "node_modules not found. Installing dependencies first..."
    "$SCRIPT_DIR/install_deps.sh"
fi

echo "Running local dev server on http://localhost:5173 ..."
npm run dev
