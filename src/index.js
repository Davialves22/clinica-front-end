import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import RoutesComponent from './routes/routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RoutesComponent />
  </>,
);