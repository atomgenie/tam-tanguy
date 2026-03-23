import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      styles: path.resolve(__dirname, 'src/styles'),
      helpers: path.resolve(__dirname, 'src/helpers'),
      data: path.resolve(__dirname, 'src/data.ts'),
      types: path.resolve(__dirname, 'src/types.ts'),
    },
  },
})
