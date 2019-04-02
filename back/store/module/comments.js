import { fetchCommentsList } from "_b/api/comments";

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
    getCommentsList({ commit }, params) {
      console.log(params);
      return fetchCommentsList(params);
    }
  }
};
