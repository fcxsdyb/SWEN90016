import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RecipientPage from './pages/RecipientInforPage';
import RecipientRequirePage from './pages/RecipientRequirePage';
import RecipientDocPage from './pages/RecipientDocPage';
import RecipientChildPage from './pages/RecipientChildPage';
import DonorInforPage from './pages/DonorInforPage';
import DonorDocPage from './pages/DonorDocPage';
import DonorDonationPage from './pages/DonorDonationPage';
import AidCategoryPage from './pages/AidCategoryPage';
import AidKitPage from './pages/AidKitPage';
import AidItemPage from './pages/AidItemPage';


function App() {
  return (
    <div className="App" style={{ textAlign: 'center' }}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/recipient/information" element={<RecipientPage />} />
        <Route path="/recipient/requisitions" element={<RecipientRequirePage />} />
        <Route path="/recipient/documents" element={<RecipientDocPage />} />
        <Route path="/recipient/children" element={<RecipientChildPage />} />
        <Route path="/donor/information" element={<DonorInforPage />} />
        <Route path="/donor/documents" element={<DonorDocPage />} />
        <Route path="/donor/donations" element={<DonorDonationPage />} />
        <Route path="/aid/kits" element={<AidKitPage />} />
        <Route path="/aid/category" element={<AidCategoryPage />} />
        <Route path="/aid/items" element={<AidItemPage />} />
      </Routes>
    </div>
  );
}

export default App;
