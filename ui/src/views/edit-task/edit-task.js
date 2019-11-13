import { library } from '@fortawesome/fontawesome-svg-core'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { mapActions, mapGetters } from 'vuex';
import FocusDirective from '@/directives/focus';
import Reminder from '@/components/reminder/reminder.vue';

library.add(faClock);

export default {
  name: 'edit-task',
  components: {
    FontAwesomeIcon,
    Reminder
  },
  directives: {
    focus: FocusDirective
  },
  data() {
    return {
      title: "",
      reminder: {
        remindAt: null,
        reminderFrequency: null
      },
      submittedOnce: false
    }
  },
  computed: {
    ...mapGetters(['getTask'])
  },
  methods: {
    ...mapActions(['updateTask']),
    onSubmit,
    cancel,
    isReminderSet,
    reminderValid
  },
  created() {
    const task = this.getTask(this.$route.params.id);
    this.title = task.title;
    this.reminder.remindAt = task.remindAt;
    this.reminder.reminderFrequency = task.reminderFrequency;
  }
}

function onSubmit() {
  this.submittedOnce = true;
  if (!formValid.call(this)) return;
  this.updateTask({ id: this.$route.params.id, title: this.title, remindAt: this.reminder.remindAt, reminderFrequency: this.reminder.reminderFrequency });
  this.$router.go(-1);
}

function cancel() {
  this.$router.go(-1);
}

function isReminderSet() {
  return !!(this.reminder.remindAt && this.reminder.reminderFrequency);
}

function formValid() {
  return this.title && reminderValid.call(this);
}

function reminderValid() {
  return (!this.reminder.reminderFrequency || this.reminder.remindAt);
}