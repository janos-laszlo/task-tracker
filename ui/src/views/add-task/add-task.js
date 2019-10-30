import datetime from 'vuejs-datetimepicker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions } from 'vuex';

library.add(faClock);

export default {
  name: 'add-task',
  components: {
    datetime,
    FontAwesomeIcon
  },
  data() {
    return {
      title: '',
      reminder: null
    }
  },
  methods: {
    ...mapActions(['addTask']),
    onSubmit,
    cancel
  }
}

function onSubmit() {
  this.addTask({ taskListId: this.$route.params.id, task: { title: this.title, reminder: this.reminder } });
}

function cancel() {
  this.$router.go(-1);
  //this.$router.go({ path: `/task-list/${this.$route.params.id}` });
}