const baseConfig = require("./vue.base.config");
module.exports = {
  publicPath: baseConfig.publicPath,
  pages: baseConfig.pages,
  productionSourceMap: false,
  transpileDependencies: ["vue-i18n"],
  configureWebpack: {
    optimization: {
      runtimeChunk: "single"
    },
    plugins: baseConfig.plugins,
    resolve: baseConfig.resolve
  },
  pluginOptions: baseConfig.pluginOptions
};
