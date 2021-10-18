import React from 'react';
import {useHistory} from 'react-router-dom'

//Styles
import './ProductCard.scss';

//Assets
import logoEnvio from '../../assets/ic_shipping.png'
//Components
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';

export const ProductCard = props => {
  const history = useHistory()
  const sendData = () => {
    history.push(`/items/${props.data.id}`)
  }

  return (
    <React.Fragment>
      <Card className="card-product">
      <Grid 
            container 
            className={'container-card'}
            onClick={() => sendData()}
          >
            <Grid item xs={2}>
              <img alt={'imagen de producto'} className={'img-product'} src={props.data.thumbnail}/>
            </Grid>
            <Grid item xs={10}>
              <div className={'container-info-product'}>
                <div className={'container-price'}>
                  <p className={'price-text'}>$ {props.data.price}</p>
                  {props.data.shipping.free_shipping ?(
                    <img alt={'logo envio'} src={logoEnvio} className={'icon-envio'}/>
                  ):null}
                </div>
                <div>
                  <p>{props.data.title}</p>
                  <p>{props.data.condition}</p>
                </div>
              </div>
              <div className={'lugar-product'}>
                <p>{props.data.address.state_name}</p>
              </div>
            </Grid>
        </Grid>
      </Card>
    </React.Fragment>
  )
}

export default ProductCard;

