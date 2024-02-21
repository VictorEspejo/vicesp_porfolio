import WorkCard from "../../components/WorkCard";
import { works } from "../../constants/works";
import { t } from "i18next";

export default function Experience() {
  return (
    <section className="w-full py-24 flex flex-col items-center text-black dark:text-white bg-gray-100 dark:bg-slate-800">
      <h1 className="font-bold text-6xl text-center">
        {t("works.titleWhere")}{" "}
        <span className="text-sky-600">{t("works.titleWorked")}</span>
      </h1>
      <article className="flex flex-col gap-8 mt-32 justify-center items-center">
        {works.map((work, index) => {
          const workWithDescription = {
            ...work,
            description: t(`works.${work.title.toLowerCase()}`),
          };
          return <WorkCard key={index} {...workWithDescription} />;
        })}
      </article>
    </section>
  );
}
