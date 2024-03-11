import WorkCard from "../../components/WorkCard";
import { works } from "../../constants/works";
import { motion } from "framer-motion";
import { t } from "i18next";

export default function Experience() {
  const variants = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -300 },
  };

  return (
    <main className="w-full py-24 text-black dark:text-white bg-gray-100 dark:bg-slate-800 px-10 lg:px-8">
      <section className="flex flex-col items-center overflow-hidden relative">
        <h1 className="font-bold text-6xl text-center">
          {t("works.titleWhere")}{" "}
          <span className="text-sky-600">{t("works.titleWorked")}</span>
        </h1>
        <motion.article className="flex flex-col gap-16 mt-32 justify-center items-center">
          {works.map((work, index) => {
            const workWithDescription = {
              ...work,
              description: t(`works.${work.title.toLowerCase()}`),
            };
            return (
              <motion.div
                key={index}
                variants={variants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{
                  duration: 1.25,
                  type: "spring",
                  stiffness: 150,
                  delay: 0.5,
                }}
              >
                <WorkCard key={index} {...workWithDescription} />
              </motion.div>
            );
          })}
        </motion.article>
      </section>
    </main>
  );
}
