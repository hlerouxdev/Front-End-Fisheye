import Medium from "./Medium.js";

export default class Image extends Medium {
  createMedium() {
    const image = document.createElement('img');
    this.addDomInfos(image);
    return image;
  }
}
