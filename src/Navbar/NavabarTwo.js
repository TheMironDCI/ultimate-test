import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function NavabarTwo() {
  return (
    <div className="container nav-container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto d-flex justify-content-around">
            <li className="nav-item active">
              <Link className="nav-link link join-link nav-link" to="#">
                Главная <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link link join-link nav-link" to="#">
                Контакты
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link link join-link nav-link dropdown-toggle d-flex align-items-center"
                to="#"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Курсы
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="#">
                  Action
                </Link>
                <Link className="dropdown-item" to="#">
                  Another action
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="#">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
          <a className="nav-link link join-link nav-link" href="https://ultimate.modme.uz/entry/lead?utm_source=Website" target="_blank" rel="noopener noreferrer"><p className="nav-link-in">Присоеденится</p></a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default NavabarTwo;
