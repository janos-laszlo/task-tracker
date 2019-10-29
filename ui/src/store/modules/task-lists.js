let id = 3;

const state = {
    taskLists: []
};

const getters = {
    getTaskList: (state) => (id) => state.taskLists.find(t => t.id === id)
};

const actions = {
    fetchTaskLists,
    addTaskList,
    deleteTaskList,
    updateTaskList
};

const mutations = {
    setTaskLists: (state, taskLists) => state.taskLists = taskLists,
    newTaskList,
    removeTaskList, 
    editedTaskList
};

export default {
    state, getters, actions, mutations
}

async function fetchTaskLists({ commit }) {
    const promise = new Promise((resolve) => {
        setTimeout(resolve(state.taskLists), 300);
    });

    const res = await promise;
    commit('setTaskLists', res);
}

function addTaskList({ commit }, title) {
    const newTaskList = { id: id++, title };
    commit('newTaskList', newTaskList);
}

function newTaskList(state, taskList) {
    state.taskLists.push(taskList);
}

function deleteTaskList({ commit }, id) {
    commit('removeTaskList', id);
}

function removeTaskList(state, id) {
    const index = state.taskLists.findIndex(t => t.id === id);
    state.taskLists.splice(index, 1);
}

function updateTaskList({commit}, editedTaskList){
    commit('editedTaskList', editedTaskList);    
}

function editedTaskList(state, editedTaskList){
    const tl = state.taskLists.find(t => t.id === editedTaskList.id);
    tl.title = editedTaskList.title;
}