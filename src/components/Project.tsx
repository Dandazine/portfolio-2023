import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  const projects = [
    {
      name: "Summer Panda Cafe (Website Redesign)",
      img: "/spc-design.jpg",
      alt: "",
      description:
        "Summer Panda is a fully customized e-commerce website developed for a Korean dessert cafe to sell and advertise its products online. The website includes information about the cafe and about their menu, and also provides features such as an online shopping cart, and secure payment processing. ",
      tools: ["Adobe XD", "Photoshop", "Canva"],
      link: null,
    },
    {
      name: "Toronto's Cupcakes (Website Redesign)",
      img: "/tc-design.jpg",
      alt: "",
      description:
        "A redesigned look of the Toronto Cupcakes website using Adobe XD.",
      tools: ["WordPress", "WooCommerce", "PHP", "Figma"],
      link: "https://dribbble.com/shots/23539908-Toronto-Cupcake-Redesign",
    },
    {
      name: "Regenschirm",
      img: "/regenschirm.jpg",
      alt: "",
      description:
        "Regenschirm is a weather API application that retrieves and displays current weather information using OpenWeatherMap's weather API. Regenschirm can be used to search and fetch a city's weather condition details - such as temperature, humidity, wind speeds, and atmospheric pressure.",
      tools: ["React.js", "TypeScript", "CSS", "Vite.js", "Github"],
      link: "https://regenschirm.danial.dev",
    },
    {
      name: "Nomi",
      img: "/nomi.jpg",
      alt: "",
      description:
        "Nomi is a movie database application that was created with NextJS, and powered by the TMDB API. Nomi provides details about the hottest current movies, and has a fully functional search and authentication system to allow users to save their favourite movies.",
      tools: ["Next.js", "NextAuth", "SASS", "MaterialUI", "Github"],
      link: "https://nomi.danial.dev",
    },
    {
      name: "DanPom",
      img: "/DanPom.jpg",
      alt: "",
      description:
        "DanPom is a pomodoro google chrome extension build using JavaScript and Chrome's Alarm API. This extension is intended to prevent the user from slacking off and going on social media apps while the study timer is active.",
      tools: ["JavaScript", "HTML", "CSS", "Github"],
      link: "https://github.com/Dandazine/PomPom",
    },
  ];
  return (
    <ul className="flex flex-col flex-wrap gap-3.7 overflow-x-hidden">
      {projects.map((project: any, i: number) => (
        <motion.li
          key={project.name}
          initial={
            i % 2 === 0
              ? {
                  x: -50,
                  opacity: 0.3,
                }
              : { x: 50, opacity: 0.3 }
          }
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut" }}
          viewport={{ once: true }}
        >
          <a
            href={project.link ?? "javascript:;"}
            className="mx-auto w-full md:w-med lg:w-full"
          >
            <Image
              src={project.img}
              alt={project.alt}
              width={500}
              height={333}
              className={`mx-auto ${i % 2 === 0 ? "md:ml-0" : "md:mr-0"}`}
            />
            <div
              key={project.name}
              className={`relative mx-auto w-11/12 max-w-[450px] -translate-y-9 rounded-md bg-boxes bg-opacity-95 py-3 px-3 shadow-xl md:-translate-y-2/3 md:text-center lg:max-w-[600px] lg:-translate-y-3/4 ${
                i % 2 === 0 ? "md:mr-0" : "md:ml-0"
              }`}
            >
              <h3 className="my-2 text-lg">{project.name}</h3>
              <p className="mb-3 ">{project.description}</p>
              <ul
                className={`top-0 flex flex-wrap gap-x-3.7 gap-y-0.5 text-header lg:absolute lg:max-w-[405px] lg:-translate-y-full ${
                  i % 2 === 0 ? "right-2 justify-end" : "left-2 justify-start"
                }`}
              >
                {project.tools.map((tool: string) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
          </a>
        </motion.li>
      ))}
    </ul>
  );
};

export default Project;
