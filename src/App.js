import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import React, { useContext } from "react";
import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
import { AuthContext } from "./context/AuthContext"



function App() {
  const {user}=useContext(AuthContext)
  return (
    <div className="App">
     <Router>
        <Routes>
            <Route element={user ? <Home/> : <Register/>} path='/'/>
            <Route element={user ? <Navigate to="/" replace /> :<Register/>} path='/register'/>
            <Route element={user ?<Navigate to="/" replace /> : <Login/>} path='/login'/>
            <Route element={<Profile/>} path='/profile/:username'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
