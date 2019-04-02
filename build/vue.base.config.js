const path = require("path");
const webpack = require("webpack");
const isDev = process.env.NODE_ENV === "development";
const resolve = relativePath => path.resolve(__dirname, "..", relativePath);
module.exports = {
  publicPath: "./",
  pages: {
    index: {
      entry: resolve("front/index.js"),
      template: resolve("public/index.html"),
      filename: "index.html",
      title: "同步课堂(前台)",
      chunks: ["runtime", "chunk-vendors", "chunk-common", "index"]
    },
    back: {
      entry: resolve("back/index.js"),
      template: resolve("public/index.html"),
      filename: "back.html",
      title: "同步课堂(后台)",
      chunks: ["runtime", "chunk-vendors", "chunk-common", "back"]
    }
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: isDev
    })
  ],
  resolve: {
    alias: {
      _f: resolve("front"), //前台根目录
      _fc: resolve("front/components"), //前台根目录
      _b: resolve("back"), //后台根目录
      _bc: resolve("back/components"), //后台根目录
      _bv: resolve("back/views"), //后台根目录
      _c: resolve("common"), //前后台公共资源根目录
      _cc: resolve("common/components"),
      _cu: resolve("common/utils"),
      "@": resolve("") //根目录
    }
  },
  pluginOptions: {
    "style-resources-loader": {
      preProcessor: "scss",
      patterns: [resolve("common/styles/global.scss")]
    }
  }
};
