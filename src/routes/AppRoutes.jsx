import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../frontend/pages/User/Login";
import ForgotPassword from "../frontend/pages/User/ForgotPassword";
import SignUp from "../frontend/pages/User/SignUp";
import HomePage from "../frontend/pages/User/HomePage";
import NewsPage from "../frontend/pages/User/NewsPage";
import BettaQuality from "../frontend/pages/User/BettaQuality";



const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/assessment" element={<BettaQuality />} />
        
        
      </Routes>
    );
  };
  
  export default AppRoutes;