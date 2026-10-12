@echo off
cd /d "%~dp0"
where node >nul 2>nul
if errorlevel 1 (
  echo Para a previa local, instale o Node.js LTS pelo site https://nodejs.org/
  echo O portal publicado no GitHub Pages funciona sem instalar nada.
  pause
  exit /b 1
)
node servidor-local.cjs
pause
