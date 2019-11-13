<template>
  <div class="container">
    <h3>Add Task List</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Name..." v-model="title" v-focus />
      <p class="validation-error" v-show="submittedOnce && !title">Task list title is required.</p>
      <div style="margin-top: 10px">
        <input
          type="submit"
          value="Add"
          class="btn btn-positive"
          style="margin-right: 10px; width: calc(50% - 5px)"
        />
        <router-link to="/" v-shortkey="['esc']" @shortkey.native="cancel">
          <button class="btn btn-negative" style="width: calc(50% - 5px)">Cancel</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script src="./add-task-list.js"></script>
<style scoped src="./add-task-list.css"></style>