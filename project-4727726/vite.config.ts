import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  
  return {
    plugins: [react()],
    base: '/',
    define: {
      __BASE_PATH__: JSON.stringify('/'),
      'import.meta.env.VITE_SITE_URL': JSON.stringify(env.VITE_SITE_URL || 'https://www.nandyandco.co.uk')
    }
  }
})
