// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './Navbar/Navbar';
import Join from './Navbar/Join';
import Everest from './Everest';
import English from './Courses/English';
import Russian from './Courses/Russian';
import Frontend from './Courses/Frontend';
import Dispeching from './Courses/Dispeching';
import CoursesPage from './Section1/CoursesPage';
import FoundationIT from './Courses/FoundationIT';
import ContactPage from './Section1/Companents/ContactPage';
import NavabarTwo from './Navbar/NavabarTwo';


import "./Navbar/Navbar.css"
const App = () => {
  return (
    <Router>
      <NavabarTwo />
      <Routes>
        <Route path='/' element={<Everest/>}/>
        <Route path='/courses' element={<CoursesPage/>}/>
        <Route path="/join" element={<Join />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/english" element={<English />} />
        <Route path="/russian" element={<Russian />} />
        <Route path="/frontend" element={<Frontend />} />
        <Route path="/logistic" element={<Dispeching />} />
        <Route path="/foundationIT" element={<FoundationIT />} />
      </Routes>
    </Router>
  );
};

export default App;
