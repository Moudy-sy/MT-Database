import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import HomePage from './HomePage'
import Products from './MyCopmonent/Pages/Products';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Products />
  </React.StrictMode>,
  document.getElementById('root')
);
