import "./Horaires.css";

const Horaires = () => {
  const horaireSemaine = [
    { jour: "Lundi", heure: "Fermé" },
    { jour: "Mardi", heure: "9h - 19h" },
    { jour: "Mercredi", heure: "9h - 19h" },
    { jour: "Jeudi", heure: "9h - 19h" },
    { jour: "Vendredi", heure: "9h - 19h" },
    { jour: "Samedi", heure: "9h - 19h" },
    { jour: "Dimanche", heure: "Fermé" },
  ];

  return (
    <div className="horaires_salon">
      <h3>Horaires du salon</h3>
      <table>
        <tbody>
          {horaireSemaine.map((horaireJour, index) => {
            return (
              <tr key={`horaire-${index}`}>
                <td> {horaireJour.jour} </td>
                <td> {horaireJour.heure} </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Horaires;
