<template>
  <div id="app">
    <!-- <component-header/> -->
    <router-view />
  </div>
</template>
<script>
import  componentHeader  from "./components/Header";
export default {
  components:{
    // componentHeader
  }
}
</script>

<style lang="scss">
*{
  margin: 0;
  padding: 0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f6f5f5;
  margin: 0 auto;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
