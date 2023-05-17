import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import InformationPage from './pages/InformationPage';


function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/information" element={<InformationPage />} />
      </Routes>
    </div>
  );
}

export default App;
