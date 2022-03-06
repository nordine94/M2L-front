import Navbar from "../../components/NavBar/NavBar";
import LoginForm from "../../components/FormIdentification/LoginForm";

import React from "react";
import "./LoginUser.css";

function Login() {
  const contenuIdentification = [
    { texte: "Email" },
    { texte: "Mot de passe" },
  ];
  return (
    <div class="SignIn">
      <div>
        <Navbar />
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;
