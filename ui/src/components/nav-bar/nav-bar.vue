<template>
  <div class="topnav" id="myTopnav">
    <router-link to="/" @click.native="closeMenu()" style="height: 22px;">
        <img src="@/assets/logo.png" class="logo"/>
    </router-link>
    <router-link to="/about" class="float-right" @click.native="closeMenu()">About</router-link>
    <router-link to="/sign-up" class="float-right" @click.native="closeMenu()">Sign up</router-link>
    <router-link to="/sign-in" class="float-right" @click.native="closeMenu()">Sign in</router-link>
    <div class="container" v-on:click="toggleMenu()">
      <div class="bar1"></div>
      <div class="bar2"></div>
      <div class="bar3"></div>
    </div>
  </div>
</template>

<script src="./nav-bar.js"></script>
<style scoped src="./nav-bar.css"></style>