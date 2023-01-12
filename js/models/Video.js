import Medium from './Medium.js';

export default class Video extends Medium {
  createMedium() {
    const link = document.createElement('a');
    link.setAttribute('href', '#');
    const video = document.createElement('video');
    this.addDomInfos(video, link);
    link.appendChild(video);
    return link;
  }
}
