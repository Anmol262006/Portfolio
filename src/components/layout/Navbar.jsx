import React, { useState } from "react";
import "../../App.css";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import { Link, NavLink } from "react-router-dom";
import "../../App.css";

const Navbar = ({ nav, setNav }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    "Home",
    "Skills",
    "Projects",
    "About",
    "Education",
    "Contact",
  ];

  return (
    <>
      <nav className="buttonBorder fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <div className="group cursor-pointer">
            <h1 className="text-3xl font-black tracking-[5px]">
              <span className="text-violet-500 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#8B5CF6]">
                &lt;
              </span>

              <span className="text-violet-900 transition-all duration-300 group-hover:text-violet-200">
                A
              </span>

              <span className="text-cyan-400 transition-all duration-300 group-hover:drop-shadow-[0_0_15px_#22D3EE]">
                /&gt;
              </span>
            </h1>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-10 lg:flex">
            {navItems.map((item) => (
              <li
                key={item}
                className={`navitem relative cursor-pointer text-gray-900 transition hover:text-white  transform-fill px-2 pb-1 
                  ${nav === item ? `text-purple-800 duration-300 ` : `text-black`}`}
                onClick={() => {
                  setNav(item);
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
              >
                {item}

                <span
                  className={`absolute bottom-0 left-0 h-[2px] w-full origin-left bg-purple-900 transition-transform duration-300 ease-out ${
                    nav === item ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </li>
            ))}
          </ul>

          {/* Desktop Button */}
          <a href='https://www.linkedin.com/in/anmol-kumar-725022262/' target="_blank" rel="noopener noreferrer" className="hidden rounded-2xl border border-white/20 bg-gradient-to-r from-black to-purple-900 px-5 py-2 text-white transition hover:scale-105 lg:block" >
            Let's Connect
            <span className="text-purple-300"> &gt;</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(true)}
            className="text-white lg:hidden"
          >
            <HiOutlineMenuAlt3 size={32} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[60] bg-[#050816] transition-all duration-500 ${
          isOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="flex h-20 items-center justify-between px-6">
          <h1 className="text-3xl font-black text-white">&lt;A/&gt;</h1>

          <button onClick={() => setIsOpen(false)} className="text-white">
            <HiOutlineX size={34} />
          </button>
        </div>

        <div className="mt-16 flex flex-col items-center gap-10 text-2xl">
          {navItems.map((item) => (
            <div
              key={item}
              className="cursor-pointer text-gray-300 transition hover:text-violet-400"
                onClick={() => {
                  setNav(item);
                   setIsOpen(false);
                  const section = document.getElementById(item);
                  if (section) {
                    section.scrollIntoView({
                      behavior: "smooth",
                      block: "start",
                    });
                  }
                }}
            >
              {item}
            </div>
          ))}

            <a href='https://www.linkedin.com/in/anmol-kumar-725022262/' target="_blank" rel="noopener noreferrer" className="hidden rounded-2xl border border-white/20 bg-gradient-to-r from-black to-purple-900 px-5 py-2 text-white transition hover:scale-105 lg:block" >
            Let's Connect
            <span className="text-purple-300"> &gt;</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
