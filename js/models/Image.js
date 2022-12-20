import Medium from "./Medium.js";

export default class Image extends Medium {
  createMedium() {
    return `
      <img src="${this.path}"
      alt="${this.title}"
      class="image-box-medium"
      data-id="${this.id}">
    `;
  }
}
