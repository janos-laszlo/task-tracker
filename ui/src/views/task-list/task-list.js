import { mapGetters } from "vuex";
import AddItem from '@/components/add-item/add-item.vue';
import Task from '@/components/task/task.vue';

export default {
  name: 'task-list',
  components: {
    AddItem,
    Task
  },
  methods: {
    goToAddTask
  },
  computed: {
    ...mapGetters(['getTaskList']),
    taskList: function () {
      return this.getTaskList(this.$route.params.id);
    }
  }
}

function goToAddTask() {
  this.$router.push({ path: `/add-task/${this.$route.params.id}` });
}