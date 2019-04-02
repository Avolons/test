<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style lang="scss">
html,
body {
  @include size;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

#app {
  @include size;
}
</style>
