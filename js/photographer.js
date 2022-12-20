import createElem from './utils/elementCreation.js';
import Api from './api/Api.js';
// import Medium from './models/Medium.js';
import Photographer from './models/Photographer.js';
import PhotographerHeader from './templates/PhotographerHeader.js';
import MediaCard from './templates/PhotographerMedia.js';
import MediaFactory from './factories/Mediafactory.js';

const photographerId = +window.location.href.split('id=')[1];
const header = document.querySelector('.photograph-header');
const gallery = document.querySelector('.photograph-content-media');

const media = [];
let firstName = '';

async function main() {
  const api = new Api('data/photographers.json');
  const photographers = await api.getPhotographers();
  const photographer = new Photographer(
    photographers.filter((data) => data.id === photographerId)[0],
  );
  firstName = photographer.name.substring(0, photographer.name.lastIndexOf(' '));

  const allMedia = await api.getMedia();
  let totalLikes = 0;
  allMedia.forEach((medium) => {
    if (photographerId === medium.photographerId) {
      totalLikes += medium.likes;
      media.push(new MediaFactory(medium, firstName));
    }
  });

  console.log(media);

  media.sort((a, b) => b.likes - a.likes);

  const headerTemplate = new PhotographerHeader(photographer);
  header.prepend(headerTemplate.createPhotographerHeaderInfos());
  header.append(headerTemplate.createPhotographerHeaderPortrait());

  media.forEach((medium) => {
    const mediumBox = new MediaCard(medium);
    gallery.append(mediumBox.createImageCard());
  });

  const photographerName = createElem('h2', photographer.name);
  const formHeader = document.querySelector('.modal').querySelector('header');
  formHeader.append(photographerName);

  const infoBox = document.querySelector('.info-box');
  infoBox.innerHTML = `
    <div class="image-info-likes">
      <p>${totalLikes}</p>
      <i class="fa-solid fa-heart" aria-label="likes"></i>
    </div>
    <p>${photographer.price}€/jour</p>
    `;
}

main();

export default media;
