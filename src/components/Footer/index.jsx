import { RxHome } from "react-icons/rx";
import { RxPerson } from "react-icons/rx";
import { RxFileText } from "react-icons/rx";
import { RxHalf2 } from "react-icons/rx";
import { RxHalf1 } from "react-icons/rx";
import { RxEnvelopeClosed } from "react-icons/rx";
import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { motion, useAnimationControls } from "framer-motion";
import { signal } from "@preact/signals-react";

export default function Footer() {
  const darkMode = signal(false);

  const animation = useAnimationControls();

  async function sequence() {
    await animation.start({
      y: "-80vh",
      scale: 0.25,
      opacity: 0,
    });
    await animation.start({
      y: "0vh",
      opacity: 0.25,
      transition: { duration: 0.5 },
    });
    animation.start({ scale: 1, opacity: 0.5 });
  }

  const handleDarkMode = () => {
    darkMode.value = !darkMode.value;
    localStorage.setItem("theme", darkMode.value ? "dark" : "light");
    document.documentElement.classList.toggle("dark", darkMode.value);
  };

  return (
    <motion.nav
      initial={{ y: "-90vh", scale: 0.25 }}
      animate={animation}
      whileInView={sequence}
      viewport={{ once: true }}
      transition={{ duration: 2, type: "spring", stiffness: 120 }}
      className="w-full flex justify-center opacity-50 mx-auto"
    >
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
          <RxHalf1
            onClick={handleDarkMode}
            className="w-6 h-6 transition duration-200 ease-in-out hover:scale-150"
          />
        </li>
      </ul>
    </motion.nav>
  );
}
