import React from "react";
import { RxLinkedinLogo, RxGithubLogo, RxPencil2 } from "react-icons/rx";
import SocialLink from "@components/SocialLink";
import { t } from "i18next";

import "./styles.css";

const VICTOR_EMAIL = "vicespejo96@gmail.com";

export default function Contact() {
  return (
    <article
      id="contact-view"
      className="flex flex-col items-center justify-center gap-4 px-8 py-32 pb-40 bg-gray-100 text-sky-600 dark:text-white dark:bg-slate-800 bg-cover bg-center bg-no-repeat"
    >
      <h1 className="font-bold text-black dark:text-white text-6xl text-center md:text-left">
        {t("contact.title")}{" "}
        <span className="text-sky-600">{t("contact.me")}</span>
      </h1>
      <ul className="grid md:grid-cols-3 gap-6 mt-12">
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/victor-espejo/"
            target="_blank"
          >
            <RxLinkedinLogo className="text-sky-600 w-8 h-8" />
            <p className="text-lg font-bold ">LinkedIn</p>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://github.com/VictorEspejo" target="_blank">
            <RxGithubLogo className="text-sky-600 w-8 h-8" />
            <p className="text-lg font-bold ">Github</p>
          </SocialLink>
        </li>
        <li>
          <SocialLink href={`mailto:${VICTOR_EMAIL}`} target="_blank">
            <RxPencil2 className="text-sky-600 w-8 h-8" />
            <p className="text-lg font-bold ">Email</p>
          </SocialLink>
        </li>
      </ul>
    </article>
  );
}
