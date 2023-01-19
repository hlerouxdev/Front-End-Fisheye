const modalButton = document.querySelector('.contact_button');
const modal = document.getElementById('contact_modal');
const sendButton = modal.querySelector('.contact_button');
const firstName = document.querySelector('#first-name');
const lastName = document.querySelector('#last-name');
const email = document.querySelector('#email');
const message = document.querySelector('#message');
const logo = document.querySelector('.logo');
const close = document.querySelector('.contact-close-button');
const fields = modal.querySelectorAll('input');
const formMessage = document.querySelector('.form-message');
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

function displayModal() {
  modal.style.display = 'block';
  firstName.focus();
}

function closeModal() {
  modal.style.display = 'none';
  formMessage.innerText = '';
  formMessage.style.display = 'none';
  logo.focus();
}

function checkFields() {
  formMessage.innerText = '';
  let empty = false;
  fields.forEach((field) => {
    if (field.value === '') empty = true;
  });
  if (empty) {
    formMessage.innerText = 'Les champs ne peuvent pas être vides. ';
    formMessage.setAttribute('data-state', 'error');
  }
  if (!emailRegex.test(email.value)) {
    empty = true;
    formMessage.innerText += 'L\'addresse mail doit être valide.';
  }
  return empty;
}

modalButton.addEventListener('click', () => displayModal());
close.addEventListener('click', () => closeModal());

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  formMessage.style.display = 'block';
  if (checkFields()) return;
  formMessage.innerText = 'Message envoyé!';
  formMessage.setAttribute('data-state', 'success');
  console.log(
    `firstName: ${firstName.value};`,
    `lastname: ${lastName.value};`,
    `email: ${email.value};`,
    `message: ${message.value}`,
  );
});

document.addEventListener('keydown', (e) => {
  if (e.keyCode === 27) {
    closeModal();
  }
});
