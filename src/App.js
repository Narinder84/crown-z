import React,{lazy} from 'react';
import { Switch, Route } from 'react-router-dom';


import   './App.css';

// import {HomePage , ShopPage , SignInAndSignUpPage , CartTable } from './pages';

import {Header} from './components';
const HomePage = lazy('./pages');
const ShopPage =lazy('./pages');
const SignInAndSignUpPage=lazy('./pages');
const CartTable=lazy('./pages');
function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/cart_table' component={CartTable} />
      </Switch>
    </div>
  );
}

export default App;
