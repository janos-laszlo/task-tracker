import AddItem from '@/components/add-item/add-item.vue';
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog.vue';
import TtCheckbox from '@/components/checkbox/checkbox.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions, mapGetters } from 'vuex';
import draggable from 'vuedraggable'

library.add([faTrash, faEdit]);

export default {
  name: 'task-lists',
  components: {
    AddItem,
    ConfirmationDialog,
    TtCheckbox,
    FontAwesomeIcon,
    draggable
  },
  data() {
    return {
      showModal: false,
      sortingDisabled: true
    }
  },
  methods: {
    ...mapActions(['fetchTaskLists', 'deleteTaskList', 'setTaskLists']),
    openDeleteTaskList,
    onDeleteTaskList,
    onSortingChanged,
    goToAddTaskList,
    toggleOrdering,
    goToEditTaskList
  },
  computed: {
    ...mapGetters(['allTaskLists']),
    taskLists: {
      get() {
        return this.allTaskLists;
      },
      set(newTaskList) {
        this.setTaskLists(newTaskList);
      }
    }
  },
  created() {
    this.fetchTaskLists();
  }
}

function openDeleteTaskList(id) {
  this.showModal = true;
  this.taskToDeleteId = id;
}

function onDeleteTaskList() {
  this.showModal = false;
  this.deleteTaskList(this.taskToDeleteId);
}

function onSortingChanged(checked) {
  this.sortingDisabled = !checked;
}

function goToAddTaskList() {
  this.$router.push('add-task-list');
}

function toggleOrdering() {
  this.sortingDisabled = !this.sortingDisabled;
}

function goToEditTaskList(id) {
  this.$router.push({ name: 'edit-task-list', params: { id } });
}