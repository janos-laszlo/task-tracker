<template>
  <div>
    <p class="title">Select minute:</p>
    <range-selector v-model="minute" :max=59 :step=5 />
  </div>
</template>

<script src="./minute-picker.js"></script>
<style scoped src="./minute-picker.css"></style>
