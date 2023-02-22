import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './pages/Home';

import './assets/css/colors.css';
import './assets/css/font.css';
import './assets/css/main.css';
// import './assets/css/reveal.css';
import './assets/css/section.css';
import './assets/css/section1.css';
import './assets/css/section2.css';
import './assets/css/section3.css';
import './assets/css/section4.css';
import './assets/css/topbar.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
