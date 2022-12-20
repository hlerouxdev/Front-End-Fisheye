import media from '../photographer.js';
import SliderMedium from '../templates/SliderMedium.js';

const modal = document.getElementById('slider-modal');
const mediumContainer = modal.querySelector('.medium-container');
const gallery = document.querySelector('.photograph-content-media');
const title = document.querySelector('.slider-text');
const close = document.querySelector('.slider-close');
const prev = document.querySelector('.fa-chevron-left');
const next = document.querySelector('.fa-chevron-right');

function createMedium(medium, index) {
  const sliderMedium = new SliderMedium(medium, index);
  mediumContainer.innerHTML = sliderMedium.displayMedium();
  title.innerText = medium.title;
}

function openSlider(medium, index) {
  close.focus();
  modal.style.display = 'block';
  createMedium(medium, index);
}

function closeSlider() {
  modal.style.display = 'none';
}

function changeMedium(value) {
  const currentMedium = document.querySelector('.slider-medium');
  let index = Number(currentMedium.dataset.index);
  console.log('current index is ', index);
  if (value === 0) {
    console.log('value is 0 no loop');
    index -= 1;
    if (index < 0) {
      console.log('value is 0 looped');
      index = media.length - 1;
    }
  }
  if (value === 1) {
    console.log('value is 1 no loop');
    index += 1;
    if (index > media.length - 1) {
      console.log('value is 1 no looped');
      index = 0;
    }
  }
  console.log('new index is', index);
  createMedium(media[index], index);
}

close.addEventListener('click', closeSlider);

gallery.addEventListener('click', (e) => {
  if (e.target.attributes.class.value === 'image-box-medium') {
    const id = e.target.getAttribute('data-id');
    const index = media.findIndex((medium) => medium.id === Number(id));
    openSlider(media[index], index);
  }
});

prev.addEventListener('click', () => {
  changeMedium(0);
});
next.addEventListener('click', () => {
  changeMedium(1);
});
