import SignInForm from '../../components/FormulaireInscriptions/SignInForm';

import React from 'react';
import './SignIn.css';


function SignIn() {

  return (
    <div class='SignIn'>
        <div className="bg_SignIn">
          <SignInForm />
        </div>
    </div>
  )
}

export default SignIn;