<template>
  <div>
    <vc-date-picker
      v-model="dateProp"
      :min-date="minDate"
      :first-day-of-week="2"
      color="blue"
      is-inline
      is-expanded
    />
    <div class="time-picker-container">
      <el-time-picker
        v-model="timeProp"
        :picker-options="{ selectableRange: selectableTimeRange }"
        format="HH:mm"
        placeholder="Select time"
      ></el-time-picker>
    </div>
  </div>
</template>

<script src="./date-time-picker.js"></script>
<style scoped src="./date-time-picker.css"></style>