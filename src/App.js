import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage';
import SignUpPage from './Pages/SignUpPage';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Navbar/>
          <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/signup" element={<SignUpPage/>} />

        </Routes>
        </Router>
    </React.Fragment>  
    );
}

export default App;
