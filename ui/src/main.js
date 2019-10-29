import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
import store from './store';

Vue.config.productionTip = false
Vue.use(require('vue-shortkey'));

new Vue({
  store,
  router: Router,
  render: h => h(App)  
}).$mount('#app');