import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from '../pages/LandingPage/LandingPage';
import AdminLogin from '../pages/AdminPage/AdminLogin';
import AdminPage from '../pages/AdminPage/AdminPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<LandingPage/>} />
        <Route path="/admin" exact element={<AdminLogin/>} />
        <Route path="/admin/*" exact element={<AdminPage/>} />    
      </Routes>
    </Router>
  );
};

export default AppRoutes;
