import createElem from '../utils/elementCreation.js';

export default class MediaCard {
  constructor(medium) {
    this.$medium = medium;
  }

  createImageCard() {
    const imageBox = createElem('div');
    imageBox.classList.add('image-box');
    imageBox.innerHTML = `
      ${this.$medium.createMedium()}
      <div class="image-info">
        <p>${this.$medium.title}</p>
        <div class="image-info-likes">
          <p>${this.$medium.likes}</p>
          <i class="fa-solid fa-heart" aria-label="likes" src=""></i>
        </div>
      </div>
    `;
    // let imageElem;
    // if (this.$type === 'image') {
    //    imageElem = createElem('img');
    //   imageElem.setAttribute('src', this.$medium.path);
    //   imageElem.setAttribute('alt', this.$medium.title);
    //   imageElem.setAttribute('data-id', this.$medium.id);
    //   imageBox.appendChild(imageElem);
    // } else if (this.$type === 'video') {
    //    imageElem = createElem('img');
    //   imageElem.setAttribute('src', this.$medium.path);
    //   imageElem.setAttribute('alt', this.$medium.title);
    //   imageElem.setAttribute('data-id', this.$medium.id);
    //   imageBox.appendChild(imageElem);
    // }

    // const imageInfo = createElem('div');
    // imageInfo.classList.add('image-info');
    // const titleElem = createElem('p', this.$medium.title);
    // const likesElem = createElem('div');
    // likesElem.setAttribute('class', 'image-info-likes');
    // const likesNumber = createElem('p', this.$medium.likes);
    // const likesHeart = createElem('i');
    // likesHeart.classList.add('fa-solid', 'fa-heart');
    // likesHeart.setAttribute('aria-label', 'likes');
    // likesHeart.setAttribute('src', '');

    // likesElem.appendChild(likesNumber);
    // likesElem.appendChild(likesHeart);
    // imageInfo.appendChild(titleElem);
    // imageInfo.appendChild(likesElem);
    // imageBox.appendChild(imageInfo);

    return imageBox;
  }
}
