<template>
  <div class="container">
    <select v-model="selectedFrequency" style="margin-bottom: 10px">
      <option>Once</option>
      <option>Daily</option>
      <option>Weekly</option>
      <option>Monthly</option>
      <option>Yearly</option>
      <option>CRON</option>
    </select>
    <vc-date-picker v-model="selectedDateTime" :min-date="minDateTime" :first-day-of-week="2" color="blue" is-inline is-expanded />
    <div class="time-picker-container">
      <el-time-picker v-model="selectedDateTime" :selectableRange="selectableRange" format="HH:mm" placeholder="Select time"></el-time-picker>
    </div>
    <p>frequency: {{selectedFrequency}}</p>
    <p>date time: {{selectedDateTime}}</p>
  </div>
</template>

<script src="./cron-expression.js"></script>
<style scoped src="./cron-expression.css"></style>
<style src="element-ui/lib/theme-chalk/index.css"></style>