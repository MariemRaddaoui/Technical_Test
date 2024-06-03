import React from "react";

const sectionsData = [
  {
    id: 1,
    title: "Pilotez vos contrats",
    description: "De n’importe où et à tout moment, accédez à vos documents depuis votre espace client.",
  },
  {
    id: 2,
    title: "Personnalisez vos garanties",
    description: "En un clic, adaptez votre assurance à vos besoins : choisissez parmi une multitude d’options, ajoutez des bénéficiaires, faites évoluer vos garanties.",
  },
  {
    id: 3,
    title: "Suivez vos remboursements",
    description: "Déclarez votre sinistre, consultez l’avancée de votre dossier depuis votre interface dédiée et bénéficiez d’un remboursement rapide.",
  },
];

const Sections = () => {
  return (
    <div className="sections">
      <div className="sections-header">
        <h1>
          Ne perdez plus votre temps, Acheel est{" "}
          <span className="blue-title">la solution parfaite à portée de clic.</span>
        </h1>
      </div>
      {sectionsData.map(section => (
        <div className={`section-${section.id}`}>
        <div key={section.id} className={`section image-${section.id}`}>
          <div className={`section-content`}>
            <h2>{section.title}</h2>
          </div>
        </div>
        <p>{section.description}</p>

        </div>
      ))}
    </div>
  );
};

export default Sections;
