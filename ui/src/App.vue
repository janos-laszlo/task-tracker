<template>
  <div id="app">
    <nav-bar></nav-bar>
  </div>
</template>

<script>
import Navbar from './components/nav-bar/nav-bar.vue';

export default {
  name: 'app',
  components: {
    'nav-bar': Navbar
  }
}
</script>

<style>
body {
  margin: 0;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
