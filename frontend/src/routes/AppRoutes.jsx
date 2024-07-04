import { Navigate, Route, Routes } from "react-router-dom";
import { LandingPage } from "../modules/Landing/LandingPage";
import { Layout } from "../modules/Build/components/stracture/Layout";
import { IntroductionPage } from "../modules/Build/pages/IntroductionPage";
import { TemplateSelector } from "../modules/Build/pages/TemplateSelector";
import { ResumeBuilder } from "../modules/Build/components/user/ResumeBuilder";
import Register from "../modules/Build/components/user/Register";
import Login from "../modules/Build/components/user/Login";
import OAuthCallback from "../modules/Build/components/user/OAuthCallback";
import Dashboard from "../modules/Build/components/user/Dashboard";
import { ResumeProvider } from "../modules/Build/context/resumeContext";

export const AppRoutes = () => {
  return (
    <ResumeProvider>
      <Routes>
        <Route path="/build" element={<Layout></Layout>}>
          <Route path="introduction" element={<IntroductionPage />}></Route>
          <Route
            path="templates"
            element={<TemplateSelector></TemplateSelector>}
          ></Route>
          <Route
            path="builder"
            element={<ResumeBuilder></ResumeBuilder>}
          ></Route>
          <Route
            path=""
            element={<Navigate to="/build/introduction"></Navigate>}
          ></Route>
        </Route>
        <Route path="/home" element={<LandingPage></LandingPage>}></Route>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashbord" element={<Dashboard/>}/>
        <Route path="/template" element= {<TemplateSelector/>}/>
        <Route path="/auth/callback" element={<OAuthCallback />} />
        <Route path="/*" element={<Navigate to="/home"></Navigate>}></Route>
      </Routes>
    </ResumeProvider>
  );
};
