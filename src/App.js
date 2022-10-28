import React, {useState} from 'react';
import './App.css';
//switch is replaced with Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/navbar.jsx';
import AboutUs from './Components/AboutUs'
import Dashboard from './Components/dashboard';
import Preferences from './Components/preferences'
//dashbord and preferences are place holders for the stuff after the log in page

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/aboutUs" component={AboutUs} />
      <Route path="/dashboard" component={Dashboard} />
      <Route path="/preferences" component={Preferences} />
    </Routes>
  </BrowserRouter>
  );
}


export default App;
