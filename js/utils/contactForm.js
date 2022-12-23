const modal = document.getElementById('contact_modal');
const sendButton = modal.querySelector('.contact_button');
const firstName = document.querySelector('.form-firstname');
const lastName = document.querySelector('.form-lastname');
const email = document.querySelector('.form-email');
const message = document.querySelector('.form-message');

function displayModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

sendButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(
    `firstName: ${firstName.value};`,
    `lastname: ${lastName.value};`,
    `email: ${email.value};`,
    `message: ${message.value}`,
  );
});
