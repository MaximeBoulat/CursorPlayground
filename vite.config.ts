import { defineConfig } from 'vite';
import checker from 'vite-plugin-checker';
import { resolve } from 'path';


export default defineConfig({
    optimizeDeps: {
        // exclude: ['@maxbcm/webui-sdk', '@maxbcm/doc-explorer'] // This is for debugging in the browser
    },
    build: {
        outDir: 'dist',
        sourcemap: false,
        minify: 'terser',
        terserOptions: {
            compress: {
                drop_console: true,
                passes: 2,
            },
            format: {
                comments: false,
            }
        },
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                navigator: resolve(__dirname, 'navigator.html'),
                article: resolve(__dirname, 'article.html'),
                aiImageMaker: resolve(__dirname, 'imagemaker.html'),
                projects: resolve(__dirname, 'projects.html'),
                memoirs: resolve(__dirname, 'memoirs.html')
            }
        },
    },
    plugins: [
        checker({ typescript: true })
    ],
    server: {
        port: 3000,
        open: true
    }
});
