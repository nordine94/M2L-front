import React from 'react';
import './FormResa.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';



function FormResa() {

  return(
      <div>
        <form>
            <div class="containerFormResa">
                <h2 class="titreForm">Reservation</h2>
                <div>
                    <label for="dateResa" class="labelResa"></label>
                    <input type="date" name="ResaDate" id="Resa" class="ResaInp"></input>
                    <FontAwesomeIcon icon={faCalendar} class='logo-Resa'></FontAwesomeIcon>
                    <div class="ligne3"></div>
                </div>
                <div>
                    <label for="SelectRoom" class="labelSelectRoom"></label>
                    <select name="SelectRoom" id="SelectRoom" class="SelectRoomInp">
                        <option >Selectionnez une salle</option>
                        <option value="">Majorelle</option>
                        <option value="">Gruber</option>
                        <option value="">Lamour</option>
                        <option value="">Daume</option>
                        <option value="">Baccarat</option>
                    </select>
                    <FontAwesomeIcon icon={faHotel} class='logo-SelectRoom'></FontAwesomeIcon>
                    <div class="ligne4"></div>
                </div>
                <input type='submit' Value='reserver' class='buttonInp'/>
            </div>
        </form>
    </div>
    );
}

export default FormResa;