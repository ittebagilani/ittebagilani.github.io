import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ReactDOM } from 'react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
)


// ReactDOM.createRoot((
//   <BrowserRouter>
//     <App /> 
//   </BrowserRouter>
//   ), document.getElementById('root')
// );