import React from "react";
import {ReactComponent as TF1} from "../../Assets/Talk_about_us/tf1.svg"
import {ReactComponent as BSmart} from "../../Assets/Talk_about_us/b_smart.svg"
import {ReactComponent as BMF} from "../../Assets/Talk_about_us/bfm_business.svg"
import {ReactComponent as Europe} from "../../Assets/Talk_about_us/europe_1.svg"
import {ReactComponent as Forbes} from "../../Assets/Talk_about_us/forbes.svg"
import {ReactComponent as Largus} from "../../Assets/Talk_about_us/largus_de_lassurance.svg"
import {ReactComponent as Lci} from "../../Assets/Talk_about_us/lci.svg"
import {ReactComponent as Figaro} from "../../Assets/Talk_about_us/le_figaro.svg"
import {ReactComponent as Parisien} from "../../Assets/Talk_about_us/le_parisien.svg"
import {ReactComponent as Echos} from "../../Assets/Talk_about_us/les_echos.svg"

function JournalLogos() {
    const logos = [
        <TF1 />,
        <Lci />,
        <Figaro />,
        <Parisien />,
        <Echos />,
        <BMF />,
        <Europe />,
        <Largus />,
        <Forbes />,
        <BSmart />
    ];

    return (
        <div className="journal-logos">
            {logos.map((logo, index) => (
                <div className="journal-logo" key={index}>
                    {logo}
                </div>
            ))}
        </div>
    );
}

export default JournalLogos;
