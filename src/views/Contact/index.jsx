import { RxLinkedinLogo, RxGithubLogo, RxPencil2 } from "react-icons/rx";
import SocialLink from "@components/SocialLink";
import { t } from "i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

import "./styles.css";

const VICTOR_EMAIL = "vicespejo96@gmail.com";

export default function Contact() {
  const variants = {
    init: {
      scale: 0.25,
      opacity: 0.1,
    },
    expand: {
      scale: 1,
      opacity: 1,
    },
  };

  return (
    <article
      id="contact-view"
      className="flex flex-col items-center justify-center gap-4 px-8 py-32 pb-40 bg-gray-100 text-sky-600 dark:text-white dark:bg-slate-800 bg-cover bg-center bg-no-repeat"
    >
      <Helmet>
        <title>Contacto - Victor Espejo</title>
        <meta name="description" content={t("contact.description")} />
      </Helmet>
      <h1 className="font-bold text-black dark:text-white text-6xl text-center md:text-left">
        {t("contact.title")}{" "}
        <span className="text-sky-600">{t("contact.me")}</span>
      </h1>
      <motion.ul
        initial={"init"}
        whileInView={"expand"}
        viewport={{ once: true }}
        transition={{
          duration: 1,
          type: "spring",
          stiffness: 150,
          opacity: { ease: "easeInOut" },
        }}
        variants={variants}
        className="grid md:grid-cols-3 gap-6 mt-12"
      >
        <li>
          <SocialLink
            href="https://www.linkedin.com/in/vic-espejo/"
            target="_blank"
          >
            <RxLinkedinLogo
              className="text-sky-600 w-8 h-8"
              alt="LinkedIn Logo"
            />
            <h2 aria-level="2" className="text-lg font-bold ">
              LinkedIn
            </h2>
          </SocialLink>
        </li>
        <li>
          <SocialLink href="https://github.com/VictorEspejo" target="_blank">
            <RxGithubLogo className="text-sky-600 w-8 h-8" alt="GitHub Logo" />
            <h2 aria-level="2" className="text-lg font-bold ">Github</h2>
          </SocialLink>
        </li>
        <li>
          <SocialLink href={`mailto:${VICTOR_EMAIL}`} target="_blank">
            <RxPencil2 className="text-sky-600 w-8 h-8" alt="Email Icon" />
            <h2 aria-level="2" className="text-lg font-bold ">Email</h2>
          </SocialLink>
        </li>
      </motion.ul>
    </article>
  );
}
