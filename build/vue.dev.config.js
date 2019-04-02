const baseConfig = require("./vue.base.config");
module.exports = {
  publicPath: baseConfig.publicPath,
  pages: baseConfig.pages,
  devServer: {
    open: process.platform === "darwin",
    host: "0.0.0.0",
    port: 9090,
    https: false,
    hotOnly: false,
    proxy: {
      "/": {
        target: "http://192.168.5.5:8080",
        secure: false,
        changeOrigin: true
      }
    },
    overlay: {
      warnings: true,
      errors: true
    }
  },
  configureWebpack: {
    plugins: baseConfig.plugins,
    resolve: baseConfig.resolve
  },
  pluginOptions: baseConfig.pluginOptions
};
