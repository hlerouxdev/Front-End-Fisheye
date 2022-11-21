class PhotographerMedia {
  constructor(media) {
    this._id = media.id
    this._title = media.title
    this._image = media.image
    this._likes = media.likes
    this._date = media.date
    this._price = media.price
  }
  
  createImage() {
    const imageBox = createElem("div")
    imageBox.setAttribute("class", "image-box")
    imageBox.setAttribute("data-id", this._id)

    const imageElem = createElem("img")
    imageElem.setAttribute("src", this._image)
    imageElem.setAttribute("alt", this._title)

    const imageInfo = createElem("div")
    imageInfo.setAttribute("class", "image-info")
    const titleElem = createElem("p", this._title)
    const likesElem = createElem("div")
    likesElem.setAttribute("class", "image-info-likes")
    const likesNumber = createElem("p", this._likes)
    const likesHeart = createElem("img")
    likesHeart.setAttribute("src", "")

    likesElem.appendChild(likesNumber)
    likesElem.appendChild(likesHeart)

    imageInfo.appendChild(titleElem)
    imageInfo.appendChild(likesElem)

    imageBox.appendChild(imageElem)
    imageBox.appendChild(imageInfo)

    return imageBox
  }
}