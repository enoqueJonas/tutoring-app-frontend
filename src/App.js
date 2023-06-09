import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import UserRegistration from './pages/UserRegistration';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/users/new" element={<UserRegistration />} />
    </Routes>
  );
}

export default App;
