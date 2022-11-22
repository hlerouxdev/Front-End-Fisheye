class PhotographerCard {
  constructor(photographer) {
    this.$photographer = photographer;
  }

  createPhotographerCard() {
    const photographerCard = document.createElement('article');

    photographerCard.setAttribute('data-id', this.$photographer.id);
    const photographerLink = document.createElement('a');
    photographerLink.setAttribute('href', `photographer.html?id=${this.$photographer.id}`);

    const portraitElem = document.createElement('img');
    if (!this.$photographer.portrait || this.$photographer.portrait === '') {
      portraitElem.setAttribute('src', 'assets/photographers/account.png');
    } else {
      portraitElem.setAttribute('src', this.$photographer.portrait);
    }
    portraitElem.setAttribute('alt', this.$photographer.name);
    const nameElem = createElem('h2', this.$photographer.name);

    photographerLink.appendChild(portraitElem);
    photographerLink.appendChild(nameElem);

    const locationElem = createElem('p', `${this.$photographer.city}, ${this.$photographer.country}`);
    const taglineElem = createElem('p', this.$photographer.tagline);
    const priceElem = createElem('p', `${this.$photographer.price}/jour`);

    photographerCard.appendChild(photographerLink);
    photographerCard.appendChild(locationElem);
    photographerCard.appendChild(taglineElem);
    photographerCard.appendChild(priceElem);

    return photographerCard;
  }
}
