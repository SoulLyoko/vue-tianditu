<template>
  <div id="app">
    <test-map></test-map>
  </div>
</template>

<script>
import TestMap from "./components/map";

export default {
  name: "App",
  components: { TestMap },
  data() {
    return {};
  },
  methods: {}
};
</script>

<style>
#app,
html,
body {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  margin: 0;
}
</style>
