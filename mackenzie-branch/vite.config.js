import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueDevTools from 'vite-plugin-vue-devtools'
import { dirname } from 'path';
// Import process from the 'process' module
import process from 'process';

// Define the configuration object
const config = {
  plugins: [
      vue(),
      VueDevTools(),
  ],
  resolve: {
      alias: {
          '@': fileURLToPath(new URL('./src', import.meta.url))
      }
  }
};

// Export the configuration object along with other properties using defineConfig
export default defineConfig({
  ...config,
  publicPath: process.env.NODE_ENV === "production" ? "/personal-site/" : "/"
});