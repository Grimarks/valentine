import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ValentinePage from './ValentinePage';
import './App.css';

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/valentine" element={<ValentinePage />} />
      </Routes>
  );
}

export default App;
