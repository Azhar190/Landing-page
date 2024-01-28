const Header = () => (
  <header className="header">
    <div className="container">
      <div className="row">
        <div className="col-12 header-wrapper">
          <div className="logo">
            <a href="/"><img src="/assets/logo.png" alt="i2c logo"/></a>
          </div>
          <nav>
            <ul className="main-nav">
              <li><a href="/">About us</a></li>
              <li><a href="/">Registration</a></li>
              <li><a href="/">Careers</a></li>
              <li><button href="#contact-us" className="btn btn-primary btn-md">Contact us</button></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </header>
);

export default Header;