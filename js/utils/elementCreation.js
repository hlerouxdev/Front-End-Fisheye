/**
 * 
 * @param {string} type elem type eg: h1, p etc
 * @param {string} content 
 * @returns 
 */
function createElem(type, content) {
  const elem = document.createElement(type);
  elem.innerText = content;
  return elem;
}