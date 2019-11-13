import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions } from 'vuex';
import FocusDirective from '@/directives/focus';
import Reminder from '@/components/reminder/reminder.vue';

library.add(faClock);

export default {
  name: 'add-task',
  components: {
    FontAwesomeIcon,
    Reminder
  },
  directives: {
    focus: FocusDirective
  },
  data() {
    return {
      title: '',
      reminder: {
        remindAt: null,
        reminderFrequency: null
      },
      submittedOnce: false
    }
  },

  methods: {
    ...mapActions(['addTask']),
    onSubmit,
    cancel,
    reminderValid
  }
}

function onSubmit() {
  this.submittedOnce = true;
  if (!formValid.call(this)) return;
  this.addTask({ taskListId: this.$route.params.id, task: { title: this.title, remindAt: this.reminder.remindAt, reminderFrequency: this.reminder.reminderFrequency } });
  this.$router.go(-1);
}

function cancel() {
  this.$router.go(-1);
}

function formValid() {
  return this.title && reminderValid.call(this);
}

function reminderValid() {
  return (!this.reminder.reminderFrequency || this.reminder.remindAt);
}