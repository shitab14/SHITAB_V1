#!/usr/bin/env bash
set -e

SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
PROJECT_ROOT="$( cd "$SCRIPT_DIR/.." >/dev/null 2>&1 && pwd )"
cd "$PROJECT_ROOT"

echo "=== Checking Prerequisites ==="
if ! command -v node &> /dev/null; then
    echo "Error: Node.js is not installed. Please install Node.js (>= 18) to continue."
    exit 1
fi

if ! command -v npm &> /dev/null; then
    echo "Error: npm is not installed."
    exit 1
fi

echo "Node version: $(node -v)"
echo "npm version:  $(npm -v)"

echo ""
echo "=== Installing Project Dependencies ==="
npm install

echo ""
echo "=== Dependencies Installed Successfully ==="
