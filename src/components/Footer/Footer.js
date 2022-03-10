import React from "react"
import "./Footer.css";

import message from "../../assets/social/message.svg";
import phone from "../../assets/social/phone.svg";
import mail from "../../assets/social/mail.svg";

import Adresse from "../Adresse/Adresse";
import Horaires from "../Horaires/Horaires";
import { Link } from "react-router-dom";

const Footer = () => {
  const imagesSocial = [
    {
      src: message,
      alt: "Logo SMS téléphone",
      adresse: "tel:+33-6-66-02-94-02",
      text: "06.66.02.94.02",
    },
    {
      src: phone,
      alt: "Logo téléphone",
      adresse: "tel:+33-1-48-84-07-33",
      text: "01.48.84.07.33",
    },

    {
      src: mail,
      alt: "Logo Mail",
      adresse: "mailto:hairprestige@gmail.com",
      text: "Email",
    },
  ];

  return (
    <div className="footer">
      <div className="footer_up">
        <div className="social">
          <h3>Contactez-nous</h3>
          <div className="logos_social">
            {imagesSocial.map((image, index) => {
              return (
                <a
                  className="img_text"
                  href={image.adresse}
                  rel="noreferrer"
                  key={`contact-${index}`}
                >
                  <img src={image.src} alt={image.alt} />
                  <p>{image.text}</p>
                </a>
              );
            })}
          </div>
        </div>

        <div className="coordonnees">
          <Adresse />
        </div>

        <div className="horaires">
          <Horaires />
        </div>
      </div>

      <div className="footer_down">
        <hr />
        <p>
          <Link to="/cgv">Mentions Légales</Link>
        </p>
        <p>
          Design with ♥ by Nordine KHOUDOU, Guillaume SAULNIER & Matthieu SIEGEL
          — © 2022 — All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
