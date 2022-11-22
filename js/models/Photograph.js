class Photograph {
  constructor(data) {
    this.$id = data.id;
    this.$photographerId = data.photographerId;
    this.$title = data.title;
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

  get image() {
    return `assets/media/${this.$image}`;
  }

  get likes() {
    return this.$likes;
  }

  get date() {
    return this.$date;
  }

  get price() {
    return this.$price;
  }
}
