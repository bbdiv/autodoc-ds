// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import dts from "vite-plugin-dts";
import tsconfigPaths from "vite-tsconfig-paths";
import { libInjectCss } from "vite-plugin-lib-inject-css";

import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "glob";

export default defineConfig({
  plugins: [
    react(), // JSX/TSX support
    vanillaExtractPlugin(), // Vanilla Extract plugin
    tsconfigPaths(),
    libInjectCss(), // Inject CSS into the library
    dts({ insertTypesEntry: true, include: ["src"] }), // Generate .d.ts files:contentReference[oaicite:0]{index=0}
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/main.tsx"),
      name: "AutodocDS", // UMD global name (if needed)
      formats: ["es"], // ESM and CommonJS outputs
      fileName: (format) => `autodoc-ds.${format}.js`,
    },
    rollupOptions: {
      // Prevent bundling React into the library (peer dependency)
      external: ["react", "react-dom"],
      output: {
        globals: { react: "React", "react-dom": "ReactDOM" },
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js",
      },
      input: Object.fromEntries(
        glob
          .sync("src/**/*.{ts,tsx}", {
            ignore: ["src/**/*.d.ts"],
          })
          .map((file) => [
            // The name of the entry point
            // lib/nested/foo.ts becomes nested/foo
            relative("src", file.slice(0, file.length - extname(file).length)),
            // The absolute path to the entry file
            // src/nested/foo.ts becomes /project/src/nested/foo.ts
            fileURLToPath(new URL(file, import.meta.url)),
          ]),
      ),
    },
  },
});
