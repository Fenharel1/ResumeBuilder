import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../modules/Landing/LandingPage";
import { Layout } from "../modules/Build/components/Layout";
import { IntroductionPage } from "../modules/Build/pages/IntroductionPage";
import { TemplateSelector } from "../modules/Build/pages/TemplateSelector";
import { ResumeBuilder } from "../modules/Build/pages/ResumeBuilder";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/build" element={<Layout></Layout>}>
        <Route path="introduction" element={<IntroductionPage />}></Route>
        <Route
          path="templates"
          element={<TemplateSelector></TemplateSelector>}
        ></Route>
        <Route path="builder" element={<ResumeBuilder></ResumeBuilder>}></Route>
        <Route
          path=""
          element={<Navigate to="/build/introduction"></Navigate>}
        ></Route>
      </Route>
      <Route path="/home" element={<LandingPage></LandingPage>}></Route>
      <Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
    </Routes>
  );
};
