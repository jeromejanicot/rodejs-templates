import { defineConfig } from 'vite';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [eslintPlugin()],
});
