const modal = document.getElementById('contact_modal');
const sendButton = modal.querySelector('.contact_button');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const logo = document.querySelector('.logo');
const close = document.querySelector('.contact-close-button');

function displayModal() {
  modal.style.display = 'block';
  firstName.focus();
}

function closeModal() {
  modal.style.display = 'none';
  logo.focus();
}

close.addEventListener('click', () => closeModal());

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(
    `firstName: ${firstName.value};`,
    `lastname: ${lastName.value};`,
    `email: ${email.value};`,
    `message: ${message.value}`,
  );
});

function checkKey(e) {
  e = e || window.event;
  if (e.keyCode === 27) {
    closeModal();
  }
};

document.addEventListener('keydown', (e) => {
  checkKey(e);
});

