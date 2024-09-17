import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homePage'; // Assuming HomePage is in a pages folder
import AddAccount from './pages/AddAccount'; // Import AddAccount page
import ManageAccount from './pages/manageAccount';
import ExternalRedirect from './pages/externalredirect';
import Profiles from './pages/profile';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/add-account" element={<AddAccount />} />
        <Route path="/manage-account" element={<ManageAccount />} />
        <Route path="/profiles" element={<Profiles />} />
         
         
      </Routes>
    </Router>
  );
}

export default App;
