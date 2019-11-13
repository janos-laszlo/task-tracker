<template>
  <div class="container">
    <h3>Edit Task List</h3>
    <form @submit.prevent="onSubmit">
      <input type="text" placeholder="Name..." v-model="title" v-focus />
      <p class="validation-error" v-show="submittedOnce && !title">Task list title is required.</p>
      <div style="margin-top: 5px">
        <input
          type="submit"
          value="Apply"
          class="btn btn-positive"
          style="margin-right: 5px; width: calc(50% - 5px)"
        />
        <router-link to="/" v-shortkey="['esc']" @shortkey.native="cancel">
          <button class="btn btn-negative" style="width: 50%">Cancel</button>
        </router-link>
      </div>
    </form>
  </div>
</template>

<script src="./edit-task-list.js"></script>
<style scoped src="./edit-task-list.css"></style>