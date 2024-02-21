import { t } from "i18next";
import Sngularlogo from "@assets/images/sngular.jpg";
import Amarislogo from "@assets/images/amaris.jpeg";

export const works = [
  {
    title: "Sngular",
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
      "github",
    ],
  },
  {
    title: "Amaris",
    description: t("works.amaris"),
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
