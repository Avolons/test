import Vue from "vue";
import iView from "iview";
import App from "./App";
import router from "./router";
import store from "./store";
import config from "./config";
import installPlugin from "./plugin";
import "./index.scss";
/* eslint-disable */
if (process.env.NODE_ENV !== "production") require("_b/mock");
Vue.use(iView);
installPlugin(Vue);
Vue.prototype.$config = config;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
});
