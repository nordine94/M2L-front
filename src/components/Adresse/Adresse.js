import React from "react"
import "./Adresse.css";

import location from "../../assets/social/location.svg";
import logo from "../../assets/img/logo2.png";
import { NavLink } from "react-router-dom";

const Adresse = () => {
  const coordonnees = {
    adresse: "63, avenue Anatole France",
    cp: 94600,
    ville: "Choisy-le-roi",
    tel: "01.48.84.07.33",
  };

  return (
    <div className="adresse_salon">
      <NavLink to="/" className="logo">
        <img className="logo_salon" src={logo} alt="Logo Hair Prestige" />
      </NavLink>
      <a
        href="https://goo.gl/maps/zbSxBn2TP3t661XZA"
        rel="noreferrer"
        target="_blank"
      >
        <p>
          {" "}
          <img src={location} alt="Logo localisation" /> {coordonnees.adresse}{" "}
        </p>
        <p> {`${coordonnees.cp} ${coordonnees.ville}`} </p>
      </a>
      {/* <p> {coordonnees.tel} </p> */}
    </div>
  );
};

export default Adresse;
