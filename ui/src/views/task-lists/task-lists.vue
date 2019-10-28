<template>
  <div>
    <h3 style="text-align: center">Task lists</h3>
    <div id="task-list-container">
      <p v-if="!taskLists.length">Empty here...</p>
      <div v-if="taskLists.length">
        <tt-checkbox @change="onSortingChanged"></tt-checkbox>
        <span style="position: relative; bottom: 10px;">Enable sorting</span>
      </div>
      <draggable v-model="taskLists" :disabled="sortingDisabled">
        <div class="task-list" v-for="taskList in taskLists" v-bind:key="taskList.id">
          <h4 style="width: calc(100% - 24px); display: inline-block">{{taskList.title}}</h4>
          <span class="delete-icon" v-on:click="openDeleteTaskList(taskList.id)">
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