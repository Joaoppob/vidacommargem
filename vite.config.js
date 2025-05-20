// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import { imagetools } from 'vite-imagetools';

export default defineConfig({
    base: '/vidacommargem/',
    server: {
        port: 3000,
        open: true, // ← Isso aqui abre o navegador automaticamente
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
        },
    },
    plugins: [
        imagetools(),
    ],
});
