import { Resend } from "resend";
import React, { useRef, useState } from "react";
import { validateFields } from "@utils/contactValidation";
import { RxLinkedinLogo, RxGithubLogo, RxPencil2 } from "react-icons/rx";
import bgImage from "@assets/images/contact_bg.svg";

import "./styles.css";

const VICTOR_EMAIL = "vicespejo96@gmail.com";

export default function Contact() {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);
  const [error, setError] = useState({ message: null });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const message = messageRef.current.value;

    if (!validateFields(name, email, message)) {
      setError({ message: "Please enter a valid email address" });
    }
    setError({ message: null });
    const resend = new Resend(import.meta.env.VITE_RESEND_API);
    await resend.emails.send({
      from: email,
      to: VICTOR_EMAIL,
      subject: name,
      html: message,
    });
  };

  return (
    <article
      id="contact-view"
      className="flex flex-col items-center justify-center gap-4 py-16 pb-40 bg-gray-100 dark:bg-slate-800"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <h1 className="font-bold text-black dark:text-white text-6xl">
        Contact <span className="text-sky-600">me</span>
      </h1>
      <ul className="flex flex-row items-center gap-8 mt-12 ">
        <li>
          <a href="https://www.linkedin.com/in/vic-espejo/" target="_blank">
            <RxLinkedinLogo className="text-sky-600 w-8 h-8 transition duration-150 ease-in-out hover:scale-150" />
          </a>
        </li>
        <li>
          <a href="https://github.com/VictorEspejo" target="_blank">
            <RxGithubLogo className="text-sky-600 w-8 h-8 transition duration-150 ease-in-out hover:scale-150" />
          </a>
        </li>
        <li>
          <a href={`mailto:${VICTOR_EMAIL}`}>
            <RxPencil2 className="text-sky-600 w-8 h-8 transition duration-150 ease-in-out hover:scale-150" />
          </a>
        </li>
      </ul>
      <span className="text-sm italic text-slate-500 dark:text-slate-400 mt-12">
        or you can send me an email
      </span>
      <section className="px-16 py-8 bg-white text-black dark:bg-slate-800 dark:text-white rounded-xl flex flex-col justify-center items-center ring-1 ring-slate-900/5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            ref={nameRef}
            required
            type="text"
            placeholder="Name"
            className={`w-full h-12 rounded-md px-4 border-2 border-sky-600 ${
              error.message ? "border-red-500" : ""
            }`}
          />
          <input
            ref={emailRef}
            required
            type="email"
            placeholder="Email"
            className={`w-full h-12 rounded-md px-4 border-2 border-sky-600 ${
              error.message ? "border-red-500" : ""
            }`}
          />
          <textarea
            ref={messageRef}
            required
            placeholder="Message"
            className={`w-full h-12 rounded-md py-2 px-4 border-2 border-sky-600 ${
              error.message ? "border-red-500" : ""
            }`}
          />
          <button
            type="submit"
            className="w-full h-12 bg-sky-600 active:bg-sky-800 text-white rounded-md hover:bg-sky-700 transition duration-150 ease-in-out"
          >
            Send
          </button>
          {error.message && (
            <span class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
              {error.message}
            </span>
          )}
        </form>
      </section>
    </article>
  );
}
