export default {
  name: 'tt-checkbox',
  props: ['checked'],
  computed: {
    isChecked() {
      return this.checked;
    }
  }
}