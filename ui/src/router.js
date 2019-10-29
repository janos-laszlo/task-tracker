import Vue from 'vue';
import Router from 'vue-router';
import TaskLists from './views/task-lists/task-lists.vue';
import AddTaskList from './views/add-task-list/add-task-list.vue';
import EditTaskList from './views/edit-task-list/edit-task-list.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'task-lists',
      component: TaskLists
    },
    {
      path: '/add-task-list',
      name: 'add-task-list',
      component: AddTaskList
    },
    {
      path: '/edit-task-list',
      name: 'edit-task-list',
      component: EditTaskList
    }
  ]
});