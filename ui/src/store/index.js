import Vuex from 'vuex';
import Vue from 'vue';
import taskLists from './modules/task-lists';
import auth from './modules/auth';

// Load Vuex
Vue.use(Vuex);

// Create store
export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        taskLists,
        auth
    }
});