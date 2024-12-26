import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about/index.html'),
        "zh-Hant": resolve(__dirname, 'zh-Hant/index.html'),
        "zh-Hant/about": resolve(__dirname, 'zh-Hant/about/index.html'),
      },
    },
  },
})