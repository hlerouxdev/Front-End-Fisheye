import Image from '../models/Image.js';
import Video from '../models/Video.js';

export default class MediaFactory {
  /**
   *
   * @param {object} medium must be a medium from the media array
   * @param {string} firstName the photographer's first name used to get the path in their folder
   */
  constructor(medium, firstName) {
    if (medium.image) return new Image(medium, firstName);
    if (medium.video) return new Video(medium, firstName);
  }
}
