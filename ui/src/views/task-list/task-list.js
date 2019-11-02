import { mapGetters } from "vuex";
import AddItem from '@/components/add-item/add-item.vue';
import Task from '@/components/task/task.vue';
import taskComparer from '@/algorithms/task-comparer.js';

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
    },
    tasks: function() {
      let result = [...this.taskList.tasks];
      result.sort(taskComparer);
      return result;
    }
  }
}

function goToAddTask() {
  this.$router.push({ path: `/add-task/${this.$route.params.id}` });
}