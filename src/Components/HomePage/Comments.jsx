import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Comments = () => {
    const comments = [
        {
          name: "CHRISTOPHE",
          comment: "La folie !!! 5 minutes pour économiser 30€ par mois j’ai pas trouvé mieux! Tout est modulable et bien expliqué. Je recommande !",
          rating: 5,
        },
        {
          name: "BÉRENGÈRE",
          comment: "J’ai souscrit à une mutuelle pour mon chien adoré et j’en suis vraiment ravie ! L’inscription est beaucoup plus simple que pour les autres mutuelles et les prix sont vraiment très compétitifs.",
          rating: 5,
        },
        {
          name: "JU",
          comment: "Je cherchais une assurance habitation pour moi et mon colocataire, et j’ai trouvé cette assurance qui avait un rapport qualité–prix excellent. J’avais auparavant une assurance habitation chez un autre assureur qui me coûtait 2…",
          rating: 5,
        },
        {
          name: "ISABELLE",
          comment: "Inscription en ligne simple et rapide. Grande réactivité et efficacité d’Aymeric pour répondre à mes questions pour compléter les informations d’identification de mon chien.",
          rating: 5,
        },
        {
          name: "ELISABETH",
          comment: "Très bonne 1ère expérience avec Acheel, simple, efficace et rapide. 2 contrats : habitation et santé, pas de paperasse ils s’occupent de la résiliation de mes anciennes assurances.",
          rating: 5,
        },
        {
          name: "CAROLINE",
          comment: "Super assurance avec un grand choix de personnalisation et beaucoup de transparence !",
          rating: 5,
        },
      ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className="comments">
      <div className="comments_title">
        <h1>On ne va pas vous dire qu’on est les meilleurs, <span className="blue-title">mais eux oui.</span></h1>
      </div>
     
    </div>
  );
}

export default Comments;
