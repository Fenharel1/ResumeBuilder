import { NavLink } from "react-router-dom";

const BulledItem = ({ label }) => {
  return (
    <div className="flex space-x-6">
      <div className="bg-secondary bg-opacity-20 w-8 h-8 rounded-full relative ">
        <div className="bg-primary w-8 h-8 rounded-full relative left-2"></div>
      </div>
      <p className="font-bold text-2xl">{label}</p>
    </div>
  );
};

export const IntroductionPage = () => {
  return (
    <div className="flex gap-x-16 w-full justify-center p-20 items-center h-full">
      <div
        className="border-[5px]
        border-primary rounded-2xl w-[550px] h-[550px] relative"
      >
        <div
          className="
        bg-[url(https://s3-alpha-sig.figma.com/img/ad41/4273/aa25dcec18d2feefc97df0d6a67d0e3d?Expires=1719187200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Zr7RsHJxbZvuGZhv0QqB7rwDEcN~uWGCyKURg9Q3VvorRyRc0wR4DYHJxLHnJpRO5~ku7EvQfgB088-kUjuG5N-jQ4c2Vzkgz5FWSlBo39lFeTSAg1bz3v4oA~kI9izDBNwPGLhAvmNxBBgCSxnjvTU70Us5uko9IHFrlhuKTGAwPb7ZzaREL655VpPGbpqUHELj82l7LV0kVp8UbffOYHkjextDwuzHmE4xkNGG1~MgAlkIb~3h~qgIxcfPsIs-6wa2KwKAix5UIqNjLMcZSlO2ch8j2euOPAGO85bNm0~b0V~FABt8jhxKiINNVgodUa3UqbChOXNY4t04IZsMTg__)]
        bg-center bg-cover w-full h-full z-10 rounded-2xl"
        ></div>
        <div className="z-30 bg-secondary rounded-full absolute -top-8 -left-8 w-16 h-16"></div>
        <div className="-z-10 bg-secondary bg-opacity-30 rounded-full absolute -right-8 -bottom-8 w-16 h-16"></div>
      </div>
      <div className="flex flex-col gap-y-10 justify-center relative">
        <div className="bg-secondary bg-opacity-30 animate-bounce rounded-full absolute -right-8 top-0 w-20 h-20"></div>
        <p className="text-6xl font-bold z-10">
          Create your proffessional resume <br /> in Just minutes
        </p>
        <div className="space-y-6">
          <BulledItem
            label={"Choose from our libraries your resume style"}
          ></BulledItem>
          <BulledItem label={"Fill every boxes as required"}></BulledItem>
          <BulledItem label={"Download or print your resume"}></BulledItem>
        </div>
        <NavLink
          to={"/build/templates"}
          className="block w-fit text-lg btn-primary px-14 p-5"
        >
          Build resume
        </NavLink>
        <p className="font-bold text-lg [&>span]:font-bold">
          By clicking <span className="text-primary">Build resume</span>, you
          agree to our{" "}
          <span className="text-[cornflowerblue]">Terms of use</span> and{" "}
          <span className="text-[cornflowerblue]">Privacy Policy</span>
        </p>
      </div>
    </div>
  );
};
