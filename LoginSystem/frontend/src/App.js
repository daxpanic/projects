import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Login/login.jsx';
import Register from './Components/Register/register.jsx';
import ForgotPassword from './Components/ForgotPassword/forgotpassword.jsx';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;