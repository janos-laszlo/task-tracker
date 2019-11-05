import VCalendar from "v-calendar";
import { TimePicker } from "element-ui";

let minuteUpdateIntervalId;
let timeoutId;

export default {
  name: 'date-time-picker',
  components: {
    VCalendar,
    "el-time-picker": TimePicker
  },
  props: {
    value: [Date],
    future: Boolean
  },
  data() {
    return {
      date: null,
      time: null,
      minDate: new Date(),
      selectableTimeRange: null
    }
  },
  computed: {
    dateProp: {
      get() { return this.date; },
      set(value) {
        this.date = value;
        this.updateSelectableTimeRange();
        this.emitDate();
      }
    },
    timeProp: {
      get() { return this.time; },
      set(value) {
        this.time = value;
        this.emitDate();
      }
    }
  },
  methods: {
    updateSelectableTimeRange,
    incrementTimeIfInPast,
    renewTime,
    setupMinDateUpdate,
    renewTimes,
    emitDate,
    getDate,
    todaySelected,
    setTime
  },
  created() {
    this.dateProp = this.value;
    this.setTime();
    if (this.future) {
      this.minDate = new Date();
      this.minDate.setSeconds(0);
      this.setupMinDateUpdate();
    }
    this.updateSelectableTimeRange();
  },
  destroyed() {
    if (minuteUpdateIntervalId) clearInterval(minuteUpdateIntervalId);
    if (timeoutId) clearTimeout(timeoutId);
  }
};

function updateSelectableTimeRange() {
  if (this.future && this.todaySelected()) {
    this.selectableTimeRange = `${this.minDate.getHours()}:${this.minDate.getMinutes()}:00 - 23:59:00`;
    this.incrementTimeIfInPast();
  } else {
    this.selectableTimeRange = "00:00:00 - 23:59:00";
  }
}

function incrementTimeIfInPast() {
  if (this.minDate > this.getDate()) {
    this.renewTime();
  }
}

function renewTime() {
  this.timeProp = new Date();
  this.timeProp.setSeconds(0);
}

function setTime() {
  this.timeProp = this.value;
  if (this.timeProp) this.timeProp.setSeconds(0);
}

function setupMinDateUpdate() {
  let d = new Date();
  timeoutId = setTimeout(() => {
    this.renewTimes();
    minuteUpdateIntervalId = setInterval(() => {
      this.renewTimes();
    }, 60000);
  }, (60 - d.getSeconds()) * 1000);
}

function renewTimes() {
  this.minDate.setMinutes(this.minDate.getMinutes() + 1);
  this.incrementTimeIfInPast();
  this.updateSelectableTimeRange();
}

function emitDate() {
  const d = this.getDate();
  this.$emit('input', d);
}

function getDate() {
  if (this.dateProp && this.timeProp) {
    return new Date(this.dateProp.getFullYear(), this.dateProp.getMonth(), this.dateProp.getDate(), this.timeProp.getHours(), this.timeProp.getMinutes(), 0);
  }

  return null;
}

function todaySelected() {
  let d = this.getDate();
  if (d) {
    return (d.getFullYear() === this.minDate.getFullYear() &&
      d.getMonth() === this.minDate.getMonth() &&
      d.getDate() === this.minDate.getDate());
  }

  return false;
}