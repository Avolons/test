import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import iView from "iview";
import "babel-polyfill";
import "normalize.css";
import 'iview/dist/styles/iview.css';

// import '~iview/src/styles/index.less';

Vue.use(iView);
Vue.config.productionTip = false;

new Vue({
  el: "#app",
  router,
  store,
  render: h => h(App)
}).$mount("#app");
