<template>
  <div class="container">
    <div class="mt-2">
      <tt-checkbox v-model="remindMe" @input="onRemindMeChanged()">Remind me</tt-checkbox>
    </div>

    <transition enter-active-class="animated fadeInUp" leave-active-class="animated fadeOutDown">
      <div v-if="remindMe" class="animation-duration mt-1">
        <datetime v-model="value.remindAt" type="datetime" :format="dateTimeFormat"></datetime>
        <select v-model="reminderFrequency" @change="onReminderFrequencyChanged()" class="mt-1">
          <option v-for="frequency in frequencies" :key="frequency">{{frequency}}</option>
        </select>
      </div>
    </transition>
  </div>
</template>

<script src="./reminder.js"></script>
<style scoped src="./reminder.css"></style>