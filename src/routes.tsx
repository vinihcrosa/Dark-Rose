import React from 'react';
import {
  Routes,
  Route
} from 'react-router-dom';

import Landing from './pages/landing';
import Login from './pages/login';

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/Login" element={<Login />} />
    </Routes>
  )
}