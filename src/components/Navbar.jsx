import logo from "../assets/images/yumi-horiz-gold.png";

function Navbar() {
  return (
    <header className="navbar bg-base-100 justify-center">
      <img src={logo} alt="Yumi Sushi House Logo" className="h-12" />
    </header>
  );
}

export default Navbar;
