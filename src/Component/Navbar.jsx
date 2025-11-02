import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";


const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav id="nav">
        {/* Logo */}
        <Link to="/" className="logo">Gagangiri Rubber Works</Link>

        {/* Hamburger & Close Icons */}
        <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✖" : "☰"}
        </div>

        {/* Navigation Menu */}
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <Link to="/" className="firstP" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" className="firstP" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/products" className="firstP" onClick={() => setMenuOpen(false)}>Products</Link>
          <Link to="/contact" className="firstP" onClick={() => setMenuOpen(false)}>Contact</Link>
          <Link to="/loginform" className="firstP" onClick={() => setMenuOpen(false)}>Admin</Link>
          <div className="firstP">
            <ThemeToggle />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
