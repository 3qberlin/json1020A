import { defineConfig } from "vite";
import { ViteEjsPlugin } from "vite-plugin-ejs";
const path = require('path')

export default {
  base: process.env.NODE_ENV === 'production' ? '/json1020A/' : '/',
  root: path.resolve(__dirname, 'src'),
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    }
  },
  server: {
    port: 8080,
    hot: true
  }
};
defineConfig({
  plugins: [
    // Without Data
    ViteEjsPlugin(),

    // With Data
    ViteEjsPlugin({
      domain: "example.com",
      title: "My vue project!",
      server: {
        // 啟動 server 時預設開啟的頁面
        open: './src/scss/index.html',
      },
    }),


    // Or With Vite Config
    ViteEjsPlugin((viteConfig) => {
      // viteConfig is the current viteResolved config.
      return {
        root: viteConfig.root,
        domain: "example.com",
        title: "My vue project!"
      }
    }),
  ],
});
