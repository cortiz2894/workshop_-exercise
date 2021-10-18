import axios from 'axios';

export default class GetProductsService {
  getProducts(product){
    return axios.get('https://api.mercadolibre.com/sites/MLA/search?q='+product)
  }
}