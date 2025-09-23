import logo2 from './assets/icons_assets/Logo.svg';

export default function Footer() {
  return (
    <footer className="bg-dark text-light py-5">
      <div className="container">
        <div className="row">
          {/* Logo */}
          <div className="col-md-3 mb-4 mb-md-0">
            <img src={logo2} alt="Little Lemon Logo" style={{ width: '150px' }} />
          </div>

          {/* Doormat Navigation */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Navigation</h5>
            <ul className="list-unstyled">
              <li><button className="btn btn-link text-light p-0">Home</button></li>
              <li><button className="btn btn-link text-light p-0">About</button></li>
              <li><button className="btn btn-link text-light p-0">Menu</button></li>
              <li><button className="btn btn-link text-light p-0">Reservations</button></li>
              <li><button className="btn btn-link text-light p-0">Order Online</button></li>
              <li><button className="btn btn-link text-light p-0">Login</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-3 mb-4 mb-md-0">
            <h5>Contact</h5>
            <ul className="list-unstyled">
              <li>123 Citrus Lane</li>
              <li>Chicago, IL 60601</li>
              <li>(312) 555-0199</li>
              <li>hello@littlelemon.com</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-md-3">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><button className="btn btn-link text-light p-0">Instagram</button></li>
              <li><button className="btn btn-link text-light p-0">Facebook</button></li>
              <li><button className="btn btn-link text-light p-0">Twitter</button></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}