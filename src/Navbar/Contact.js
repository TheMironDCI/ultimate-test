import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="contact-container container d-block">
      <h1 className="map-text">Контакты <i className="fa fa-phone" aria-hidden="true"></i></h1>
      <div className="container-contact-box ">
        <div className="contact-box phones-box">
          <div className="contact-texts">
            <p className="phone-number">
              <a href="tel:+998957799960" className="contact-links" >
              <i className="fa-solid fa-phone contact-text-icon"></i>
                +998 (95) 779 99 60
              </a>
            </p>
            <p className="phone-number">
              <a href="tel:+998958779960" className="contact-links" >
              <i className="fa-solid fa-phone contact-text-icon"></i>
                +998 (95) 877 99 60
              </a>
            </p>
          </div>
        </div>
        <div className="contact-box emails-box">
          <div className="contact-texts">
            <p className="emails">
              <a href="mailto:everestuniversity@gmail.com" className="contact-links">
                <i className="fa-solid fa-envelope contact-text-icon"></i>
                gmail.com
              </a>
            </p>
            <p className="emails">
              <a href="mailto:silicon609@gmail.com:" className="contact-links">
              <i className="fa-solid fa-envelope contact-text-icon"></i>
                info@
              </a>
            </p>
          </div>
        </div>
        <div className="contact-box s-media-box">
          <div className="contact-texts s-media-inbox">
            <p className="s-medias">
              <a className="contact-links" href="https://www.instagram.com/everestuniversity_/" target="_blank" rel="noopener noreferrer" >
              <i className="fa-brands fa-instagram contact-text-icon"></i>
                Instagram
              </a>
            </p>
            <p className="s-medias">
              <a className="contact-links" href="https://www.instagram.com/everestuniversity_/" target="_blank" rel="noopener noreferrer" >
              <i className="fa-brands fa-facebook contact-text-icon"></i>
                Facebook
              </a>
            </p>
            <p className="s-medias">
              <a className="contact-links" href="https://t.me/EverestEnglishSchool" target="_blank" rel="noopener noreferrer" >
              <i className="fa fa-location-arrow" aria-hidden="true"></i>
                Telegram 
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
