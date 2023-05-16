import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InformationPage from './pages/InformationPage';
import './App.css';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
    </div>
  );
}

export default App;
