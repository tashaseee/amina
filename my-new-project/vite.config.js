import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/amina/',
  server: {
    assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.glb'],
    port: 5181,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:5000',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
