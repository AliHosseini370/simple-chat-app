import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://alihosseini370.github.io/simple-chat-app',
  plugins: [react()],
})
