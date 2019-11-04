<template>
  <div class="container">
    <h3>Edit Task</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Task..." v-model="title" v-focus />
      <h4 style="margin-bottom: 5px;">
        <span style="margin-right: 5px">Remind me</span>
        <font-awesome-icon icon="clock" />
      </h4>
      <!-- <datetime format="YYYY/MM/DD H:i" v-model="reminder"></datetime> -->
      <div style="margin-top: 5px">
        <input
          type="submit"
          value="Apply"
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

<script src="./edit-task.js"></script>
<style scoped src="./edit-task.css"></style>