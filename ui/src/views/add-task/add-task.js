import datetime from 'vuejs-datetimepicker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions } from 'vuex';
import FocusDirective from '@/directives/focus';

library.add(faClock);

export default {
  name: 'add-task',
  components: {
    datetime,
    FontAwesomeIcon
  },
  directives: {
    focus: FocusDirective
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
  this.$router.go(-1);
}

function cancel() {
  this.$router.go(-1);
}