import { mapActions } from "vuex";
import FocusDirective from '@/directives/focus';

let onlineCheckInterval;

export default {
  name: "sign-up",
  data() {
    return {
      username: '',
      password: '',
      confirmPassword: '',
      submittedOnce: false,
      online: true,
      backendError: null
    };
  },
  directives: {
    focus: FocusDirective
  },
  methods: {
    ...mapActions(['signUp']),
    onSubmit,
    resetBackendErrors
  },
  created() {
    onlineCheckInterval = setInterval(() => {
      this.online = navigator.onLine;
      if (!this.online) this.resetBackendErrors();
    }, 1000);
  },
  destroyed() {
    clearInterval(onlineCheckInterval);
  }
};

function onSubmit() {
  this.resetBackendErrors();
  this.submittedOnce = true;
  if (!formValid.call(this)) return;
  signUp.call(this);
}

function formValid() {
  return this.username && this.password && this.password === this.confirmPassword;
}

async function signUp() {
  try {
    const response = await this.signUp({ username: this.username, password: this.password });
    if (response.succeeded) {
      console.log('Sign up successful');
      this.$router.push('/sign-in');
    } else {
      showError.call(this, response.message);
    }
  } catch (error) {
    showError.call(this, error.message);
  }
}

function showError(message) {
  this.backendError = message;
}

function resetBackendErrors() {
  this.backendError = '';
}