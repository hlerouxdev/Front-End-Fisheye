import createElem from '../utils/elementCreation.js';

export default class MediaCard {
  constructor(media, photographer) {
    this.$media = media;
    this.$id = media.id;
    this.$title = media.title;
    this.$path = media.path;
    this.$video = media.video;
    this.$likes = media.likes;
    this.$date = media.date;
    this.$price = media.price;
    this.$type = media.type;
    this.$photographerName = photographer.name;
  }

  createImageCard() {
    // removes the lastname from the photographer's name
    const firstName = this.$photographerName.substring(0, this.$photographerName.lastIndexOf(' '));
    const filePath = `assets/images/${firstName}/${this.$path}`;

    const imageBox = createElem('div');
    imageBox.classList.add('image-box');
    imageBox.setAttribute('data-id', this.$id);

    if (this.$type === 'image') {
      const imageElem = createElem('img');
      imageElem.setAttribute('src', filePath);
      imageElem.setAttribute('alt', this.$title);
      imageElem.classList.add('image-box-media');
      imageElem.setAttribute('data-id', this.$id);
      imageBox.appendChild(imageElem);
    } else if (this.$type === 'video') {
      const imageElem = createElem('video');
      imageElem.setAttribute('src', filePath);
      imageElem.setAttribute('alt', this.$title);
      imageElem.classList.add('image-box-media');
      imageElem.setAttribute('data-id', this.$id);
      imageBox.appendChild(imageElem);
    }

    const imageInfo = createElem('div');
    imageInfo.classList.add('image-info');
    const titleElem = createElem('p', this.$title);
    const likesElem = createElem('div');
    likesElem.setAttribute('class', 'image-info-likes');
    const likesNumber = createElem('p', this.$likes);
    const likesHeart = createElem('i');
    likesHeart.classList.add('fa-solid', 'fa-heart');
    likesHeart.setAttribute('aria-label', 'likes');
    likesHeart.setAttribute('src', '');

    likesElem.appendChild(likesNumber);
    likesElem.appendChild(likesHeart);
    imageInfo.appendChild(titleElem);
    imageInfo.appendChild(likesElem);
    imageBox.appendChild(imageInfo);

    return imageBox;
  }
}
