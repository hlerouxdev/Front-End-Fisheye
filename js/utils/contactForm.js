const modal = document.getElementById('contact_modal');
const sendButton = modal.querySelector('.contact_button');
const firstName = document.querySelector('.form-firstname');
const lastName = document.querySelector('.form-lastname');
const email = document.querySelector('.form-email');
const message = document.querySelector('.form-message');
const logo = document.querySelector('.logo');
const close = document.querySelector('.contact-close-button');

function displayModal() {
  modal.style.display = 'block';
  modal.focus();
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
