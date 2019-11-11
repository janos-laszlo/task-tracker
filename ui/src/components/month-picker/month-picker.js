import RangeSelector from '@/components/range-selector/range-selector.vue';

export default {
  name: 'month-picker',
  components: {
    RangeSelector
  },
  props: {
    value: Number
  },
  computed: {
    monthProp: {
      get() { return this.value; },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}