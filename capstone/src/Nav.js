export default function Nav() {
  return (
    <nav className="Nav navbar navbar-expand-xl bg-body-tertiary">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/home">HOME</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">ABOUT</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/menu">MENU</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/reservations">RESERVATIONS</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/order-online">ORDER ONLINE</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/login">LOGIN</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );

}

