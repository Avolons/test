<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <Test></Test>
    <HelloWorld msg="hello world"></HelloWorld>
  </div>
</template>

<script>
// @ is an alias to /front
import HelloWorld from "_fc/HelloWorld";
import Test from "_cc/Test";

export default {
  name: "home",
  components: {
    HelloWorld,
    Test
  }
};
</script>
