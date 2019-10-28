let id = 3;

const state = {
    taskLists: []
};

const actions = {
    fetchTaskLists,
    addTaskList,
    deleteTaskList
};

const mutations = {
    setTaskLists: (state, taskLists) => state.taskLists = taskLists,
    newTaskList,
    removeTaskList
};

export default {
    state, actions, mutations
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