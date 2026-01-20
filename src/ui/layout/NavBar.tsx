import { Link, NavLink } from "react-router-dom";

import {NAV_LINKS as links} from "../layout/data/NavBar.data";

import logo from "../../assets/images/global/qargo-logo.png";

export const NavBar = () => {

  return (
    <nav className="navbar">

      <Link to="/" className="navbar-logo">
        <img src={logo} alt="Qargo Coffee logo" />
      </Link>

      <ul className="navbar-links">
        {links.map((link) => (
          <li key={link.to}>
            <NavLink
              to={link.to}
              className={({ isActive }) => isActive ? "navbar-link active" : "navbar-link"}
            >
              {link.label}
            </NavLink>
          </li>
        ))}
      </ul>

    </nav>
  )
}
