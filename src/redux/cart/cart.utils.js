
export const cartItems=(state,action)=>{
    const items= state.cartItems;
    const payloadItem = action.payload
    const isItemExists = items.find(item=>item.id===payloadItem.id)

    

    if (isItemExists){
        return items.map(item=> item.id===isItemExists.id ? {...item,quantity:item.quantity+1}:{...item})
    }else{

    return [...state.cartItems,{...action.payload,quantity:1}]
   }
    
}

export const removeItem =(state,action)=>{
    const items= state.cartItems;
    const payloadItem = action.payload

    return items.filter((item)=>item.id!==payloadItem.id)
}


export const reduceItem =(state,action)=>{
    const items= state.cartItems;
    const payloadItem = action.payload
    
        return items.map((item)=>item.id===payloadItem.id && item.quantity > 1 ? {...item,quantity:item.quantity-1}:{...item} )
    
}
 


