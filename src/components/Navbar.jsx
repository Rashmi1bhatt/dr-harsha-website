import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>Dr. Harsha</h2>

      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}
