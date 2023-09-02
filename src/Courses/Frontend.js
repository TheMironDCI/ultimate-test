import React from 'react'
import "./Dispeching.css"
import "./Frontend.css"

function Frontend() {
  return (
    <div className='container d-block'>
     <h1 className='contact-text'>Frontend</h1>
     <div className='lesson-groupes'>
        <div className='row'>
        <a
            href="https://ultimate.modme.uz/entry/lead?utm_source=Website"
            target="_blank"
            rel="noopener noreferrer"
            className="lesson-link col-lg-3 col-md-4 col-12"
          >
            <div className="english-group">
              <div className="course-image">
                <img
                  className="image-course"
                  src={require("../img/IT/Frontend.png")}
                  alt="english course"
                />
              </div>
              <div className="course-info">
                <p className="course-text">Frontend</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
   
  )
}

export default Frontend