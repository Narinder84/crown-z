
import {createSelector} from 'reselect';

const selectShop = state => state.shop

export const selectCollections = createSelector(
    [selectShop],
    (shop)=> shop.collections
)

export const selectItemCollection =(collectionName)=>createSelector(
    [selectCollections],
    (collections)=>  {    
        const arry = collections.filter((collection)=>{   return collection.routeName === collectionName})
        return arry[0]
    }
        
)