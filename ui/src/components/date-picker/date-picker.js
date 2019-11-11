import RangeSelector from '@/components/range-selector/range-selector.vue';

export default {
  name: 'date-picker',
  components: {
    RangeSelector
  },
  props: {
    value: [Number]
  },
  computed: {
    dayOfTheMonthProp: {
      get() { return this.value; },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}