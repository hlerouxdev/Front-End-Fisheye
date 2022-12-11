import Api from './api/Api.js';
import PhotographersFactory from './factories/PhotographersFactory.js';
import PhotographerCard from './templates/PhotographerCard.js';

const photographersElem = document.querySelector('.photographer_section');
const photographersApi = new Api('data/photographers.json');

async function main() {
  const photographersData = await photographersApi.get();
  const photographers = photographersData.photographers.map(
    (photographer) => new PhotographersFactory(photographer),
  );

  photographers.forEach((photographer) => {
    const Template = new PhotographerCard(photographer);
    photographersElem.appendChild(
      Template.createPhotographerCard(),
    );
  });
}

main();
