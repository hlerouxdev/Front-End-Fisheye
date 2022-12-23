import Medium from './Medium.js';

export default class Video extends Medium {
  createMedium() {
    const video = document.createElement('video');
    this.addDomInfos(video);
    return video;
  }
}
