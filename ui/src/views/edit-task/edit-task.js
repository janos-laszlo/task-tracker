import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions, mapGetters } from 'vuex';
import FocusDirective from '@/directives/focus';

library.add(faClock);

export default {
  name: 'edit-task',
  components: {
    FontAwesomeIcon
  },
  directives: {
    focus: FocusDirective
  },
  data() {
    return {
      task: {}
    }
  },
  computed: {
    ...mapGetters(['getTask'])
  },
  methods: {
    ...mapActions(['updateTask']),
    onSubmit,
    cancel
  },
  created() {
    const task = this.getTask(this.$route.params.id);
    this.title = task.title;
    this.cronExpression = task.cronExpression;
  }
}

function onSubmit() {
  this.updateTask({ id: this.$route.params.id, title: this.title, cronExpression: this.cronExpression });
  this.$router.go(-1);
}

function cancel() {
  this.$router.go(-1);
}