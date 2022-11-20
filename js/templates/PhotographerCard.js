class PhotographerCard {
  constructor(photographer) {
      this._photographer = photographer
  }

  createPhotographerCard() {
      const photographerCard = document.createElement("article")
      const photographerCardContent = `
          <article>
              <img
                  alt="${this._photographer.name}"
                  src="${this._photographer.portrait}"
              />
              <h2>${this._photographer.name}</h2>
              <p>${this._photographer.city}, ${this._photographer.country}</p>
              <p>${this._photographer.tagline}</p>
              <p>${this._photographer.price}€/jour</p>
          </article>
      `
      photographerCard.innerHTML = photographerCardContent

      return photographerCard
  }
}