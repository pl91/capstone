import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <nav className="Nav navbar navbar-expand-xl bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">HOME</Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">ABOUT</Link>
            </li>
            <li className="nav-item">
              <Link to="/menu" className="nav-link">MENU</Link>
            </li>
            <li className="nav-item">
              <Link to="/reservations" className="nav-link">RESERVATIONS</Link>
            </li>
            <li className="nav-item">
              <Link to="/order-online" className="nav-link">ORDER ONLINE</Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">LOGIN</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

