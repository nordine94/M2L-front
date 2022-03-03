import React from 'react';
import './SignInForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faTrophy } from '@fortawesome/free-solid-svg-icons';


function SignInForm() {
  return(
      <div>
        <form>
            <div class="containerForm">
                <h2 class="titreForm">inscriptions</h2>
                
                <div>
                    <label for="prenom" class="labelPrenom">PRENOM</label>
                    <input type="text" name="prenomInp" id="prenom" class="prenomInp" required maxlength="35"></input>
                    <FontAwesomeIcon icon={faUser} class='logo-user1'></FontAwesomeIcon>
                    <div class="ligne1"></div>
                </div>
                <div>
                    <label for="nom" class="labelNom">NOM</label>
                    <input type="text" name="nomInp" id="Nom" class="nomInp" required maxlength="35"></input>
                    <FontAwesomeIcon icon={faUser} class='logo-user2'></FontAwesomeIcon>
                    <div class="ligne2"></div>
                </div>
                <div>
                    <label for="email" class="labelEmail">Email</label>
                    <input type="text" name="emailInp" id="email" class="emailInp" required maxlength="35"></input>
                    <FontAwesomeIcon icon={faEnvelope} class='logo-mail'></FontAwesomeIcon>
                    <div class="ligne3"></div>
                </div>
                <div>
                    <label for="password" class="labelPassword">Password</label>
                    <input type="text" name="passwordInp" id="password" class="passwordInp" required maxlength="35"></input>
                    <FontAwesomeIcon icon={faLock} class='logo-lock'></FontAwesomeIcon>
                    <div class="ligne4"></div>
                </div>
                <div>
                    <label for="telephone" class="labelTelephone">Telephone</label>
                    <input type="text" name="telephoneInp" id="telephone" class="telephoneInp" required maxlength="35"></input>
                    <FontAwesomeIcon icon={faPhone} class="logo-phone"></FontAwesomeIcon>
                    <div class="ligne5"></div>
                </div>
                <div>
                    <label for="Ligue" class="labelLigue">Ligue</label>
                    <input type="text" name="ligueInp" id="ligue" class="ligueInp" required maxlength="35"></input>
                    <FontAwesomeIcon icon={faTrophy} class="logo-trophy"></FontAwesomeIcon>
                    <div class="ligne6"></div>
                </div>

                <button type='submit' Value='Submit' class='buttonInp'>ENVOYER</button>
            </div>
        </form>
    </div>
    );
}

export default SignInForm;