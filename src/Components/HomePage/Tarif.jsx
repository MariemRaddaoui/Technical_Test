import React from "react";
import { ReactComponent as Habitation } from "../../Assets/Insurance_types/habitation.svg";
import { ReactComponent as Auto } from "../../Assets/Insurance_types/auto.svg";
import { ReactComponent as ChienChat } from "../../Assets/Insurance_types/chien_chat.svg";
import { ReactComponent as Alarme } from "../../Assets/Insurance_types/alarme.svg";
import { ReactComponent as Emprunteur } from "../../Assets/Insurance_types/emprunteur.svg";
import { ReactComponent as Proprietaire } from "../../Assets/Insurance_types/proprietaire.svg";
import { ReactComponent as Sante } from "../../Assets/Insurance_types/sante.svg";
import JournalLogos from "./JounalLogos";
import translation from "../../utils/i18next";

function Tarif() {
    const data = [
        { title: translation('insuranceTypes.habitation'), component: <Habitation />, description: "" },
        { title: translation('insuranceTypes.auto'), component: <Auto />, description: "" },
        { title: translation('insuranceTypes.sante'), component: <Sante />, description: "" },
        { title: translation('insuranceTypes.chienChat'), component: <ChienChat />, description: "" },
        { title: translation('insuranceTypes.proprietaire'), component: <Proprietaire />, description: translation('insuranceTypes.nonOccupant') },
        { title: translation('insuranceTypes.emprunteur'), component: <Emprunteur />, description: "" },
        { title: translation('insuranceTypes.alarme'), component: <Alarme />, description: "" }
    ];

    const BoxComponent = ({ title, component, description }) => (
        <div className="box">
            {title === translation('insuranceTypes.emprunteur') && <div className="nouveau-label">{translation('insuranceTypes.newLabel')}</div>}
            <div className="box_img">{component}</div>
            <div className="type_title">{title}</div>
            {description && <div className="type_description">{description}</div>}
        </div>
    );

    const BoxContainer = ({ data }) => (
        <div className="box-container">
            {data.map((item, index) => (
                <BoxComponent
                    key={index}
                    title={item.title}
                    component={item.component}
                    description={item.description}
                />
            ))}
        </div>
    );

    return (
        <div className="tarif">
            <div className="tarif-content">
                <h1>{translation('tarifTitle')} <span className="blue-title">{translation('tarifTitle2')}</span></h1>
                <p>{translation('tarifSubtitle')}</p>
                <h3>{translation('tarifRates')}</h3>
                <div>
                    <BoxContainer data={data} />
                </div>
                <div className="commentaire">{translation('tarifComment')} <span className="wink_emoji">😉</span></div>
                <div className="journals">
                    <div className="description">{translation('tarifPress')}</div>
                    <JournalLogos />
                </div>
            </div>
        </div>
    );
}

export default Tarif;
