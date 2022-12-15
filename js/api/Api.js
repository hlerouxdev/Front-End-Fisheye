export default class Api {
  /**
   *
   * @param {string} url
   */
  constructor(url) {
    this.$url = url;
  }

  async getPhotographers() {
    return fetch(this.$url)
      .then((res) => res.json())
      .then((data) => data.photographers)
      .catch((err) => console.log('an error occured', err));
  }

  async getMedia() {
    return fetch(this.$url)
      .then((res) => res.json())
      .then((data) => data.media)
      .catch((err) => console.log('an error occured', err));
  }
}
