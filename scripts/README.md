# Project Scripts Documentation

This folder contains shell helper scripts for managing dependencies, running local development, and executing production builds for Vercel.

## Prerequisites

- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher
- **Bash shell environment**

## Permissions

All `.sh` scripts must have executable permissions. They have been pre-configured with executable permissions (`chmod +x scripts/*.sh`). If permissions are reset, re-enable them via:

```bash
chmod +x scripts/*.sh
```

---

## Available Scripts

### 1. Install Dependencies
```bash
./scripts/install_deps.sh
```
- **Description**: Verifies Node.js and npm installations and runs `npm install` to set up node modules.

### 2. Run Locally
```bash
./scripts/run.sh
```
- **Description**: Starts the Vite local development server on `http://localhost:5173`. Auto-installs `node_modules` if missing.

### 3. Vercel / Production Build
```bash
./scripts/build_vercel.sh
```
- **Description**: Executes `npm run build` (`tsc -b && vite build`) to generate static assets in `dist/` for production deployment on Vercel.

---

## Troubleshooting

- **Permission Denied**: Run `chmod +x scripts/*.sh`.
- **Node.js Not Found**: Install Node.js from [nodejs.org](https://nodejs.org/).
- **Build Failures**: Run `./scripts/install_deps.sh` to ensure clean dependencies, then retry `./scripts/build_vercel.sh`.
