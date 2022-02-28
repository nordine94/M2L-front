import React from 'react';
import Bandeau from '../../components/bandeau/Bandeau';
import bandeauImage from "../../assets/img/Bandeau-Multisports.png"
import Navbar from '../../components/NavBar/NavBar';
import Footer from '../../components/Footer/Footer';

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
        <Navbar />
         <Bandeau
        image={bandeauImage}
        titre={contenuBandeau.titre}
        texte={contenuBandeau.texte}
      />
      <Footer />
    </div>
  )
}
