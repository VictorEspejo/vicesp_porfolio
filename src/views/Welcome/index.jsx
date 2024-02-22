import React from "react";
import CV from "@assets/documents/Victor_Espejo_CV.pdf";
import VictorLogo from "../../../public/victorlogo.png";
import { Trans } from "react-i18next";
import { t } from "i18next";
import { motion } from "framer-motion";
import { buttonScale } from "@constants/motionVariants";

export default function Welcome() {
  return (
    <section className="w-full text-black dark:text-white bg-gray-100 dark:bg-slate-800">
      <header className="w-full px-16 py-4 flex justify-between items-center">
        <img
          src={VictorLogo}
          alt="Victor Espejo"
          className="w-16 h-16 cursor-pointer"
        />
      </header>
      <section className="w-full flex flex-col items-center text-center lg:text-left py-16 lg:py-56">
        <h1 className="text-6xl lg:text-7xl font-bold">
          <Trans i18nKey="welcome.title" values={{ name: "Víctor" }}>
            Hi<span className="text-sky-600">name</span>
          </Trans>
          <br />
          <span className="text-5xl lg:text-6xl font-bold">
            {t("welcome.frontend")}
          </span>
        </h1>
        <motion.a
          variants={buttonScale}
          initial={{ scale: 1 }}
          whileHover={"onHover"}
          href={CV}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:animate-pulse drop-shadow-lg rounded-full px-4 py-3 text-white bg-sky-600 mt-8 active:bg-sky-800 hover:bg-sky-700"
        >
          {t("welcome.download")}
        </motion.a>
      </section>
    </section>
  );
}
