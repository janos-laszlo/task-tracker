export default {
  name: 'minute-picker',
  props: {
    value: {
      type: Array
    }
  },
  data() {
    return {
      minutes: []
    }
  },
  computed: {
    minutesProp: {
      get() { return this.minutes; },
      set(value) {
        this.minutes = value;
        this.$emit('input', this.minutes);
      }
    }
  },
  methods: {
    toggleMinuteSelection(minute) {
      if (this.minutesProp.includes(minute)) {
        this.minutesProp = this.minutesProp.filter(m => m !== minute);
      } else {
        this.minutesProp.push(minute);
      }
      this.minutesProp.sort((m1, m2) => m1 - m2);
      this.$emit('input', this.minutesProp);
    }
  }
}