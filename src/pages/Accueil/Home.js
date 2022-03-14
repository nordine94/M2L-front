import React from 'react';
import Bandeau from '../../components/bandeau/Bandeau';
import bandeauImage from "../../assets/img/Bandeau-Multisports.png"

export default function Home() {

        
  const contenuBandeau = {
    titre: "Ligue de Lorraine",
    texte: [
      "Votre association",
      "vous accueille dans un cadre chaleureux et convivial.",
    ],
  };

  return (
    <div>
        <Bandeau
        image={bandeauImage}
        titre={contenuBandeau.titre}
        texte={contenuBandeau.texte}
      />
    </div>
  )
}
