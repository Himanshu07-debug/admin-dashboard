// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react-swc'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
// })

import { defineConfig } from 'vite';

export default defineConfig({
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', 
          // silenceDeprecations: ["legacy-js-api"]
        },
      },
    }
  })