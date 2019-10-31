<template>
  <div>
    <h3 class="page-title">{{taskList.title}}</h3>
    <p v-if="!taskList.tasks.length">Empty here...</p>

    <div class="task-container" v-for="(task, index) in taskList.tasks" :key="task.id">
      <div class="header-row">
        <div class="task-status">
          <tt-checkbox></tt-checkbox>
        </div>
        <div class="task-name">
          {{task.title}}
        </div>
        <div class="task-actions">
          <router-link
            :to="{name: 'edit-task', params: {id: task.id}}"
            v-shortkey="['ctrl', 'alt', index + 1]"
            @shortkey.native="goToEditTask(task.id)"
          >
            <span class="icon">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
          <span
            class="icon"
            v-on:click="openDeleteTaskList(task.id)"
            v-shortkey="['alt', index + 1]"
            @shortkey="openDeleteTaskList(task.id)"
          >
            <font-awesome-icon icon="trash" />
          </span>
        </div>
      </div>
      <div v-if="task.reminder" class="reminder">
        <span style="margin-right: 5px;">
          <font-awesome-icon icon="clock" />
        </span>
        <span style="font-size: 14px">{{task.reminder}}</span>
      </div>
    </div>

    <router-link
      :to="`/add-task/${taskList.id}`"
      v-shortkey="['ctrl', 'space']"
      @shortkey.native="goToAddTask"
    >
      <add-item></add-item>
    </router-link>
    <confirmation-dialog v-if="showModal" @close="showModal = false" @yes="onDeleteTaskList"></confirmation-dialog>
  </div>
</template>

<script src="./task-list.js"></script>
<style scoped src="./task-list.css"></style>