import media from "../photographer.js";
import SliderMedium from "../factories/SliderMedium.js";

const modal = document.getElementById('slider-modal');
const gallery = document.querySelector('.photograph-content-media');
const close = document.querySelector('.slider-close');

function openSlider(medium) {
  modal.style.display = 'block';
  console.log(medium);

  const mediumContainer = modal.querySelector('.medium-container');
  const sliderMedium = new SliderMedium(medium);
  mediumContainer.innerHTML = sliderMedium.displayMedium();
}

function closeSlider() {
  modal.style.display = 'none';
}

close.addEventListener('click', closeSlider);

gallery.addEventListener('click', (e) => {
  if (e.target.attributes.class.value === 'image-box-media') {
    const id = e.target.getAttribute('data-id');
    const index = media.findIndex((medium) => medium.id === Number(id));
    // console.log(index);
    // console.log(media[index]);
    openSlider(media[index]);
  }
});
