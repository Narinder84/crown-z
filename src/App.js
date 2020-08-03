import React,{lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';


import   './App.css';

// import {HomePage , ShopPage , SignInAndSignUpPage , CartTable } from './pages';

import {Header} from './components';
const HomePage = lazy(()=> import('./pages/homepage/homepage.component.jsx'));
const ShopPage = lazy(()=> import('./pages/shop/shop.component.jsx'));
const SignInAndSignUpPage =lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'));
const CartTable=lazy(()=> import('./pages/crat-table/cart-table.component.jsx'));
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Suspense fallback={<div>...Loading</div>} >
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/cart_table' component={CartTable} />
        </Suspense>
      </Switch>
    </div>
  );
}

export default App;
