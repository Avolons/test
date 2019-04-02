const isDev = process.env.NODE_ENV === "development";
let config = require("./build/vue.dev.config");
if (!isDev) {
  config = require("./build/vue.prod.config");
}
module.exports = config;
