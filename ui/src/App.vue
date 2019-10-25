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
  font-family: 'Lato', sans-serif;
}
</style>
