<template>
  <div>
    <h3 class="page-title">Task lists</h3>
    <div id="task-list-container">
      <div v-if="taskLists.length">
        <tt-checkbox
          :checked="!sortingDisabled"
          @change="onSortingChanged"
          v-shortkey="['ctrl', 'o']"
          @shortkey.native="toggleOrdering"
        >Toggle ordering</tt-checkbox>
      </div>
      <p v-else>Empty here...</p>
      <draggable v-model="taskLists" :disabled="sortingDisabled">
        <div class="task-list" v-for="(taskList, index) in taskLists" v-bind:key="taskList.id">
          <router-link :to="`/task-list/${taskList.id}`">
            <div class="task-list-name">
              <h4>{{taskList.title}}</h4>
            </div>
          </router-link>
          <router-link
            :to="{name: 'edit-task-list', params: {id: taskList.id}}"
            v-shortkey="['ctrl', 'alt', index + 1]"
            @shortkey.native="goToEditTaskList(taskList.id)"
          >
            <span class="icon">
              <font-awesome-icon icon="edit" />
            </span>
          </router-link>
          <span
            class="icon"
            v-on:click="openDeleteTaskList(taskList.id)"
            v-shortkey="['alt', index + 1]"
            @shortkey="openDeleteTaskList(taskList.id)"
          >
            <font-awesome-icon icon="trash" />
          </span>
        </div>
      </draggable>
      <div style="height: 40px"></div>
      <confirmation-dialog v-if="showModal" @close="showModal = false" @yes="onDeleteTaskList"></confirmation-dialog>
    </div>
    <router-link
      to="add-task-list"
      v-shortkey="['ctrl', 'space']"
      @shortkey.native="goToAddTaskList"
    >
      <add-item></add-item>
    </router-link>
  </div>
</template>

<script src="./task-lists.js"></script>
<style scoped src="./task-lists.css"></style>