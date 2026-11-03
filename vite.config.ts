import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (/\/node_modules\/(recharts|d3-[^/]+)\//.test(id)) return 'charts'
          if (/\/node_modules\/(framer-motion|motion-dom|motion-utils)\//.test(id)) return 'motion'
          if (/\/node_modules\/(react|react-dom|react-router|react-router-dom|scheduler)\//.test(id)) return 'framework'
          if (/\/node_modules\/(react-hook-form|zod|@hookform)\//.test(id)) return 'forms'
          if (/\/node_modules\/(i18next|react-i18next|zustand)\//.test(id)) return 'state'
        },
      },
    },
  },
})
