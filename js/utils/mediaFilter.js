import media from "../photographer.js";

const gallery = document.querySelector('.photographer-content-media');

function sortMedia(filterName) {
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

const filter = document.querySelector('.option-displayed');
filter.addEventListener('click', () => {
  sortMedia(filter.value);
});
