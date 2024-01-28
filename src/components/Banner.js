const Banner = () => (
  <section className="banner">
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-6 p-0">
          <div className='vector-container'>
            <h1>Lorem ipsum <span className="Vector-text"> <span style={{ color: '#46B0E6' }}>dolor</span>
                <svg className="vector-image" xmlns="/assets/vector.svg" width="126" height="11" viewBox="0 0 126 11"
                  fill="none"><path d="M2.04198 8.50584C24.8536 4.70635 81.1524 -1.34187 123.855 4.86114" stroke="#F89D21" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                </span> sit <br/> <span className='inner-text'>amet yo 👋
              </span>
            </h1>
          </div>

          <div className='custom-box'>
            <div className='custom-text'>
              <img className='box-image' src="/assets/aside1.png" alt="resource-image" />
              <div className='content-wrap'>
                <h2>Andrew Schultz</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
              </div>
            </div>
          </div>

          <div className='custom-box'>
            <div className='custom-text'>
              <img className='box-image' src="/assets/aside2.png" alt="resource-image" />
              <div className='content-wrap'>
                <h2>Andrew Schultz</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
              </div>
            </div>
          </div>

          <div className='custom-box'>
            <div className='custom-text'>
              <img className='box-image' src="/assets/aside3.png" alt="resource-image" />
              <div className='content-wrap'>
                <h2>Andrew Schultz</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae, in tristique senectus dui pharetra sit.</p>
              </div>
            </div>
          </div>

          <div className='empty-box'></div>
        </div>
        <div className="col-12 col-sm-6">
          <div className='main-container'>
            <div className='container-wrapper'>
              <img className='top-image img-fluid' src="/assets/image2.png" alt="Investment" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Banner;


