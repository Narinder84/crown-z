import React from 'react';
import {connect} from 'react-redux'

import CustomeButton from '../custom-button/custom-button.component'
import {addItemToCart} from '../../redux/cart/cart.ations'
import './collection-item.styles.scss';

const CollectionItem = ({item,addItemToCart}) =>{
  
   const {  name, price, imageUrl} = item
  return  (
    <div className='collection-item'>
      <div
        className='image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}
      />
        
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <span className='bt' ><CustomeButton onClick ={()=>addItemToCart( item)} >Add to Cart</CustomeButton></span>
    </div>
  );
}

const mapDispatchToProps = (dispatch)=>({
  addItemToCart : (item)=>dispatch(addItemToCart(item)) 
})

export default  connect(null,mapDispatchToProps)( CollectionItem);
