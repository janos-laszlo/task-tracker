export default {
  name: 'range-selector',
  props: {
    value: [Number],
    min: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 10
    },
    step: {
      type: Number,
      default: 1
    }
  },
  computed: {
    range: function () {
      const range = [];
      let current = this.min;
      while (current <= this.max) {
        range.push(current);
        current += this.step;
      }

      return range;
    }
  }
}