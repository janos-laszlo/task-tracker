import DateTimePicker from '@/components/date-time-picker/date-time-picker.vue';
import MinutePicker from '@/components/minute-picker/minute-picker.vue'
import HourPicker from '@/components/hour-picker/hour-picker.vue';
import DayOfWeekPicker from '@/components/day-of-week-picker/day-of-week-picker.vue';
import getCronExpression from '@/algorithms/cron-expression.js';
import * as Constants from '@/constants/constants';

export default {
  name: "cron-expression",
  components: {
    DateTimePicker,
    MinutePicker,
    HourPicker,
    DayOfWeekPicker
  },
  props: {
    value: [String]
  },
  data() {
    return {
      frequency: Constants.HOURLY,
      date: this.value,
      minute: [],
      daily: {
        hour: null,
        minute: null
      },
      weekly: {
        days: [],
        hour: null,
        minute: null
      },
      cronExpression: {
        minute: null,
        hour: null,
        dayOfWeek: null,
        dayOfTheMonth: null,
        month: null
      }
    };
  },
  computed: {
    constants: function () { return Constants; },
    selectedFrequency: {
      get() {
        return this.frequency;
      },
      set(value) {
        this.frequency = value;
      }
    },
    dateProp: {
      get() { return this.date; },
      set(value) {
        this.date = value;
        this.emitCron();
      }
    },
    minuteProp: {
      get() { return this.cronExpression.minute },
      set(value) {
        this.cronExpression.minute = value;
        this.emitCron();
      }
    },
    hourProp: {
      get() { return this.cronExpression.hour },
      set(value) {
        this.cronExpression.hour = value;
        this.emitCron();
      }
    },
    dayOfWeekProp: {
      get() { return this.cronExpression.dayOfWeek; },
      set(value) {
        this.cronExpression.dayOfWeek = value;
        this.emitCron();
      }
    }
  },
  methods: {
    emitCron,
    emitDate,
    emitHourly,
    emitDaily,
    emitWeekly,
    onDailyChanged,
    onWeeklyChanged,
    onSelectedFrequencyChanged
  }
};

function emitCron() {
  switch (this.selectedFrequency) {
    case Constants.ONCE:
      this.emitDate();
      break;
    case Constants.HOURLY:
      this.emitHourly();
      break;
    case Constants.DAILY:
      this.emitDaily();
      break;
    case Constants.WEEKLY:
      this.emitWeekly();
      break;
    default:
      console.error('not handled');
      break;
  }
}

function emitDate() {
  this.$emit('input', getCronExpression(this.selectedFrequency, this.dateProp));
}

function emitHourly() {
  this.$emit('input', getCronExpression(this.selectedFrequency, this.minuteProp));
}

function emitDaily() {
  this.$emit('input', getCronExpression(this.selectedFrequency, { minute: this.minuteProp, hour: this.hourProp }));
}

function emitWeekly() {
  const weekly = {
    dayOfWeek: this.dayOfWeekProp,
    hour: this.hourProp,
    minute: this.minuteProp
  };

  this.$emit('input', getCronExpression(this.selectedFrequency, weekly));
}

function onDailyChanged() {
  if (this.daily.hour && this.daily.minute)
    this.$emit('input', getCronExpression(this.selectedFrequency, this.daily));
}

function onWeeklyChanged() {
  if (this.weekly.days.length && this.weekly.hour && this.weekly.minute) {
    this.$emit('input', getCronExpression(this.selectedFrequency, this.weekly));
  }
}

function onSelectedFrequencyChanged() {
  this.emitCron();
}