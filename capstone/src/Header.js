import Nav from "./Nav";
import logo from "./assets/icons_assets/Logo.svg";

export default function Header() {
  return (
    <header className="Header px-5 py-4">
      <div className="container d-flex flex-wrap justify-content-around justify-content-lg-between">
        <img className="logo" src={logo} alt="Little Lemon Logo" />
        <Nav />
      </div>
    </header>
  );
}
