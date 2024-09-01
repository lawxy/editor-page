import { defineConfig } from "umi";

export default defineConfig({
  outputPath: "editor-page",
  routes: [
    { path: "/design", component: "design" },
    { path: "/form", component: "form" },
    {
      path: "/",
      redirect: "/design",
    },
  ],
  base: "/editor-page/",
  publicPath: "/editor-page/",
  analyze: {
    analyzerMode: "server",
    analyzerPort: 8888,
    openAnalyzer: true,
    // generate stats file while ANALYZE_DUMP exist
    generateStatsFile: false,
    statsFilename: "stats.json",
    logLevel: "info",
    defaultSizes: "parsed", // stat  // gzip
  },
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
    dayjs: "dayjs",
    antd: "antd",
    "@roddan/ui": "RoddanUI",
    "@ant-design/pro-components": "ProComponents",
  },
  styles: ["https://cdn.jsdelivr.net/npm/antd@5.20.3/dist/reset.min.css"],
});
