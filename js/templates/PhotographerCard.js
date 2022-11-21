class PhotographerCard {
    constructor(photographer) {
        this._photographer = photographer
    }

    createPhotographerCard() {
        const photographerCard = document.createElement("article")

        photographerCard.setAttribute("data-id", this._photographer.id)
        const photographerLink = document.createElement("a")
        photographerLink.setAttribute("href", `photographer.html?id=${this._photographer.id}`)

        const portraitElem = document.createElement("img");
        if (!this._photographer.portrait || this._photographer.portrait === "") {
            portraitElem.setAttribute("src", "assets/photographers/account.png");
        } else {
            portraitElem.setAttribute("src", this._photographer.portrait);
        }
        portraitElem.setAttribute("alt", this._photographer.name);
        const nameElem = createElem("h2", this._photographer.name);

        photographerLink.appendChild(portraitElem);
        photographerLink.appendChild(nameElem);

        const locationElem = createElem("p", this._photographer.city + ", " + this._photographer.country);
        const taglineElem = createElem("p", this._photographer.tagline);
        const priceElem = createElem("p", this._photographer.price + "/jour");

        photographerCard.appendChild(photographerLink);
        photographerCard.appendChild(locationElem);
        photographerCard.appendChild(taglineElem);
        photographerCard.appendChild(priceElem);

        return photographerCard
    }
}