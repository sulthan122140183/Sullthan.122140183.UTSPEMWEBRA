
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import BookingPage from '../pages/BookingPage'; 
import GazeboPage from '../pages/GazeboPage';  

const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/booking-kamar" element={<BookingPage />} />
    <Route path="/reservasi-gazebo" element={<GazeboPage />} />
  </Routes>
);

export default AppRoutes;