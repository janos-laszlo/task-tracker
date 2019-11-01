import { TaskList } from "../../types/task-list";
import { Task } from "../../types/task";

const store = {
  state: {
    taskLists: []
  },
  getters: {
    allTaskLists: (state) => state.taskLists,
    getTaskList: (state) => (id) => state.taskLists.find(t => t.id === id),
    getTasks: (state) => (id) => state.taskLists.find(t => t.id === id).tasks,
    getTask: state => id => {
      for (const taskList of state.taskLists) {
        for (const task of taskList.tasks) {
          if (task.id === id) {
            return task;
          }
        }
      }
    }
  },
  actions: {
    fetchTaskLists,
    addTaskList,
    deleteTaskList,
    updateTaskList,
    setTaskLists,
    addTask,
    deleteTask,
    updateTask,
    setTaskStatus
  },
  mutations: {
    setTaskLists: (state, taskLists) => state.taskLists = taskLists,
    newTaskList,
    removeTaskList,
    editedTaskList,
    newTask,
    removeTask,
    editTask,
    updateTaskStatus
  }
};

export default store

// actions
async function fetchTaskLists({ commit }) {
  const promise = new Promise((resolve) => {
    setTimeout(resolve(store.state.taskLists), 300);
  });

  const res = await promise;
  commit('setTaskLists', res);
}

function addTaskList({ commit }, title) {
  const newTaskList = new TaskList(title);
  commit('newTaskList', newTaskList);
}

function updateTaskList({ commit }, editedTaskList) {
  commit('editedTaskList', editedTaskList);
}

function deleteTaskList({ commit }, id) {
  commit('removeTaskList', id);
}

function setTaskLists(context, newTaskLists) {
  // save new task list in the backend
  context.commit('setTaskLists', newTaskLists);
}

function addTask(context, task) {
  context.commit('newTask', task);
}

function deleteTask({ commit }, payload) {
  // delete from repository here.
  commit('removeTask', payload);
}

function updateTask(context, payload) {
  const task = context.getters.getTask(payload.id);

  context.commit('editTask', { task, updatedTask: payload });
}

function setTaskStatus(context, payload) {
  context.commit('updateTaskStatus', payload);
}

// mutations
function newTaskList(state, taskList) {
  state.taskLists.push(taskList);
}


function removeTaskList(state, id) {
  const index = state.taskLists.findIndex(t => t.id === id);
  state.taskLists.splice(index, 1);
}


function editedTaskList(state, editedTaskList) {
  const tl = state.taskLists.find(t => t.id === editedTaskList.id);
  tl.title = editedTaskList.title;
}

function newTask(state, payload) {
  const task = new Task(payload.task.title, payload.task.reminder);
  state.taskLists.find(t => t.id === payload.taskListId).tasks.push(task);
}

function removeTask(state, payload) {
  const tasks = state.taskLists.find(t => t.id === payload.taskListId).tasks;
  const index = tasks.findIndex(t => t.id === payload.id);
  tasks.splice(index, 1);
}

function editTask(state, payload) {
  payload.task.title = payload.updatedTask.title;
  payload.task.reminder = payload.updatedTask.reminder;
}

function updateTaskStatus(state, payload) {
  payload.task.completed = payload.completed;
}