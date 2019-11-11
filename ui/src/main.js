import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
import store from './store';
import DateTime from 'vue-datetime';
import formatDateTime from '@/filters/date-time-formatter.js';
import 'vue-datetime/dist/vue-datetime.css';

Vue.config.productionTip = false
Vue.use(require('vue-shortkey'));
Vue.use(DateTime);
Vue.filter('formatDateTime', formatDateTime);

new Vue({
  store,
  router: Router,
  render: h => h(App)
}).$mount('#app');