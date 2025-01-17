import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Card from './card';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>
);

reportWebVitals();
