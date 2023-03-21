import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'

// https://vitejs.dev/config/
export default defineConfig((config) => {
  return {
    plugins: [
      react(),
      vitePluginImp({
        libList: [
          {
            libName: 'antd-mobile',
            style: () => false,
            libDirectory: 'es/components',
            replaceOldImport: true
          }
        ]
      })
    ],
    server: {
      host: '0.0.0.0',
      port: 5175,
      hmr: {
        overlay: false
      }
    }
  }
})
