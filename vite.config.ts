import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    // Les photos sont déjà compressées en WebP/JPEG : pas de plugin d'image nécessaire.
    assetsInlineLimit: 2048,
  },
})
