import WaveTopImg from "../../assets/images/wavetop.svg";
import WaveBottomImg from "../../assets/images/wavebottom.svg";
import VictorImage from "../../assets/images/victor.png";
import { motion } from "framer-motion";
import { t } from "i18next";

export default function About() {
  const variants = {
    visible: { x: 0, opacity: 1 },
    hidden: { x: 150, opacity: 0 },
  };

  return (
    <section className="w-full bg-gray-100 dark:bg-slate-800">
      <img src={WaveTopImg} alt="wave top" className="wave-top" />
      <article className="w-full bg-sky-600 text-white px-10 lg:px-8">
        <h1 className="w-full text-6xl font-bold text-center py-16">
          {(t("about.title") || "").split(" ").map((el, i) => (
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i / 2,
              }}
              key={i}
            >
              {el}{" "}
            </motion.span>
          ))}
        </h1>
        <div className="grid md:grid-cols-2 gap-6 md:gap-0 lg:px-32">
          <div className="flex justify-center w-full grid-span-2 md:grid-span-1">
            <img
              src={VictorImage}
              alt="Victor Dev"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-full bg-white border-4 border-sky-600 dark:border-sky-800 shadow-2xl"
            />
          </div>
          <div className="flex flex-col justify-center items-center text-white">
            <header className="flex flex-col md:flex-row gap-3 w-full relative overflow-hidden">
              <h2 className="text-3xl lg:text-4xl font-bold text-center">
                Victor Espejo
              </h2>
              <motion.span
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1,
                  type: "tween",
                  stiffness: 120,
                  delay: 1,
                }}
                className="rounded-full animate-pulse px-1 lg:px-3 py-1 text-sm bg-sky-300 text-gray-900 font-sans flex justify-center items-center select-none hover:bg-teal-300"
              >
                {t("about.openToWork")}
              </motion.span>
            </header>
            <p className="text-xl mt-4 leading-8 lg:pr-32 text-align-start">
              {t("about.description")}
            </p>
          </div>
        </div>
      </article>
      <img src={WaveBottomImg} alt="wave bottom" />
    </section>
  );
}
