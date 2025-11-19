import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  return {
    // Base must be set for GitHub Pages. './' allows it to work on any repo path.
    base: './', 
    plugins: [react()],
    define: {
      // This allows process.env.API_KEY to work in the client-side code during build
      'process.env.API_KEY': JSON.stringify(env.API_KEY)
    }
  };
});