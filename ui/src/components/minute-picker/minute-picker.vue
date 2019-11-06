<template>
  <div>
    <div id="minutes-container">
      <div v-for="(n, index) in 60" :key="n" :class="{'minute-selected': minutesProp.includes(index)}" @click="toggleMinuteSelection(index)">{{index}}</div>
    </div>
  </div>
</template>

<script src="./minute-picker.js"></script>
<style scoped src="./minute-picker.css"></style>
