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
        "MySQL",
        "GROQ",
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
        "Sanity Studio",
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
          <span className="mb-1 block ">Hi there, I&apos;m Danial!</span> I am
          a&nbsp;
          <span className="text-header">Software Developer</span> specializing
          in building high-quality web development solutions as well as offering
          UX-friendly designs. I strive to find new ways to widen my knowledge
          within the field, and work in acquiring new skills that will help me
          and my clients receive the best service possible. I have&nbsp;
          <span className="text-header">proven hands-on experience</span> in
          planning, designing, and developing both static and dynamic websites
          with user experience in mind.
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
          Click the buttons to see the list of recent technologies I&apos;ve
          been using!
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
        "Built custom websites and web applications using React.js, Next.js, TypeScript, and other modern web technologies while maintaining a remarkable level of attention to detail and quality.",
        "Collaborated with other developers, designers, and marketing content creators to produce cohesive and effective web solutions such as portfolios, browser extensions, and JavaScript games.",
        "Handled verbal and written communication with clients including regular updates for their project and promptly addressing issues that may have arisen.",
      ],
    },
    {
      role: "Web Dev Tutor",
      date: "Oct 2022 - Mar 2023",
      company: "Freelance",
      details: [
        "Tutored students on semantic HTML code, proper CSS targetting, and JavaScript Fundamentals such as Arrays, Functions, Loops, Objects, and Timers",
        "Facilitated one-on-one or two-on-one sessions where students were guided through assignments or made to complete personalised practice problems related to the topic the student was struggling in.",
        "Adapted learning material to accomodate for different learning styles, abilities, and levels of experience resulting in positive feedback from students.",
      ],
    },
    {
      role: "Front-end Web Developer Program",
      date: "May 2022 - Nov 2022",
      company: "BCIT (Degree)",
      details: [
        "4.0 GPA - Graduated with Distinction",
        "Hands-on experience with best practices and industry standards including responsive design, accessibility, and search engine optimization (SEO).",
        "Strong foundation with front-end programming languages such as HTML, CSS, JavaScript (ES6+), and React.js.",
        "Demonstrated collaborative skills using both Agile and Waterfall methodologies with a priority to fulfill the needs of the project efficiently and on time.",
      ],
    },
    {
      role: "Pharmacy Technician",
      date: "Jan 2018 - Apr 2022",
      company: "Walmart Pharmacy",
      details: [
        "Worked in one of Walmart's busiest pharmacies, handling over 150 prescriptions daily, alongside medical professionals to ensure a fast and efficient system making sure that each of the patient's pharmaceutical needs are met while maintaining proper documentation.",
        "Responsible for maintaining the inventories of RX, controlled, and over-the-Counter (OTC) medications with daily orders that were upwards of $15,000.",
        "Demonstrated strong problem-solving and time-management skills in a fast moving environment, proactively handling issues and prioritizing tasks to prevent any delays in the workflow.",
        "Utilized exceptional attention to detail to prevent mistakes in processing the prescription, dispensing of medications, and handling the payment methods.",
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

export { Profile, Exp };
