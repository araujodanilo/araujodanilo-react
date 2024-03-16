import { ReactNode } from "react";

type CardInfo = {
  title: string;
  paragraphs: string[];
  image: {
    src: string;
    alt: string;
    caption?: string | ReactNode;
  };
};

export const HomeCardsInfo: CardInfo[] = [
  {
    title: "Hello, I'm Danilo Araujo.",
    paragraphs: [
      "I'm a software developer with a passion for building things.",
      "Currently, I'm working as a frontend developer at Biotronica.",
      "I'm a student at the Federal Institute of Sao Paulo, majoring in Systems Analysis and Development.",
    ],
    image: {
      src: "/images/home-imege-first.jpg",
      alt: "Home Image",
      caption: (
        <>
          Photo by{" "}
          <a
            className="text-sky-600 hover:text-sky-700 dark:text-violet-500 dark:hover:text-violet-700 underline"
            href="https://unsplash.com/@afgprogrammer?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            AltumCode
          </a>{" "}
          on{" "}
          <a
            className="text-sky-600 hover:text-sky-700 dark:text-violet-500 dark:hover:text-violet-700 underline"
            href="https://unsplash.com/photos/black-flat-screen-computer-monitor-oXlXu2qukGE?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </>
      ),
    },
  },
  {
    title: "Frontend Developer",
    paragraphs: [
      "I worked on ReactJS and React Native projects as a Freelancer in 2023 for a few months.",
      "I am currently a Frontend Developer intern at Biotronica using ReactJS.",
    ],
    image: {
      src: "/images/home-image-react.jpg",
      alt: "Home Image",
      caption: (
        <>
          Photo by{" "}
          <a
            className="text-sky-600 hover:text-sky-700 dark:text-violet-500 dark:hover:text-violet-700 underline"
            href="https://unsplash.com/@lautaroandreani?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Stefan Gall
          </a>{" "}
          on{" "}
          <a
            className="text-sky-600 hover:text-sky-700 dark:text-violet-500 dark:hover:text-violet-700 underline"
            href="https://unsplash.com/photos/a-computer-screen-with-a-logo-on-it-UYsBCu9RP3Y?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"
          >
            Unsplash
          </a>
        </>
      ),
    },
  },
];
