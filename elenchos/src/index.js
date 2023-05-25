import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './rotes/Home';
import Orcamento from './rotes/Orcamento';
import Lancamentos from './rotes/Lancamentos';
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
        <Route path='/orcamento' element={<Orcamento />} />
        <Route path='/lancamentos' element={<Lancamentos />} />
        <Route path='/relatorios' element={<Relatorios />} />
        <Route path='/fluxo-de-caixa' element={<FluxoDeCaixa />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();