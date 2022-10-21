import React, {useState} from 'react';
import './App.css';
//switch is replaced with Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Preferences from './Components/preferences';
import Login from './Components/Login/login';
import AboutUs from './Components/AboutUs';
//dashbord and preferences are place holders for the stuff after the log in page

function App() {

  return (
    <div className="Wrapper">
      <AboutUs> </AboutUs>
    </div>
  );
}

export default App;
