import { mapActions } from 'vuex';

export default {
  name: "edit-task-list",
  data() {
    return {
      title: '',
      submittedOnce: false
    };
  },
  directives: {
    focus: {
      inserted: function (el) {
        el.focus();
      }
    }
  },
  methods: {
    ...mapActions(['addTaskList', 'updateTaskList']),
    onSubmit,
    cancel
  },
  created() {
    this.title = this.$store.getters.getTaskList(this.$route.params.id).title;
  }
};

function onSubmit() {
  this.submittedOnce = true;
  if (!formValid.call(this)) return;
  this.updateTaskList({ id: this.$route.params.id, title: this.title });
  this.$router.push('/');

}

function cancel() {
  this.$router.push('/');
}

function formValid() {
  return this.title;
}