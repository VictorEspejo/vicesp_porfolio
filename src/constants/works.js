import { t } from "i18next";
import Sngularlogo from "@assets/images/sngular.jpg";
import Amarislogo from "@assets/images/amaris.jpeg";

export const works = [
  {
    title: "Sngular",
    startDate: "abr 2021",
    endDate: "nov 2023",
    image: Sngularlogo,
    tech: [
      "html",
      "css",
      "js",
      "pwa",
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
      "github",
    ],
  },
  {
    title: "Amaris",
    description: t("works.amaris"),
    startDate: "oct 2018",
    endDate: "abr 2021",
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

export const skills = [
  {
    name: "TypeScript / JS",
    value: 100,
    years: 3,
  },
  {
    name: "React + Redux + PWA",
    value: 100,
    years: 3,
  },
  {
    name: "Vue + Vite",
    value: 50,
    years: 1,
  },
  {
    name: "LitElement",
    value: 80,
    years: 3,
  },
  {
    name: "NodeJS + Express",
    value: 40,
    years: 1,
  },
  {
    name: "Docker + Github Actions",
    value: 40,
    years: 1,
  },
];
