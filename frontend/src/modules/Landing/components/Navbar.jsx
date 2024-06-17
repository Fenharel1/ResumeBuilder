// src/components/Navbar.js

import { Link } from 'react-router-dom';

export const Navbar = () => {
  const options = [
    {
      name: "Home",
      link: "/home",  // Update the link paths as needed
    },
    {
      name: "Template",
      link: "/templates",
    },
    {
      name: "Join us",
      link: "/login",
    },
    {
      name: "About",
      link: "/about",
    },
  ];

  return (
    <nav className="absolute top-0 left-0 w-full py-8 px-20 flex justify-between items-center bg-[linear-gradient(180deg,#F4E7FF_0%,transparent_100%)]">
      <h1 className="text-3xl font-bold">
        Resum
        <span className="text-primary font-bold">o</span>
      </h1>
      <ul className="text-xl flex gap-x-12">
        {options.map((option, idx) => (
          <li key={idx}>
            <Link to={option.link}>
              {option.name}
            </Link>
          </li>
        ))}
      </ul>
      <div className="text-xl flex flex-nowrap gap-x-7">
        <button>English</button>
        <Link to="/login">
          <button className="btn-primary py-3 px-10">Start</button>
        </Link>
      </div>
    </nav>
  );
};
