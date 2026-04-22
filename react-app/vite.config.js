import { defineConfig } from 'vite';
import { resolve } from 'path';
import { fileURLToPath } from 'url';
import react from '@vitejs/plugin-react';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const base = process.env.VITE_BASE || '/';

export default defineConfig({
  plugins: [react()],
  base,
  build: {
    outDir: 'dist',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
    },
  },
});
