import React from "react";
import { ReactComponent as Man} from "../../Assets/Icons/man_with_tablet.svg";
import { ReactComponent as Woman } from "../../Assets/Icons/woman_with_computer.svg";

function Aide() {
    const data = [
        {
            icon: <Man />,
            title: "Questions fréquentes",
            description: "Trouvez la réponse à votre question dans notre FAQ..",
            button: "Consulter la FAQ"
        },
        {
            icon: <Woman />,
            title: "Parlez à un conseiller",
            description: "Vous pouvez poser toutes vos questions ici.",
            button: "Poser une question"
        },
        
    ];

    const AideContainer = ({ data }) => (
        <div className="aide-box-container">
            {data.map((item, index) => (
                <div key={index} className="aide-box">
                    <div className="aide-icon">{item.icon}</div>
                    <h3 className="aide-title">{item.title}</h3>
                    <p className="aide-description">{item.description}</p>
                    <button className="aide-button">{item.button}</button>

                </div>
            ))}
        </div>
    );

    return (
        <div className="aide">
            <div className="aide-content">
                <h1> <span className="blue-title">Besoin d’aide ? </span>On est là !</h1>
                <p className="aide-description">Trouvez la réponse à votre question dans notre FAQ ou échangez avec notre équipe d’experts.

</p>
                <div>
                    <AideContainer data={data} />
                </div>
            </div>
        </div>
    );
}

export default Aide;
