import Photographer from '../models/Photographer.js'

export default class PhotographersFactory {
  constructor(data) {
    return new Photographer(data);
  }
}
