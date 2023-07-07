<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <LayoutPages />
</template>

<script>
import LayoutPages from "@/views/LayoutPages.vue";
export default {
  name: 'App',
  components: {
    LayoutPages
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
