class PhotographerPage {
  constructor(photographer, images) {
    this._photographer = photographer
    this._images = images
  }

  createPhotographerHeaderInfos() {
    const photographerInfo = createElem("div")
    photographerInfo.setAttribute("class", "photograph-header-info")

    const nameElem = createElem("h1", this._photographer.name)
    const locationElem = createElem("h2", this._photographer.city + ", " + this._photographer.country)
    const taglineElem = createElem("p", this._photographer.tagline)

    photographerInfo.appendChild(nameElem)
    photographerInfo.appendChild(locationElem)
    photographerInfo.appendChild(taglineElem)

    return photographerInfo
  }
  createPhotographerHeaderPortrait() {
    const portraitElem = document.createElement("img");
        if (!this._photographer.portrait || this._photographer.portrait === "") {
            portraitElem.setAttribute("src", "assets/photographers/account.png");
        } else {
            portraitElem.setAttribute("src", this._photographer.portrait);
        }
        portraitElem.setAttribute("alt", this._photographer.name);
        const nameElem = createElem("h2", this._photographer.name);

    return portraitElem
  }
}