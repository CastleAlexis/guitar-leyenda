# Guitar Legends Gallery

Aplicación Next.js 16 (React 19, Tailwind 4) que muestra una galería de guitarristas con biografías, bandas principales y detalles.

## Requisitos
- Node >= 20 (probado con Node 22)
- pnpm >= 9 (probado con pnpm 10)

## Scripts
- `pnpm dev` — arranca en `http://localhost:3010` (configurado en package.json)
- `pnpm build` — compila producción
- `pnpm start` — sirve `.next` después de build
- `pnpm approve-builds` — aprobar scripts nativos (ej. `sharp`) si lo necesitas en local

## Desarrollo local
```bash
pnpm install
pnpm dev
```

## Despliegue (Vercel recomendado)
1. Sube el repositorio a GitHub (ver abajo).
2. En Vercel: Add New → Project → selecciona tu repo → Deploy.

## Publicar a GitHub (VS Code)
1. Abre la carpeta del proyecto.
2. Source Control → Initialize Repository → Commit inicial.
3. Click en "Publish to GitHub" → elige nombre y visibilidad.

## Publicar a GitHub (CLI)
```bash
git init
git branch -M main
git add .
git commit -m "chore: initial publish"
# reemplaza la URL por tu repo
git remote add origin https://github.com/<usuario>/<repo>.git
git push -u origin main
```

## Notas
- Si usas imágenes remotas, configura `next.config.mjs` (`images.remotePatterns`).
- En Vercel no necesitas aprobar `sharp`; su build maneja binarios nativos.
