import { Navbar } from "./components/Navbar";
import { Presentation } from "./components/Presentation";

export const LandingPage = () => {
  return (
    <div className="w-screen overflow-auto flex justify-center items-center flex-col">
      <Navbar></Navbar>
      <div className="px-20 py-14 max-w-[1500px]">
        <Presentation></Presentation>
      </div>
    </div>
  );
};
