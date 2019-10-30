let id = 3;

const store = {
  state: {
    taskLists: []
  },
  getters: {
    allTaskLists: (state) => state.taskLists,
    getTaskList: (state) => (id) => state.taskLists.find(t => t.id === id),
    getTasks: (state) => (id) => state.taskLists.find(t => t.id === id).tasks
  },
  actions: {
    fetchTaskLists,
    addTaskList,
    deleteTaskList,
    updateTaskList,
    setTaskLists,
    addTask
  },
  mutations: {
    setTaskLists: (state, taskLists) => state.taskLists = taskLists,
    newTaskList,
    removeTaskList,
    editedTaskList,
    newTask
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
  const newTaskList = { id: id++, title, tasks: [] };
  commit('newTaskList', newTaskList);
}

function updateTaskList({ commit }, editedTaskList) {
  commit('editedTaskList', editedTaskList);
}

function deleteTaskList({ commit }, id) {
  commit('removeTaskList', id);
}

function setTaskLists(context, newTaskLists){
  // save new task list in the backend
  context.commit('setTaskLists', newTaskLists);
}

function addTask(context, task) {
  context.commit('newTask', task);
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

function newTask(state, task){
  state.taskLists.find(t => t.id === task.id).tasks.push(task);
}