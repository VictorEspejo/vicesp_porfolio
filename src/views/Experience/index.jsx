import WorkCard from "../../components/WorkCard";
import { works } from "../../constants/works";
import { motion, useInView, useAnimation } from "framer-motion";
import { t } from "i18next";
import { useEffect, useRef } from "react";

export default function Experience() {
  const openWorkRef = useRef(null);
  const isInView = useInView(openWorkRef, { once: true });
  const control = useAnimation();

  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 },
  };

  useEffect(() => {
    if (isInView) {
      control.start("visible");
    }
  }, [control, isInView]);

  return (
    <main className="w-full py-24 text-black dark:text-white bg-gray-100 dark:bg-slate-800">
      <section className="flex flex-col items-center">
        <h1 className="font-bold text-6xl text-center">
          {t("works.titleWhere")}{" "}
          <span className="text-sky-600">{t("works.titleWorked")}</span>
        </h1>
        <motion.article
          ref={openWorkRef}
          animate={control}
          variants={variants}
          initial="hidden"
          transition={{
            duration: 1.25,
            type: "spring",
            stiffness: 150,
            delay: 0.5,
          }}
          className="flex flex-col gap-16 mt-32 justify-center items-center"
        >
          {works.map((work, index) => {
            const workWithDescription = {
              ...work,
              description: t(`works.${work.title.toLowerCase()}`),
            };
            return <WorkCard key={index} {...workWithDescription} />;
          })}
        </motion.article>
      </section>
    </main>
  );
}
