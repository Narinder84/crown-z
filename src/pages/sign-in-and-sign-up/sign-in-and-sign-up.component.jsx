import React from 'react';

import SignIn from '../../components/sign-in/sign-in.component';
import {RegisterForm} from '../../components'
import styles from './sign-in-and-sign-up.module.scss';

const SignInAndSignUpPage = () => (
  <div className={styles.container}>
    <SignIn />
    <RegisterForm/>
  </div>
);

export default SignInAndSignUpPage;
