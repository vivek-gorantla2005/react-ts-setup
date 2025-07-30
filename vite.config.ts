import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: [
      'localhost',
      '127.0.0.1',
      '.e2b.app',
      '.e2b.dev',
      /.*\\.e2b\\.app$/,
      /.*\\.e2b\\.dev$/,
      /^\\d+-.*\\.e2b\\.app$/,
      /^\\d+-.*\\.e2b\\.dev$/
    ]
  }
})
