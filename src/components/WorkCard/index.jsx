import React, { useState } from "react";
import getTechLogos from "@utils/techLogos.js";
import { motion, useAnimation, LazyMotion, domAnimation } from "framer-motion";
import { t } from "i18next";

export default function WorkCard({
  title,
  description,
  image,
  tech,
  startDate,
  endDate,
}) {
  const [isDescVisible, setIsDescVisible] = useState(false);
  const controls = useAnimation();
  const variants = {
    hidden: {
      y: -100,
      opacity: 0,
      transitionEnd: {
        display: "none",
      },
    },
    visible: {
      display: "block",
      y: 0,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      opacity: 1,
    },
  };

  const toggleDescription = () => {
    setIsDescVisible(!isDescVisible);
    controls.start(isDescVisible ? "hidden" : "visible");
  };

  return (
    <LazyMotion features={domAnimation}>
      <section className="px-2 py-2 bg-gray-200 dark:bg-slate-700 rounded-xl">
        <article className="overflow-hidden workcard bg-gray-300 text-dark dark:bg-slate-600 dark:text-white rounded-lg shadow-lg flex flex-col gap-6 lg:flex-row justify-center py-8 px-8">
          <header className="flex flex-col lg:flex-row items-center gap-8 flex-wrap">
            <img
              src={image}
              alt={title}
              className="h-32 object-cover rounded-full w-32 h-32 object-fill"
            />
            <div className="flex flex-col gap-4">
              <h2 className="font-bold text-2xl flex gap-4 justify-between items-center">
                {title}
                <div className="bg-gray-100 rounded-full px-2 py-1 flex flex-row gap-2 font-light text-sm italic text-black">
                  <span>{startDate}</span>
                  <span>{endDate}</span>
                </div>
              </h2>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={toggleDescription}
                className="px-2 py-1 rounded-full bg-blue-400 text-black flex flex-row gap-4 justify-center itelms-center"
              >
                <span>
                  {isDescVisible ? t("works.hide") : t("works.show")}{" "}
                  <span>{t("works.description")}</span>
                </span>
                <svg width="15" height="15" viewBox="0 0 20 20">
                  <path d="M0 7 L 20 7 L 10 16" />
                </svg>
              </motion.button>
              <p className="hidden text-lg text-slate-500 dark:text-slate-400 w-60">
                {description}
              </p>
            </div>
          </header>
          <section className="relative ml-0 lg:ml-28 mt-8 md:mt-0">
            <article className="grid grid-cols-4 gap-8">
              {(tech || []).map((tech, index) => (
                <div key={index} className="group flex relative">
                  <img
                    className="w-12 h-12 transition duration-150 ease-in-out hover:scale-150 w-18 h-18"
                    src={getTechLogos[tech]}
                    alt={tech}
                    key={index}
                  />
                  <span
                    className="group-hover:opacity-80 transition-opacity bg-sky-600 px-2 text-sm text-gray-100 rounded-md absolute left-1/2 top-1/2
    -translate-x-1/2 translate-y-full opacity-0 m-4 mx-auto uppercase font-bold w-max"
                  >
                    {tech}
                  </span>
                </div>
              ))}
            </article>
            <motion.article
              animate={controls}
              variants={variants}
              initial="hidden"
              transition={{
                duration: 0.5,
                type: "spring",
                stiffness: 150,
              }}
              style={{
                position: "absolute",
              }}
            >
              <p className="w-full h-full bg-gray-300 text-dark dark:bg-slate-600 dark:text-white text-lg text-slate-500">
                {description}
              </p>
            </motion.article>
          </section>
        </article>
      </section>
    </LazyMotion>
  );
}
