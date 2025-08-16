import { defineConfig } from 'vite'
import path from 'node:path'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  css: {
    /**
     * 如果启用了这个选项，那么 CSS 预处理器会尽可能在 worker 线程中运行；即通过多线程运行 CSS 预处理器，从而极大提高其处理速度
     * https://cn.vitejs.dev/config/shared-options#css-preprocessormaxworkers
     */
    preprocessorMaxWorkers: true,
    preprocessorOptions: {
      scss: {
        // 如果您的终端提示 legacy JS API Deprecation Warning, 您可以配置以下代码在 vite.config.ts 中
        // 使用现代 CSS API，避免 legacy warning
        // api: 'modern-compiler',
      }
    }
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
})
