import React, {useEffect, useState} from 'react';
import axios from 'axios';
//Styles
import './ProductDetails.scss';

//Components
import { Header } from './../../components/header/Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container'
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export const ProductDetails = props => {
  const [idProduct, setIdProduct] = useState();
  const [productData, setProductData] = useState();
  const [productDescription, setProductDescription] = useState();

  useEffect(() => {
    setIdProduct(window.location.href.split('items/')[1])
    axios.get('https://api.mercadolibre.com/items/'+idProduct)
    .then(function (response) {
      // handle success
      setProductData(response.data);
    })
    axios.get('https://api.mercadolibre.com/items/'+idProduct+'/description')
    .then(function (response) {
      // handle success
      setProductDescription(response.data);
    })
  }, [idProduct])
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <Container maxWidth="lg" className={'containerBody'}>
        <Card className="card-product-details">
          {productData && productDescription ? ( 
            <Grid 
              container 
              className={'container-card-details'}
            >
              <div className={'container-image-details'}>
                <img alt={'imagen de producto'} className={'img-product'} src={productData.secure_thumbnail}/>
              </div>
              <div className={'container-info-details'}>
                <div className={'estado-seller'}>
                  <p>{productData.condition} - </p><p> {productData.sold_quantity} Vendidos</p>
                </div>
                <p className={'name-prod'}>Nombre prod</p>
                <p className={'price-details-prod'}>$ {productData.base_price}</p>
                <Button color="primary" className={'button-buy'}>Comprar</Button>
              </div>
              <div className={'description-box'}>
                <p className={'title--description-box'}>Descripción del producto</p>
                <p className={'text--description-box'}>{productDescription.plain_text}</p>
              </div>
          </Grid>
          ) : (
          <Grid 
              container 
              className={'container-card-details'}
            >
              <CircularProgress />
          </Grid>
          )}
          
        </Card>
      </Container>
    </React.Fragment>
  )
}

export default ProductDetails;

