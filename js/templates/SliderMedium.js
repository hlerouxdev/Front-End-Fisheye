export default class SliderMedium {
  /**
   *
   * @param {object} medium
   * @param {number} index used to navigate via the slider
   */
  constructor(medium, index) {
    this.$medium = medium;
    this.$index = index;
  }

  displayMedium() {
    let displayedMedium;
    if (this.$medium.type === 'image') {
      displayedMedium = `
        <img src="${this.$medium.path}"
        alt="${this.$medium.title}"
        data-index="${this.$index}"
        class="slider-medium">
      `;
    }
    if (this.$medium.type === 'video') {
      displayedMedium = `
      <video autoplay loop
      src="${this.$medium.path}"
      alt="${this.$medium.title}"
      data-index="${this.$index}"
      class="slider-medium">
    `;
    }
    return displayedMedium;
  }
}
