import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import AdminLogin from '../pages/AdminPage/AdminLogin';
import AdminPage from '../pages/AdminPage/AdminPage';
import ProtectRoute from '../pages/AdminPage/ProtectRoute';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route element={<ProtectRoute />}>
          <Route path="/admin/*" element={<AdminPage />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
