import React, {useEffect, useState} from 'react';
//Styles
import './ProductListView.scss';

//Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Header } from '../../components/header/Header';
import { ProductList } from '../../components/productList/ProductList';
import axios from 'axios';

//Services
import GetProductsService from './../../services/getProductsService';

export const ProductListView = ({ match }) => {
  const [searchValue, setSearchValue] = useState();
  const [productData, setProductData] = useState();

  useEffect(() => {
    setSearchValue(window.location.href.split('=')[1])
    axios.get('https://api.mercadolibre.com/sites/MLA/search?q='+searchValue)
    .then(function (response) {
      // handle success
      setProductData(response.data);
    })
  }, [searchValue])


  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <ProductList dataProd={productData} />
    </React.Fragment>
  )
}

export default ProductListView;

