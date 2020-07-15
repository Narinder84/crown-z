
import {createSelector} from 'reselect'

const selectCart =(state)=> state.cart 

export const selectItems = createSelector(
    [selectCart],
    
    (cart)=>  cart.cartItems
)

export const selectTotalQuantity = createSelector(
    [selectItems],
    items=> items.reduce(((acc,item)=>acc+item.quantity),0)
)

export const selectTotal = createSelector(
  [selectItems],
  item=>item.reduce(((acc,item)=>acc+item.quantity*item.price),0)   
)