<template>
  <div class="container">
    <h3>Edit Task</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Task..." v-model="title" v-focus />
      <p class="validation-error" v-show="submittedOnce && !title">A task title is required.</p>
      <reminder v-model="reminder" :is-expanded="isReminderSet()"></reminder>
      <p class="validation-error" v-show="submittedOnce && !reminderValid()">Pick a date and time</p>
      
      <div style="margin-top: 10px">
        <input
          type="submit"
          value="Apply"
          class="btn btn-positive"
          style="margin-right: 10px; width: calc(50% - 5px)"
        />
        <input
          type="button"
          value="Cancel"
          class="btn btn-negative"
          style="width: calc(50% - 5px)"
          @click="cancel"
          v-shortkey="['esc']"
          @shortkey="cancel"
        />
      </div>
    </form>
  </div>
</template>

<script src="./edit-task.js"></script>
<style scoped src="./edit-task.css"></style>