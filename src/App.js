import React, {useState} from 'react';
import './App.css';
//switch is replaced with Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Preferences from './Components/preferences';
import Login from './Components/Login/login';
import AboutUs from './Components/AboutUs';
import Homepage from './Components/Homepage/homepage';
import Image from './Components/Image/image';
import Navbar from './Components/Navbar/navbar';
import Loginform from './Components/Login/login';
import FAQ from "./Components/FAQ/FAQ"
//dashbord and preferences are place holders for the stuff after the log in page

function App() {

  return (
    <div className="Wrapper">
      <FAQ></FAQ>
      <AboutUs> </AboutUs>
      <BrowserRouter>
      <Navbar></Navbar>
      <Homepage></Homepage>
      <Image></Image>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}> </Route>
        <Route path='/preferences' element={<Preferences/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>

  );
}


export default App;
