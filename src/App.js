import React from 'react';
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';

function App() {
  return (
    <div className="App">
      <BrowserRouter>

        <Header />
      </BrowserRouter>
    </div>
  );
}

export default App;
