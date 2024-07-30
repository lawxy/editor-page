import { defineConfig } from "umi";
import path from "path";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
    { path: "/docs", component: "docs" },
  ],
  npmClient: "yarn",
  mfsu: false,
  alias: {
    //   // "@tsword/form-editor": path.resolve(__dirname, "./es/form-editor/index.js"),
    "@roddan/form-editor":
      "/Users/luoxy/Desktop/code/mine/form-editor/lib/index.js",
  },
});
