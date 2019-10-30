<template>
  <div>
    <label class="check">
      <input type="checkbox" v-on:change="$emit('change', $event.target.checked)" id="sort" v-model="isChecked"/>
      <div class="box"></div>
    </label>
    <label for="sort" style="position: relative; bottom: 5px; margin-left: 5px;">
      <slot></slot>
    </label>
  </div>
</template>

<script src="./checkbox.js"></script>
<style scoped src="./checkbox.css"></style>