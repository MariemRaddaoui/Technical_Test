import React from "react";
import { ReactComponent as Compagnie } from "../../Assets/Icons/emoji_umbrella.svg";
import { ReactComponent as But } from "../../Assets/Icons/emoji_target.svg";
import { ReactComponent as Acteurs } from "../../Assets/Icons/emoji_sunglasses.svg";
import { ReactComponent as Francais } from "../../Assets/Icons/emoji_heart.svg";

function DetailsInfo() {
    const data = [
        {
            icon: <Compagnie />,
            title: "Une vraie compagnie d’assurance",
            description: "Nous sommes agréés par l’ACPR, qui a vérifié que nous avons les fonds nécessaires pour couvrir vos sinistres. Et pour la petite histoire, nous sommes seulement la troisième compagnie d’assurance à l’être depuis 35 ans #soproud."
        },
        {
            icon: <But />,
            title: "Notre but ?",
            description: "Innover, moderniser et simplifier l’assurance pour vous offrir la meilleure expérience possible au prix le plus juste. Comme vous, on pense qu’à la base l’assurance ce n’est ni très clair, ni très fun et plutôt complexe... mais ça c’était avant Acheel!"
        },
        {
            icon: <Acteurs />,
            title: "Nous sommes suivis par plein d’acteurs...",
            description: "Encore mieux que Brad Pitt ou Vincent Cassel et tout aussi glamour, nous sommes soutenus par les plus gros réassureurs du monde (Hannover Re, ...) et par l’iconique Xavier Niel, fondateur de Free (t’as tout compris) qui croît très fort en notre projet."
        },
        {
            icon: <Francais />,
            title: "Des français qui assurent",
            description: "Acheel est née en France, de la rencontre d’entrepreneurs français, experts de l’assurance et du web, qui veulent dépoussiérer le monde de l’assurance. Nos bureaux sont en France, et nous sommes ainsi proches de vous en cas de besoin."
        }
    ];

    const InfoBoxContainer = ({ data }) => (
        <div className="details-info-box-container">
            {data.map((item, index) => (
                <div key={index} className="details-info-box">
                    <div className="details-info-icon">{item.icon}</div>
                    <h3 className="details-info-title">{item.title}</h3>
                    <p className="details-info-description">{item.description}</p>
                </div>
            ))}
        </div>
    );

    return (
        <div className="details-info">
            <div className="details-info-content">
                <h1>Acheel : <span className="blue-title">c’est qui, c’est quoi ?</span></h1>
                <p className="details-description">On vous l’a dit, ici plus de bla-bla inutiles, on va à l’essentiel. Alors voilà en quatre points ce que l’on peut vous dire sur nous :</p>
                <div>
                    <InfoBoxContainer data={data} />
                </div>
            </div>
        </div>
    );
}

export default DetailsInfo;
