import logo from './logo.svg';
import './index.scss';
import React from 'react';
import SlickCarousel from './Slickslider.js';
import RegistrationForm from './form.js';


function App() {
  return (
    <>
<body>

<div className="header">
<div className="logo">
  <a href='/'><img src="/assets/logo.png" alt="logo-image"/></a>
  </div>
<nav>
  <ul className='ul-list'>
  <li><a href='/'>About us</a></li>
  <li><a href='/'>Registration</a></li>
  <li><a href='/'>Careers</a></li>
  <li><span className="contact-button"><a style={{ color: 'white' }} href="/">Contact us</a></span></li>
  </ul>
  </nav>
</div>


<div className='main-container'>
      <div className='container-wrapper'>
        <img className='top-image' src="/assets/image1.png" alt="Investment-Image" />
        <div className='overlay'>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
          <div className='circle'></div>
        </div>
      </div>
    </div>



  <div className='vector-container'>
 <h1>Lorem ipsum <span className=" Vector-text"> <span style={{ color: '#46B0E6' }}>dolor</span> <svg className="vector-image" xmlns="/assets/vector.svg" width="126" height="11" viewBox="0 0 126 11" 
 fill="none"><path d="M2.04198 8.50584C24.8536 4.70635 81.1524 -1.34187 123.855 4.86114" stroke="#F89D21" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
 </svg></span> sit <br/> <span className='inner-text'>amet yo 👋</span>
</h1>
</div>

<div className='custom-box'>
<div className='custom-text'>
<img className='box-image' src="/assets/aside1.png" />
<div className='content-wrap'>
<div className='box-content' style={{color: 'black'}}>Andrew Schultz</div>
<div className='box-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</div>
</div></div></div>

<div className='custom-box' style={{position: 'relative', bottom: '8px'}}>
<div className='custom-text'>
<img className='box-image' src="/assets/aside2.png" />
<div className='content-wrap'>
<div className='box-content' style={{color: 'black'}}>Andrew Schultz</div>
<div className='box-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</div>
</div></div></div>

<div className='custom-box' style={{position: 'relative', bottom: '16px'}}>
<div className='custom-text'>
<img className='box-image' src="/assets/aside3.png" />
<div className='content-wrap'>
<div className='box-content' style={{color: 'black'}}>Andrew Schultz</div>
<div className='box-content'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</div>
</div></div></div>

<div className='empty-box' style={{position: 'relative', bottom: '23px'}}></div>





<div className="outer-container">
  <div className="inner-container">
    <div className="image-container">
      <div className="gradient-overlay"></div>
      <img src="/assets/icon1.png" alt="Placeholder" />
    </div>
    <div className="text-container">
      <div className="title">24/7 Support</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  </div>

  <div className="inner-container">
    <div className="image-container">
      <div className="gradient-overlay"></div>
      <img src="/assets/icon2.png" alt="Placeholder" />
    </div>
    <div className="text-container">
      <div className="title">1000+ of reviews</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  </div>

  <div className="inner-container">
    <div className="image-container">
      <div className="gradient-overlay"></div>
      <img src="/assets/icon3.png" alt="Placeholder" />
    </div>
    <div className="text-container">
      <div className="title">And more!</div>
      <div className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </div>
    </div>
  </div>
</div>

<div className="site-container">
    <div className="title-container">
      <div className="site-title">Trusted by</div>
      <div className="imagee-container">
  <img src="/assets/vector2.svg" alt="Vector image"/>
</div>
    </div>
    <div className="site-description">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.
    </div>
  

  <div className="slider-section">
      <SlickCarousel />
    </div>
    </div>


    <div className="last-container" style={{display: 'flex'}}>
      <div className="img-container">
        <img
          className="main-image" src="/assets/image2.png" alt="Image"/>
        <div className="overlay">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>  
    

      <div className="app">
      <RegistrationForm />
    </div>
    </div>
</body>

  </>
   );
}

export default App;
