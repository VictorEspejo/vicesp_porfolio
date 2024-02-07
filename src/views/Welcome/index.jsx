import React from "react";
import CV from "@assets/documents/Victor_Espejo_CV.pdf";

export default function Welcome() {
  return (
    <section className="w-full text-black dark:text-white">
      <header className="w-full px-16 py-4">
        <h1>Victor Dev</h1>
      </header>
      <section className="w-full flex flex-col items-center text-center lg:text-left py-32 lg:py-56">
        <h1 className="text-7xl font-bold">
          Hi! Im <span className="text-sky-600">Víctor</span>
        </h1>
        <h1 className="text-6xl font-bold mt-3">
          Front End Developer
        </h1>
        <a
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full px-4 py-3 text-white bg-sky-600 mt-8 active:bg-sky-800 hover:bg-sky-700 transition duration-150 ease-in-out"
        >
          Download my CV
        </a>
      </section>
    </section>
  );
}
