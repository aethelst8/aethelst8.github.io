import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        guidesIndex: resolve(__dirname, 'guides/index.html'),
        guideSafety: resolve(__dirname, 'guides/is-it-safe-to-let-claude-code-run-unattended/index.html'),
        guideApprove: resolve(__dirname, 'guides/approve-claude-code-and-codex-from-your-phone/index.html'),
        guideHooks: resolve(__dirname, 'guides/claude-code-hooks-explained/index.html'),
      },
    },
  },
})
