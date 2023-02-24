import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Project = (props: Props) => {
  const projects = [
    {
      name: "Summer Panda",
      img: "/summerpanda.jpg",
      alt: "",
      description:
        "Summer Panda is a fully customized e-commerce website developed for a Korean dessert cafe. ",
      tools: ["WordPress", "WooCommerce", "PHP", "Figma"],
      link: "https://summerpandacafe.bcitwebdeveloper.ca",
    },
    {
      name: "Nomi",
      img: "/nomi.jpg",
      alt: "",
      description:
        "Nomi is a movie database that was created with NextJS, and powered by the TMDB API. Nomi can display the hottest recent movies, and also has a functional search and authentication system.",
      tools: ["Next.js", "NextAuth", "SASS", "MaterialUI", "Github"],
      link: "https://nomi.danial.dev",
    },
    {
      name: "Tanuki",
      img: "/Tanuki.jpg",
      alt: "",
      description:
        "Tanuki is a simple javascript game where you need to catch and wash Tanuki within the timelimit. The game has three difficulty settings which shorten the timelimit and increase the amount of times you need to wash Tanuki.",
      tools: ["HTML", "CSS", "JavaScript"],
      link: "https://tanuki.danial.dev",
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
          <a href={project.link} className="mx-auto w-full md:w-med lg:w-full">
            <Image
              src={project.img}
              alt={project.alt}
              width={500}
              height={333}
              className={`mx-auto ${i % 2 === 0 ? "md:ml-0" : "md:mr-0"}`}
            />
            <div
              key={project.name}
              className={`relative mx-auto w-11/12 max-w-[450px] -translate-y-9 rounded-md bg-boxes bg-opacity-95 py-3 px-3 text-center shadow-xl md:-translate-y-2/3 lg:max-w-[600px] lg:-translate-y-3/4 ${
                i % 2 === 0 ? "md:mr-0" : "md:ml-0"
              }`}
            >
              <h3 className="my-2 text-lg">{project.name}</h3>
              <p className="mb-3 ">{project.description}</p>
              <ul
                className={`top-0 flex flex-wrap gap-x-3.7 gap-y-0.5 text-header lg:absolute lg:-translate-y-full ${
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
