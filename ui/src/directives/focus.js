export default {
  inserted: function (el) {
    setTimeout(() => {
      el.focus();
    }, 300); // 0.3 seconds delay to wait for CSS animations.
  }
};