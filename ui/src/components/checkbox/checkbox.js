export default {
  name: 'tt-checkbox',
  props: ['checked'],
  computed: {
    isChecked: {
      get() { return this.checked; },
      set(newVal) { this.$emit('change', newVal); }
    }
  }
}