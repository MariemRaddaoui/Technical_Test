import React from "react";
import { ReactComponent as Simple } from "../../Assets/Features/simple.svg";
import { ReactComponent as Flexible } from "../../Assets/Features/flexible.svg";
import { ReactComponent as SansFrais } from "../../Assets/Features/sansfrais.svg";
import { ReactComponent as Toujours } from "../../Assets/Features/toujours.svg";
import mobileFeaturesImage from "../../Assets/mobile_features.png";
import translation from "../../utils/i18next";

function Features() {
  const features = [
    {
      img: <Simple />,
      title: translation('features.simple.title'),
      description: translation('features.simple.description'),
      bold: translation('features.simple.bold')
    },
    {
      img: <Flexible />,
      title: translation('features.flexible.title'),
      description: translation('features.flexible.description'),
      bold: translation('features.flexible.bold')
    },
    {
      img: <SansFrais />,
      title: translation('features.sansFrais.title'),
      description: translation('features.sansFrais.description'),
      bold: translation('features.sansFrais.bold')
    },
    {
      img: <Toujours />,
      title: translation('features.toujours.title'),
      description: translation('features.toujours.description'),
      bold: translation('features.toujours.bold')
    }
  ];

  return (
    <div className="features">
      <div className="ellipse">
        <img className="mobile_image" src={mobileFeaturesImage} alt="Mobile Features" />
        <h1>
          Acheel <span className="pink-title">{translation('featuresTitle')}</span>
        </h1>
        <div className="features-container">
          {features.map((feature, index) => (
            <div className="feature-box" key={index}>
              <div className="feature-img">{feature.img}</div>
              <div className="feature-title">{feature.title}</div>
              <div className="feature-description">
                {feature.description}
                <span className="feature-bold"> {feature.bold}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;
