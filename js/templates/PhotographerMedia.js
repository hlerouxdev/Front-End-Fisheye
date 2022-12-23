import createElem from '../utils/elementCreation.js';
import { computeTotalLikes } from '../photographer.js';

export default class MediaCard {
  constructor(medium) {
    this.$medium = medium;
  }

  createImageCard() {
    const imageBox = createElem('div');
    imageBox.classList.add('image-box');

    const imageInfos = document.createElement('div');
    imageInfos.setAttribute('class', 'image-info');
    imageInfos.innerHTML += `<p>${this.$medium.title}</p> `;
    const imageLikes = document.createElement('div');
    imageLikes.setAttribute('class', 'image-info-likes');
    imageLikes.innerHTML = `<p>${this.$medium.likes}</p>`;
    const heart = document.createElement('i');
    heart.setAttribute('class', 'fa-regular fa-heart');
    heart.setAttribute('aria-label', 'likes');
    heart.setAttribute('data-liked', 'false');
    // fa-regular fa-heart
    heart.addEventListener('click', (e) => {
      console.log(e.target.getAttribute('data-liked'));
      const parentElem = e.target.parentElement;
      if (e.target.getAttribute('data-liked') === 'false') {
        console.log('like added');
        e.target.setAttribute('data-liked', 'true');
        e.target.setAttribute('class', 'fa-solid fa-heart');
        this.$medium.likes += 1;
      } else {
        console.log('like removed');
        e.target.setAttribute('data-liked', 'false');
        e.target.setAttribute('class', 'fa-regular fa-heart');
        this.$medium.likes -= 1;
      }
      parentElem.querySelector('p').innerHTML = this.$medium.likes;
      computeTotalLikes();
    });

    imageInfos.appendChild(imageLikes);
    imageLikes.appendChild(heart);

    imageBox.appendChild(this.$medium.createMedium());
    imageBox.appendChild(imageInfos);

    return imageBox;
  }
}
