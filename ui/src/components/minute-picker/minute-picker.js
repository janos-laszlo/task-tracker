import RangeSelector from '@/components/range-selector/range-selector.vue';

export default {
  name: 'minute-picker',
  components: {
    RangeSelector
  },
  props: {
    value: [Number]
  },
  computed: {
    minute: {
      get() { return this.value; },
      set(value) {
        this.$emit('input', value);
      }
    }
  }
}