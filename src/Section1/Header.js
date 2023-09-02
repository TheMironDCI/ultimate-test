import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <div className="container header d-block text-center">
        <div className="logo">
          <Link className="link logo-img navbar" to={"/"}></Link>
        </div>
        <div className="container mt-5">
          <div className="video-cont">
            <div className="video">
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube.com/embed/76XOvyFsI2M"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
        <div className="container join-cont">
          <a
            className="link join-link"
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="header-join-btn join-btn  btn">
              <i className="fa-solid fa-arrow-right fa-beat"></i>
              Qo'shilish
              <i className="fa-sharp fa-solid fa-arrow-left fa-beat"></i>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
