import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

function SlickCarousel() {
  const settings = {
    dots: false,
    infinite: true,
    variableWidth: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth: false,
          centerPadding: '0',
        },
      },
    ],
  };

  return (
    <div className="slide-container">
      <Slider {...settings} className='slick-slider'>
        <div className='slider-icon'>
          <img src='/assets/microsofticon.png' alt='Microsoft-icon'/>
        </div>
        <div className='slider-icon'>
          <img src='/assets/Twitter-icon.svg' alt='Twitter-icon'/>
        </div>
        <div className='slider-icon'>
          <img src='/assets/cokeicon.png' alt='cocacola-icon'/>
        </div>
        <div className='slider-icon'>
          <img src='/assets/Twitter-icon.svg' alt='Twitter-icon'/>
        </div>
      </Slider>
    </div>
  );
}

const NextArrow = (props) => (
  <div className="slick-arrow slick-next" onClick={props.onClick}>
    <img className='slick-arrow slick-next' src='/assets/nextarrow.png' width="25" height="25"/>
  </div>
);

const PrevArrow = (props) => (
  <div className="slick-arrow slick-prev" onClick={props.onClick}>
    <img className='slick-arrow slick-prev' src='/assets/prevarrow.png' width="25" height="25"/>
  </div>
);

export default SlickCarousel;
