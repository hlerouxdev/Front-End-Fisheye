import Medium from "./Medium.js";

export default class Image extends Medium {
  createMedium() {
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    const image = document.createElement('img');
    this.addDomInfos(image, link);
    link.appendChild(image);
    return link;
  }
}
