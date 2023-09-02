import React from 'react';
import Header from './Section1/Header'
import Map from './Section1/Map';
import Contact from './Navbar/Contact';
import Footer from './Footer/Footer';
// import CoursesPageHome from './Section1/CoursesPageHome';
import EnglishLessons from './Courses/EnglishLessons';

export default function Everest() {
  return (
    <>
    <Header/>
    <EnglishLessons/>
    <Map/>
    <Contact/>
    <Footer/>
    </>
  )
} 



