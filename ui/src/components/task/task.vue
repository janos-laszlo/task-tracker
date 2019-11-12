<template>
  <div class="task-container">
    <div class="header-row">
      <div class="task-status">
        <tt-checkbox v-model="completed"></tt-checkbox>
      </div>
      <div class="task-name">{{task.title}}</div>
      <div class="task-actions">
        <router-link
          :to="{name: 'edit-task', params: {id: task.id}}"
          v-shortkey="['ctrl', 'alt', index + 1]"
          @shortkey.native="goToEditTask()"
        >
          <span class="icon">
            <font-awesome-icon icon="edit" />
          </span>
        </router-link>
        <span
          class="icon"
          v-on:click="openDeleteTaskList()"
          v-shortkey="['alt', index + 1]"
          @shortkey="openDeleteTaskList()"
        >
          <font-awesome-icon icon="trash" />
        </span>
      </div>
    </div>
    <div v-if="task.remindAt" class="reminder">
      <div class="reminder-component">
        <div
          class="reminder-icon"
          :class="(new Date(task.remindAt)) < now ? 'task-overdue' : 'task-in-time'"
        >
          <font-awesome-icon icon="clock" />
        </div>
        <div class="reminder-datetime">{{task.remindAt | formatDateTime}}</div>
      </div>

      <div v-if="task.reminderFrequency !== once" class="reminder-component">
        <span style="margin-right: 5px">
          <font-awesome-icon icon="redo" />
        </span>
        <span style="font-size: 14px;">{{task.reminderFrequency}}</span>
      </div>
    </div>
    <confirmation-dialog v-if="showModal" @close="showModal = false" @yes="onDeleteTaskList"></confirmation-dialog>
  </div>
</template>

<script src="./task.js"></script>
<style scoped src="./task.css"></style>