import RangeSelector from '@/components/range-selector/range-selector.vue';

export default {
  name: 'day-of-week-picker',
  components: {
    RangeSelector
  },
  props: {
    value: Number
  },
  computed: {
    dayOfWeek: {
      get() { return this.value },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}