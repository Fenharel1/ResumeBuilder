export const Navbar = () => {
  const options = [
    {
      name: "Home",
      link: "",
    },
    {
      name: "Template",
      link: "",
    },
    {
      name: "Join us",
      link: "",
    },
    {
      name: "About",
      link: "",
    },
  ];

  return (
    <nav className="w-full py-8 px-20 flex justify-between items-center bg-[linear-gradient(180deg,#F4E7FF_0%,transparent_100%)]">
      <h1 className="text-3xl font-bold">
        Resum
        <span className="text-[#8910F1]">o</span>
      </h1>
      <ul className="text-xl flex gap-x-12">
        {options.map((option, idx) => (
          <li key={idx}>
            <a href={option.link}>{option.name}</a>
          </li>
        ))}
      </ul>
      <div className=" text-xl flex flex-nowrap gap-x-7">
        <button>English</button>
        <button className="rounded-[10px] text-white bg-[#8910F1] py-3 px-10 font-semibold">
          Start
        </button>
      </div>
    </nav>
  );
};
