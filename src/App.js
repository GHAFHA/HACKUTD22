import React, {useState} from 'react';
import './App.css';
//switch is replaced with Routes
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './Components/dashboard';
import Preferences from './Components/preferences';
import Login from './Components/Login/login';

//dashbord and preferences are place holders for the stuff after the log in page

function App() {

  //you will need a server to act as the backend can be done using express
  //useestate for the log in functionality
  const [token, setToken] = useState();

  //if the login token does not exist we will need to create one
  if(!token){

    //call and API to set the token
    return <Login setToken = {setToken} />
  }

  return (
    <div className="Wrapper">
      <h1>Application</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/dashboard' element={<Dashboard/>}> </Route>
        <Route path='/preferences' element={<Preferences/>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
