
import React from 'react';
import {connect} from 'react-redux'


import CollectionItem from '../collection-item/collection-item.component';

import './collections.scss'
import { selectItemCollection } from '../../redux/shop/shop.reselector';

const Collections = ({itemCollection}) => {
    const {items, title} = itemCollection
    return (
        <div className='collections'>
          <h1 className='title'>{title.toUpperCase()}</h1>
          <div className='preview'>
            {items.map((item) => (
                <CollectionItem key={item.id} item={item} />
              ))}
          </div>
        </div>
      );
}
const  mapStateToProps = (state,props)=>({
itemCollection: selectItemCollection(props.match.params.collectionId)(state)
})
export default  connect(mapStateToProps,null)( Collections);
