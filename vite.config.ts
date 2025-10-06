import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/amir-fitness-site-vitrine/', 
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
