import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'

// https://vitejs.dev/config/

const config = defineConfig({
  plugins: [react()],
  publicDir: path.resolve(__dirname, 'src', 'public'),
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})

export default config
