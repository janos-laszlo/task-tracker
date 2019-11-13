<template>
  <div id="app">
    <nav-bar></nav-bar>
    <div style="padding: 0 10px">
      <div class="router-container">
        <transition name="slide">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "./components/nav-bar/nav-bar.vue";

export default {
  name: "app",
  components: {
    "nav-bar": Navbar
  }
};
</script>

<style scoped>
.router-container {
  max-width: 512px;
  margin: auto;
}

/* -enter-active is defined in vue js. slide is the transition name */
.slide-enter-active {
  animation: slide-down 0.3s;
}

@keyframes slide-down {
  0% {
    margin-top: 100vh;
  }
  100% {
    margin-top: 0;
  }
}
</style>