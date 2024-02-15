import { fileURLToPath, URL } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: fileURLToPath(new URL('./src', import.meta.url)) },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(new URL('./src/components', import.meta.url)),
      },
      {
        find: '@atoms',
        replacement: fileURLToPath(new URL('./src/components/atoms', import.meta.url)),
      },
      {
        find: '@molecules',
        replacement: fileURLToPath(new URL('./src/components/molecules', import.meta.url)),
      },
      {
        find: '@organisms',
        replacement: fileURLToPath(new URL('./src/components/organisms', import.meta.url)),
      },
      {
        find: '@hooks',
        replacement: fileURLToPath(new URL('./src/hooks', import.meta.url)),
      },
      {
        find: '@pages',
        replacement: fileURLToPath(new URL('./src/pages', import.meta.url)),
      },
      {
        find: '@store',
        replacement: fileURLToPath(new URL('./src/store', import.meta.url)),
      },
      {
        find: '@types',
        replacement: fileURLToPath(new URL('./src/types', import.meta.url)),
      },
    ],
  },
});
