import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import TtCheckbox from '@/components/checkbox/checkbox.vue';
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog.vue';
import { mapActions } from 'vuex';

library.add([faTrash, faEdit, faClock]);

export default {
  name: 'task',
  props: ['index', 'task'],
  components: {
    FontAwesomeIcon,
    TtCheckbox,
    ConfirmationDialog
  },
  data(){
    return {
      showModal: false
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
    }
  },
  methods: {
    ...mapActions(['deleteTask', 'setTaskStatus']),
    goToEditTask,
    openDeleteTaskList,
    onDeleteTaskList,
    onCompletedChange
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


function onCompletedChange(value) {
  console.log(value);
}