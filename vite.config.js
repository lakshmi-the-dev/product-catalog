import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure root points to the correct directory
  build: {
    outDir: 'dist', // Output folder
  },
})
