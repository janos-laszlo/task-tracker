import { mapActions } from 'vuex';
import FocusDirective from '@/directives/focus';

export default {
  name: "add-task-list",
  data() {
    return {
      title: ''
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

function onSubmit(e) {
  e.preventDefault();
  this.addTaskList(this.title);
  this.$router.push('/');

}

function cancel() {
  this.$router.go(-1);
}