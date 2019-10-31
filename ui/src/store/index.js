import Vuex from 'vuex';
import Vue from 'vue';
import taskLists from './modules/task-lists';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        taskLists
    }
});