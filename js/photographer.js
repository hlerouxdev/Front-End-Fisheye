import createElem from './utils/elementCreation.js';
import Api from './api/Api.js';
import Photographer from './models/Photographer.js';
import PhotographerHeader from './templates/PhotographerHeader.js';
import MediaCard from './templates/PhotographerMedia.js';
import MediaFactory from './factories/Mediafactory.js';

const photographerId = +window.location.href.split('id=')[1];
const header = document.querySelector('.photograph-header');
const gallery = document.querySelector('.photograph-content-media');
const totalLikesText = document.querySelector('.total-likes');
const firstNameText = document.querySelector('.photographer-name');

const media = [];
let firstName = '';
let totalLikes;

function displayGallery() {
  media.forEach((medium) => {
    const mediumBox = new MediaCard(medium);
    gallery.append(mediumBox.createImageCard());
  });
}

export function computeTotalLikes() {
  totalLikes = 0;
  media.forEach((medium) => {
    totalLikes += medium.likes;
  });
  totalLikesText.innerHTML = totalLikes;
}

async function main() {
  const api = new Api('data/photographers.json');
  const photographers = await api.getPhotographers();
  const photographer = new Photographer(
    photographers.filter((data) => data.id === photographerId)[0],
  );
  firstName = photographer.name.substring(0, photographer.name.lastIndexOf(' '));

  const allMedia = await api.getMedia();

  allMedia.forEach((medium) => {
    if (photographerId === medium.photographerId) {
      media.push(new MediaFactory(medium, firstName));
    }
  });

  const headerTemplate = new PhotographerHeader(photographer);
  header.prepend(headerTemplate.createPhotographerHeaderInfos());
  header.append(headerTemplate.createPhotographerHeaderPortrait());

  media.sort((a, b) => b.likes - a.likes);
  displayGallery();
  const photographerName = createElem('h2', photographer.name);
  const formHeader = document.querySelector('.modal').querySelector('header');
  formHeader.append(photographerName);

  firstNameText.innerHTML = `${photographer.price}€/jour`;
  computeTotalLikes();
}

main();

function sortMedia(filterName) {
  console.log(media);
  if (filterName === 'Popularité') {
    media.sort((a, b) => b.likes - a.likes);
  }
  if (filterName === 'Date') {
    media.sort((a, b) => b.date - a.date);
  }
  if (filterName === 'Titre') {
    media.sort((a, b) => (b.title < a.title) ? 1 : -1);
  }
  gallery.innerHTML = '';
  displayGallery();
}

const filter = document.querySelector('select');
filter.addEventListener('change', () => {
  sortMedia(filter.value);
});

export default media;
