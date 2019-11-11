<template>
  <div class="container">
    <select v-model="selectedFrequency" @change="emitCron()" style="margin-bottom: 10px">
      <option v-for="(frequency, index) in constants.FREQUENCIES" :key="index">{{frequency}}</option>
    </select>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.ONCE">
        <date-time-picker v-model="dateTimeProp" future />
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.HOURLY">
        <minute-picker v-model="minuteProp"></minute-picker>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.DAILY">
        <hour-picker v-model="hourProp"></hour-picker>
        <minute-picker v-model="minuteProp"></minute-picker>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.WEEKLY">
        <day-of-week-picker v-model="dayOfWeekProp" />
        <hour-picker v-model="hourProp"></hour-picker>
        <minute-picker v-model="minuteProp"></minute-picker>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.MONTHLY">
        <date-picker v-model="dayOfTheMonthProp" />
        <hour-picker v-model="hourProp"></hour-picker>
        <minute-picker v-model="minuteProp"></minute-picker>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.YEARLY">
        <month-picker v-model="monthProp" />
        <date-picker v-model="dayOfTheMonthProp" />
        <hour-picker v-model="hourProp"></hour-picker>
        <minute-picker v-model="minuteProp"></minute-picker>
      </div>
    </transition>

    <transition enter-active-class="animated fadeIn">
      <div v-if="selectedFrequency === constants.CRON">
        <p class="sub-item-">Type a CRON expression:</p>
        <input type="text" v-model="cronProp" />
      </div>
    </transition>
    <p>frequency: {{selectedFrequency}}</p>
  </div>
</template>

<script src="./cron-expression.js"></script>
<style scoped src="./cron-expression.css"></style>