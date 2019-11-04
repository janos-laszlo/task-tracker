import VCalendar from "v-calendar";
import { TimePicker } from "element-ui";

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
      dateTime: new Date(),
      minDateTime: new Date()
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
    selectedDateTime: {
      get() {
        return this.dateTime;
      },
      set(value) {
        this.dateTime.setHours(value.getHours());
      }
    },
    selectableRange: function() {
      return ["00:00", "23:59"];
    }
  }
};
