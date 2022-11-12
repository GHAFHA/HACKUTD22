import React, {useState} from 'react';
import './App.css';
//switch is replaced with Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar.jsx';
import AboutUs from './Components/AboutUs'
import Home from './Components/home';
//dashbord and preferences are place holders for the stuff after the log in page

function App() {

  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path="/home" element={<Home />}/>
      <Route path="/aboutus" element={<AboutUs/>} /> 
    </Routes>
  </BrowserRouter>
  );
}


export default App;
