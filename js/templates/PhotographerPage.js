class PhotographerPage {
  constructor(photographer) {
    this.$photographer = photographer;
  }

  createPhotographerHeaderInfos() {
    const photographerInfo = createElem('div');
    photographerInfo.setAttribute('class', 'photograph-header-info');

    const nameElem = createElem('h1', this.$photographer.name);
    const locationElem = createElem('h2', `${this.$photographer.city},
      ${this.$photographer.country}`);
    const taglineElem = createElem('p', this.$photographer.tagline);

    photographerInfo.append(nameElem);
    photographerInfo.append(locationElem);
    photographerInfo.append(taglineElem);

    return photographerInfo;
  }

  createPhotographerHeaderPortrait() {
    const portraitElem = document.createElement('img');
    if (!this.$photographer.portrait || this.$photographer.portrait === '') {
      portraitElem.setAttribute('src', 'assets/photographers/account.png');
    } else {
      portraitElem.setAttribute('src', this.$photographer.portrait);
    }
    portraitElem.setAttribute('alt', this.$photographer.name);

    return portraitElem;
  }
}
