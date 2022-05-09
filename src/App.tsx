import React from 'react';
import Home from './paginas/home/Home';
import './App.css';
import { Grid } from '@material-ui/core';
import Navbar from './components/static/navbar/Navbar';
import Footer from './components/static/footer/Footer';
import CadastroUsuario from './paginas/cadastroUsuario/CadastroUsuario';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './paginas/login/Login';
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem';
import ListaTema from './components/temas/listaTema/ListaTema';

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: '100vh' }}>
        <Routes> // Antigo Switch
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/cadastrousuario" element={<CadastroUsuario />} />
          <Route path="/posts" element={<ListaPostagem />} />
          <Route path="/temas" element={<ListaTema />} />

        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
