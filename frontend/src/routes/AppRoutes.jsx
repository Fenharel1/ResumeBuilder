// src/AppRoutes.js

import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../modules/Landing/LandingPage";
import Login from "../modules/Auth/Login";
import Register from "../modules/Auth/Register";
import CVForm from "../modules/ResumeBuild/CvForm";
import { Navbar } from "../modules/Landing/components/Navbar";

export const AppRoutes = () => {
  return (
    <div>
      <div>
        <Navbar/>
      </div>
      <Routes>
      <Route path="/home" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/cv" element={<CVForm />} />
      <Route path="/*" element={<Navigate to="/home" />} />
    </Routes>
    </div>
   
  );
};
