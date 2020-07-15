
import {combineReducers} from 'redux';

import shopReducer from './shop/shop.reducer'
import cartReducer from './cart/cart.reducer';


export default combineReducers({
    cart: cartReducer,
    shop: shopReducer
});