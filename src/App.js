import React,{lazy,Suspense} from 'react';
import { Switch, Route } from 'react-router-dom';


import   './App.css';

// import {HomePage , ShopPage , SignInAndSignUpPage , CartTable } from './pages';

import {Header} from './components';
import ErrorBoundery from './components/error-boundery/error-boundery.component.jsx'
const HomePage = lazy(()=> import('./pages/homepage/homepage.component.jsx'));
const ShopPage = lazy(()=> import('./pages/shop/shop.component.jsx'));
const SignInAndSignUpPage =lazy(()=> import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx'));
const CartTable=lazy(()=> import('./pages/crat-table/cart-table.component.jsx'));
const SignInPage = lazy(()=>import('./pages/sign-in/sign-in.page.jsx'));
const RegisterPage = lazy(()=>import('./pages/register/register.page.jsx'));

function App() {
  return (
    <div>
      <Header />
      <Switch>
      <ErrorBoundery>
        
      <Suspense fallback={<div>...Loading</div>} >
        <Route  exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={SignInAndSignUpPage} />
        <Route path='/cart_table' component={CartTable} />
        <Route path='/signin_mobile' component={SignInPage} />
        <Route path='/register_mobile' component={RegisterPage} />
        </Suspense>
        
      </ErrorBoundery>
      </Switch>
    </div>
  );
}

export default App;
