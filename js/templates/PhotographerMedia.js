class PhotographerMedia {
  constructor(media) {
    this.$id = media.id;
    this.$title = media.title;
    this.$image = media.image;
    this.$likes = media.likes;
    this.$date = media.date;
    this.price = media.price;
  }

  createImage() {
    const imageBox = createElem('div');
    imageBox.setAttribute('class', 'image-box');
    imageBox.setAttribute('data-id', this.$id);

    const imageElem = createElem('img');
    imageElem.setAttribute('src', this.$image);
    imageElem.setAttribute('alt', this.$title);

    const imageInfo = createElem('div');
    imageInfo.setAttribute('class', 'image-info');
    const titleElem = createElem('p', this.$title);
    const likesElem = createElem('div');
    likesElem.setAttribute('class', 'image-info-likes');
    const likesNumber = createElem('p', this.$likes);
    const likesHeart = createElem('img');
    likesHeart.setAttribute('src', '');

    likesElem.appendChild(likesNumber);
    likesElem.appendChild(likesHeart);

    imageInfo.appendChild(titleElem);
    imageInfo.appendChild(likesElem);

    imageBox.appendChild(imageElem);
    imageBox.appendChild(imageInfo);

    return imageBox;
  }
}
