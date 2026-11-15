import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import VueRouter from 'vue-router/vite'

// VueRouter (file-based routing) має стояти перед vue()
export default defineConfig({
  plugins: [VueRouter(), vue(), tailwindcss()]
})
