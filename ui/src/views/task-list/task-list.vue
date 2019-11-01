<template>
  <div>
    <h3 class="page-title">{{taskList.title}}</h3>
    <p v-if="!taskList.tasks.length">Empty here...</p>

    <div style="margin-bottom: 60px;">
      <task v-for="(task, index) in taskList.tasks" :key="task.id" :task="task" :index="index"/>
    </div>

    <router-link
      :to="`/add-task/${taskList.id}`"
      v-shortkey="['ctrl', 'space']"
      @shortkey.native="goToAddTask"
    >
      <add-item></add-item>
    </router-link>    
  </div>
</template>

<script src="./task-list.js"></script>
<style scoped src="./task-list.css"></style>