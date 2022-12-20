import Medium from './Medium.js';

export default class Video extends Medium {
  createMedium() {
    return `
      <video loop src="${this.path}"
      alt="${this.title}"
      class="image-box-medium"
      data-id="${this.id}"></video>
    `;
  }
}
