<template>
  <div>
    <h3 class="page-title">{{taskList.title}}</h3>
    <div v-if="taskList.tasks.length">
      <tt-checkbox
        :checked="!sortingDisabled"
        @change="onSortingChanged"
        v-shortkey="['ctrl', 'o']"
        @shortkey.native="toggleOrdering"
      >Toggle ordering</tt-checkbox>
    </div>
    <p v-else>Empty here...</p>
    <router-link
      :to="{ path: `/add-task/${$route.params.id}` }"
      v-shortkey="['ctrl', 'space']"
      @shortkey.native="goToAddTask"
    >
      <add-item></add-item>
    </router-link>
  </div>
</template>

<script src="./task-list.js"></script>
<style scoped src="./task-list.css"></style>