import { fetchActivitiesList } from "_b/api/activities";

export default {
  state: {},
  mutations: {
    setAvator(state, avatorPath) {
      state.avatorImgPath = avatorPath;
    }
  },
  actions: {
    // 登录
    // handleLogin({ commit }, { userName, password }) {
    //   userName = userName.trim();
    //   return new Promise((resolve, reject) => {
    //     login({
    //       userName,
    //       password
    //     })
    //       .then(res => {
    //         const data = res.data;
    //         commit("setToken", data.token);
    //         resolve();
    //       })
    //       .catch(err => {
    //         reject(err);
    //       });
    //   });
    // },
    getActivitiesList({ commit }, params) {
      console.log(params);
      return fetchActivitiesList(params);
    }
  }
};
