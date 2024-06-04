import React from "react";
import { ReactComponent as Compagnie } from "../../Assets/Icons/emoji_umbrella.svg";
import { ReactComponent as But } from "../../Assets/Icons/emoji_target.svg";
import { ReactComponent as Acteurs } from "../../Assets/Icons/emoji_sunglasses.svg";
import { ReactComponent as Francais } from "../../Assets/Icons/emoji_heart.svg";
import translation from '../../utils/i18next'
const data = [
  {
    icon: <Compagnie />,
    key: "compagnie"
  },
  {
    icon: <But />,
    key: "but"
  },
  {
    icon: <Acteurs />,
    key: "acteurs"
  },
  {
    icon: <Francais />,
    key: "francais"
  }
];

const InfoBoxContainer = ({ data }) => (
  <div className="details-info-box-container">
    {data.map((item, index) => (
      <div key={index} className="details-info-box">
        <div className="details-info-icon">{item.icon}</div>
        <h3 className="details-info-title">{translation(`detailsInfo.${item.key}.title`)}</h3>
        <p className="details-info-description">{translation(`detailsInfo.${item.key}.description`)}</p>
      </div>
    ))}
  </div>
);

const DetailsInfo = () => {
  return (
    <div className="details-info">
      <div className="details-info-content">
        <h1>
          Acheel: <span className="pink-title">{translation('detailsInfoHeader')}</span>
        </h1>
        <p className="details-description">{translation('detailsInfoDescription')}</p>
        <InfoBoxContainer data={data} />
      </div>
    </div>
  );
};

export default DetailsInfo;
