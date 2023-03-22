import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vitePluginImp from 'vite-plugin-imp'
import path from 'path' // 要引入 @types/node 包

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
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },
    server: {
      host: '0.0.0.0',
      port: 5175,
      hmr: {
        overlay: false
      }
    }
  }
})
