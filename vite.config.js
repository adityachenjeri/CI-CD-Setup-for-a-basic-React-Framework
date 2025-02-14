//import { defineConfig } from 'vite'
//import react from '@vitejs/plugin-react'

// https://vite.dev/config/
//export default defineConfig({
//  plugins: [react()],
//})

/// vitest.config.js
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,  // Allows using `expect` globally
    environment: 'jsdom', // Required for testing React components
    setupFiles: './setupTests.js', // Loads setup file
  },
});
