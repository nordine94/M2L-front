import Navbar from '../../components/NavBar/NavBar';
import SignInForm from '../../components/FormulaireInscriptions/SignInForm';

import React from 'react';
import './SignIn.css';


function SignIn() {
    const contenuInscriptions =
      [
        {texte: "Nom"},
        {texte: "Prenom"},
        {texte: "Email"},
        {texte: "Telephone"},
        {texte: "Mot de passe"},
        {texte: "Ligue"}
      ];
  return (
    <div class='SignIn'>
      <div>
        <Navbar />
        <SignInForm />
      </div>
    </div>
  )
}

export default SignIn;