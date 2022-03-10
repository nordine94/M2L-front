import React from 'react'
import "./reservation.css"
import Navbar from '../../components/NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro'

export default function Reservation() {
  return (
    <div>
<Navbar />
<div className='container'>
    <div className='formulaire'>
        <form  action="">
        <h1>RESERVATION</h1>
        <FontAwesomeIcon className='icon1' icon={solid('calendar')} />

            <div className='input1'>
           <input type="date"  placeholder='Date reunion'/> 
            </div>


            <FontAwesomeIcon className='icon1' icon={solid('school')} />
          <div className='input2'>
          <select name="salle" id="salle-select">
    <option value="">Choissisez votre salle</option>
    <option value="1001">Majorelle</option>
    <option value="1002">Gruber</option>
    <option value="1003">Lamour</option>
    <option value="1004">Daume</option>
    <option value="1005">Baccarat</option>
    </select>
    </div>


     

        </form>
        </div>
    </div>
    </div>

    )
    }

