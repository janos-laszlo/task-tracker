import Vue from 'vue'
import App from './App.vue'
import Router from './router.js'
import store from './store';
import VCalendar from 'v-calendar';
import { TimePicker } from 'element-ui';
import lang from 'element-ui/lib/locale/lang/en'
import locale from 'element-ui/lib/locale'

Vue.config.productionTip = false
Vue.use(require('vue-shortkey'));
Vue.use(VCalendar, {
  componentPrefix: 'vc'
});
Vue.use(TimePicker);
locale.use(lang);

new Vue({
  store,
  router: Router,
  render: h => h(App)
}).$mount('#app');