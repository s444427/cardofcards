// General React imports
import React from 'react';
import ReactDOM from 'react-dom/client';

// Project files
import App from './App';

// CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
import './CSS/index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);