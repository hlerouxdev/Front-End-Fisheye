class App {
    constructor() {
        this.$photographersElem = document.querySelector('.photographer_section')
        this.photographersApi = new Api('data/photographers.json')
    }

    async main() {
        if (window.location.href.includes("index.html")) {
            //launches code related to the homepage
            const photographersData = await this.photographersApi.get()
            const photographers = photographersData.photographers.map(photographer => new PhotographersFactory(photographer))

            console.log(photographers);
    
            photographers.forEach(photographer => {
                const Template = new PhotographerCard(photographer)
                this.$photographersElem.appendChild(
                    Template.createPhotographerCard()
                )
            })
        } else if (window.location.href.includes("photographer.html")) {
            //launches code related to the photographer page
            const photographerId = window.location.href.split("id=")[1]
            // console.log(photographerId);
            const header = document.querySelector(".photograph-header")

            const photographersData = await this.photographersApi.get()
            // console.log(photographersData.photographers)

            let pagePhotographer
            photographersData.photographers.map(singlePhotographer => {
                if (singlePhotographer.id == photographerId) pagePhotographer = new PhotographersFactory(singlePhotographer)
            })

            let images = []
            photographersData.media.map(media => {
                if (media.photographerId == photographerId) images.push(new Photograph(media))
            })

            console.log(pagePhotographer);
            console.log(images);
            const headerTemplate = new PhotographerPage(pagePhotographer, images)
            header.prepend(headerTemplate.createPhotographerHeaderInfos())
            header.appendChild(headerTemplate.createPhotographerHeaderPortrait())
        } else {
            const mainElem = document.querySelector("main")
            mainElem.innerHTML = "Oops 404 Not Found"
        }
    }
}

const app = new App()
app.main()