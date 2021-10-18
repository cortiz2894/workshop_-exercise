import { React } from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";


import {Home} from './pages/home/Home'
import { ProductListView } from './pages/productListView/ProductListView';
import { ProductDetails } from './pages/productDetails/ProductDetails';

const AplicationRoutes = () => {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route> 
        <Route exact path="/items/:id" >
          <ProductDetails ></ProductDetails>
        </Route>
        <Route exact path="/items" >
          <ProductListView></ProductListView>
        </Route>
      </Switch>
    </Router>
  );

}

export default AplicationRoutes;

