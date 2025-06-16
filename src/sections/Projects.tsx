import Image from "next/image";
import CheckCircleIcon from "@/assets/icons/check-circle.svg";
import ArrowUpRightIcon from "@/assets/icons/arrow-up-right.svg";

import { Card } from "@/components/Card";
import customerFeedback from "@/assets/images/customerfeedback.png";
import geekGoose from "@/assets/images/geekgoose.png";
import liveUser from "@/assets/images/liveuserapp.png";
import pokedex from "@/assets/images/pokedex.png";
import passwordGenerator from "@/assets/images/passwordgenerator.png";
import portfolio from "@/assets/images/portfolio.png";
import GithubIcon from "@/assets/icons/github.svg";

import coach1 from "@/assets/images/interviewcoach1.png";

const portfolioProjects = [
  {
    company: "Personal",
    year: "2025",
    title: "Interview Coach AI",
    results: [
      { title: "AI-Powered Interview Question Generator" },
      { title: "Full-Stack MERN App (MongoDB, Express, React, Node)" },
      { title: "Modular API & State Management" },
    ],
    link: "https://interviewcoach-ai.vercel.app/",
    source: "https://github.com/altansaid/interviewcoach-ai",
    image: coach1,
  },
  {
    company: "Personal",
    year: "2024",
    title: "GeekGoose Blog",
    results: [
      { title: "PHP Laravel, Livewire, Jetstream Filament" },
      {
        title: "User-friendly interface, smooth",
      },
      {
        title: "Fully responsive, accessible",
      },
    ],
    link: "https://github.com/altansaid/geekgoose",
    source: "https://github.com/altansaid/geekgoose",
    image: geekGoose,
  },
  {
    company: "Personal",
    year: "2024",
    title: "Personal Porfolio",
    results: [
      { title: "React, Next.js, Tailwind CSS, Framer Motion" },
      {
        title: "User-friendly interface, smooth",
      },
      {
        title: "Fully responsive, accessible",
      },
    ],
    link: "https://saidaltan.com/",
    source: "https://github.com/altansaid/portfolio-react",
    image: portfolio,
  },

  {
    company: "Personal",
    year: "2023",
    title: "Customer Feedback",
    results: [
      { title: "HTML, CSS, JavaScript" },
      { title: "Gets user feedback by their satisfaction rate with emojis." },
    ],
    link: "https://altansaid.github.io/feedbackApp/",
    source: "https://github.com/altansaid/feedbackApp",
    image: customerFeedback,
  },

  {
    company: "Personal",
    year: "2023",
    title: "Live User Search",
    results: [
      { title: "HTML, CSS, JavaScript, API" },
      { title: "Checks live users by name or location" },
    ],
    link: "https://altansaid.github.io/liveUsersApp/",
    source: "https://github.com/altansaid/liveUsersApp",
    image: liveUser,
  },
  {
    company: "Personal",
    year: "2023",
    title: "Pokedex",
    results: [
      { title: "HTML, CSS, JavaScript, API" },
      {
        title: "Pokemon cards using by pokedex api",
      },
      {
        title: "Fully responsive",
      },
    ],
    link: "https://altansaid.github.io/pokedexApp/",
    source: "https://github.com/altansaid/pokedexApp",
    image: pokedex,
  },
  {
    company: "Personal",
    year: "2023",
    title: "Password Generator",
    results: [
      { title: "HTML, CSS, JavaScript" },
      {
        title: "Classic password generator",
      },
      {
        title: "User friendly UI",
      },
    ],
    link: "https://altansaid.github.io/passwordGenerator/",
    source: "https://github.com/altansaid/passwordGenerator",
    image: passwordGenerator,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="pb-16 lg:py-24">
      <div>
        <div className="container">
          <div className="flex justify-center">
            <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 bg-clip-text text-transparent">
              Real-world Results
            </p>
          </div>
          <h2 className="font-serif text-3xl md:text-5xl text-center mt-6">
            Featured Projects
          </h2>
          <p className="text-center md:text-lg lg:text-xl text-white/60 mt-4 max-w-md mx-auto">
            See how I transformed concepts into engaging digital experiences.
          </p>
          <div className="flex flex-col mt-10 gap-20 md:mt-20">
            {portfolioProjects.map((project, projectIndex) => (
              <Card
                key={project.title}
                className="px-8 pt-8 pb-0 md:pt-12 md:px-10 lg:pt-16 lg:px-20 sticky top-16"
                style={{
                  top: `calc(64px + ${projectIndex * 40}px)`,
                }}
              >
                <div className="lg:grid lg:grid-cols-2 lg:gap-16">
                  <div className="lg:pb-16">
                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 inline-flex gap-2 font-bold uppercase tracking-widest text-sm text-transparent bg-clip-text">
                      <span>{project.company}</span>
                      <span>&bull;</span>
                      <span>{project.year}</span>
                    </div>

                    <h3 className="font-serif text-2xl mt-2 md:text-4xl  md:mt-5">
                      {project.title}
                    </h3>
                    <hr className="border-t-2 border-white/5 mt-4 md:mt-5" />
                    <ul className="flex flex-col gap-4 mt-4 md:mt-5">
                      {project.results.map((result) => (
                        <li
                          key={result.title}
                          className="flex gap-2 text-sm text-white/50 md:text-base"
                        >
                          <CheckCircleIcon className="size-5 md:size-6" />
                          <span>{result.title}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex">
                      <a href={project.link} target="_blank">
                        <button className="bg-white text-gray-950 h-12 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                          <span>Visit Live Site</span>
                          <ArrowUpRightIcon className="size-4" />
                        </button>
                      </a>
                      <a href={project.source} target="_blank">
                        <button className="bg-white text-gray-950 h-12  ml-2 w-full rounded-xl font-semibold inline-flex items-center justify-center gap-2 mt-8 md:w-auto px-6">
                          <GithubIcon className="size-5" />
                        </button>
                      </a>
                    </div>
                  </div>
                  <div className="relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="mt-8 -mb-4 md:-mb-0 lg:mt-0 lg:absolute lg:h-full lg:w-auto lg:max-w-none "
                    />
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
