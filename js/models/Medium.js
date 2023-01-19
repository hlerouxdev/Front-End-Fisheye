import media from '../photographer.js';
import openSlider from '../utils/slider.js'

export default class Medium {
  /**
   *
   * @param {object} data must be a medium from the media array
   * @param {string} firstName the photographer's first name used to get the path in their folder
   */
  constructor(data, firstName) {
    this.$id = data.id;
    this.$photographerId = data.photographerId;
    this.$title = data.title;
    this.$path = data.image ? data.image : data.video;
    this.$video = data.video;
    this.$image = data.image;
    this.$likes = data.likes;
    this.$date = data.date;
    this.$price = data.price;
    this.$firstName = firstName;
  }

  get id() {
    return this.$id;
  }

  get photographerId() {
    return this.photographerId;
  }

  get title() {
    return this.$title;
  }

  get path() {
    return `assets/images/${this.$firstName}/${this.$path}`;
  }

  get likes() {
    return this.$likes;
  }

  set likes(value) {
    this.$likes = value;
  }

  get date() {
    return new Date(this.$date);
  }

  get price() {
    return `${this.$price}€/jour`;
  }

  get type() {
    let type;
    if (this.$image) type = 'image';
    if (this.$video) type = 'video';
    return type;
  }

  // As I walk through the valley of the shadow of death
  // I take a look at my code and realize there's not much left
  // 'Cause I've been refactorin' and laughin' so long, that
  // Even my mentor thinks that my mind is gone

  /**
   * this function adds attributes common to both images and videos such as their alt, class etc
   * @param {Node} elem the medium's DOM element
   * @param {Node} link the link encasing the medium's element
   */
  addDomInfos(elem, link) {
    const index = media.findIndex((medium) => medium.id === Number(this.id));

    elem.setAttribute('src', this.path);
    elem.setAttribute('class', 'image-box-medium');
    elem.setAttribute('alt', this.title);
    elem.setAttribute('data-id', this.id);
    elem.setAttribute('role', 'link');

    link.addEventListener('click', () => {
      openSlider(media[index], index);
    });
  }
}
