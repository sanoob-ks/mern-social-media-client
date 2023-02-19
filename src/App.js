import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import React from "react";
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'


function App() {
  return (
    <div className="App">
     <Router>
        <Routes>
            <Route element={<Home/>} path='/'/>
            <Route element={<Register/>} path='/register'/>
            <Route element={<Login/>} path='/login'/>
            <Route element={<Profile/>} path='/profile/:username'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
