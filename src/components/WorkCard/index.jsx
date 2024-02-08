import React from "react";
import getTechLogos from "@utils/techLogos.js";

export default function WorkCard({ title, description, image, tech, startDate, endDate }) {
    return (
        <article className="workcard w-full bg-white text-dark dark:bg-slate-600 dark:text-white rounded-lg shadow-lg flex flex-col gap-6 lg:flex-row flex-wrap justify-center py-8 px-24 md:px-32">
            <header className="flex flex-col lg:flex-row items-center gap-8">
                <img
                    src={image}
                    alt={title}
                    className="h-32 object-cover rounded-full w-32 h-32 object-fill"
                />
                <div className="flex flex-col gap-4">
                    <h2 className="font-bold text-2xl flex justify-between items-center">{title} <span className="font-light text-sm italic">{startDate}<span className="text-sky-600">--</span>{endDate}</span></h2>
                    <p className="text-lg text-slate-500 dark:text-slate-400 w-60">{description}</p>
                </div>
            </header>
            <section className="grid grid-cols-3 gap-8 ml-0 lg:ml-32 mt-8 md:mt-0">
                {tech.map((tech, index) => (
                      <img
                        className="w-12 h-12 transition duration-150 ease-in-out hover:scale-150 object-cover w-18 h-18"
                        src={getTechLogos[tech]}
                        alt={tech}
                        key={index}
                    />
                ))}
            </section>
        </article>
    );
}
