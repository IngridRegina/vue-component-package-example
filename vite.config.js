import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    build: {
        lib: {
            entry: resolve(__dirname, 'src/wrapper.js'),
            name: 'MyComponent',
            // the proper extensions will be added
            fileName: 'my-component'
        },
        rollupOptions: {
            // make sure to externalize deps that shouldn't be bundled
            // into your library
            external: [
                'vue',
                'vite',
                '@rushstack/eslint-patch',
                '@vitejs/plugin-vue',
                '@vitejs/plugin-vue-jsx',
                '@vue/eslint-config-prettier',
                'eslint',
                'eslint-plugin-vue',
                'prettier',
            ],
            output: {
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    vue: 'Vue'
                },
                exports: "named"
            }
        }
    }
})
