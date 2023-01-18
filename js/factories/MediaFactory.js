import Image from '../models/Image.js';
import Video from '../models/Video.js';

export default class MediaFactory {
  constructor(medium, firstName) {
    if (medium.image) return new Image(medium, firstName);
    if (medium.video) return new Video(medium, firstName);
  }
}
