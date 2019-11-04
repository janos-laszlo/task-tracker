<template>
  <div class="container">
    <select style="margin-bottom: 10px">
      <option value="once">Once</option>
      <option value="Daily">Daily</option>
      <option value="Weekly">Weekly</option>
      <option value="Monthly">Monthly</option>
      <option value="Yearly">Yearly</option>
      <option value="cron">CRON expression</option>
    </select>
    <vc-calendar :value="null" :first-day-of-week="2" color="blue" is-inline is-expanded />
    <div class="time-picker-container">
      <el-time-picker :picker-options="{
    start: '08:30',
    step: '00:15',
    end: '18:30'
  }" v-model="value" format="HH:mm" placeholder="Select time"></el-time-picker>
    </div>
  </div>
</template>

<script src="./cron-expression.js"></script>
<style scoped src="./cron-expression.css"></style>
<style src="element-ui/lib/theme-chalk/index.css"></style>