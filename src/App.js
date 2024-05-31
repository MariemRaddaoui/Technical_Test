import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/HomePage';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <React.Fragment>
      <Router>
          <Navbar/>
          <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        </Router>
    </React.Fragment>  
    );
}

export default App;
