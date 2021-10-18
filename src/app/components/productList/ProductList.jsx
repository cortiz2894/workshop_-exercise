import React, {useEffect, useState} from 'react';

//Styles
import './ProductList.scss';

//Components
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { ProductCard } from './../productCard/ProductCard';
import CircularProgress from '@material-ui/core/CircularProgress';


export const ProductList = props => {
  return (
    <React.Fragment>
      <Container maxWidth="lg" className={'containerBody'}>
        <main>
          {props.dataProd ? (
            <div>
              <div className={'category-container'}>
              </div>
              {props.dataProd.results.map((product) => <ProductCard data={product} />) } 
            </div>
          ):(
            <CircularProgress/>
          )}
        </main>
      </Container>
    </React.Fragment>
  )
}

export default ProductList;

