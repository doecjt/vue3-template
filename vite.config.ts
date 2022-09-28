import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import path from 'path'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: 'vue',
      dts: './src/auto-imports.d.ts'
    }),
    Unocss()
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    }
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  }
})
