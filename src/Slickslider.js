import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function SlickCarousel () {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Slider {...settings} className='slick-slider'>
              <div className='slider-icon'>
      <img src='/assets/mslogo.png' alt='Microsoft-icon' style={{position: 'relative', left: '68px', bottom: '100px', marginTop: '30px'}} width='280' height='310'/>
      </div>
      <div className='slider-icon'>
        <img src='/assets/Twitter-icon.svg' alt='Twitter-icon'/>
      </div>
      <div className='slider-icon'>
      <img src='/assets/cocacola.png' alt='cocacola-icon' style={{position: 'relative', right: '60px', bottom: '100px'}} width='330' height='370'/>
      </div>
      <div className='slider-icon'>
      <img src='/assets/Twitter-icon.svg' alt='Twitter-icon'/>
      </div>
    </Slider>
  );
}

const NextArrow = (props) => (
    <div className="slick-arrow slick-next" onClick={props.onClick}>
      <img className='next-arrow' src='/assets/nextarrow.png' width="25" height="25"/>
    </div>
  );
  const PrevArrow = (props) => (
    <div className="slick-arrow slick-prev" onClick={props.onClick}>
      <img className='prev-arrow' src='/assets/prevarrow.png' width="25" height="25"/>
    </div>
  );
  

export default SlickCarousel;
