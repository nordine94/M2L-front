import React from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLock } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";


function LoginForm() {
  return (
    <div>
      <form>
        <div class="formLogin">
          <h2 class="titreForm">Identification</h2>

          <div>
            <label for="email" class="labelEmailLogin">
              Email
            </label>
            <input
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
         
         

          <button type="submit" Value="Submit" class="buttonInp">
            SE CONNECTER
          </button>
        </div>
      </form>
    </div>
  );
}

export default LoginForm;
