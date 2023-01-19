import createElem from '../utils/elementCreation.js';

export default class PhotographerHeader {
  /**
   *
   * @param {object} photographer
   */
  constructor(photographer) {
    this.$photographer = photographer;
  }

  createPhotographerHeaderInfos() {
    const photographerInfo = createElem('div');
    photographerInfo.setAttribute('class', 'photographer-header-info');
    photographerInfo.innerHTML = `
    <h1>${this.$photographer.name}</h1>
    <h2>${this.$photographer.city}, ${this.$photographer.country}</h2>
    <p>${this.$photographer.tagline}</p>
    `;

    return photographerInfo;
  }

  createPhotographerHeaderPortrait() {
    const portraitElem = document.createElement('img');
    portraitElem.setAttribute('src', this.$photographer.portrait || 'assets/photographers/account.png');
    portraitElem.setAttribute('alt', this.$photographer.name);

    return portraitElem;
  }
}
