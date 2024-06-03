import React from "react";
import { ReactComponent as Habitation } from "../../Assets/Insurance_types/habitation.svg";
import { ReactComponent as Auto } from "../../Assets/Insurance_types/auto.svg";
import { ReactComponent as ChienChat } from "../../Assets/Insurance_types/chien_chat.svg";
import { ReactComponent as Alarme } from "../../Assets/Insurance_types/alarme.svg";
import { ReactComponent as Emprunteur } from "../../Assets/Insurance_types/emprunteur.svg";
import { ReactComponent as Proprietaire } from "../../Assets/Insurance_types/proprietaire.svg";
import { ReactComponent as Sante } from "../../Assets/Insurance_types/sante.svg";
import translation from "../../utils/i18next";
const data = [
  {
    icon: <Auto />,
    key: "auto"
  },
  {
    icon: <Habitation />,
    key: "housing"
  },
  {
    icon: <Sante />,
    key: "health"
  },
  {
    icon: <ChienChat />,
    key: "pet"
  },
  {
    icon: <Proprietaire />,
    key: "pno"
  },
  {
    icon: <Emprunteur />,
    key: "borrower"
  },
  {
    icon: <Alarme />,
    key: "alarm"
  }
];

const BoxContainer = ({ data }) => (
  <div className="details-box-container">
    {data.map((item, index) => (
      <div key={index} className="details-box">
        <div className="details-icon">{item.icon}</div>
        <h3 className="details-title">{translation(`details.${item.key}.title`)}</h3>
        <p className="details-description">{translation(`details.${item.key}.description`)}</p>
        <div className="details-price">{translation(`details.${item.key}.price`)}</div>
        <button className="details-button">{translation(`details.${item.key}.button`)}</button>
      </div>
    ))}
  </div>
);

const Details = () => {
  return (
    <div className="details">
      <div className="details-content">
        <h1>
          <span className="blue-title">{translation('detailsHeader')}</span>{" "}
          {translation('detailsHeaderSpan')}
        </h1>
        <BoxContainer data={data} />
      </div>
    </div>
  );
};

export default Details;
