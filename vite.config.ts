import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    dts({
      insertTypesEntry: true, // Generates a .d.ts entry
    }),
  ],
  build: {
    lib: {
      entry: "src/index.ts",
      name: "PDOS", // Global name used for UMD builds
      formats: ["es", "cjs", "umd"],
      fileName: (format) => {
        if (format === "cjs") {
          // Output as .cjs to force Node to treat it as CommonJS
          return "index.cjs";
        }
        if (format === "es") {
          return "index.es.js";
        }
        if (format === "umd") {
          return "index.umd.js";
        }
        return `index.${format}.js`;
      },
    },
    rollupOptions: {
      // For UMD builds, specify dependencies as external so they won’t be bundled
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
