import './assets/sass/styles.scss';
import React from 'react';
import Header from './components/Header.js';
import Banner from './components/Banner.js';
import Support from './components/supportbox.js';
import TrustText from './components/Trusttext.js';
import SlickCarousel from './components/Slickslider.js';
import RegistrationForm from './components/form.js';



function App() {
  return (
    <>
      <Header/>
      <Banner/>
      <Support/>
      <TrustText/>
      <SlickCarousel/>
      <RegistrationForm />
  </>
   );
}

export default App;
