import WorkCard from "../../components/WorkCard";
import Sngularlogo from "@assets/images/sngular.jpg";
import Amarislogo from "@assets/images/amaris.jpeg";

const works = [
  {
    title: "Sngular",
    description:
      "Sngular People: Cypress e2e testing in banking, GitHub Actions pipelines, React supplier app for Inditex, design system, React Testing, Scrum integration.",
    startDate: "2018-01-01",
    endDate: "2020-01-01",
    image: Sngularlogo,
    tech: [
      "html",
      "css",
      "js",
      "node",
      "react",
      "redux",
      "vue",
      "vite",
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
    description:
      "Amaris Experience: LitElement banking website, web components methodologies, unit and e2e testing, responsive design, continuous integration and development.",
    startDate: "2018-01-01",
    endDate: "2020-01-01",
    image: Amarislogo,
    tech: [
      "html",
      "css",
      "js",
      "polymer",
      "webpack",
      "jira",
      "gitlab",
      "jenkins",
      "bitbucket",
    ],
  },
];

export default function Experience() {
  return (
    <section className="w-full py-24 flex flex-col items-center text-black dark:text-white bg-gray-100 dark:bg-slate-800">
      <h1 className="font-bold text-6xl text-center">
        Where I <span className="text-sky-600">worked</span>
      </h1>
      <article className="flex flex-col gap-8 mt-32 justify-center items-center">
        {works.map((work, index) => (
          <WorkCard key={index} {...work} />
        ))}
      </article>
    </section>
  );
}
