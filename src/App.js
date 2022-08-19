import React from "react";
import Navbar from "./components/Navbar";
import {BrowserRouter , Route, Routes} from "react-router-dom";
import './App.css';
import Home from './components/Pages/Home';
import AboutUs from "./components/About/AboutUs";
import Gallery from "./components/Gallery/Gallery";
import Destination from "./components/Destinations/Destination";
import Login from "./components/login/Login";
import Register from "./components/login/Register"
import Contact from "./components/contact/ContactForm";
import Footer from "./footer/Footer";



export default function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/'  element={<Home />}> </Route>
          <Route path='/about' element ={<AboutUs />} />
          <Route path='/gallery' element ={<Gallery/>} />
          <Route path='/destination' element ={<Destination/>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/Login' element={<Login/>} />
          <Route path='/Register' element={<Register/>} />
          

        
        </Routes>
        <Footer />
      
      </BrowserRouter>
    </>
   
  );
}