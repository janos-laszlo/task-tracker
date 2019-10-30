import { mapGetters } from "vuex";
import AddItem from '@/components/add-item/add-item.vue';

export default {
  name: 'task-list',
  components: {
    AddItem
  },
  data() {
    return {
      taskList: null
    }
  },
  methods: {
    goToAddTask
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