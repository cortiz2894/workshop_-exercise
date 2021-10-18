import React from 'react';
//Styles
import './Home.scss';

//Components
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Header } from './../../components/header/Header';

export const Home = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
    </React.Fragment>
  )
}

export default Home;

