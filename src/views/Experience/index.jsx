import WorkCard from "../../components/WorkCard";

const works = [
  {
    title: "Sngular",
    description: "I worked at Amaris as a Front End Developer for 2 years",
    startDate: "2018-01-01",
    endDate: "2020-01-01",
    image: "https://via.placeholder.com/150",
    tech: [
      "html",
      "css",
      "js",
      "node",
      "react",
      "vue",
      "jira",
      "gitlab",
      "azure",
      "mongodb",
      "typescript",
      "tailwind",
    ],
  },
  {
    title: "Amaris",
    description: "I worked at Amaris as a Front End Developer for 2 years",
    startDate: "2018-01-01",
    endDate: "2020-01-01",
    image: "https://via.placeholder.com/150",
    tech: ["html", "css", "js", "polymer", "webpack", "jira", "gitlab"],
  },
];

export default function Experience() {
  return (
    <section className="w-full py-24 flex flex-col items-center text-black dark:text-white bg-gray-100 dark:bg-slate-800">
      <h1 className="font-bold text-6xl text-center">Where I <span className="text-sky-600">worked</span></h1>
      <article className="flex flex-col gap-8 mt-32">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </article>
    </section>
  );
}
