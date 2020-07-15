import React from 'react';
import {Route,Switch} from 'react-router-dom'

import {CollectionsOverview} from '../../components'
import {Collections} from '../../components'

const ShopPage = ({match})=> {

    
    return (
      <Switch>
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={Collections} />
      </Switch>
    );

}


export default  ShopPage;
