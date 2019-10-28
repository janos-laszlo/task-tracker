<template>
  <div class="container">
    <h3>Add Task</h3>
    <form @submit="onSubmit">
      <input type="text" placeholder="Task..." v-model="title"/>
      <h4 style="margin-bottom: 5px;">
        <span style="margin-right: 5px">Remind me</span>
        <!-- Remind me -->
        <font-awesome-icon icon="clock" />
      </h4>
      <datetime format="YYYY/MM/DD H:i" v-model="reminder"></datetime>
      <div style="margin-top: 5px">
        <input
          type="submit"
          value="Add"
          class="btn btn-positive"
          style="margin-right: 5px; width: calc(50% - 5px)"
        />
        <router-link to="/">
          <button class="btn btn-negative" style="width: 50%">Cancel</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script src="./add-task.js"></script>
<style scoped src="./add-task.css"></style>