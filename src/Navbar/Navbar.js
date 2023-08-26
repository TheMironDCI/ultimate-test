// Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = () => {
  return (
    <nav className="nav navbar">
      <div className="container nav-container">
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-link" width="100%" to={"/"}><p className="nav-link-in">Главная</p></Link>
        </div>
        <div className="nav-box contact-btn-box">
        <Link className="link contact-link nav-link" to={"/contact"}><p className="nav-link-in">Контакты</p></Link>
        </div>
        <div className="nav-box join-btn-box">
        <Link className="link join-link nav-link" to={"/courses"}><p className="nav-link-in">Курсы</p></Link>
        </div>
        <div className="nav-box contact-btn-box join-btn">
        <a className="link join-link nav-link" href="https://ultimate.modme.uz/entry/lead?utm_source=Website" target="_blank" rel="noopener noreferrer"><p className="nav-link-in">Присоеденится</p></a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
