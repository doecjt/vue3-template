import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Unocss from 'unocss/vite'
import Components from 'unplugin-vue-components/vite'

export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: [
        'vue',
        '@vueuse/core',
        '@vueuse/head',
      ],
      dts: './src/auto-imports.d.ts',
    }),
    Unocss(),
    Components({
      dirs: ['src/components'],
      dts: true,
      include: [/\.vue$/],
    }),
  ],
  build: {
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
})
