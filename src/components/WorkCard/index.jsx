import React from "react";
import getTechLogos from "@utils/techLogos.js";

export default function WorkCard({
  title,
  description,
  image,
  tech,
  startDate,
  endDate,
}) {
  return (
    <article className="workcard bg-white text-dark dark:bg-slate-600 dark:text-white rounded-lg shadow-lg flex flex-col gap-6 lg:flex-row justify-center py-8 px-8">
      <header className="flex flex-col lg:flex-row items-center gap-8 flex-wrap">
        <img
          src={image}
          alt={title}
          className="h-32 object-cover rounded-full w-32 h-32 object-fill"
        />
        <div className="flex flex-col gap-4">
          <h2 className="font-bold text-2xl flex justify-between items-center">
            {title}{" "}
            <span className="font-light text-sm italic">
              {startDate}
              <span className="text-sky-600">--</span>
              {endDate}
            </span>
          </h2>
          <p className="text-lg text-slate-500 dark:text-slate-400 w-60">
            {description}
          </p>
        </div>
      </header>
      <section className="grid grid-cols-4 gap-8 ml-0 lg:ml-32 mt-8 md:mt-0">
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
      </section>
    </article>
  );
}
