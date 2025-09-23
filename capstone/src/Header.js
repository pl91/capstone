import Nav from "./Nav";
import logo from "./assets/icons_assets/Logo.svg";

export default function Header() {
  return (
    <header className="Header">
      <img src={logo} alt="Little Lemon Logo" />
      <Nav />
    </header>
  );
}
