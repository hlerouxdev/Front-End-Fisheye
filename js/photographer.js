import createElem from './utils/elementCreation.js';
import Api from './api/Api.js';
import Medium from './models/Medium.js';
import PhotographersFactory from './factories/PhotographersFactory.js';
import PhotographerHeader from './templates/PhotographerPage.js';
import MediaCard from './templates/PhotographerMedia.js';

const photographersApi = new Api('data/photographers.json');

const photographerId = +window.location.href.split('id=')[1];
const header = document.querySelector('.photograph-header');

let media = [];

async function main() {
  const photographersData = await photographersApi.get();
  let pagePhotographer;
  photographersData.photographers.map((singlePhotographer) => {
    if (singlePhotographer.id === photographerId) {
      pagePhotographer = new PhotographersFactory(singlePhotographer);
    }
  });

  let totalLikes = 0;
  photographersData.media.map((medium) => {
    totalLikes += medium.likes;
    if (photographerId === medium.photographerId) media.push(new Medium(medium));
  });

  const gallery = document.querySelector('.photograph-content-media');

  const headerTemplate = new PhotographerHeader(pagePhotographer);
  header.prepend(headerTemplate.createPhotographerHeaderInfos());
  header.append(headerTemplate.createPhotographerHeaderPortrait());

  media.forEach((medium) => {
    const mediumBox = new MediaCard(medium, pagePhotographer);
    gallery.append(mediumBox.createImageCard());
  });

  const photographerName = createElem('h2', pagePhotographer.name);
  const formHeader = document.querySelector('.modal').querySelector('header');
  formHeader.append(photographerName);

  const infoBox = document.querySelector('.info-box');
  infoBox.innerHTML = `
    <div class="image-info-likes">
      <p>${totalLikes}</p>
      <i class="fa-solid fa-heart" aria-label="likes"></i>
    </div>
    <p>${pagePhotographer.price}€/jour</p>
    `;
}

main();
