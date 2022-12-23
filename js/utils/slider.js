import media from '../photographer.js';
import SliderMedium from '../templates/SliderMedium.js';

const modal = document.getElementById('slider-modal');
const sliderContainer = document.querySelector('.slider-main');
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
  modal.style.display = 'block';
  createMedium(medium, index);
  sliderContainer.focus();
}

function closeSlider() {
  modal.style.display = 'none';
}

function changeMedium(value) {
  const currentMedium = document.querySelector('.slider-medium');
  let index = Number(currentMedium.dataset.index);
  if (value === 0) {
    index -= 1;
    if (index < 0) {
      index = media.length - 1;
    }
  }
  if (value === 1) {
    index += 1;
    if (index > media.length - 1) {
      index = 0;
    }
  }
  createMedium(media[index], index);
}

prev.addEventListener('click', () => {
  changeMedium(0);
});
next.addEventListener('click', () => {
  changeMedium(1);
});

sliderContainer.addEventListener('keydown', (e) => {
  if (e.code == '37') console.log('left key pressed');
  if (e.code == '39') console.log('right key pressed');
});

close.addEventListener('click', closeSlider);

export default openSlider;
