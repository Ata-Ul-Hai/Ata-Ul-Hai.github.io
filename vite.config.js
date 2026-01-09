import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // ===========================================
  // GITHUB PAGES CONFIGURATION
  // 
  // Set 'base' to your repository name for GitHub Pages.
  // If your repo is: github.com/yourusername/Portfolio
  // Then base should be: '/Portfolio/'
  // 
  // For local development, this doesn't affect anything.
  // ===========================================
  base: '/',
});
