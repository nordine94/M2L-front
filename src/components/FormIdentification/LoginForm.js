import React, { useState, useRef, useEffect } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { useAuth } from "../context/auth";
import axios from "axios";
import {useNavigate} from "react-router-dom";


function LoginForm() {

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const { setAuthTokens } = useAuth();

  const emailRef = useRef()
  const passwordRef = useRef()
  const navigate = useNavigate()

  async function postLogin(e) {
    console.log("ok");
  e.preventDefault();
  try {
    const result = await axios.post("http://localhost:8000/admin/user/login", {
      email: emailRef.current.value,
      password: passwordRef.current.value
    })
    if (result.status === 200) {
      setAuthTokens(result.data);
      setLoggedIn(true);
    } else {
      setIsError(true);
    }
  } catch (error) {
    setIsError(true);
  } 

}

useEffect(() => {
  if (isLoggedIn){
    navigate("/")
  }
},[isLoggedIn])






  return (
    <div>
      <form onSubmit={postLogin}>
        <div class="formLogin">
          <h2 class="titreForm">Identification</h2>
          { isError && <p>Erreur d'authentification</p>}
          <div>
            <label for="email" class="labelEmailLogin">
              Email
            </label>
            <input
              ref={emailRef}
              type="text"
              name="emailInp"
              id="email"
              class="emailInp"
              required
              maxlength="35"
            ></input>
            <FontAwesomeIcon
              icon={faEnvelope}
              class="logo-mail"
            ></FontAwesomeIcon>
            <div class="ligne3"></div>
          </div>
          <div>
            <label for="password" class="labelPassword">
              Password
            </label>
            <input
              ref= {passwordRef}
              type="text"
              name="passwordInp"
              id="password"
              class="passwordInp"
              required
              maxlength="35"
            ></input>
            <FontAwesomeIcon icon={faLock} class="logo-lock"></FontAwesomeIcon>
            <div class="ligne4"></div>
          </div>
         
          <input type="submit" value="SE CONNECTER" class="buttonInp" />
            
          
        </div>
      </form>
    </div>
  );
  
  }

export default LoginForm;
