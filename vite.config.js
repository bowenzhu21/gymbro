import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/gymbro/',
  plugins: [react()],
  server: { port: 5173 },
})
