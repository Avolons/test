module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "@vue/prettier"],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-unused-components": "off",
    "no-unused-vars": "off",
    "vue/no-parsing-error": "off"
  },
  parserOptions: {
    parser: "babel-eslint"
  }
};