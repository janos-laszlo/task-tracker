import AddItem from '@/components/add-item/add-item.vue';
import ConfirmationDialog from '@/components/confirmation-dialog/confirmation-dialog.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions } from 'vuex';
import draggable from 'vuedraggable'

library.add(faTrash);

export default {
  name: 'task-lists',
  components: {
    AddItem,
    ConfirmationDialog,
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
    ...mapActions(['fetchTaskLists', 'deleteTaskList']),
    openDeleteTaskList,
    onDeleteTaskList,
    onSortingChanged
  },
  computed: {
    taskLists: {
      get() {
        return this.$store.state.taskLists.taskLists;
      },
      set(value){
        this.$store.commit('setTaskLists', value);
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

function onSortingChanged(e){
  this.sortingDisabled = !e.target.checked;
}