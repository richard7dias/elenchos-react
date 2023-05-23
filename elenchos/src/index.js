import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './rotes/Home';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import MesAtual from './rotes/MesAtual';
import Reembolso from './rotes/Reembolso';
import Relatorios from './rotes/Relatorios';
import FluxoDeCaixa from './rotes/FluxoDeCaixa';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  }

  li {
    list-style: none;
  }

  ul {
    margin: 0;
  }

  th {
    background-color: #387876;
    color: white;
  }


`

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/mes-atual' element={<MesAtual />} />
        <Route path='/reembolso' element={<Reembolso />} />
        <Route path='/relatorios' element={<Relatorios />} />
        <Route path='/fluxo-de-caixa' element={<FluxoDeCaixa />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
