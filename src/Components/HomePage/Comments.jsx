import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import translation from '../../utils/i18next';
const Comments = () => {
  const comments = [
    {
      name: translation('comments[0].name'),
      comment: translation('comments[0].comment'),
      rating: 5,
    },
    {
      name: translation('comments[1].name'),
      comment: translation('comments[1].comment'),
      rating: 5,
    },
    {
      name: translation('comments[2].name'),
      comment: translation('comments[2].comment'),
      rating: 5,
    },
    {
      name: translation('comments[3].name'),
      comment: translation('comments[3].comment'),
      rating: 5,
    },
    {
      name: translation('comments[4].name'),
      comment: translation('comments[4].comment'),
      rating: 5,
    },
    {
      name: translation('comments[5].name'),
      comment: translation('comments[5].comment'),
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
        <h1>{translation('commentsTitle')} <span className="pink-title"> {translation('commentsTitle')} </span></h1>
      </div>
      
    </div>
  );
}

export default Comments;
