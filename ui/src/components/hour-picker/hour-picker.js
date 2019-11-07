import RangeSelector from '@/components/range-selector/range-selector.vue';

export default {
  name: 'hour-picker',
  components: {
    RangeSelector
  },
  props: {
    value: [Number],
  },
  computed: {
    hour: {
      get() { return this.value; },
      set(value){
        this.$emit('input', value);
      }
    }
  }
}