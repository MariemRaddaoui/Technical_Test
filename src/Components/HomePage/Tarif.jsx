import React from "react";
import { ReactComponent as Habitation } from "../../Assets/Insurance_types/habitation.svg";
import { ReactComponent as Auto } from "../../Assets/Insurance_types/auto.svg";
import { ReactComponent as ChienChat } from "../../Assets/Insurance_types/chien_chat.svg";
import { ReactComponent as Alarme } from "../../Assets/Insurance_types/alarme.svg";
import { ReactComponent as Emprunteur } from "../../Assets/Insurance_types/emprunteur.svg";
import { ReactComponent as Proprietaire } from "../../Assets/Insurance_types/proprietaire.svg";
import { ReactComponent as Sante } from "../../Assets/Insurance_types/sante.svg";
import JournalLogos from "./JounalLogos";

function Tarif() {
    const data = [
        { title: "Habitation", component: <Habitation />, description: "" },
        { title: "Auto", component: <Auto />, description: "" },
        { title: "Santé", component: <Sante />, description: "" },
        { title: "Chien - Chat", component: <ChienChat />, description: "" },
        { title: "Propriétaire", component: <Proprietaire />, description: "Non occupant" },
        { title: "Emprunteur", component: <Emprunteur />, description: "" },
        { title: "Alarme et Télésurveillance", component: <Alarme />, description: "" }
    ];

    const BoxComponent = ({ title, component, description }) => (
        <div className="box">
            {title === "Emprunteur" && <div className="nouveau-label">NOUVEAU</div>}
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
                <h1>L'assurance <span className="blue-title">simple et accessible</span></h1>
                <p>Vous trouvez le monde de l’assurance complexe et frustrant ? Nous aussi. Découvrez Acheel, la nouvelle assurance qui vous ressemble.</p>
                <h3>Consultez nos tarifs</h3>
                <div>
                    <BoxContainer data={data} />
                </div>
                <div className="commentaire">Déjà assuré(e) ? No Stress! On s’occupe de résilier votre ancien contrat. <span className="wink_emoji">😉</span></div>
                <div className="journals">
                    <div className="description">Ils parlent de nous</div>
                    <JournalLogos />
                </div>
            </div>
        </div>
    );
}

export default Tarif;
