const Footer = () => (
    <header className="footer">
      <div className="container">
        <div className="row">
          <div className="col-12 footer-wrapper">
          
            <div className="logo">
              <a href="/"><img src="/assets/logo.png" alt="i2c logo"/></a>
            </div>
            <nav>
              <ul className="main-nav">
                <li><a href="/">FAQs</a></li>
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Other</a></li>
                <li><button href="#contact-us" className="btn btn-primary btn-md">Contact us</button></li>
              </ul>
            </nav>
          </div>
          <div className="copyright">Copyright © 2023 i2c inc. All rights reserved.</div>
        </div>
      </div>
    </header>
  );
  
  export default Footer;