<template>
  <div class="container">
    <h3>Edit Task List</h3>
    <form v-on:submit="onSubmit">
      <input type="text" placeholder="Name..." v-model="title" v-focus />
      <div style="margin-top: 5px">
        <input
          type="submit"
          value="Apply"
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

<script src="./edit-task-list.js"></script>
<style scoped src="./edit-task-list.css"></style>