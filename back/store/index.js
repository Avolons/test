import Vue from "vue";
import Vuex from "vuex";

import user from "./module/user.js";
import app from "./module/app.js";
import activities from "./module/activities.js";
import comments from "./module/comments.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    //
  },
  mutations: {
    //
  },
  actions: {
    //
  },
  modules: {
    user,
    app,
    activities,
    comments
  }
});
