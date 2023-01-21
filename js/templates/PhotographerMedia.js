import createElem from '../utils/elementCreation.js';
import { computeTotalLikes } from '../photographer.js';

export default class MediaCard {
  constructor(medium) {
    this.$medium = medium;
  }

  createImageCard() {
    const imageBox = createElem('article');
    imageBox.classList.add('image-box');

    // I used document.createElement instead of a simpler
    // innerHTML in order to add the eventListeners dynamically

    // creates the info element below the image
    const imageInfos = document.createElement('div');
    imageInfos.setAttribute('class', 'image-info');
    imageInfos.innerHTML += `<p>${this.$medium.title}</p> `;
    const imageLikes = document.createElement('div');
    imageLikes.setAttribute('class', 'image-info-likes');
    imageLikes.innerHTML = `<p class='image-info-price'>${this.$medium.likes}</p>`;

    const heartButton = document.createElement('button');
    heartButton.setAttribute('aria-label', `like pour l'immage ${this.$medium.title}`);
    heartButton.setAttribute('data-liked', 'false');
    const heart = document.createElement('i');
    heart.setAttribute('class', 'fa-regular fa-heart');

    // click on like event handling
    heartButton.addEventListener('click', (e) => {
      const parentElem = e.target.closest('div');
      if (heartButton.getAttribute('data-liked') === 'false') {
        heartButton.setAttribute('data-liked', 'true');
        heart.setAttribute('class', 'fa-solid fa-heart');
        heartButton.setAttribute('aria-label', `dislike pour l'immage ${this.$medium.title}`);
        this.$medium.likes += 1;
      } else {
        heartButton.setAttribute('data-liked', 'false');
        heart.setAttribute('class', 'fa-regular fa-heart');
        heartButton.setAttribute('aria-label', `like pour l'immage ${this.$medium.title}`);
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
