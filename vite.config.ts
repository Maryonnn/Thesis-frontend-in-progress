import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: './src',
  build: {
    outDir: '../dist',
    minify: false,
    emptyOutDir: true,
    rollupOptions: {
      input : {
        main: path.resolve(__dirname, 'src/index.html'),
        login: path.resolve(__dirname, 'src/login.html'),
        register: path.resolve(__dirname, 'src/register.html'),
        criteria: path.resolve(__dirname, 'src/criteria.html'),
        choice: path.resolve(__dirname, 'src/choice.html'),
      },
    }
  },
});
