<template>
  <div class="container">
    <h3>Add Task</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Task..." v-model="title" v-focus />
      <fieldset>
        <legend>
          <h4>
            <span style="margin-right: 5px">Remind me</span>
            <font-awesome-icon icon="clock" />
          </h4>
        </legend>
        <div id="datetime-container">
          <cron-expression v-model="cronExpression" />
        </div>
        <p>cron:{{cronExpression}}</p>
        <p>human readable cron: {{humanReadableCron}}</p>
      </fieldset>

      <div style="margin-top: 5px">
        <input
          type="submit"
          value="Add"
          class="btn btn-positive"
          style="margin-right: 5px; width: calc(50% - 5px)"
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