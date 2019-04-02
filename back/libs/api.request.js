import HttpRequest from "_b/libs/axios";
import config from "_b/config";
const baseUrl =
  process.env.NODE_ENV === "development"
    ? config.baseUrl.dev
    : config.baseUrl.pro;

const axios = new HttpRequest(baseUrl);
export default axios;
