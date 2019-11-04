import VCalendar from "v-calendar";
import { TimePicker } from "element-ui";

let minuteUpdateIntervalId;

export default {
  name: "cron-expression",
  components: {
    VCalendar,
    "el-time-picker": TimePicker
  },
  props: {
    cronExpression: Date,
    future: Boolean
  },
  data() {
    return {
      frequency: "Once",
      dateTime: null,
      minDate: null
    };
  },
  computed: {
    selectedFrequency: {
      get() {
        return this.frequency;
      },
      set(value) {
        this.frequency = value;
      }
    },
    selectableRange: function() {
      return ["00:00", "23:59"];
    }
  },
  created() {
    this.dateTime = new Date();
    this.dateTime.setSeconds(0);
    if (this.future) {
      this.minDate = new Date();
      this.minDate.setHours(0);
      this.minDate.setMinutes(0);
      this.minDate.setSeconds(0);
      minuteUpdateIntervalId = setInterval(() => {
        this.minDate.setMinutes(this.minDate.getMinutes() + 1);
      }, 60000);
    }
  },
  destroyed() {
    if (minuteUpdateIntervalId) {
      clearInterval(minuteUpdateIntervalId);
    }
  }
};
