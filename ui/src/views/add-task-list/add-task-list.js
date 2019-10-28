import { mapActions } from 'vuex';

export default {
  name: "add-task-list",
  data() {
    return {
      title: ''
    };
  },
  methods: {
    ...mapActions(['addTaskList']),
    onSubmit
  },
};

function onSubmit(e){
  e.preventDefault();
  this.addTaskList(this.title);
  this.$router.push('/');
  
}