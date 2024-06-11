import { FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between pt-12 border-t-gray border-t-[2px]">
      <div className="space-y-14 w-1/2">
        <p className="text-3xl font-bold">
          Resum<span className="font-bold text-purple-600">o</span>
        </p>
        <div className="w-3/4">
          <p className="mb-5 text-lg">Updates right to your inbox!</p>
          <form className="text-lg space-x-3 flex flex-row">
            <input
              className="flex-1 py-3 px-4 border border-[#D0D0D0] rounded-[10px]"
              type="text"
              placeholder="Enter your email"
            />
            <button className="btn-primary px-5 py-3">Subscribe</button>
          </form>
          <div className="flex justify-between items-center [&>p]:font-bold mt-5">
            <p>(c) Resumo 2024</p>
            <p>Privacy Policy</p>
            <p>Terms of use</p>
          </div>
        </div>
      </div>
      <div className="space-y-20">
        <div className="flex flex-row [&>div>p:first-child]:font-bold text-lg space-x-5">
          <div className="w-1/3 space-y-3">
            <p>Our story</p>
            <p>FAQ</p>
            <p>Contact</p>
          </div>
          <div className="w-1/3 space-y-3">
            <p>Services</p>
            <p>Build Resume</p>
            <p>Cover Letter</p>
            <p>Template</p>
          </div>
          <div className="w-1/3 space-y-3">
            <p>About us</p>
            <p>Developers</p>
            <p>Meet our team</p>
            <p>Join Us</p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-x-8 text-purple-600 text-3xl float-right">
          <a href="">
            <FaGithub></FaGithub>
          </a>
          <a href="">
            <FaGithub></FaGithub>
          </a>
          <a href="">
            <FaGithub></FaGithub>
          </a>
          <a href="">
            <FaGithub></FaGithub>
          </a>
        </div>
      </div>
    </div>
  );
};
