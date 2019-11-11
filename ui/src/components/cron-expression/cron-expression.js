import DateTimePicker from '@/components/date-time-picker/date-time-picker.vue';
import MinutePicker from '@/components/minute-picker/minute-picker.vue'
import HourPicker from '@/components/hour-picker/hour-picker.vue';
import DayOfWeekPicker from '@/components/day-of-week-picker/day-of-week-picker.vue';
import DatePicker from '@/components/date-picker/date-picker.vue';
import MonthPicker from '@/components/month-picker/month-picker.vue';
import getCronExpression from '@/algorithms/cron-expression.js';
import * as Constants from '@/constants/constants';

export default {
  name: "cron-expression",
  components: {
    DateTimePicker,
    MinutePicker,
    HourPicker,
    DayOfWeekPicker,
    DatePicker,
    MonthPicker
  },
  props: {
    value: [String]
  },
  data() {
    return {
      frequency: Constants.ONCE,
      dateTime: null,
      cronExpression: {
        minute: null,
        hour: null,
        dayOfWeek: null,
        dayOfTheMonth: null,
        month: null
      },
      cron: null      
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
    dateTimeProp: {
      get() { return this.dateTime;},
      set(value){
        this.dateTime = value;
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
    },
    dayOfTheMonthProp: {
      get() { return this.cronExpression.dayOfTheMonth; },
      set(value) {
        this.cronExpression.dayOfTheMonth = value;
        this.emitCron();
      }
    },
    monthProp: {
      get() { return this.cronExpression.month; },
      set(value) {
        this.cronExpression.month = value;
        this.emitCron();
      }
    },
    cronProp: {
      get() { return this.cron; },
      set(value) {
        this.cron = value;
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
    emitMonthly,
    emitYearly,
    emitCustomCron
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
    case Constants.MONTHLY:
      this.emitMonthly();
      break;
    case Constants.YEARLY:
      this.emitYearly();
      break;
    case Constants.CRON:
      this.emitCustomCron();
      break;
    default:
      console.error('not handled');
      break;
  }
}

function emitDate() {
  this.$emit('input', getCronExpression(this.selectedFrequency, this.dateTimeProp));
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

function emitMonthly() {
  const monthly = {
    dayOfTheMonth: this.dayOfTheMonthProp,
    hour: this.hourProp,
    minute: this.minuteProp
  };

  this.$emit('input', getCronExpression(this.selectedFrequency, monthly));
}

function emitYearly() {
  const yearly = {
    month: this.monthProp,
    dayOfTheMonth: this.dayOfTheMonthProp,
    hour: this.hourProp,
    minute: this.minuteProp
  };

  this.$emit('input', getCronExpression(this.selectedFrequency, yearly));
}

function emitCustomCron() {
  this.$emit('input', this.cron);
}