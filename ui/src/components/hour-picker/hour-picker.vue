<template>
  <div>
    <p class="title">Select hour:</p>        
    <range-selector v-model="hour" :max=23 />
  </div>
</template>

<script src="./hour-picker.js"></script>
<style scoped src="./hour-picker.css"></style>