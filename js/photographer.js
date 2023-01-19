import createElem from './utils/elementCreation.js';
import Api from './api/Api.js';
import Photographer from './models/Photographer.js';
import PhotographerHeader from './templates/PhotographerHeader.js';
import MediaCard from './templates/PhotographerMedia.js';
import MediaFactory from './factories/Mediafactory.js';

const photographerId = +window.location.href.split('id=')[1].split('#')[0]; // addition needed to parse the id as an integer instead of a string
const header = document.querySelector('.photographer-header');
const gallery = document.querySelector('.photographer-content-media');
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

// Filter
let filterOpened = false;
const filterOptions = ['Popularité', 'Date', 'Titre'];

/**
 *
 * @param {string} filterName The filter being used
 */
function sortMedia(filterName) {
  if (filterName === 'Popularité') {
    media.sort((a, b) => b.likes - a.likes);
  }
  if (filterName === 'Date') {
    media.sort((a, b) => b.date - a.date);
  }
  if (filterName === 'Titre') {
    media.sort((a, b) => ((b.title < a.title) ? 1 : -1));
  }
  gallery.innerHTML = '';
  displayGallery();
}

const filter = document.querySelector('#filter');
const filterArrow = document.querySelector('.filter-arrow');
const optionDisplayed = document.querySelector('.option');

function closeFilter() {
  const options = document.querySelectorAll('.option');
  filterArrow.setAttribute('class', 'fa-solid fa-chevron-down filter-arrow');
  filter.removeChild(options[1]);
  filter.removeChild(options[2]);
  filterOpened = false;
}

function openfilter() {
  if (!filterOpened) {
    filterArrow.setAttribute('class', 'fa-solid fa-chevron-up filter-arrow');
    filterOptions.forEach((option) => {
      if (option !== optionDisplayed.innerText) {
        const newOption = document.createElement('a');
        newOption.setAttribute('href', '#');
        newOption.setAttribute('class', 'option');
        newOption.innerText = option;
        filter.appendChild(newOption);
      }
    });
    filterOpened = true;
    const options = document.querySelectorAll('.option');
    options.forEach((option) => {
      option.addEventListener('click', (optionEvent) => {
        if (optionEvent.target.classList !== optionDisplayed.classList) {
          optionEvent.stopImmediatePropagation();
          sortMedia(optionEvent.target.innerHTML);
          optionDisplayed.innerHTML = optionEvent.target.innerHTML;
          closeFilter();
        }
      });
    });
  }
}

filter.addEventListener('click', () => {
  if (!filterOpened) return openfilter();
  return closeFilter();
});

filterArrow.addEventListener('click', (e) => {
  e.stopPropagation();
  if (filterOpened) closeFilter();
  else openfilter();
});

export default media;
