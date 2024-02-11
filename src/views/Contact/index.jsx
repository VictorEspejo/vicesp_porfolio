
import React from "react";
import { RxLinkedinLogo, RxGithubLogo, RxPencil2 } from "react-icons/rx";
import bgImage from "@assets/images/contact_bg.svg";

import "./styles.css";

const VICTOR_EMAIL = "vicespejo96@gmail.com";

export default function Contact() {

  return (
    <article
      id="contact-view"
      className="flex flex-col items-center justify-center gap-4 py-32 pb-40 bg-gray-100 text-sky-600 dark:text-white dark:bg-slate-800 bg-cover bg-center bg-no-repeat"
    >
      <h1 className="font-bold text-black dark:text-white text-6xl">
        Contact <span className="text-sky-600">me</span>
      </h1>
      <ul className="grid grid-cols-3 gap-6 mt-12">
        <li className="flex flex-col items-center justify-center gap-6">
          <a href="https://www.linkedin.com/in/vic-espejo/" target="_blank">
            <RxLinkedinLogo className="text-sky-600 w-8 h-8 transition duration-150 ease-in-out hover:scale-150" />
          </a>
          <p className="text-xl font-bold ">Linkedin</p>
        </li>
        <li className="flex flex-col items-center justify-center gap-6">
          <a href="https://github.com/VictorEspejo" target="_blank">
            <RxGithubLogo className="text-sky-600 w-8 h-8 transition duration-150 ease-in-out hover:scale-150" />
          </a>
          <p className="text-xl font-bold ">Github</p>
        </li>
        <li className="flex flex-col items-center justify-center gap-6">
          <a href={`mailto:${VICTOR_EMAIL}`}>
            <RxPencil2 className="text-sky-600 w-8 h-8 transition duration-150 ease-in-out hover:scale-150" />
          </a>
          <p className="text-xl font-bold ">Send me an email</p>
        </li>
      </ul>
    </article>
  );
}
