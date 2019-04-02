import config from "_b/config";
const { plugin } = config;

export default Vue => {
  for (let name in plugin) {
    const value = plugin[name];
    Vue.use(
      require(`./${name}`).default,
      typeof value === "object" ? value : undefined
    );
  }
};
