# Kerion — Landing page

Landing page para un exchange de criptomonedas (spot + perpetuos) con mercados de predicción integrados, construido sobre la infraestructura on-chain de Hyperliquid.

## Stack

- **Svelte 5** (runes: `$state`, `$derived`, `$effect`, `$props`) + **SvelteKit 2**
- **Tailwind CSS v4** (`@tailwindcss/vite`, sin `tailwind.config.js`, todo vía `@theme`/`@plugin` en `src/app.css`)
- **daisyUI 5** — dos temas custom (`nightbook` oscuro por defecto, `daybook` claro) definidos con tokens OKLCH
- **@lucide/svelte** para iconos
- 100% estático (`@sveltejs/adapter-static`), prerenderizado en build, sin backend

## Estructura

```
src/
  app.css                     # tokens de tema (daisyUI), tipografía, utilidades
  app.html                    # shell HTML, fuentes, script anti-flash de tema
  lib/
    components/                # Navbar, Hero, CandleChart (gráfico de velas animado),
                                # TickerTape, MarketsLedger, HyperliquidSection,
                                # PredictionMarkets, HowItWorks, CtaSection, Footer
    data/markets.ts            # datos de mercado usados en el ticker y predicción
    theme.svelte.ts            # estado del tema con runes ($state), persistido en localStorage
  routes/
    +layout.svelte / +layout.ts (prerender=true)
    +page.svelte                # ensambla todas las secciones + meta tags SEO/OG
```

## Desarrollo

```bash
npm install
npm run dev
```

## Verificación de tipos

```bash
npm run check
```

## Build de producción

```bash
npm run build
```

Genera un sitio 100% estático en `build/` (HTML/CSS/JS + versiones `.br`/`.gz` precomprimidas). Previsualízalo con:

```bash
npm run preview
```

## Despliegue

El sitio es estático, así que puedes subir la carpeta `build/` a cualquier hosting estático:

- **Vercel / Netlify / Cloudflare Pages**: conecta el repo, comando de build `npm run build`, output directory `build`.
- **Cualquier CDN / S3 / GitHub Pages**: sube el contenido de `build/` tal cual.

Si más adelante necesitas SSR, endpoints de servidor o middleware (por ejemplo para autenticación real o proxy al libro de órdenes de Hyperliquid), cambia el adapter en `svelte.config.js` por `@sveltejs/adapter-node` o `@sveltejs/adapter-vercel` — el resto del código no cambia.

## Notas de diseño

- El logo y el motivo visual central son velas japonesas (SVG propio, sin librerías de charting).
- El gráfico del hero (`CandleChart.svelte`) simula un feed en vivo con un generador pseudo-aleatorio determinista (mismo resultado en servidor y cliente, sin *hydration mismatch*) y respeta `prefers-reduced-motion`.
- Los datos de mercado y de mercados de predicción son de ejemplo (`src/lib/data/markets.ts`) — reemplázalos por tu API/WebSocket real cuando conectes el backend de Hyperliquid.
