import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    
  );
}

export default App;
