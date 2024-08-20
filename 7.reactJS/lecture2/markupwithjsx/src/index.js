import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { image } from './App';

import TodoList from './error1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <TodoList/>
    <img src={image} />
  </React.StrictMode>
);


