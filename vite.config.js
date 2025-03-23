import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  plugins: [react()],
  base: '/goit-react-hw-01/',
  build: {
    sourcemap: true,
    outDir: 'dist',
    assetsDir: 'assets',
  },
});
