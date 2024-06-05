import React from "react";
import Logo from "./Logo";
import { NavLink, Link } from "react-router-dom";

function Header() {
  return (
    <div className="nav-container">
      <nav>
        <NavLink to="/">
          <Logo />
        </NavLink>
        <ul>
          <li>
            <NavLink
              to="/work"
              className={({ isActive }) => `${isActive ? "text-orange" : "text-white"}`}
            >
              work
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => `${isActive ? "text-orange" : "text-white"}`}
            >
              about
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blog"
              className={({ isActive }) => `${isActive ? "text-orange" : "text-white"}`}
            >
              blog
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) => `${isActive ? "text-orange" : "text-white"}`}
            >
              contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
