class Api {
  /**
   * 
   * @param {string} url 
   */
  constructor(url) {
      this._url = url
  }

  async get() {
      return fetch(this._url)
          .then(res => res.json())
          .then(data => data)
          .catch(err => console.log('an error occurs', err))
  }
}