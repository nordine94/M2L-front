
import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/img/logo1.png";
import "./NavBar.css";

const Navbar = () => {
  const navLinks = [
    { text: "Accueil", chemin: "/" },
    { text: "Prestations", chemin: "/prestations" },
    { text: "Photos", chemin: "/photos" },
    { text: "Contact", chemin: "/contact" },
  ];

  const hamburger = useRef();
  const navMenu = useRef();

  const mobileMenu = () => {
    hamburger.current.classList.toggle("active");
    navMenu.current.classList.toggle("active");
  };

  const closeMenu = () => {
    hamburger.current.classList.remove("active");
    navMenu.current.classList.remove("active");
  };

  return (
    <nav className="navbar">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Logo Hair Prestige" />
      </NavLink>
      <ul className="nav_menu" id="menu_navbar" ref={navMenu}>
        {navLinks.map((navLink, index) => {
          return (
            <li className="nav_item" key={`link-${index}`}>
              <NavLink
                className="nav_link"
                to={`${navLink.chemin}`}
                onClick={closeMenu}
              >
                {`${navLink.text}`}
              </NavLink>
            </li>
          );
        })}
      </ul>
      <div className="hamburger" ref={hamburger} onClick={mobileMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </nav>
  );
};

export default Navbar;
