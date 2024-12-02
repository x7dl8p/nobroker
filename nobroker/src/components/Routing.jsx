import React from 'react';
import { Route, Routes } from 'react-router-dom';
import LoginPage from './LoginPage';
import SignUpPage from './SignUpPage';
import PostPropertyPage from './PostPropertyPage';
import RentPage from './RentPage';
import Home from './Home';

function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
      <Route path="/post-property" element={<PostPropertyPage />} />
      <Route path="/rent" element={<RentPage />} />
    </Routes>
  );
}

export default Routing;