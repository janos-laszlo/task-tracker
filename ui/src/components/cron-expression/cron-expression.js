import VCalendar from 'v-calendar';
import { TimePicker } from 'element-ui';

export default {
  name: 'cron-expression',
  components: {
    VCalendar,
    'el-time-picker': TimePicker
  },
  data() {
    return {
      value: new Date()
    }
  }
}