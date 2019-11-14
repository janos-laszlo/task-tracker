let onlineCheckInterval;

export default {
  name: "sign-up",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      submittedOnce: false,
      online: true
    };
  },
  methods: {
    onSubmit
  },
  created() {
    onlineCheckInterval = setInterval(() => {
      this.online = navigator.onLine;
    }, 1000);
  },
  destroyed(){
    clearInterval(onlineCheckInterval);
  }
};


function onSubmit() {
  this.submittedOnce = true;
  if (!formValid.call(this)) return;
  this.$router.push('/');
}

function formValid() {
  return this.username && this.password && this.password === this.confirmPassword;
}