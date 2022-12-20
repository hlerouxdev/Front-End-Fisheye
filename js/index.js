import Api from './api/Api.js';
import Photographer from './models/Photographer.js';
import PhotographerCard from './templates/PhotographerCard.js';

const photographersElem = document.querySelector('.photographer_section');
const photographersApi = new Api('data/photographers.json');

async function main() {
  const photographers = await photographersApi.getPhotographers();
  photographers.forEach(
    (photographer) => {
      const photographerData = new Photographer(photographer);
      const Template = new PhotographerCard(photographerData);
      photographersElem.appendChild(
        Template.createPhotographerCard(),
      );
    },
  );
}

main();
