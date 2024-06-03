import React from "react";
import { ReactComponent as Habitation } from "../../Assets/Insurance_types/habitation.svg";
import { ReactComponent as Auto } from "../../Assets/Insurance_types/auto.svg";
import { ReactComponent as ChienChat } from "../../Assets/Insurance_types/chien_chat.svg";
import { ReactComponent as Alarme } from "../../Assets/Insurance_types/alarme.svg";
import { ReactComponent as Emprunteur } from "../../Assets/Insurance_types/emprunteur.svg";
import { ReactComponent as Proprietaire } from "../../Assets/Insurance_types/proprietaire.svg";
import { ReactComponent as Sante } from "../../Assets/Insurance_types/sante.svg";

function Details() {
    const data = [
        {
          icon: <Auto />,
          title: "Auto",
          description: "Protégez votre véhicule et ses conducteurs, selon vos besoins et votre profil.",
          price: "8,14€ par mois",
          button: "OBTENIR UN TARIF"
        },
        {
          icon: <Habitation />,
          title: "Habitation",
          description: "Locataire ou propriétaire, protégez votre « home sweet home » et tous ceux qui vous sont chers.",
          price: "2,17€ par mois",
          button: "OBTENIR UN TARIF"
        },
        {
          icon: <Sante />,
          title: "Santé",
          description: "Pour vous, votre conjoint ou encore toute la famille, protégez la santé de ceux que vous aimez.",
          price: "3,31€ par mois",
          button: "OBTENIR UN TARIF"
        },
        {
          icon: <ChienChat />,
          title: "Chien & Chat",
          description: "On sait à quel point votre meilleur compagnon compte à vos yeux. N’hésitez plus, protégez-le !",
          price: "2,29€ par mois",
          button: "OBTENIR UN TARIF"
        },
        {
          icon: <Proprietaire />,
          title: "PNO",
          description: "Une assurance propriétaire non occupant pour votre bien locatif, à prix mini.",
          price: "4,30€ par mois",
          button: "OBTENIR UN TARIF"
        },
        {
          icon: <Emprunteur />,
          title: "Emprunteur",
          description: "Changez pour une assurance de prêt immobilier moins chère, et réalisez des économies !",
          price: "20 000€ économisés",
          button: "CALCULER VOS ÉCONOMIES"
        },
        {
          icon: <Alarme />,
          title: "Alarme et Télésurveillance",
          description: "Protégez votre logement contre les cambriolages sans vous ruiner !",
          price: "14,99€ par mois",
          button: "OBTENIR UN TARIF"
        }
      ];


    const BoxContainer = ({ data }) => (
        <div className="details-box-container">
      {data.map((item, index) => (
        <div key={index} className="details-box">
          <div className="details-icon">{item.icon}</div>
          <h3 className="details-title">{item.title}</h3>
          <p className="details-description">{item.description}</p>
          <div className="details-price">{item.price}</div>
          <button className="details-button">{item.button}</button>
        </div>
      ))}
    </div>
      );

    return (
        <div className="details">
            <div className="details-content">
                <h1><span className="blue-title">Adaptée à vos besoins et à votre budget,</span> nous avons forcément l’assurance qu’il vous faut.
 </h1>
                <div>
                    <BoxContainer data={data} />
                </div>
                
            </div>
        </div>
    );
}

export default Details;
