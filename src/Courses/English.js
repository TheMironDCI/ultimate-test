import React from "react";
import "./Dispeching.css";
import "./English.css";

function English() {
  return (
    <div className="container d-block">
      <h1 className="contact-text">Английский</h1>
      <div className="english-groupes">
        <div className="row">
          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/Pre-intermediate.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">Pre-intermediate</p>
              </div>
            </div>
          </a>
          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/IELTS band 9.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">IELTS BAND 9.0</p>
              </div>
            </div>
          </a>

          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/Elementary.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">elementary</p>
              </div>
            </div>
          </a>

          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/Advanced.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">advanced</p>
              </div>
            </div>
          </a>

          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/Intermidiante.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">Intermediate</p>
              </div>
            </div>
          </a>

          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/starter.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">starter</p>
              </div>
            </div>
          </a>

          <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-6"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/English/Kids.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">Kids</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}

export default English;
