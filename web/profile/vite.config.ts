import { defineConfig } from 'vite';
import preact from '@preact/preset-vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact()],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@stores': path.resolve(__dirname, 'src/store'),
    },
  },
  server: {
    host: '0.0.0.0',
    port: 3030,
  },
});
