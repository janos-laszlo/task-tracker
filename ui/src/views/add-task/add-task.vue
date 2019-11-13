<template>
  <div class="container">
    <h3>Add Task</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Task..." v-model="title" v-focus />
      <p class="validation-error" v-show="submittedOnce && !title">A task title is required.</p>
      <reminder v-model="reminder" />
      <p class="validation-error" v-show="submittedOnce && !reminderValid()">Pick a date and time</p>
      <div class="mt-1">
        <input
          type="submit"
          value="Add"
          class="btn btn-positive"
          style="margin-right: 10px; width: calc(50% - 10px)"
        />
        <input
          type="button"
          value="Cancel"
          class="btn btn-negative"
          style="width: 50%"
          @click="cancel"
          v-shortkey="['esc']"
          @shortkey="cancel"
        />
      </div>
    </form>
  </div>
</template>

<script src="./add-task.js"></script>
<style scoped src="./add-task.css"></style>