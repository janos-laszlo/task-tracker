<template>
  <div>
    <h3 style="text-align: center">Task lists</h3>
    <div id="task-list-container">
      <div v-if="taskLists.length">
        <tt-checkbox @change="onSortingChanged" text="Enable sorting">Enable sorting</tt-checkbox>
      </div>
      <p v-else>Empty here...</p>
      <draggable v-model="taskLists" :disabled="sortingDisabled">
        <div class="task-list" v-for="taskList in taskLists" v-bind:key="taskList.id">
          <h4 style="width: calc(100% - 55px); display: inline-block">{{taskList.title}}</h4>
          <router-link :to="{name: 'edit-task-list', params: {id: taskList.id}}">
            <span class="icon">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
          <span class="icon" v-on:click="openDeleteTaskList(taskList.id)">
            <font-awesome-icon icon="trash" />
          </span>
        </div>
      </draggable>
      <div style="height: 40px"></div>
      <confirmation-dialog v-if="showModal" @close="showModal = false" @yes="onDeleteTaskList"></confirmation-dialog>
    </div>
    <router-link to="add-task-list">
      <add-item></add-item>
    </router-link>
  </div>
</template>

<script src="./task-lists.js"></script>
<style scoped src="./task-lists.css"></style>