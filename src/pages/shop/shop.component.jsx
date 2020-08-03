import React,{lazy,Suspense} from 'react';
import {Route,Switch} from 'react-router-dom'
import  Scroll from '../../components/scroll/scroll.component'
// import {CollectionsOverview} from '../../components'
// import {Collections} from '../../components'

const CollectionsOverview = lazy(()=>import('../../components/collectionsOverview/collectionsOverview.jsx'));
const Collections=lazy(()=> import('../../components/collections/collections.component.jsx'));

const ShopPage = ({match})=> {

    
    return (
      <Switch>
        <Scroll height = {`520px`} >
        <Suspense fallback = {<div>....Loading</div>} >
        <Route exact path={`${match.path}`} component={CollectionsOverview} />
        <Route exact path={`${match.path}/:collectionId`} component={Collections} />
        </Suspense>
        </Scroll>
        
      </Switch>
    );

}


export default  ShopPage;
