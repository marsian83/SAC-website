import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Team",
    link: "/team",
  },
  {
    title: "Events",
    link: "/events",
  },
];

export default function Navbar() {
  const [navFixed, setNavFixed] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setNavFixed(window.scrollY > 32);
    });
    setNavFixed(window.scrollY > 32);
  });

  return (
    <div
      className={`fixed w-full flex flex-row justify-between pt-8 p-page z-[100] duration-500 ${
        navFixed
          ? "backdrop-blur-lg pb-8 bg-black bg-opacity-30"
          : "pb-28 bg-transparent"
      }`}
      style={{ boxShadow: navFixed ? "0rem 0.5rem 1rem #00000083" : "" }}
    >
      <Link to="/" className="text-6xl font-bold">
        SAC<span className="text-secondary">.</span>
      </Link>
      <div className="flex flex-row gap-16 text-xl items-center font-extralight">
        {navLinks.map((item) => (
          <NavLink to={item.link} key={navLinks.indexOf(item)}>
            {" "}
            {item.title}{" "}
          </NavLink>
        ))}
      </div>
    </div>
  );
}
