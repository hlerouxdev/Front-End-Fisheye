import createElem from '../utils/elementCreation.js';
import { computeTotalLikes } from '../photographer.js';

export default class MediaCard {
  constructor(medium) {
    this.$medium = medium;
  }

  createImageCard() {
    const imageBox = createElem('article');
    imageBox.classList.add('image-box');

    const imageInfos = document.createElement('div');
    imageInfos.setAttribute('class', 'image-info');
    imageInfos.innerHTML += `<p>${this.$medium.title}</p> `;
    const imageLikes = document.createElement('div');
    imageLikes.setAttribute('class', 'image-info-likes');
    imageLikes.innerHTML = `<p class='image-info-price'>${this.$medium.likes}</p>`;
    const heartButton = document.createElement('button');
    heartButton.setAttribute('aria-label', 'likes');
    heartButton.setAttribute('data-liked', 'false');
    const heart = document.createElement('i');
    heart.setAttribute('class', 'fa-regular fa-heart');
    heartButton.addEventListener('click', (e) => {
      const parentElem = e.target.closest('div');
      console.log(parentElem);
      if (heartButton.getAttribute('data-liked') === 'false') {
        heartButton.setAttribute('data-liked', 'true');
        heart.setAttribute('class', 'fa-solid fa-heart');
        this.$medium.likes += 1;
      } else {
        heartButton.setAttribute('data-liked', 'false');
        heart.setAttribute('class', 'fa-regular fa-heart');
        this.$medium.likes -= 1;
      }
      parentElem.querySelector('p').innerHTML = this.$medium.likes;
      computeTotalLikes();
    });

    imageInfos.appendChild(imageLikes);
    heartButton.appendChild(heart);
    imageLikes.appendChild(heartButton);

    imageBox.appendChild(this.$medium.createMedium());
    imageBox.appendChild(imageInfos);

    return imageBox;
  }
}
