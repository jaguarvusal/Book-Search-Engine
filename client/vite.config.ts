import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
      '/graphql': { // Update the proxy to point to the GraphQL endpoint
        target: 'http://localhost:3001',
        secure: false,
        changeOrigin: true
      }
    }
  }
})