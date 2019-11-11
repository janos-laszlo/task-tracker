import RangeSelector from '@/components/range-selector/range-selector.vue';

export default {
  name: 'date-time-picker',
  components: {
    RangeSelector
  },
  props: {
    value: [Date],
    future: Boolean
  },
  data() {
    return {
      dateTime: this.value || (new Date()),
      dateTimeParts: {
        year: this.value ? this.value.getFullYear() : (new Date()).getFullYear(),
        month: this.value ? this.value.getMonth() + 1 : (new Date()).getMonth() + 1,
        date: this.value ? this.value.getDate() : (new Date()).getDate(),
        hour: this.value ? this.value.getHours() : null,
        minute: this.value ? this.value.getMinutes() : 0
      }
    }
  },
  computed: {
    currentYear: function () {
      const d = new Date();
      return d.getFullYear();
    }
  },
  methods: {
    onChange,
    allDateTimePartsHaveValue
  },
  created() {
    this.dateTime.setSeconds(0);
    this.dateTime.setMilliseconds(0);
  },
  destroyed() {
  }
};

function onChange() {
  if (this.allDateTimePartsHaveValue()) {
    this.$emit('input', new Date(this.dateTimeParts.year, this.dateTimeParts.month - 1, this.dateTimeParts.date, this.dateTimeParts.hour, this.dateTimeParts.minute));
  }
}

function allDateTimePartsHaveValue() {
  return typeof (this.dateTimeParts.year) === 'number' &&
    typeof (this.dateTimeParts.month) === 'number' &&
    typeof (this.dateTimeParts.date) === 'number' &&
    typeof (this.dateTimeParts.hour) === 'number' &&
    typeof (this.dateTimeParts.minute) === 'number';
}