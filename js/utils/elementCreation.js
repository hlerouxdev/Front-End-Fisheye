/**
 *
 * @param {string} type elem type eg: h1, p etc
 * @param {string} content
 * @returns
 */
function createElem(type, content) {
  const elem = document.createElement(type);
  if (content) {
    elem.innerText = content;
  }
  return elem;
}

export default createElem;
