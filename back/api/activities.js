import axios from "_b/libs/api.request";

export const fetchActivitiesList = params => {
  return axios.request({
    url: "activities",
    params,
    method: "get"
  });
};

// export const login = ({ userName, password }) => {
//   const data = {
//     userName,
//     password
//   };
//   return axios.request({
//     url: "login",
//     data,
//     method: "post"
//   });
// };
//
// export const getUserInfo = token => {
//   return axios.request({
//     url: "get_info",
//     params: {
//       token
//     },
//     method: "get"
//   });
// };
//
// export const logout = token => {
//   return axios.request({
//     url: "logout",
//     method: "post"
//   });
// };
