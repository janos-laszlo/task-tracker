import Vue from "vue";
import Router from "vue-router";
import TaskLists from "./views/task-lists/task-lists.vue";
import AddTaskList from "./views/add-task-list/add-task-list.vue";
import EditTaskList from "./views/edit-task-list/edit-task-list.vue";
import TaskList from "./views/task-list/task-list.vue";
import AddTask from "./views/add-task/add-task.vue";
import EditTask from "./views/edit-task/edit-task.vue";
import About from "./views/about/about.vue";
import SignUp from "./views/sign-up/sign-up.vue";
import SignIn from "./views/sign-in/sign-in.vue";
import PageNotFound from './views/page-not-found/page-not-found.vue';
import store from './store/index.js';

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "task-lists",
      component: TaskLists,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/add-task-list",
      name: "add-task-list",
      component: AddTaskList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit-task-list",
      name: "edit-task-list",
      component: EditTaskList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/task-list/:id",
      name: "task-list",
      component: TaskList,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/add-task/:id",
      name: "add-task",
      component: AddTask,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/edit-task/:id",
      name: "edit-task",
      component: EditTask,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/sign-up",
      name: "sign-up",
      component: SignUp
    },
    {
      path: "/sign-in",
      name: "sign-in",
      component: SignIn
    },
    {
      path: "*",
      component: PageNotFound
    }
  ]
});

router.beforeEach((to, from, next) => {
  const x = store.getters['auth/isAuthenticated'];
  if (!to.meta.requiresAuth || x) {
    next();
  } else {
    next('/sign-in');
  }
});

export default router;
