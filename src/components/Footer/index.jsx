import { RxHome } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { RxFileText } from "react-icons/rx";
import { RxHalf2 } from "react-icons/rx";
import { RxHalf1 } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

export default function Footer() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode])

  return (
    <nav className="w-full flex justify-center opacity-50 mx-auto">
      <ul className="bg-black text-white py-4 px-24 rounded-full flex justify-center items-center gap-6">
        <li className="rounded-full w-12 h-12 bg-gray-800 flex justify-center items-center px-2 py-2 text-white transition duration-150 ease-in-out hover:scale-125 cursor-pointer select-none">
          <Link to="welcome" smooth={true}>
            <RxHome className="w-6 h-6 transition duration-200 ease-in-out hover:scale-150" />
          </Link>
        </li>
        <li className="rounded-full w-12 h-12 bg-gray-800 flex justify-center items-center px-2 py-2 text-white transition duration-150 ease-in-out hover:scale-125 cursor-pointer select-none">
          <Link to="about" smooth={true}>
            <RxPerson className="w-6 h-6 transition duration-200 ease-in-out hover:scale-150" />
          </Link>
        </li>
        <li className="rounded-full w-12 h-12 bg-gray-800 flex justify-center items-center px-2 py-2 text-white transition duration-150 ease-in-out hover:scale-125 cursor-pointer select-none">
          <Link to="experience" smooth={true}>
            <RxFileText className="w-6 h-6 transition duration-200 ease-in-out hover:scale-150" />
          </Link>
        </li>
        <li className="rounded-full w-12 h-12 bg-gray-800 flex justify-center items-center px-2 py-2 text-white transition duration-150 ease-in-out hover:scale-125 cursor-pointer select-none">
          <Link to="contact" smooth={true}>
            <RxEnvelopeClosed className="w-6 h-6 transition duration-200 ease-in-out hover:scale-150" />
          </Link>
        </li>
        <li className="rounded-full w-12 h-12 bg-gray-800 flex justify-center items-center px-2 py-2 text-white transition duration-150 ease-in-out hover:scale-125 cursor-pointer">
          {darkMode ? (
            <RxHalf2
              onClick={() => setDarkMode(!darkMode)}
              className="w-8 h-8 transition duration-150 ease-in-out hover:scale-150"
            />
          ) : (
            <RxHalf1
              onClick={() => setDarkMode(!darkMode)}
              className="w-6 h-6 transition duration-200 ease-in-out hover:scale-150"
            />
          )}
        </li>
      </ul>
    </nav>
  );
}
