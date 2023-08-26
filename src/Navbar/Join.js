import React, { useState } from "react";
import "./Join.css";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics"; // Import getAnalytics
import { getDatabase, ref, push } from "firebase/database"; // Import methods for working with the database

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVBfcPzO5OJA0JRP47qZLBjXrFGjyRXZY",
  authDomain: "ultimate-d3a20.firebaseapp.com",
  projectId: "ultimate-d3a20",
  storageBucket: "ultimate-d3a20.appspot.com",
  messagingSenderId: "857786601233",
  appId: "1:857786601233:web:34be22b13d977a399946b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Initialize analytics
const database = getDatabase(app); // Get a reference to the database
console.log(analytics);

const Join = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Проверяем, что все поля имеют значения, отличные от 0 или пустой строки
    if (
      formData.name.trim() === '' ||
      formData.email.trim() === '' ||
      formData.phone.trim() === '' ||
      formData.course === 'Course'
    ) {
      // Одно из полей не соответствует условию, не отправляем данные
      console.error("One or more fields are empty or have invalid values.");
      return;
    }
  
    // Если все поля прошли проверку, то отправляем данные в Firebase
    push(ref(database, "submissions"), formData)
      .then(() => {
        console.log("Data successfully sent to Firebase:", formData);
      })
      .catch((error) => {
        console.error("Error sending data to Firebase:", error);
      });
  };
  
  return (
    <div className="join-container container form-container">
      <h1 className="join-text contact-text">Присоеденится</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nameInput">Имя</label>
          <input
            type="text"
            className="form-control"
            id="nameInput"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Эмаил адресс</label>
          <input
            type="email"
            className="form-control"
            id="emailInput"
            placeholder="name@example.com"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneInput">Номер телефона</label>
          <input
            type="tel"
            className="form-control"
            id="phoneInput"
            placeholder="Enter your phone number"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="courseSelect">Курсы</label>
          <select
            className="form-control"
            id="courseSelect"
            name="course"
            value={formData.course}
            onChange={handleInputChange}
          >
            <option value="Course" default>Курсы</option>
            <option value="English">Английский</option>
            <option value="Russian">Русский</option>
            <option value="Frontend">Фронтэнд</option>
            <option value="Dispaching">Логистика</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn join-submit-btn">
            Отправить
          </button>
        </div>
      </form>
    </div>
  );}

export default Join;
