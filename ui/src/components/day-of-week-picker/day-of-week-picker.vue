<template>
  <div>
    <p class="title">Select day of the week:</p>
    <range-selector v-model="dayOfWeek" :min=1 :max=7 />
  </div>
</template>

<script src="./day-of-week-picker.js"></script>
<style scoped src="./day-of-week-picker.css"></style>