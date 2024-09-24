import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { plugin } from 'postcss'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react() , ],
})
