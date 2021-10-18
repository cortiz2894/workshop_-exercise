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
        <Route exact path="/" component={Home} />
        <Route exact path="/items/:id" component={ProductDetails} />
        <Route exact path="/items" component={ProductListView} />
      </Switch>
    </Router>
  );

}

export default AplicationRoutes;

