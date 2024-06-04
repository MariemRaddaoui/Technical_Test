import React from "react";
import { ReactComponent as Man } from "../../Assets/Icons/man_with_tablet.svg";
import { ReactComponent as Woman } from "../../Assets/Icons/woman_with_computer.svg";
import translation from '../../utils/i18next'
const data = [
  {
    icon: <Man />,
    key: "faq"
  },
  {
    icon: <Woman />,
    key: "advisor"
  }
];

const AideContainer = ({ data }) => (
  <div className="aide-box-container">
    {data.map((item, index) => (
      <div key={index} className="aide-box">
        <div className="aide-icon">{item.icon}</div>
        <h3 className="aide-title">{translation(`aide.${item.key}.title`)}</h3>
        <p className="aide-description">{translation(`aide.${item.key}.description`)}</p>
        <button className="aide-button">{translation(`aide.${item.key}.button`)}</button>
      </div>
    ))}
  </div>
);

const Aide = () => {
  return (
    <div className="aide">
      <div className="aide-content">
        <h1>
          <span className="pink-title">{translation('aideHeader')}</span>
          {translation('aideHeader2')}
        </h1>
        <p className="aide-description">{translation('aideDescription')}</p>
        <AideContainer data={data} />
      </div>
    </div>
  );
};

export default Aide;
