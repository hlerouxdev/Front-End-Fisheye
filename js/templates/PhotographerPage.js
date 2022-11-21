class PhotographerPage {
  constructor(photographer) {
    this._photographer = photographer
  }

  createPhotographerHeaderInfos() {
    const photographerInfo = createElem("div")
    photographerInfo.setAttribute("class", "photograph-header-info")

    const nameElem = createElem("h1", this._photographer.name)
    const locationElem = createElem("h2", this._photographer.city + ", " + this._photographer.country)
    const taglineElem = createElem("p", this._photographer.tagline)

    photographerInfo.append(nameElem)
    photographerInfo.append(locationElem)
    photographerInfo.append(taglineElem)

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

    return portraitElem
  }
}