
import cartActionType  from './cart.actionType';

export const toggelCart =()=>({
    type: cartActionType.TOGGEL_CART
})

export const addItemToCart = (item)=>({
    type: cartActionType.ADD_ITEM_TO_CART,
    payload:item
})

export const removeItemFromCart = (item)=>({
    type: cartActionType.REMOVE_ITEM_FROM_CART,
    payload:item
})

export const reduceItemFromCart =(item)=>({
    type: cartActionType.REDUCE_ITEM_FROM_CART,
    payload: item
})

export const removeAllItems = ()=>({
    type: cartActionType.REMOVE_ALL_ITEMS
})