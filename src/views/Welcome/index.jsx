import "./style.css";
import CV from "@assets/documents/Victor_Espejo_CV.pdf";
import VictorLogo from "../../../public/victorlogo.png";
import { Trans } from "react-i18next";
import { t } from "i18next";
import { motion } from "framer-motion";
import { buttonScale } from "@constants/motionVariants";

export default function Welcome() {
  return (
    <section className="w-full h-screen text-black dark:text-white bg-gray-100 dark:bg-slate-800 ">
      <div id="welcome_bg" className="flex flex-col items-center h-full">
        <header className="w-1/2 px-16 py-20 grid place-items-center lg:place-items-start grid-cols-1 lg:grid-cols-2">
          <img
            src={VictorLogo}
            alt="Logo Victor Espejo Illanes"
            className="w-16 h-16 cursor-pointer col-span-2"
          />
        </header>
        <section className="w-full flex flex-col items-center text-center lg:text-left py-16 lg:py-56">
          <h1
            className="text-6xl lg:text-7xl font-bold text-center"
            role="heading"
            aria-level="1"
          >
            <Trans i18nKey="welcome.title" values={{ name: "Víctor" }}>
              Hi<span className="text-sky-600">name</span>
            </Trans>
            <br />
            <span className="writer-text inline-block overflow-hidden text-2xl lg:text-4xl border-r-4 border-blue-600 whitespace-nowrap font-bold mx-0 my-auto tracking-widest">
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
            aria-label={t("welcome.download")}
            className="hover:animate-pulse drop-shadow-lg rounded-full px-4 py-3 text-white bg-sky-600 mt-8 active:bg-sky-800 hover:bg-sky-700"
          >
            {t("welcome.download")}
          </motion.a>
        </section>
      </div>
    </section>
  );
}
