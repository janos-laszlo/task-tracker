<template>
  <div>
    <div class="date-time-part">
      <p class="sub-item-title">year:</p>
      <range-selector
        v-model="dateTimeParts.year"
        :min="currentYear"
        :max="currentYear+10"
        @input="onChange()"
      />
    </div>
    <div class="date-time-part">
      <p class="sub-item-title">month:</p>
      <range-selector v-model="dateTimeParts.month" :min="1" :max="12" @input="onChange()" />
    </div>
    <div class="date-time-part">
      <p class="sub-item-title">date:</p>
      <range-selector v-model="dateTimeParts.date" :min="1" :max="31" @input="onChange()" />
    </div>
    <div class="date-time-part">
      <p class="sub-item-title">hour:</p>
      <range-selector v-model="dateTimeParts.hour" :max="23" @input="onChange()" />
    </div>
    <div class="date-time-part">
      <p class="sub-item-title">minute:</p>
      <range-selector v-model="dateTimeParts.minute" :max="59" :step=5 @input="onChange()" />
    </div>
  </div>
</template>

<script src="./date-time-picker.js"></script>
<style scoped src="./date-time-picker.css"></style>