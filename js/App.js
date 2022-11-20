class App {
  constructor() {
      this.$photographersElem = document.querySelector('.photographer_section')
      this.photographersApi = new Api('data/photographers.json')
  }

  async main() {
      const photographersData = await this.photographersApi.get()
      const photographers = photographersData.photographers.map(photographer => new PhotographersFactory(photographer))
      
      photographers.forEach(photographer => {
              const Template = new PhotographerCard(photographer)
              this.$photographersElem.appendChild(
                  Template.createPhotographerCard()
              )
          })
  }
}

const app = new App()
app.main()