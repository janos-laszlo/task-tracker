<template>
  <div id="container">
    <div id="current-value">
      <span>{{typeof(value) === 'number' ? value : '-'}}</span>
    </div>
    <div id="range-wrapper">
      <div id="range-container">
        <div
          v-for="n in range"
          :key="n"
          :class="{'minute-selected': value === n}"
          @click="$emit('input', n)"
        >{{n}}</div>
      </div>
    </div>
  </div>
</template>

<script src="./range-selector.js"></script>
<style scoped src="./range-selector.css"></style>