class Medium {
  constructor(data) {
    this.$id = data.id;
    this.$photographerId = data.photographerId;
    this.$title = data.title;
    this.$path = data.image ? data.image : data.video;
    this.$video = data.video;
    this.$image = data.image;
    this.$likes = data.likes;
    this.$date = data.date;
    this.$price = data.price;
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
    return this.$path;
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
    if (this.$image) return 'image';
    if (this.$video) return 'video';
  }
}
