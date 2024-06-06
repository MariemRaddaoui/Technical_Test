import React, { useRef , useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import translation from '../../utils/i18next';

const Comments = () => {
  const sliderRef = useRef(null);

  const pauseSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPause();
    }
  };

  const playSlider = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  };

  useEffect(() => {
    document.addEventListener('mouseenter', pauseSlider);
    document.addEventListener('mouseleave', playSlider);

    return () => {
      document.removeEventListener('mouseenter', pauseSlider);
      document.removeEventListener('mouseleave', playSlider);
    };
  }, []);

  const comments = [
    {
      name: translation('comments.caroline.name'),
      comment: translation('comments.caroline.comment'),
      rating: 5,
    },
    {
      name: translation('comments.thierry.name'),
      comment: translation('comments.thierry.comment'),
      rating: 5,
    },
    {
      name: translation('comments.estelle.name'),
      comment: translation('comments.estelle.comment'),
      rating: 5,
    },
    {
      name: translation('comments.lucas.name'),
      comment: translation('comments.lucas.comment'),
      rating: 5,
    },
    {
      name: translation('comments.marie.name'),
      comment: translation('comments.marie.comment'),
      rating: 5,
    },
    {
      name: translation('comments.jean.name'),
      comment: translation('comments.jean.comment'),
      rating: 5,
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 10000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    pauseOnHover: true, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 10000,
          cssEase: 'linear',
          pauseOnHover: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 0,
          speed: 10000,
          cssEase: 'linear',
          pauseOnHover: true,
        }
      }
    ]
  };

  return (
    <div className="comments">
      <div className="comments_title">
        <h1>{translation('commentsTitle')} <span className="pink-title"> {translation('commentsTitle2')} </span></h1>
      </div>
      <div className="comments-slider">
        <Slider ref={sliderRef} {...settings}>
          {comments.map((comment, index) => (
            <div
              key={index}
              className="comment-box"
              onMouseEnter={() => sliderRef.current.slickPause()}
              onMouseLeave={() => sliderRef.current.slickPlay()}
            >
              <p>{comment.comment}</p>
              <div className="commenter-info">
                <div className="commenter-name">
                  <div className="commenter-initial">{comment.name[0]}</div>
                  <div>{comment.name}
                    <div className="commenter-rating">
                      {'★'.repeat(comment.rating)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Comments;
