import media from '../photographer.js';
import SliderMedium from '../templates/SliderMedium.js';

const modal = document.getElementById('slider-modal');
const sliderContainer = document.querySelector('.slider-main');
const mediumContainer = modal.querySelector('.medium-container');
const gallery = document.querySelector('.photographer-content');
const title = document.querySelector('.slider-text');
const close = document.querySelector('.slider-close');
const prev = document.querySelector('.button-left');
const next = document.querySelector('.button-right');

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
  gallery.focus();
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

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode === 37) {
    console.log('left key pressed');
    changeMedium(0);
  } else if (e.keyCode === 39) {
    console.log('right key pressed');
    changeMedium(1);
  } else if (e.keyCode === 27) {
    closeSlider();
  }
}

document.addEventListener('keydown', (e) => {
  console.log(e.keyCode);
  checkKey(e);
});

close.addEventListener('click', closeSlider);

export default openSlider;
