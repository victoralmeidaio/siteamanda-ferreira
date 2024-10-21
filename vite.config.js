import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { imagetools } from 'vite-imagetools'
import viteCompression from 'vite-plugin-compression';

export default defineConfig({
  plugins: [react(imagetools,viteCompression)],
})
