import TechSkill from "@components/TechSkill";
import { skills } from "@constants/works";
import { t } from "i18next";

function Skills() {
  return (
    <main className="w-full dark:text-white text-black bg-gray-100 dark:bg-slate-800 flex flex-col justify-center items-center">
      <header>
        <h1
          className="w-full text-6xl font-bold text-center py-16"
          aria-level="1"
        >
          {t("skills.title")}{" "}
          <span className="text-sky-600">{t("skills.subtitle")}</span>
        </h1>
      </header>
      <section className="w-full lg:w-2/3 px-10 lg:px-44 mt-8 flex flex-col  gap-10">
        <article id="frameworks">
          <h2 className="font-bold text-4xl text-center text-sky-600">
            {t("skills.techs")}
          </h2>
          <ul className="grid grid-rows gap-8 mt-10">
            {skills.map((skill, index) => (
              <li key={index}>
                <TechSkill
                  key={index}
                  name={skill.name}
                  value={skill.value}
                />
              </li>
            ))}
          </ul>
        </article>
        <article id="social">
          <h2 className="font-bold text-4xl text-center text-sky-600 mt-8">
            Sobre mi
          </h2>
          <div className="grid grid-cols-3 gap-y-10 mt-10">
            <div className="text-center">
              <span
                role="img"
                aria-label="Productividad"
                className="text-4xl text-sky-600"
              >
                🚀
              </span>
              <p className="text-sky-600 font-semibold text-sm lg:text-lg">
                Productividad
              </p>
            </div>

            <div className="text-center">
              <span
                role="img"
                aria-label="Colaboración"
                className="text-4xl text-sky-600"
              >
                🤝
              </span>
              <p className="text-sky-600 font-semibold text-sm lg:text-lg">
                Colaboración
              </p>
            </div>

            <div className="text-center">
              <span
                role="img"
                aria-label="Empatía"
                className="text-4xl text-sky-600"
              >
                ❤️
              </span>
              <p className="text-sky-600 font-semibold text-sm lg:text-lg">
                Empatía
              </p>
            </div>

            <div className="text-center">
              <span
                role="img"
                aria-label="Resolución de conflictos"
                className="text-4xl text-sky-600"
              >
                ⚖️
              </span>
              <p className="text-sky-600 font-semibold text-sm lg:text-lg">
                Resolución de conflictos
              </p>
            </div>

            <div className="text-center">
              <span
                role="img"
                aria-label="Adaptabilidad"
                className="text-4xl text-sky-600"
              >
                🔄
              </span>
              <p className="text-sky-600 font-semibold text-sm lg:text-lg">
                Adaptabilidad
              </p>
            </div>

            <div className="text-center">
              <span
                role="img"
                aria-label="Liderazgo"
                className="text-4xl text-sky-600"
              >
                👥
              </span>
              <p className="text-sky-600 font-semibold text-sm lg:text-lg">
                Liderazgo
              </p>
            </div>
          </div>
        </article>
      </section>
    </main>
  );
}

export default Skills;
