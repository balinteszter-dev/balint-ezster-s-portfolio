import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** GitHub Pages: https://balinteszter-dev.github.io/balint-ezster-s-portfolio/ */
const GITHUB_PAGES_BASE = '/balint-ezster-s-portfolio/'

export default defineConfig(({ command }) => ({
  plugins: [react()],
  // Local dev at http://127.0.0.1:5173/ — production build uses repo base path
  base: command === 'serve' ? '/' : GITHUB_PAGES_BASE,
  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    open: true,
  },
  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
  },
}))
