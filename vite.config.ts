import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      name: "PDOS", // Exposes `PDOS` globally in UMD & IIFE
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs', 'system', 'umd', 'iife'], // Supports multiple formats
      fileName: (format) => `pdos.${format}.js`, // Generates named files
    },
    minify: false, // Set true for production
    sourcemap: true, // Helps with debugging
    emptyOutDir: false, // Prevents cleaning the `dist` folder
  },
  resolve: {
    alias: {
      src: resolve('src/'),
    },
  },
  plugins: [
    dts({ rollupTypes: true }),
  ],
});
