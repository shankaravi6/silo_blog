import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import AdminLogin from '../pages/AdminLogin/AdminLogin';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/admin" exact element={<AdminLogin/>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
