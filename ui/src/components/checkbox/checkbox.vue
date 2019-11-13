<template>
  <div>
    <label class="check">
      <input
        type="checkbox"
        id="tt-checkbox"
        :checked="value"
        @change="$emit('input', $event.target.checked)"
      />
      <div class="box"></div>
    </label>
    <label v-if="$slots.default" for="tt-checkbox" style="position: relative; bottom: 5px; margin-left: 5px;">
      <slot></slot>
    </label>
  </div>
</template>

<script src="./checkbox.js"></script>
<style scoped src="./checkbox.css"></style>