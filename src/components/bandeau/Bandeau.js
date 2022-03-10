import React from "react"
import "./Bandeau.css";

const Bandeau = ({ image, titre, texte }) => {
  return (
    <div className="bandeau" style={{ backgroundImage: `url(${image})` }}>
      <div className="left">
        <h1>{titre}</h1>
        {texte.map((texte, index) => {
          return (
            <h3 key={`${index}`}>
              <>
                {texte} <br />
              </>
            </h3>
          );
        })}
      </div>
    </div>
  );
};

export default Bandeau;
