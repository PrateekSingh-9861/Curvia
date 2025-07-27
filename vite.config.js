import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: {
        react: path.resolve(__dirname, 'src/react/useAnimation.js'),
        js: path.resolve(__dirname, 'src/vanilla/animation.js')
      },
      name: 'Curvia',
      formats: ['es', 'cjs'],
      fileName: (format, entryName) =>
        entryName === 'react'
          ? `curvia.react.${format}.js`
          : `curvia.${format}.js`
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'gsap'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          gsap: 'gsap'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true
  }
})
