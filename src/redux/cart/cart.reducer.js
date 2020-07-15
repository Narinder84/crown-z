
import  cartActionType  from './cart.actionType';
import {cartItems,removeItem,reduceItem} from './cart.utils';

const INITIAL_STATE = {
    ishidden : true,
    cartItems:[]

}

 const cartReducer = (state=INITIAL_STATE,action={})=>{
    switch (action.type) {
        case cartActionType.TOGGEL_CART:
            return{
                ...state,
                ishidden: !state.ishidden
            }
        case cartActionType.ADD_ITEM_TO_CART:
            return {
                ...state,
                cartItems: cartItems(state,action)
            }
        case cartActionType.REMOVE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: removeItem(state,action)
            }
        case cartActionType.REDUCE_ITEM_FROM_CART:
            return {
                ...state,
                cartItems: reduceItem(state,action)
            }
        case cartActionType.REMOVE_ALL_ITEMS:
            return {
                ...state,
                cartItems: []
            }
                    
    
        default:
            return state;
    }
}

export default cartReducer;