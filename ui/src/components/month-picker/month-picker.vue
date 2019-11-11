<template>
  <div>
    <p class="title">Select month:</p>
    <range-selector v-model="monthProp" :min="1" :max="12" />
  </div>
</template>

<script src="./month-picker.js"></script>
<style scoped src="./month-picker.css"></style>