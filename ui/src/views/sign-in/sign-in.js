import FocusDirective from '@/directives/focus';
import { mapActions } from 'vuex';

let onlineCheckInterval;

export default {
  name: "sign-in",
  data() {
    return {
      username: '',
      password: '',
      submittedOnce: false,
      online: true,
      backendError: ''
    };
  },
  directives: {
    focus: FocusDirective
  },
  methods: {
    ...mapActions(['signIn']),
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
  signIn.call(this);
}

function formValid() {
  return this.username && this.password;
}

async function signIn() {
  try {
    const response = await this.signIn({ username: this.username, password: this.password });
    if (response.succeeded) {
      console.log('Sign in successful');
      this.$router.push('/');
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