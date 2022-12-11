/**
 *
 * @param {array} array; the array to be worked on
 * @param {string} key; the key to use for the sort methode
 */
export default function sortbyType(array, key) {
  return array.sort((a, b) => {
    const x = a[key]; const y = b[key];
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
  });
}
