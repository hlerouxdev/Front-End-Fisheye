const modal = document.getElementById('slider-modal');
const gallery = document.querySelector('.photograph-content-media');

gallery.addEventListener('click', (e) => {
  if (e.target.attributes.class.value === 'image-box-media') {
    const id = e.target.getAttribute('data-id');
    console.log(id);
  }
});

function openSlider(src) {
  modal.style.display = 'block';

  const medium = modal.querySelector('.slider-image');
  medium.setAttribute('src', src);
}

function closeSlider() {
  modal.style.display = 'none';
}
