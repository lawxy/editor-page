import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import commonjs from "@rollup/plugin-commonjs";
import requireTransform from "vite-plugin-require-transform"; // 1. 引入插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    requireTransform({
      fileRegex: /.js$|.ts$|.tsx$/,
    }),
  ],
  // resolve: {
  //   alias: {
  //     "@roddan/form-editor":
  //       "/Users/luoxy/Desktop/code/mine/low-code/es/index.js",
  //   },
  // },
});
