import { Features } from "./components/Features";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";

export const LandingPage = () => {
  return (
    <div className="min-w-screen overflow-y-auto">
      <div className="max-w-screen overflow-x-hidden flex justify-center items-center flex-col">
        <Navbar></Navbar>
        <div className="px-20 py-14 max-w-[1500px]">
          <Presentation></Presentation>
          <Features></Features>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};
