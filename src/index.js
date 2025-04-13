import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import GlobalStyles from './styles/GlobalStyles';
import { ToastContainer } from 'react-toastify';
import RoutesComponent from './routes/routes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <RoutesComponent />
    <ToastContainer autoClose={2000} theme='colored' />
    <GlobalStyles />
  </>,
);