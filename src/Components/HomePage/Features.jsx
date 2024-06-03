import React from "react";
import { ReactComponent as Simple } from "../../Assets/Features/simple.svg";
import { ReactComponent as Flexible } from "../../Assets/Features/flexible.svg";
import { ReactComponent as SansFrais } from "../../Assets/Features/sansfrais.svg";
import { ReactComponent as Toujours } from "../../Assets/Features/toujours.svg";
import mobileFeaturesImage from "../../Assets/mobile_features.png";


function Features() {
  const features = [
    {
      img: <Simple />,
      title: "Simple et rapide",
      description:
        "Souscrivez en ligne en seulement quelques clics et signez vos documents sur votre smartphone.",
      bold: "Fini la paperasse, ici c’est 100% digital."
    },
    {
      img: <Flexible />,
      title: "Flexible et claire",
      description:
        "Oubliez le bla-bla habituel des assureurs. Acheel s’adapte à vos besoins et vous offre",
      bold: "les garanties les plus claires."
    },
    {
      img: <SansFrais />,
      title: "Sans frais cachés",
      description:
        "Du début à la fin, vous savez combien vous payez. Fini les mauvaises surprises. ",
      bold: "Notre maître mot c’est la transparence !"
    },
    {
      img: <Toujours />,
      title: "Toujours à vos côtés",
      description:
        "Une équipe d’experts pour vous assister à tout moment par chat, email ou téléphone.",
      bold: "C’est quand et comme vous voulez !"
    }
  ];

  return (
    <div className="features">
      <div className="ellipse">
      <img className="mobile_image" src={mobileFeaturesImage} alt="Mobile Features" />

        <h1 >
          Acheel <span className="blue-title">c'est l'assurance...</span>
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
