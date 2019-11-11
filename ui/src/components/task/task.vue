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
      <div style="display: inline-block; margin-right: 10px">
        <span style="margin-right: 10px;">
          <font-awesome-icon icon="clock" />
        </span>
        <span style="font-size: 14px">{{task.remindAt | formatDateTime}}</span>
      </div>

      <div v-if="task.reminderFrequency !== once" style="display: inline-block; padding: 5px 0 0 0">
        <span style="margin-right: 10px">
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