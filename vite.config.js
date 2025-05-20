// vite.config.js
import { defineConfig } from 'vite';
import path from 'path';
import { imagetools } from 'vite-imagetools';
import { resolve } from 'path';

export default defineConfig({
    base: '/vidacommargem/',
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                dicas: resolve(__dirname, 'dicas.html'),
                historias: resolve(__dirname, 'historias.html'),
                termos: resolve(__dirname, 'termos-de-uso.html'),
                politica: resolve(__dirname, 'politica-de-privacidade.html'),
                // Subpastas
                materia1: resolve(__dirname, 'textos/materia1.html'),
                crieiUmRitual: resolve(__dirname, 'textos/criei-um-ritual.html'),
            }
        }
    },
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
