import { mapActions } from 'vuex';
import FocusDirective from '@/directives/focus';

export default {
  name: "add-task-list",
  data() {
    return {
      title: '',
      submittedOnce: false
    };
  },
  directives: {
    focus: FocusDirective
  },
  methods: {
    ...mapActions(['addTaskList']),
    onSubmit,
    cancel
  },
};

function onSubmit() {
  this.submittedOnce = true;
  if (!formValid.call(this)) return;
  this.addTaskList(this.title);
  this.$router.push('/');
}

function cancel() {
  this.$router.go(-1);
}

function formValid() {
  return this.title;
}