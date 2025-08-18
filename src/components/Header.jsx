import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <a href="/" className="logo">
        NAF
      </a>

      {/* Tombol menu */}
      <i
        className="bx bx-menu"
        id="menu-icon"
        onClick={() => setIsOpen(!isOpen)}
      ></i>

      {/* Navbar */}
      <nav className={`navbar ${isOpen ? "active" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>
          Home
        </Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>
          About Me
        </Link>
        <Link to="/word" onClick={() => setIsOpen(false)}>
          Word Of The Day
        </Link>
      </nav>
    </header>
  );
}
