// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin';
import dts from 'vite-plugin-dts';
import path from 'path';
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    react(),                    // JSX/TSX support
    vanillaExtractPlugin(),     // Vanilla Extract plugin
    tsconfigPaths(),
    dts({ insertTypesEntry: true }) // Generate .d.ts files:contentReference[oaicite:0]{index=0}
  ],
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, 'src/index.tsx'),
//       name: 'AutodocDS',        // UMD global name (if needed)
//       formats: ['es', 'cjs'],   // ESM and CommonJS outputs
//       fileName: (format) => `autodoc-ds.${format}.js`
//     },
//     rollupOptions: {
//       // Prevent bundling React into the library (peer dependency)
//       external: ['react', 'react-dom'],
//       output: {
//         globals: { react: 'React', 'react-dom': 'ReactDOM' }
//       }
//     }
//   }
});
