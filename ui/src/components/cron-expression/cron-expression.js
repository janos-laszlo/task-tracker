import DateTimePicker from '@/components/date-time-picker/date-time-picker.vue';
import MinutePicker from '@/components/minute-picker/minute-picker.vue'
import getCronExpression from '@/algorithms/cron-expression.js';
import * as Constants from '@/constants/constants';

export default {
  name: "cron-expression",
  components: {
    DateTimePicker,
    MinutePicker
  },
  props: {
    value: [String]
  },
  data() {
    return {
      frequency: Constants.ONCE,
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
        minutes: [],
        hours: [],
        daysOfTheWeek: [],
        daysOfTheMonth: [],
        months: []
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
        this.emitDate();
      }
    },
    minutesProp: {
      get() { return this.cronExpression.minutes },
      set(value) {
        this.cronExpression.minutes = value;
        this.emitHourly();
      }
    }
  },
  methods: {
    emitDate,
    emitHourly,
    onDailyChanged,
    onWeeklyChanged,
    onSelectedFrequencyChanged
  }
};

function emitDate() {
  this.$emit('input', getCronExpression(this.selectedFrequency, this.dateProp));
}

function emitHourly() {
  this.$emit('input', getCronExpression(this.selectedFrequency, this.cronExpression.minutes));
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
  switch (this.selectedFrequency) {
    case Constants.ONCE:
      this.emitDate();
      break;
    case Constants.HOURLY:
      this.emitHourly();
      break;
    case Constants.DAILY:
      this.onDailyChanged();
      break;
    case Constants.WEEKLY:
      break;
    case Constants.MONTHLY:
      break;
    case Constants.YEARLY:
      break;
    default:
      break;
  }
}