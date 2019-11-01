<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/" style="height: 22px;">
        <img src="@/assets/logo.png" class="logo"/>
    </router-link>
    <a href="#sign-up" class="float-right active">Sign up</a>
    <a href="#sign-in" class="float-right">Sign in</a>
    <div class="container" v-on:click="toggleMenu()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </div>
</template>

<script src="./nav-bar.js"></script>
<style scoped src="./nav-bar.css"></style>