import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'   //to import tailwindcss plugin

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],   //to add tailwindcss plugin to the Vite configuration
})
