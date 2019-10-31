import { mapGetters, mapActions } from "vuex";
import AddItem from '@/components/add-item/add-item.vue';
import TtCheckbox from '@/components/checkbox/checkbox.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faClock } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog.vue';

library.add([faTrash, faEdit, faClock]);

export default {
  name: 'task-list',
  components: {
    AddItem,
    TtCheckbox,
    FontAwesomeIcon,
    ConfirmationDialog
  },
  data() {
    return {
      taskList: {
        title: '',
        tasks: []
      },
      showModal: false,
      taskToDeleteId: null
    }
  },
  methods: {
    ...mapActions(['deleteTask']),
    goToAddTask,
    openDeleteTaskList,
    onDeleteTaskList,
    goToEditTask
  },
  computed: {
    ...mapGetters(['getTaskList', 'getTasks'])
  },
  created() {
    this.taskList = this.getTaskList(parseInt(this.$route.params.id));
  }
}

function goToAddTask() {
  this.$router.push({ path: `/add-task/${this.$route.params.id}` });
}

function openDeleteTaskList(id) {
  this.showModal = true;
  this.taskToDeleteId = id;
}

function onDeleteTaskList() {
  this.showModal = false;
  this.deleteTask({ id: this.taskToDeleteId, taskListId: parseInt(this.$route.params.id) });
}

function goToEditTask(id) {
  this.$router.push(`/edit-task/${id}`);
}