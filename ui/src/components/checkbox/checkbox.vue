<template>
  <div class="container">
    <label class="check">
      <input type="checkbox" v-on:change="$emit('change', $event)"/>
      <div class="box"></div>
    </label>
  </div>
</template>

<script src="./checkbox.js"></script>
<style scoped src="./checkbox.css"></style>