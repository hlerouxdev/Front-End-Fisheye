class PhotographFactory {
  constructor(data) {
    this.$data = data;
  }

  get() {
    if (this.$data.type === 'video') {
      return this.$data;
    }
  }
}
