import media from "../photographer.js";

const filter = document.querySelector('select');
filter.addEventListener('click', ()=> {
  console.log(filter.options.value);
})


/**
 *
 * @param {string} key; the key to use for the sort methode
 */
// export default function sortbyType(key) {
//   return media.sort((a, b) => b.[key] - a.[key]);
// }

// filter.options.addEventListener('change')
