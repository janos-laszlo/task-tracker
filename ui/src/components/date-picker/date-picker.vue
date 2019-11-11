<template>
  <div>
    <p class="title">Select date:</p>
    <range-selector v-model="dayOfTheMonthProp" :min=1 :max=31 />
  </div>
</template>

<script src="./date-picker.js"></script>
<style scoped src="./date-picker.css"></style>