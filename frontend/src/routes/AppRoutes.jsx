import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../modules/Landing/LandingPage";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<LandingPage></LandingPage>}></Route>
      <Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
    </Routes>
  );
};
