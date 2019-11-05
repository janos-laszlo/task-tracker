<template>
  <div class="container">
    <select v-model="selectedFrequency" @change="onSelectedFrequencyChanged()" style="margin-bottom: 10px">
      <option>Once</option>
      <option>Hourly</option>
      <option>Daily</option>
      <option>Weekly</option>
      <option>Monthly</option>
      <option>Yearly</option>
      <option>CRON</option>
    </select>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'Once'">
        <date-time-picker v-model="dateProp" future></date-time-picker>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'Hourly'">
        <p class="subitem-title">Select one or more minutes:</p>
        <select v-model="minuteProp" multiple style="height: 195px">
          <option v-for="(n, index) in 60" :key="n">{{index}}</option>
        </select>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'Daily'">
        <p class="subitem-title">Select hour:</p>
        <select v-model="daily.hour" @change="onDailyChanged()">
          <option v-for="(n, index) in 24" :key="n">{{index}}</option>
        </select>
        <p class="subitem-title">Select minute:</p>
        <select v-model="daily.minute" @change="onDailyChanged()">
          <option v-for="(n, index) in 60" :key="n">{{index}}</option>
        </select>
      </div>
    </transition>
    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'Weekly'">
        <p>Select one or more days:</p>
        <select v-model="weekly.days" multiple @change="onWeeklyChanged()" style="height: 131px">
          <option v-for="(day, index) in ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']" :key="index" :value="index + 1">{{day}}</option>
        </select>
      </div>
    </transition>
    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'Monthly'">Monthly</div>
    </transition>
    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'Yearly'">Yearly</div>
    </transition>
    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === 'CRON'">CRON</div>
    </transition>
    <p>frequency: {{selectedFrequency}}</p>
    <p>
      date:
      <span v-if="dateProp">{{date.toLocaleString()}}</span>
    </p>
    <p>minute: {{minuteProp}}</p>
  </div>
</template>

<script src="./cron-expression.js"></script>
<style scoped src="./cron-expression.css"></style>
<style src="element-ui/lib/theme-chalk/index.css"></style>