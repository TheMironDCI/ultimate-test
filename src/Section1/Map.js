import React from "react";
import "./Map.css";

function Map() {
  return (
    <div className="container-fluid d-block">
      <div className="container">
      <h1 className="map-text">
        Manzil
        <i className="fa fa-location-arrow" aria-hidden="true"></i>
      </h1>
      </div>
      <div className="map-cont">
      <div className="map">
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d398.7199009568737!2d66.96170171225147!3d39.58220117524104!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d1f12ad6269b7%3A0x10d893f32e963410!2z0KPQvdC40LLQtdGA0YHQuNGC0LXRgiDQrdCy0LXRgNC10YHRgg!5e0!3m2!1sru!2s!4v1691557368468!5m2!1sru!2s"
          width="100%"
          height="450"
          style={{ border: "0" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      </div>
    </div>
  );
}

export default Map;
