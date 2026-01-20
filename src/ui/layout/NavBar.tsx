import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { NAV_LINKS as links } from "../layout/data/navBar.data";
import logo from "../../assets/images/global/qargo-logo.png";
import hamburgerMenu from "../../assets/images/global/hamburger_menu.svg";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Qargo Coffee logo" />
      </Link>

      {/* Botón hamburguesa */}
      <button
        className="navbar-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
      >
        <img src={hamburgerMenu} alt="icon menu" className="navbar__menu-icon" />
      </button>

      <ul className={`navbar-links ${isOpen ? "navbar-links--open" : ""}`}>
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) =>
                isActive ? "navbar-link active" : "navbar-link"
              }
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};
