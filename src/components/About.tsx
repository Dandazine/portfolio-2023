import React from "react";
import { motion } from "framer-motion";

type Props = {};

const Profile = (props: Props) => {
  const toolkit = [
    {
      name: "Code",
      list: [
        "HTML5",
        "JavaScript (ES6+)",
        "TypeScript",
        "React.js",
        "Next.js",
        "Astro.js",
        "PHP",
        "CSS",
        "SASS",
        "TailwindCSS",
      ],
    },
    {
      name: "Software",
      list: [
        "VSCode",
        "Git/Github",
        "Photoshop",
        "Illustrator",
        "Adobe XD",
        "Figma",
        "Wordpress",
      ],
    },
  ];
  return (
    <>
      <section className="mt-10 px-1">
        <h3 className="mb-4 max-w-max border-b-2 border-primary text-lg">
          Who I am
        </h3>
        <p>
          <span className="mb-1 block ">Hi there, I'm Danial!</span> I am
          a&nbsp;
          <span className="text-header">Software Developer</span> specializing
          in building website and website applications. I strive to find new
          ways to widen my knowledge within the field, and work in acquiring new
          skills that will help me and my clients receive the best service
          possible. I have&nbsp;
          <span className="text-header">hands-on experience</span> in planning,
          designing, and developing both static and dynamic websites with user
          experience in mind.
        </p>
      </section>
      <section className="my-8 px-1">
        <h3 className="mb-4 max-w-max border-b-2 border-primary text-lg">
          What I do
        </h3>
        <p>
          I am devoted to&nbsp;
          <span className="text-header">working diligently on all stages</span>
          &nbsp; of the development process- from researching the users, to
          planning the project and finding new possibilities of delivering a
          better end product, to actually creating the website and watching it
          come alive to deliver the needs of the client.
        </p>
      </section>
      <section className=" flex max-w-max flex-wrap gap-y-3 gap-x-2 px-1">
        <h3 className="w-full text-lg">
          Click the buttons to see the list of recent technologies I've been
          using!
        </h3>
        {toolkit.map((tools: any, i: number) => (
          <motion.details
            key={tools.name}
            initial={{
              y: 50,
              opacity: 0,
            }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: (i + 1) / 3, ease: "easeInOut" }}
            viewport={{ once: true }}
            className="group w-32"
          >
            <summary className="list-none rounded-md bg-primary  py-0.5 pl-2 shadow-3xl hover:bg-boxes group-open:bg-boxes">
              {tools.name}
            </summary>
            <ul className="mt-2 pl-2 text-xs leading-7">
              {tools.list.map((tool: string) => (
                <li key={tool}>{tool}</li>
              ))}
            </ul>
          </motion.details>
        ))}
      </section>
    </>
  );
};

const Exp = (props: Props) => {
  const jobs = [
    {
      role: "Software Developer",
      date: "Nov 2022 - Present",
      company: "Freelance",
      details: [
        "Handling verbal and written communication with client regarding the projects",
        "Producing polished and captivating design that garner's attention and reflects the brand's image",
        "Building, and maintaining websites for clients coming from diverse industries",
        "Collaborated with talented developers and designers in order to fulfil all short and long-term goals of the project",
      ],
    },
    {
      role: "Web Dev Tutor",
      date: "Oct 2022 - Present",
      company: "Freelance",
      details: [
        "Tutored students on semantic HTML code and JavaScript Fundamentals such as Arrays, Functions, Loops, Objects, and Timers",
        "One-on-one and two-on-one sessions where students were guided through assignments or made to complete personalised practice problems related to the topic the student was struggling in",
        "Polishing existing skills by breaking down each topic into smaller, more manageable components, and following along best practices",
      ],
    },
    {
      role: "Front-end Web Developer Program",
      date: "May 2022 - Nov 2022",
      company: "BCIT (Degree)",
      details: [
        "Graduated with Distinction",
        "Solid understanding of the best practices used in front-end Web Development",
        "Experience working with HTML, CSS, JavaScript, React, Wordpress, and Shopify",
        "Knowledgeable in both Agile and Waterfall workflows, and proficient with Git version control",
      ],
    },
    {
      role: "Pharmacy Technician",
      date: "Jan 2018 - Apr 2022",
      company: "Walmart Pharmacy",
      details: [
        "Worked in one of Walmart's busiest pharmacies in the mainland Vancouver area, handling over 150 prescriptions daily, alongside medical professionals to ensure a fast and efficient systems making sure that each of the patient's pharmaceutical needs are met",
        "Responsible for maintaining the inventories of the RX, controlled, and Over-the-Counter (OTC) medications in orders that were upwards of $15,000",
        "Guaranteed attention to detail when handling prescriptions and the medication preparation to 				determine accurate and a mistake-free workflow",
      ],
    },
  ];
  return (
    <>
      <div className="mt-10 px-1">
        <h3 className="mb-4 max-w-max border-b-2 border-primary text-lg">
          Relevant experience
        </h3>
        <ul className="flex flex-col flex-wrap gap-3.7">
          {jobs.map((job: any) => (
            <motion.li
              key={job.role}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              viewport={{ once: true }}
            >
              <article className="rounded-md bg-boxes px-4 py-5">
                <h4 className="mb-1 max-w-max border-b-2 border-primary text-header">
                  {job.role}
                </h4>
                <p className="mt-1.5 mb-1 text-sm">{job.company}</p>
                <p className="text-xs">{job.date}</p>
                <ul className="mt-3 mb-2">
                  {job.details.map((detail: string) => (
                    <li
                      key={detail}
                      className="mx-5 my-1 list-disc marker:text-header"
                    >
                      {detail}
                    </li>
                  ))}
                </ul>
              </article>
            </motion.li>
          ))}
        </ul>
      </div>
    </>
  );
};

const Testimony = (props: Props) => {
  const testimonies = [
    // Wesley
    { name: "Wesley McGehee", img: "", text: "" },
    // // Balen
    // { name: "Balen Dezai", img: "", text: "" },
    // // Jalen
    // { name: "Jalen Cameron", img: "", text: "" },
    // // Reilly
    // { name: "Reilly LeClaire", img: "", text: "" },
  ];
  return (
    <>
      {testimonies.map((testimony: any) => (
        <article className="mx-auto mt-8 w-11/12 px-4 md:w-med lg:w-full">
          <h3>{testimony.name}</h3>
          <p>{testimony.text}</p>
          <p></p>
        </article>
      ))}
    </>
  );
};

export { Profile, Exp };
