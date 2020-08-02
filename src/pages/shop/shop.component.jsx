import React from 'react';
import {Route,Switch} from 'react-router-dom'
import  Scroll from '../../components/scroll/scroll.component'
import {CollectionsOverview} from '../../components'
import {Collections} from '../../components'

const ShopPage = ({match})=> {

    
    return (
      <Switch>
        <Scroll height = {`520px`} >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={Collections} />
        </Scroll>
        
      </Switch>
    );

}


export default  ShopPage;
