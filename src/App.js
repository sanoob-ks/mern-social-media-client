import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import React, { useContext } from "react";
import {BrowserRouter as Router, Routes,Route,Navigate} from 'react-router-dom'
import { AuthContext } from "./context/AuthContext"
import Messenger from "./pages/messenger/Messenger";



function App() {
  const {user}=useContext(AuthContext)
  return (
    <div className="App">
     <Router>
        <Routes>
            <Route element={user ? <Home/> : <Register/>} path='/'/>
            <Route element={user ? <Navigate to="/" replace /> :<Register/>} path='/register'/>
            <Route element={user ? <Profile/> :<Navigate to="/login" replace />} path='/profile/:username'/>
            <Route element={user ? <Navigate to="/" replace /> : <Login/>} path='/login'/>
            <Route element={user ? <Messenger/> : <Navigate to="/" replace /> } path='/messenger'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
