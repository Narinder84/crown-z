
import React from 'react'
import {connect} from 'react-redux'
import {createStructuredSelector} from 'reselect'

import {selectCollections} from '../../redux/shop/shop.reselector.js'
import CollectionPreview from '../collection-preview/collection-preview';





const CollectionsOverview = ({collections})=> {

    
    return (
      <div>
        {collections.map(({ id, ...otherCollectionProps }) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))}
      </div>
    );
  
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollections
})

export default connect(mapStateToProps,null)( CollectionsOverview);
