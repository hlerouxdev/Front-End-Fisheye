export default class Medium {
  constructor(data, firstName) {
    this.$id = data.id;
    this.$photographerId = data.photographerId;
    this.$title = data.title;
    this.$path = data.image ? data.image : data.video;
    this.$video = data.video;
    this.$image = data.image;
    this.$likes = data.likes;
    this.$date = data.date;
    this.$price = data.price;
    this.$firstName = firstName;
  }

  get id() {
    return this.$id;
  }

  get photographerId() {
    return this.photographerId;
  }

  get title() {
    return this.$title;
  }

  get path() {
    return `assets/images/${this.$firstName}/${this.$path}`;
  }

  get likes() {
    return this.$likes;
  }

  get date() {
    return this.$date;
  }

  get price() {
    return `${this.$price}€/jour`;
  }

  get type() {
    let type;
    if (this.$image) type = 'image';
    if (this.$video) type = 'video';
    return type;
  }
}
