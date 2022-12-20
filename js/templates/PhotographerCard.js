export default class PhotographerCard {
  constructor(photographer) {
    this.$photographer = photographer;
  }

  createPhotographerCard() {
    const photographerCard = document.createElement('article');
    photographerCard.innerHTML = `
    <a href="photographer.html?id=${this.$photographer.id}">
      <img src="${this.$photographer.portrait || 'assets/photographers/account.png'}">
      <h2>${this.$photographer.name}</h2>
    </a>
    <p>${this.$photographer.city}, ${this.$photographer.country}</p>
    <p>${this.$photographer.tagline}</p>
    <p>${this.$photographer.price}/jour</p>
    `;

    return photographerCard;
  }
}
