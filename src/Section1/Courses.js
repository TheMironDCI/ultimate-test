import React from "react";
import "./Courses.css";
import { Link } from "react-router-dom";
function Courses() {
  return (
    <div className="container courses-container d-flex">
      <div className="courses-icon-box col-lg-3 col-6 col-md-4">
        <Link className="courses-icon-link" to={"/english"}>
          <p className="courses-icon-text">Английский</p>
          {/* <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div> */}
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">Больше информации <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box col-lg-3 col-6 col-md-4">
        <Link className="courses-icon-link" to={"/frontend"}>
          <p className="courses-icon-text">Фронтэнд</p>
          {/* <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div> */}
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">Больше информации <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box col-lg-3 col-6 col-md-4">
        <Link className="courses-icon-link" to={"/logistic"}>
          <p className="courses-icon-text">Логистика</p>
          {/* <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div> */}
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">Больше информации <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box col-lg-3 col-6 col-md-4">
        <Link className="courses-icon-link" to={"/russian"}>
          <p className="courses-icon-text">Русский</p>
          {/* <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div> */}
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">Больше информации <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
      <div className="courses-icon-box col-lg-3 col-6 col-md-4">
        <Link className="courses-icon-link" to={"/foundationIT"}>
          <p className="courses-icon-text">Компютерная грамматика</p>
          {/* <div className="courses-icon-in-box">
            <p className="price">Price : 000 so'm</p>
            <div className="line"></div>
            <p className="duration">* month</p>
          </div> */}
          <div className="courses-icon-in-box-line">
            <div className="line"></div>
            <p className="text">Больше информации <i className="fa-solid fa-arrow-right fa-beat"></i></p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Courses;
