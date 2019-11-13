import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faClock, faRedo } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TtCheckbox from '@/components/checkbox/checkbox.vue';
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog.vue';
import { mapActions } from 'vuex';
import { ONCE } from '@/constants/constants.js';

library.add([faTrash, faEdit, faClock, faRedo]);

let nowInterval;

export default {
  name: 'task',
  props: ['index', 'task'],
  components: {
    FontAwesomeIcon,
    TtCheckbox,
    ConfirmationDialog
  },
  data() {
    return {
      showModal: false,
      now: new Date()
    }
  },
  computed: {
    completed: {
      get() {
        return this.task.completed;
      },
      set(value) {
        this.setTaskStatus({ task: this.task, completed: value });
      }
    },
    once: () => ONCE
  },
  methods: {
    ...mapActions(['deleteTask', 'setTaskStatus']),
    goToEditTask,
    openDeleteTaskList,
    onDeleteTaskList
  },
  created() {
    setTimeout(() => {
      resetNow.call(this);
      nowInterval = setInterval(() => {
        resetNow.call(this);
      }, 60000);
    }, 1000 * (60 - (new Date()).getSeconds()));
  },
  destroyed() {
    clearInterval(nowInterval);
  }
}

function goToEditTask() {
  this.$router.push(`/edit-task/${this.task.id}`);
}

function openDeleteTaskList() {
  this.showModal = true;
}


function onDeleteTaskList() {
  this.showModal = false;
  this.deleteTask({ id: this.task.id, taskListId: this.$route.params.id });
}

function resetNow() {
  this.now = new Date();
}