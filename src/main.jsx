import React from 'react'
import ReactDOM from 'react-dom/client'
// import { ReactDOM } from 'react';
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom';
import TagManager from 'react-gtm-module';


const tagManagerArgs = {
    gtmId: 'GTM-NNNQ6PW4'
}

TagManager.initialize(tagManagerArgs)

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
    
  </BrowserRouter>,
)

// <!-- Google tag (gtag.js) -->
// <script async src="https://www.googletagmanager.com/gtag/js?id=G-DWHN2KCD93"></script>
// <script>
//   window.dataLayer = window.dataLayer || [];
//   function gtag(){dataLayer.push(arguments);}
//   gtag('js', new Date());

//   gtag('config', 'G-DWHN2KCD93');
// </script>
// ReactDOM.createRoot((
//   <BrowserRouter>
//     <App /> 
//   </BrowserRouter>
//   ), document.getElementById('root')
// );