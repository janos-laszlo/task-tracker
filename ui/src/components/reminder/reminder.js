import TtCheckbox from '@/components/checkbox/checkbox.vue';
import { DateTime } from 'vue-datetime';
import DateTimeFormat from '@/constants/date-time-formats.js';
import * as Constants from '@/constants/constants';

export default {
  name: 'reminder',
  components: {
    TtCheckbox,
    DateTime
  },
  props: {
    value: {
      type: Object,
      validator(value) {
        return value.hasOwnProperty('remindAt') && value.hasOwnProperty('reminderFrequency');
      }
    },
    isExpanded: Boolean
  },
  data() {
    return {
      remindMe: this.isExpanded,
      reminderFrequency: this.value.reminderFrequency || Constants.ONCE
    };
  },
  computed: {
    frequencies: () => Constants.FREQUENCIES,
    dateTimeFormat: () => DateTimeFormat.DATE_TIME_FORMAT,
  },
  methods: {
    onRemindMeChanged,
    onReminderFrequencyChanged
  }
}

function onRemindMeChanged() {
  if (this.remindMe) {
    updateReminderFrequency.call(this);
    setTimeout(() => {
      const dateTimePicker = document.querySelector('.vdatetime-input');
      dateTimePicker.click();
    }, 300); // Animation duration is 0.3s
  } else {
    this.value.remindAt = null;
    this.value.reminderFrequency = null;
  }
}

function onReminderFrequencyChanged() {
  updateReminderFrequency.call(this);
}

function updateReminderFrequency() {
  this.value.reminderFrequency = this.reminderFrequency;
}