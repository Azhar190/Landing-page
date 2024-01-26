import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';


function SlickCarousel () {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: false,
  };

  return (
    <Slider {...settings} className='slick-slider' style={{height:'300px'}}>
    <div className='slider-icon' >
      <img src='/assets/mslogo1.png' alt='Microsoft-icon' style={{position: 'relative', left: '65px', marginTop: '92px', bottom: '60px'}} width='100%' height='83'/>
      </div>
      <div className='slider-icon'>
        <img src='/assets/Twitter-icon.svg' alt='Twitter-icon'  style={{marginTop: '35px'}}/>
      </div>
      <div className='slider-icon'>
      <img src='/assets/cocacola1.png' alt='cocacola-icon' style={{position: 'relative', right: '60px', marginTop: '60px', bottom: '55px'}} width='100%' height='155'/>
      </div>
      <div className='slider-icon'>
      <img src='/assets/Twitter-icon.svg' alt='Twitter-icon' style={{marginTop: '35px'}}/>
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
