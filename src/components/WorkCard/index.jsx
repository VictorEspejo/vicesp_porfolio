import { useState } from "react";
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
      scale: 0.1,
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.2,
      },
      transitionEnd: {
        display: "none",
      },
    },
    visible: {
      scale: 1,
      width: "100%",
      height: "100%",
      y: 0,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "block",
      opacity: 1,
    },
  };

  const toggleDescription = () => {
    setIsDescVisible(!isDescVisible);
    controls.start(isDescVisible ? "hidden" : "visible");
  };

  return (
    <LazyMotion features={domAnimation}>
      <section
        aria-label={`Más detalles sobre ${title}`}
        className="px-2 py-2 bg-gray-200 dark:bg-slate-700 rounded-xl"
      >
        <article className="overflow-hidden workcard bg-gray-300 text-dark dark:bg-slate-600 dark:text-white rounded-lg shadow-lg flex flex-col gap-6 lg:flex-row justify-center py-8 px-8">
          <header className="flex flex-col lg:flex-row items-center gap-8 flex-wrap">
            <div className="bg-sky-600 rounded-full px-1 py-1 drop-shadow-lg">
              <img
                src={image}
                alt={title}
                className="rounded-full aspect-square w-32 h-32 object-fill"
              />
            </div>
            <div className="grid grid-rows-3 gap-4">
              <h2 className="font-bold text-3xl text-center">
                {title}
              </h2>
              <div className="bg-gray-100 rounded-full px-2 py-1 flex flex-row justify-center items-center gap-2 font-light text-sm italic text-black">
                <span>{startDate}</span>
                <span>{endDate}</span>
              </div>
              <motion.button
                whileTap={{ scale: 0.97 }}
                onClick={toggleDescription}
                className="drop-shadow-lg px-2 py-1 rounded-full bg-sky-600 hover:bg-sky-400 text-white hover:text-black flex flex-row gap-4 justify-center items-center"
              >
                <span>
                  {isDescVisible ? t("works.hide") : t("works.show")}{" "}
                  <span>{t("works.description")}</span>
                </span>
              </motion.button>
            </div>
          </header>
          <section className="relative ml-0 lg:ml-28 mt-8 md:mt-0">
            <article className="grid grid-cols-4 gap-8">
              {(tech || []).map((tech, index) => (
                <div key={index} className="group flex relative">
                  <img
                    className="w-12 aspect-square transition duration-150 ease-in-out hover:scale-150"
                    src={getTechLogos[tech]}
                    alt={tech}
                    key={index}
                    loading="lazy"
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
                type: "tween",
                stiffness: 150,
              }}
              className="w-full h-0 absolute"
            >
              <p className="w-full py-2 h-full bg-gray-300 dark:bg-slate-600 text-sm lg:text-lg text-slate-500 dark:text-white">
                {description}
              </p>
            </motion.article>
          </section>
        </article>
      </section>
    </LazyMotion>
  );
}
