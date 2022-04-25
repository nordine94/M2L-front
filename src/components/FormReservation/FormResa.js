import './FormResa.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel } from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import React, {useRef} from 'react';
import axios from 'axios';



function FormResa() {
    const date = useRef();
    const salle = useRef();
    const handleResa = async (e) => {
        e.preventDefault();
        console.log(date);
        console.log(date.current.value);
        console.log(salle);
        console.log(salle.current.value);
    }
    
        


  return(
      <div>
        <form onSubmit={handleResa}>
            <div class="containerFormResa">
                <h2 class="titreForm">Reservation</h2>
                <div>
                    <label for="dateResa" class="labelResa"></label>
                    <input type="date" name="ResaDate" id="Resa" class="ResaInp" ref={date}></input>
                    <FontAwesomeIcon icon={faCalendar} class='logo-Resa'></FontAwesomeIcon>
                    <div class="ligne3"></div>
                </div>
                <div>
                    <label for="SelectRoom" class="labelSelectRoom"></label>
                    <select name="SelectRoom" id="SelectRoom" class="SelectRoomInp" ref={salle}>
                        <option >Selectionnez une salle</option>
                        <option value="Majorelle">Majorelle</option>
                        <option value="Gruber">Gruber</option>
                        <option value="Lamour">Lamour</option>
                        <option value="Daume">Daume</option>
                        <option value="Baccarat">Baccarat</option>
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