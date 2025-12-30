import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './', // Ensures assets are loaded relative to index.html, enabling deployment to subpaths (like GitHub Pages)
  build: {
    outDir: 'dist',
  }
});