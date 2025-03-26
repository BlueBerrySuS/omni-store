import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vercel from 'vite-plugin-vercel';
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),vercel(), tailwindcss()],
  server: {
    proxy: {
      "/api": "http://localhost:3000"
    }
  }
});

