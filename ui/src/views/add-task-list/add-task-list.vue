<template>
  <div class="container">
    <h3>Add Task List</h3>
    <form v-on:submit="onSubmit">
      <input type="text" placeholder="Name..." v-model="title"/>
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

<script src="./add-task-list.js"></script>
<style scoped src="./add-task-list.css"></style>