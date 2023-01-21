import media from '../photographer.js';
import SliderMedium from '../templates/SliderMedium.js';

const modal = document.getElementById('slider-modal');
const mediumContainer = modal.querySelector('.medium-container');
const gallery = document.querySelector('.photographer-content');
const title = document.querySelector('.slider-text');
const close = document.querySelector('.slider-close');
const prev = document.querySelector('.button-left');
const next = document.querySelector('.button-right');

/**
 *
 * @param {object} medium
 * @param {number} index used to navigate via the slider
 */
function createMedium(medium, index) {
  const sliderMedium = new SliderMedium(medium, index);
  mediumContainer.innerHTML = sliderMedium.displayMedium();
  title.innerText = medium.title;
}

/**
 *
 * @param {bject} medium
 * @param {number} index used to navigate via the slider
 */
export function openSlider(medium, index) {
  modal.style.display = 'block';
  createMedium(medium, index);
  close.focus();
}

export function closeSlider() {
  modal.style.display = 'none';
  gallery.focus();
}

/**
 *
 * @param {number} value must be 0 or 1 determines which arrow is being clicked on
 */
export function changeMedium(value) {
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

close.addEventListener('click', closeSlider);

// 0 for the left arrow (previous) 1 for the right arrow (next)
prev.addEventListener('click', () => {
  changeMedium(0);
});
next.addEventListener('click', () => {
  changeMedium(1);
});

// key presses handling
function checkKey(e) {
  if (e.key === 'ArrowLeft') {
    changeMedium(0);
  } else if (e.key === 'ArrowRight') {
    changeMedium(1);
  } else if (e.key === 'Escape') {
    closeSlider();
  }
}

document.addEventListener('keydown', (e) => {
  checkKey(e);
});

export default openSlider;
