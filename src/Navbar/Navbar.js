// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Функция для открытия и закрытия меню
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`nav navbar ${isMenuOpen ? "menu-open" : ""}`}>
      <div className="container nav-container">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className={`nav-menu container d-flex justify-content-around ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <button
            type="button"
            class="btn-close navbar-toggler nav-toggle-two"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={toggleMenu}
          ></button>
          <Link className="link nav-box join-btn-box " to={"/"}>
            <div className=" join-link nav-link">
              <p className="nav-link-in">Asosiy</p>
            </div>
          </Link>
          <Link className="link nav-box join-btn-box " to={"/contact"}>
            <div className=" join-link nav-link">
              <p className="nav-link-in">Kontaktlar</p>
            </div>
          </Link>
          <Link className="link nav-box join-btn-box " to={"/courses"}>
            <div className=" join-link nav-link">
              <p className="nav-link-in">Kurslar</p>
            </div>
          </Link>
          <div className="nav-box contact-btn-box join-btn">
            <a
              className="link join-link nav-link"
              href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="nav-link-in">Qo'shilish</p>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
